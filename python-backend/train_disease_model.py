import pandas as pd
import numpy as np
import joblib
import os
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.metrics import classification_report, accuracy_score

# Config
DATA_FILE = "dataset/blood_health_dataset.csv"
MODEL_DIR = "ml_models"
MODEL_FILE = os.path.join(MODEL_DIR, "disease_prediction_model.pkl")

def train_model():
    if not os.path.exists(DATA_FILE):
        print(f"❌ Error: {DATA_FILE} not found. Please create the dataset first.")
        return

    print("🚀 Loading data from blood_health_dataset.csv...")
    df = pd.read_csv(DATA_FILE)
    
    # 1. Define Features (Inputs) and Target (Output)
    # Using the exact columns from the user's schema
    feature_cols = [
        'Age', 'Gender', 'Total_Leukocyte_Count', 'RBC_Count', 'Hemoglobin', 
        'Hematocrit', 'MCV', 'MCH', 'MCHC', 'RDW_CV', 'Platelet_Count', 
        'Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils', 
        'Absolute_Neutrophil_Count', 'Absolute_Lymphocyte_Count'
    ]
    target_col = 'Health_Status'

    # 2. Preprocessing
    print("🛠️ Preprocessing Data...")
    
    # Handle Categorical Data (Gender)
    # Convert M/F to 0/1
    if 'Gender' in df.columns:
        le_gender = LabelEncoder()
        df['Gender'] = df['Gender'].astype(str).map(lambda x: 1 if 'm' in x.lower() else 0) # Male=1, Female=0
        print("   - Encoded Gender")

    X = df[feature_cols]
    y = df[target_col]

    # Handle Missing Values (Impute with Mean)
    imputer = SimpleImputer(strategy='mean')
    X_imputed = imputer.fit_transform(X)

    # Encode Target Labels (e.g., "Normal" -> 0, "Anemia" -> 1)
    le_target = LabelEncoder()
    y_encoded = le_target.fit_transform(y)
    print(f"   - Target Classes: {le_target.classes_}")

    # 3. Train/Test Split
    # Note: With very small data (like 1 row), this might fail or be trivial.
    # We'll use the whole set for training if < 5 rows just to demonstrate.
    if len(df) < 5:
        print("⚠️ Small dataset detected. Using all data for training (no validation split).")
        X_train, X_test, y_train, y_test = X_imputed, X_imputed, y_encoded, y_encoded
    else:
        X_train, X_test, y_train, y_test = train_test_split(X_imputed, y_encoded, test_size=0.2, random_state=42)

    # 4. Train Model
    print("🧠 Training Random Forest Classifier...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # 5. Evaluate
    print("📊 Evaluating Model...")
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"✅ Model Accuracy: {accuracy * 100:.2f}%")
    
    # 6. Save Model & Artifacts
    if not os.path.exists(MODEL_DIR):
        os.makedirs(MODEL_DIR)
        
    joblib.dump({
        'model': model,
        'imputer': imputer,
        'target_encoder': le_target,
        'feature_cols': feature_cols
    }, MODEL_FILE)
    
    print(f"\n💾 Model saved to {MODEL_FILE}")
    print("   - Ready to predict Health Status based on 18 blood parameters!")

if __name__ == "__main__":
    train_model()
