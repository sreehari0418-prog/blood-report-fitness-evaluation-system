from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import werkzeug
from extract import extract_data

app = Flask(__name__)
CORS(app) # Enable Cross-Origin Resource Sharing for React

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
    return jsonify({"status": "running", "model": "layoutlmv3"}), 200

if __name__ == '__main__':
    print("🚀 ML Backend Server running on http://localhost:5000")
    app.run(debug=True, port=5000)
