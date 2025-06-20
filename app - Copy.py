from flask import Flask, render_template, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

import numpy as np
import os
import cv2
from flask_cors import CORS
from PIL import Image

app = Flask(__name__, static_folder='static')
CORS(app)  # Enable CORS for all routes

# Load your CNN model
model = load_model('skin_cnn_model.keras')  # Ensure the path is correct

# Class labels
class_labels = ['Acne', 'Acne_Scars', 'Pigmentation', 'Dark_Circles', 'Open_Pores']

# Route to serve the main HTML page
@app.route('/')
def index():
    return render_template('index.html')  # Ensure 'index.html' is in the 'templates' directory

# API route for image upload and prediction
@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        # Open the uploaded image using PIL and convert it to OpenCV format
        img = Image.open(file.stream)
        img = np.array(img)

        # Preprocess the image (resize, normalize, etc.)
        processed_frame = preprocess_frame(img)

        # Make a prediction
        prediction = model.predict(processed_frame)
        predicted_class = np.argmax(prediction, axis=1)
        predicted_label = class_labels[predicted_class[0]]

        return jsonify({"predicted_concern": predicted_label})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Function to preprocess image for model input
def preprocess_frame(frame):
    img = cv2.resize(frame, (224, 224))  # Resize the image to the input size of the model
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = img_array / 255.0  # Normalize to [0, 1]
    return img_array

if __name__ == '__main__':
    app.run(debug=True)