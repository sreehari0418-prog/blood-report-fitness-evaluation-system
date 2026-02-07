from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import werkzeug
from extract import extract_data

# Import enhanced OCR service
try:
    from ocr_service import create_ocr_endpoint
    HAS_OCR_SERVICE = True
except ImportError as e:
    print(f"⚠️ OCR service not available: {e}")
    HAS_OCR_SERVICE = False

app = Flask(__name__)
CORS(app) # Enable Cross-Origin Resource Sharing for React

# Register OCR endpoint if available
if HAS_OCR_SERVICE:
    app = create_ocr_endpoint(app)
    print("✅ OCR endpoint registered at /ocr")

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@app.route('/analyze', methods=['POST'])
def analyze_report():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        filename = werkzeug.utils.secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_DIR, filename)
        file.save(filepath)
        
        try:
            # Run Inference using our extract.py logic
            print(f"🧠 Processing {filename} with ML Model...")
            results = extract_data(filepath)
            
            # Format results for Frontend
            # Expected Frontent format: { values: { 'hemoglobin': 14.2, ... } }
            formatted_values = {}
            
            for item in results:
                # Basic heuristic mapping (Improve this based on your model labels)
                # Assuming model outputs e.g. "B-TEST_NAME" for "Hamoglobin" and "B-VALUE" for "14.0"
                # This part depends heavily on the model's extraction logic.
                # For now, we return the raw extraction list to let frontend decide or simple mapping
                
                # Mock mapping for demo until model is trained:
                label = item['label']
                text = item['word']
                
                # Real logic would pair Key-Value based on position
                # Here we just pass raw list back for now
                pass

            return jsonify({
                "message": "Analysis Complete",
                "raw_results": results, 
                # In real scenario, we'd map this to the exact keys expected by Frontend
                # For now, frontend will likely fallback or display raw data
                "ml_enabled": True
            })

        except Exception as e:
            print(f"❌ Error: {e}")
            return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "running", "model": "Advanced Random Forest"}), 200

# Load Advanced ML Model
import joblib
import pandas as pd
import numpy as np

MODEL_PATH = "ml_models_advanced/best_blood_model.pkl"
ML_ARTIFACTS = None

try:
    if os.path.exists(MODEL_PATH):
        print("🧠 Loading Advanced ML Model...")
        ML_ARTIFACTS = joblib.load(MODEL_PATH)
        print("✅ Model & Artifacts Loaded Successfully")
    else:
        print("⚠️ Model file not found. Please train the model first.")
except Exception as e:
    print(f"❌ Failed to load model: {e}")

@app.route('/predict', methods=['POST'])
def predict_disease():
    if not ML_ARTIFACTS:
        return jsonify({"error": "Model not loaded"}), 503
    
    try:
        data = request.json
        print(f"📥 Received Prediction Request: {data}")

        # 1. Prepare Dataframe with correct column order (16 medical features only)
        feature_names = ML_ARTIFACTS['feature_names']
        
        # Create input dictionary - all features are numeric CBC values
        input_data = {}
        for col in feature_names:
            val = data.get(col, 0.0)  # Default to 0.0 if missing
            try:
                val = float(val)
            except:
                val = 0.0
            input_data[col] = [val]
        
        df_input = pd.DataFrame(input_data)

        # 2. Preprocessing: Scale Features (No Gender encoding needed)
        scaler = ML_ARTIFACTS['scaler']
        X_scaled = pd.DataFrame(scaler.transform(df_input[feature_names]), columns=feature_names)

        # 3. Predict
        model = ML_ARTIFACTS['model']
        pred_idx = model.predict(X_scaled)[0]
        pred_label = ML_ARTIFACTS['le_target'].inverse_transform([pred_idx])[0]
        
        # Get Probability if available
        confidence = 0.0
        if hasattr(model, "predict_proba"):
            probs = model.predict_proba(X_scaled)
            confidence = float(np.max(probs))

        print(f"📤 Prediction: {pred_label} ({confidence:.2f})")

        return jsonify({
            "prediction": pred_label,
            "confidence": f"{confidence*100:.1f}%",
            "status": "success"
        })

    except Exception as e:
        print(f"❌ Prediction Error: {e}")
        return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    print("🚀 ML Backend Server running on http://0.0.0.0:5000")
    app.run(debug=True, port=5000, host='0.0.0.0')
