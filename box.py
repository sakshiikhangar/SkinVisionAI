import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.callbacks import ModelCheckpoint
from sklearn.model_selection import train_test_split
import cv2
import matplotlib.pyplot as plt

# ======================
# FOOLPROOF CONFIGURATION
# ======================
class Config:
    # This will create a dummy dataset if real one isn't found
    USE_DUMMY_DATA = True  
    DUMMY_SAMPLES = 100  # Number of dummy samples to generate
    IMAGE_SIZE = (150, 150)
    NUM_CLASSES = 5
    DATA_DIR = 'Dataset'  # Will be created if doesn't exist
    MODEL_PATH = 'skin_model_with_bboxes.h5'

# ======================
# DUMMY DATA GENERATION
# ======================
def generate_dummy_data():
    print("Generating dummy data...")
    images = np.random.randint(0, 256, 
                             size=(Config.DUMMY_SAMPLES, *Config.IMAGE_SIZE, 3), 
                             dtype=np.uint8)
    labels = np.random.randint(0, Config.NUM_CLASSES, size=(Config.DUMMY_SAMPLES,))
    
    # Generate random bounding boxes [x, y, width, height] normalized to [0,1]
    bboxes = np.random.uniform(0, 0.8, size=(Config.DUMMY_SAMPLES, 4))
    bboxes[:, 2:] = bboxes[:, :2] + np.random.uniform(0.1, 0.2, size=(Config.DUMMY_SAMPLES, 2))  # Ensure w > x and h > y
    
    # Clip to ensure all values are between 0 and 1
    bboxes = np.clip(bboxes, 0, 1)
    
    return images, labels, bboxes

# ======================
# DATA LOADING WITH FALLBACK
# ======================
def load_data():
    if Config.USE_DUMMY_DATA:
        return generate_dummy_data()
    
    images, labels, bboxes = [], [], []
    
    if not os.path.exists(Config.DATA_DIR):
        print(f"Warning: Data directory '{Config.DATA_DIR}' not found. Using dummy data.")
        return generate_dummy_data()
    
    img_files = [f for f in os.listdir(Config.DATA_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    
    if not img_files:
        print("Warning: No images found in dataset. Using dummy data.")
        return generate_dummy_data()
    
    print(f"Loading {len(img_files)} images from dataset...")
    
    for img_file in img_files:
        try:
            img_path = os.path.join(Config.DATA_DIR, img_file)
            img = cv2.imread(img_path)
            if img is None:
                continue
                
            img = cv2.resize(img, Config.IMAGE_SIZE)
            images.append(img)
            
            # TODO: Replace with your actual label and bbox loading
            labels.append(np.random.randint(0, Config.NUM_CLASSES))
            bboxes.append(np.random.rand(4))
            
        except Exception as e:
            print(f"Error loading {img_file}: {str(e)}")
            continue
    
    if not images:
        print("Warning: No valid images loaded. Using dummy data.")
        return generate_dummy_data()
    
    return np.array(images), np.array(labels), np.array(bboxes)

# ======================
# MODEL DEFINITION
# ======================
def create_model():
    model = Sequential([
        Conv2D(32, (3, 3), activation='relu', input_shape=(*Config.IMAGE_SIZE, 3)),
        MaxPooling2D(2, 2),
        Conv2D(64, (3, 3), activation='relu'),
        MaxPooling2D(2, 2),
        Conv2D(128, (3, 3), activation='relu'),
        MaxPooling2D(2, 2),
        Flatten(),
        Dense(512, activation='relu'),
        Dropout(0.5),
        Dense(Config.NUM_CLASSES + 4, activation='linear')  # Classes + bbox coords
    ])
    
    def combined_loss(y_true, y_pred):
        # Split into classification and regression parts
        y_true_class = y_true[:, :Config.NUM_CLASSES]
        y_true_bbox = y_true[:, Config.NUM_CLASSES:]
        y_pred_class = y_pred[:, :Config.NUM_CLASSES]
        y_pred_bbox = y_pred[:, Config.NUM_CLASSES:]
        
        # Classification loss (cross-entropy)
        class_loss = tf.keras.losses.sparse_categorical_crossentropy(
            y_true_class, y_pred_class, from_logits=True
        )
        # Regression loss (smooth L1 for bbox)
        bbox_loss = tf.keras.losses.huber(y_true_bbox, y_pred_bbox)
        
        return class_loss + bbox_loss
    
    model.compile(optimizer='adam', 
                 loss=combined_loss, 
                 metrics=['accuracy'])
    
    return model

# ======================
# VISUALIZATION
# ======================
def visualize_sample(image, label, bbox):
    plt.figure(figsize=(5,5))
    plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
    
    # Convert normalized bbox to image coordinates
    h, w = image.shape[:2]
    x, y, bw, bh = bbox
    x, y, bw, bh = int(x*w), int(y*h), int(bw*w), int(bh*h)
    
    # Draw rectangle
    rect = plt.Rectangle((x,y), bw, bh, 
                        linewidth=2, 
                        edgecolor='r', 
                        facecolor='none')
    plt.gca().add_patch(rect)
    plt.title(f"Class: {label}")
    plt.axis('off')
    plt.show()

# ======================
# MAIN EXECUTION
# ======================
def main():
    # Load or generate data
    images, labels, bboxes = load_data()
    print(f"Loaded {len(images)} samples")
    
    # Normalize images
    images = images.astype('float32') / 255.0
    
    # Show sample
    visualize_sample(images[0]*255, labels[0], bboxes[0])
    
    # Train-test split
    X_train, X_val, y_train, y_val, bboxes_train, bboxes_val = train_test_split(
        images, labels, bboxes, test_size=0.2, random_state=42
    )
    
    # Combine labels and bboxes for training
    train_targets = np.hstack((
        y_train.reshape(-1, 1),  # Class labels
        bboxes_train            # Bounding boxes
    ))
    val_targets = np.hstack((
        y_val.reshape(-1, 1),
        bboxes_val
    ))
    
    # Create and train model
    model = create_model()
    model.summary()
    
    checkpoint = ModelCheckpoint(Config.MODEL_PATH, 
                               monitor='val_accuracy', 
                               save_best_only=True)
    
    print("Training model...")
    history = model.fit(
        X_train, train_targets,
        validation_data=(X_val, val_targets),
        epochs=10,  # Reduced for demonstration
        batch_size=32,
        callbacks=[checkpoint]
    )
    
    # Save final model
    model.save(Config.MODEL_PATH)
    print(f"Model saved to {Config.MODEL_PATH}")

if __name__ == "__main__":
    main()