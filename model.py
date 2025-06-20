import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np
from tensorflow.keras.models import load_model
import cv2
import os

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

import keras

### CNN Model Training Section ###
# Define image size and batch size
image_size = (224, 224)
batch_size = 8

# Image Data Generators for training and validation
train_datagen = ImageDataGenerator(rescale=1./255)
val_datagen = ImageDataGenerator(rescale=1./255)

# Load training and validation datasets
train_dataset = train_datagen.flow_from_directory(
    'Dataset/Train',  # Replace with actual training dataset path
    target_size=image_size,
    batch_size=batch_size,
    class_mode='categorical'
)

val_dataset = val_datagen.flow_from_directory(
    'Dataset/Validation',  # Replace with actual validation dataset path
    target_size=image_size,
    batch_size=batch_size,
    class_mode='categorical'
)

# Define the CNN model
model = tf.keras.models.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(512, activation='relu'),
    tf.keras.layers.Dense(5, activation='softmax')  # 5 classes (acne, acne scars, etc.)
])

# Compile the model
model.compile(
    loss='categorical_crossentropy',
    optimizer='adam',
    metrics=['accuracy']
)

# Set the number of steps per epoch and validation steps based on your dataset size
steps_per_epoch = len(train_dataset) // batch_size
validation_steps = len(val_dataset) // batch_size

# Train the model
model.fit(
    train_dataset,
    validation_data=val_dataset,
    epochs=10,
    steps_per_epoch=steps_per_epoch,
    validation_steps=validation_steps
)

# Save the model
model.save('skin_cnn_model.keras')

### End of CNN Model Training Section ###

### Prediction Function ###
def predict_image(img_array):
    # Load your pre-trained CNN model
    model = load_model('skin_cnn_model.keras')

    # Preprocess the image for model input
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array /= 255.0  # Normalize to the range [0, 1]

    # Make a prediction
    prediction = model.predict(img_array)
    
    # Get the class with the highest probability
    predicted_class = np.argmax(prediction, axis=1)
    class_names = ['Acne', 'Acne_Scars', 'Pigmentation', 'Dark_Circles', 'Open_Pores']
    predicted_label = class_names[predicted_class[0]]

    return predicted_label