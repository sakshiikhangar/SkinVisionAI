const recommendations = {
    "oily": {
        "normal": {
            "Acne": [
                { "ingredient": "Salicylic Acid", "benefit": "Helps to clear clogged pores" },
                { "ingredient": "Niacinamide", "benefit": "Reduces inflammation and sebum production" }
            ],
            "Open_Pores": [
                { "ingredient": "Retinol", "benefit": "Helps reduce pore size" },
                { "ingredient": "Clay", "benefit": "Absorbs excess oil and reduces pores" }
            ],
            "Pigmentation": [
                { "ingredient": "Vitamin C", "benefit": "Fades dark spots and evens skin tone." },
                { "ingredient": "Kojic Acid", "benefit": "Inhibits melanin production and lightens pigmentation." }
            ],
            "Acne_Scars": [
                { "ingredient": "Vitamin E", "benefit": "Promotes skin healing and reduces scarring." },
                { "ingredient": "Retinoids", "benefit": "Stimulates collagen production to minimize scars." }
            ],
            "Dark_Circles": [
                { "ingredient": "Caffeine", "benefit": "Reduces puffiness and improves skin tone." },
                { "ingredient": "Peptides", "benefit": "Strengthens the skin and reduces dark circles." }
            ]
        },
        "sensitive": {
            "Acne": [
                { "ingredient": "Hyaluronic Acid", "benefit": "Hydrates skin without irritation" },
                { "ingredient": "Ceramides", "benefit": "Restores the skin barrier" }
            ],
            "Open_Pores": [
                { "ingredient": "Niacinamide", "benefit": "Minimizes pore size and soothes sensitive skin." },
                { "ingredient": "Witch Hazel", "benefit": "Natural astringent that helps tighten pores." }
            ],
            "Pigmentation": [
                { "ingredient": "Licorice Extract", "benefit": "Fades dark spots and evens skin tone." },
                { "ingredient": "Azelaic Acid", "benefit": "Reduces pigmentation with gentle exfoliation." }
            ],
            "Acne_Scars": [
                { "ingredient": "Centella Asiatica", "benefit": "Promotes healing and reduces the appearance of scars." },
                { "ingredient": "Allantoin", "benefit": "Moisturizes and promotes skin healing." }
            ],
            "Dark_Circles": [
                { "ingredient": "Vitamin K", "benefit": "Improves circulation and reduces dark circles." },
                { "ingredient": "Cucumber Extract", "benefit": "Soothes and hydrates the skin." }
            ]
        }
    },
    "dry": {
        "normal": {
            "Acne": [
                { "ingredient": "Benzoyl Peroxide", "benefit": "Kills acne-causing bacteria and prevents breakouts." },
                { "ingredient": "Aloe Vera", "benefit": "Soothes irritated skin and reduces redness." }
            ],
            "Open_Pores": [
                { "ingredient": "Clay", "benefit": "Absorbs impurities and tightens pores." },
                { "ingredient": "Zinc", "benefit": "Regulates oil production and minimizes pore size." }
            ],
            "Pigmentation": [
                { "ingredient": "Vitamin C", "benefit": "Fades dark spots and evens skin tone." },
                { "ingredient": "Licorice Extract", "benefit": "Evens skin tone and reduces hyperpigmentation." }
            ],
            "Acne_Scars": [
                { "ingredient": "Silicone Gel", "benefit": "Helps reduce the appearance of scars." },
                { "ingredient": "Vitamin E", "benefit": "Promotes skin healing and reduces scarring." }
            ],
            "Dark_Circles": [
                { "ingredient": "Caffeine", "benefit": "Reduces puffiness and brightens skin." },
                { "ingredient": "Hyaluronic Acid", "benefit": "Hydrates the skin and plumps up the under-eye area." }
            ]
        },
        "sensitive": {
            "Acne": [
                { "ingredient": "Centella Asiatica", "benefit": "Soothes and heals irritated skin." },
                { "ingredient": "Aloe Vera", "benefit": "Calms sensitive, inflamed skin." }
            ],
            "Open_Pores": [
                { "ingredient": "Zinc", "benefit": "Reduces oil production and tightens pores." },
                { "ingredient": "Witch Hazel", "benefit": "Naturally tones and reduces pore size." }
            ],
            "Pigmentation": [
                { "ingredient": "Licorice Extract", "benefit": "Gentle on sensitive skin, reduces pigmentation." },
                { "ingredient": "Green Tea Extract", "benefit": "Antioxidant properties help soothe skin and lighten dark spots." }
            ],
            "Acne_Scars": [
                { "ingredient": "Allantoin", "benefit": "Moisturizes and heals damaged skin." },
                { "ingredient": "Vitamin C", "benefit": "Reduces scarring and brightens skin." }
            ],
            "Dark_Circles": [
                { "ingredient": "Cucumber Extract", "benefit": "Hydrates and cools the under-eye area." },
                { "ingredient": "Peptides", "benefit": "Improves skin elasticity and reduces dark circles." }
            ]
        }
    },
    "combination": {
        "normal": {
            "Acne": [
                { "ingredient": "Benzoyl Peroxide", "benefit": "Kills acne-causing bacteria and clears pores." },
                { "ingredient": "Tea Tree Oil", "benefit": "Fights inflammation and acne naturally." }
            ],
            "Open_Pores": [
                { "ingredient": "Niacinamide", "benefit": "Minimizes the appearance of pores and regulates oil production." },
                { "ingredient": "Salicylic Acid", "benefit": "Exfoliates and unclogs pores." }
            ],
            "Pigmentation": [
                { "ingredient": "Vitamin C", "benefit": "Brightens skin and reduces dark spots." },
                { "ingredient": "Licorice Extract", "benefit": "Fades hyperpigmentation and evens skin tone." }
            ],
            "Acne_Scars": [
                { "ingredient": "Retinol", "benefit": "Stimulates cell turnover to reduce scars." },
                { "ingredient": "Vitamin E", "benefit": "Reduces scarring and promotes skin healing." }
            ],
            "Dark_Circles": [
                { "ingredient": "Caffeine", "benefit": "Reduces puffiness and improves skin tone." },
                { "ingredient": "Peptides", "benefit": "Strengthens the skin and reduces dark circles." }
            ]
        },
        "sensitive": {
            "Acne": [
                { "ingredient": "Azelaic Acid", "benefit": "Gently exfoliates and reduces acne with anti-inflammatory properties." },
                { "ingredient": "Green Tea Extract", "benefit": "Soothes and reduces inflammation." }
            ],
            "Open_Pores": [
                { "ingredient": "Zinc", "benefit": "Reduces oil production and tightens pores." },
                { "ingredient": "Witch Hazel", "benefit": "Naturally tones and reduces pore size." }
            ],
            "Pigmentation": [
                { "ingredient": "Vitamin C", "benefit": "Brightens skin and reduces dark spots." },
                { "ingredient": "Licorice Extract", "benefit": "Fades hyperpigmentation and evens skin tone." }
            ],
            "Acne_Scars": [
                { "ingredient": "Centella Asiatica", "benefit": "Speeds up healing and reduces scarring." },
                { "ingredient": "Aloe Vera", "benefit": "Soothes irritated skin and promotes healing." }
            ],
            "Dark_Circles": [
                { "ingredient": "Hyaluronic Acid", "benefit": "Hydrates and plumps the skin, reducing the appearance of dark circles." },
                { "ingredient": "Cucumber Extract", "benefit": "Soothes and reduces puffiness." }
            ]
        }
    }
};

let userSelections = {
    name: '',
    age: '',
    gender: '',
    texture: '',
    type: '',
    concern: ''
};

// Define background images for each screen
const screenBackgrounds = {
    'welcome-screen': 'url("static/Welcome Screen.jpg")',
    'user-details-screen': 'url("static/user details.jpg")',
    'skin-texture-screen': 'url("static/Skin texture.jpg")',
    'skin-type-screen': 'url("static/Skin type.jpg")',
    'skin-concern-screen': 'url("static/Skin Concern.jpg")',
    'selfie-instructions-screen': 'url("static/instruction.jpg")',
    'camera-screen': 'url("static/Camera.jpg")',
    'recommendation-screen': 'url("static/Recommendation.jpg")',
    'skincare-tips-screen': 'url("static/Recommendation.jpg")',
    'thank-you-screen': 'url("static/thank you.jpg")'
};

// Initialize the app when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    nextScreen('welcome-screen');
    loadUserDetails();
});

// Load user details from form inputs
function loadUserDetails() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');

    if (nameInput && ageInput && genderSelect) {
        nameInput.addEventListener('input', (e) => userSelections.name = e.target.value);
        ageInput.addEventListener('input', (e) => userSelections.age = e.target.value);
        genderSelect.addEventListener('change', (e) => userSelections.gender = e.target.value);
    }
}

// Navigate between screens and update background image
function nextScreen(screenId) {
    if (validateSelection(screenId)) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        const currentScreen = document.getElementById(screenId);
        currentScreen.classList.add('active');
        
        // Set the background image for the active screen
        const backgroundImage = screenBackgrounds[screenId];
        document.body.style.backgroundImage = backgroundImage || 'none';
    } else {
        alert('Please complete all selections before proceeding.');
    }
}

// Select options for skin texture, type, and concern
function selectOption(key, value, element) {
    userSelections[key] = value;
    // Clear previous selections
    const buttons = element.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    // Highlight the selected button
    element.classList.add('selected');
}

// Validate that all required fields are selected before proceeding
function validateSelection(screenId) {
    if (screenId === 'skin-type-screen' && !userSelections.texture) {
        return false;
    }
    if (screenId === 'skin-concern-screen' && (!userSelections.texture || !userSelections.type)) {
        return false;
    }
    if ((screenId === 'selfie-instructions-screen' || screenId === 'camera-screen') && 
        (!userSelections.texture || !userSelections.type || !userSelections.concern)) {
        return false;
    }
    return true;
}

// Camera functionality
function openCamera() {
    const video = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            video.srcObject = stream;
            video.play();
            nextScreen('camera-screen');
        })
        .catch(err => {
            console.error("Error accessing camera: ", err);
            alert("Could not access the camera. Please ensure you've granted camera permissions.");
        });
}

// Capture image from the video stream
function captureImage() {
    const video = document.getElementById('camera');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the current video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Stop all video tracks
    video.srcObject.getTracks().forEach(track => track.stop());
    
    // Hide video and show canvas
    video.style.display = 'none';
    canvas.style.display = 'block';
    
    // Show proceed button
    document.getElementById('proceed-button').style.display = 'block';
    
    // Convert canvas image to Data URL and upload it
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    uploadImage(imageDataUrl);
}

// Function to map predicted concern names to recommendation JSON keys
function mapConcern(predictedConcern) {
    const mapping = {
        'Acne': 'Acne',
        'Acne Scars': 'Acne_Scars',
        'Pigmentation': 'Pigmentation',
        'Dark Circles': 'Dark_Circles',
        'Open Pores': 'Open_Pores'
    };
    return mapping[predictedConcern] || predictedConcern;
}

// Display skincare recommendations
function showRecommendations() {
    const recommendationList = document.getElementById('recommendation-list');
    
    // Get recommendations based on user selections
    const recs = recommendations[userSelections.texture]?.[userSelections.type]?.[userSelections.concern];
    
    if (!recs || recs.length === 0) {
        recommendationList.innerHTML = '<p>No recommendations available for your selections.</p>';
    } else {
        let html = '<h3>Recommended Ingredients:</h3><ul>';
        recs.forEach(item => {
            html += `<li><strong>${item.ingredient}:</strong> ${item.benefit}</li>`;
        });
        html += '</ul>';
        recommendationList.innerHTML = html;
    }
    
    nextScreen('recommendation-screen');
}

// Skip the selfie and display recommendations based on user input
function skipSelfie() {
    // Set defaults if any selections are missing
    if (!userSelections.texture) userSelections.texture = 'combination';
    if (!userSelections.type) userSelections.type = 'normal';
    if (!userSelections.concern) userSelections.concern = 'acne';
    
    showRecommendations();
}

// Upload image to server for prediction
function uploadImage(imageDataUrl) {
    const blob = dataUrlToBlob(imageDataUrl);
    const formData = new FormData();
    formData.append('file', blob, 'capturedImage.jpg');

    fetch('/upload-image', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        if (data.predicted_concern) {
            const mappedConcern = mapConcern(data.predicted_concern);
            userSelections.concern = mappedConcern;
            showRecommendations();
        } else {
            throw new Error('No prediction available');
        }
    })
    .catch(error => {
        console.error('Error uploading image:', error);
        alert('Error analyzing your skin. Using manual selections instead.');
        showRecommendations();
    });
}

// Convert Data URL to Blob for image upload
function dataUrlToBlob(dataUrl) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new Blob([u8arr], { type: mime });
}