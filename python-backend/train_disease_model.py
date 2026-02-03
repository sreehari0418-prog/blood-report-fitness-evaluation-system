import pandas as pd
import numpy as np
import joblib
import os
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.multioutput import MultiOutputClassifier
from sklearn.impute import SimpleImputer
from sklearn.metrics import classification_report, accuracy_score

# Config
DATA_FILE = "dataset/training_data.csv"
MODEL_DIR = "ml_models"
MODEL_FILE = os.path.join(MODEL_DIR, "disease_prediction_model.pkl")

def train_model():
    if not os.path.exists(DATA_FILE):
        print(f"❌ Error: {DATA_FILE} not found. Run prepare_training_data.py first.")
        return

    print("🚀 Loading data...")
    df = pd.read_csv(DATA_FILE)
    
    # Features
    feature_cols = ['hemoglobin', 'wbc', 'rbc', 'platelets', 'glucose', 'cholesterol', 'creatinine', 'tsh']
    X = df[feature_cols]
    
    # Targets (Multi-label)
    target_cols = ['has_diabetes', 'has_anemia', 'has_thyroid', 'has_kidney_issue']
    y = df[target_cols]

    # Preprocessing: Impute missing values
    print("🛠️ Preprocessing...")
    imputer = SimpleImputer(strategy='mean')
    X_imputed = imputer.fit_transform(X)

    # Train/Test Split
    X_train, X_test, y_train, y_test = train_test_split(X_imputed, y, test_size=0.2, random_state=42)

    # Train Model
    print("🧠 Training Random Forest Model...")
    # MultiOutput wrapper allows predicting multiple diseases working independently
    rf = RandomForestClassifier(n_estimators=100, random_state=42)
    model = MultiOutputClassifier(rf, n_jobs=-1)
    model.fit(X_train, y_train)

    # Evaluate
    print("📊 Evaluating Model...")
    y_pred = model.predict(X_test)
    
    accuracy = accuracy_score(y_test, y_pred)
    print(f"✅ Model Accuracy (Exact Match): {accuracy * 100:.2f}%")
    
    # Detailed report for each disease
    for i, target in enumerate(target_cols):
        print(f"\n--- {target} ---")
        print(classification_report(y_test.iloc[:, i], y_pred[:, i]))

    # Save Model
    if not os.path.exists(MODEL_DIR):
        os.makedirs(MODEL_DIR)
        
    joblib.dump({
        'model': model,
        'imputer': imputer,
        'feature_cols': feature_cols,
        'target_cols': target_cols
    }, MODEL_FILE)
    
    print(f"\n💾 Model saved to {MODEL_FILE}")

if __name__ == "__main__":
    train_model()
