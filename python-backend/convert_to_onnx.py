import joblib
import os
import numpy as np
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

# Config
MODEL_FILE = "ml_models/disease_prediction_model.pkl"
ONNX_FILE = "disease_prediction_model.onnx"
PUBLIC_DIR = "../public/models"

def convert_model():
    if not os.path.exists(MODEL_FILE):
        print(f"❌ Error: {MODEL_FILE} not found.")
        return

    print("🚀 Loading trained model...")
    checkpoint = joblib.load(MODEL_FILE)
    model = checkpoint['model']
    feature_cols = checkpoint['feature_cols']
    
    print(f"Features: {feature_cols}")
    
    # Define input type (8 floats)
    initial_type = [('float_input', FloatTensorType([None, len(feature_cols)]))]

    print("🔄 Converting to ONNX...")
    onx = convert_sklearn(model, initial_types=initial_type)

    # Save locally
    with open(ONNX_FILE, "wb") as f:
        f.write(onx.SerializeToString())
    print(f"✅ Converted to {ONNX_FILE}")

    # Move to Frontend Public Dir
    if not os.path.exists(PUBLIC_DIR):
        os.makedirs(PUBLIC_DIR)
        
    final_path = os.path.join(PUBLIC_DIR, ONNX_FILE)
    with open(final_path, "wb") as f:
        f.write(onx.SerializeToString())
        
    print(f"📂 Saved to Frontend: {final_path}")

if __name__ == "__main__":
    convert_model()
