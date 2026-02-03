import pandas as pd
import numpy as np
import joblib
import os
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV, StratifiedKFold
from sklearn.preprocessing import LabelEncoder, MinMaxScaler
from sklearn.impute import SimpleImputer
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix, classification_report
from sklearn.pipeline import Pipeline

# Models
from sklearn.ensemble import RandomForestClassifier

# Optional Models (Handle missing dependencies gracefully)
try:
    import xgboost as xgb
    HAS_XGB = True
except ImportError:
    HAS_XGB = False
    print("⚠️ XGBoost not found. Skipping...")

try:
    import lightgbm as lgb
    HAS_LGB = True
except ImportError:
    HAS_LGB = False
    print("⚠️ LightGBM not found. Skipping...")

# Constants
DATA_FILE = "dataset/blood_health_dataset.csv"
MODEL_DIR = "ml_models_advanced"
MODEL_FILE = os.path.join(MODEL_DIR, "best_blood_model.pkl")

# Ensure directories exist
if not os.path.exists(MODEL_DIR):
    os.makedirs(MODEL_DIR)

def load_and_preprocess():
    print("🚀 Loading Data...")
    if not os.path.exists(DATA_FILE):
        raise FileNotFoundError(f"{DATA_FILE} not found!")
    
    df = pd.read_csv(DATA_FILE)
    print(f"   - Loaded {len(df)} rows.")

    # 1. Cleaning: Drop purely numeric ID columns if any (none in this schema, but good practice)
    # The schema provided: Age, Gender, WBC ... Health_Status
    
    # 2. Separate Features & Target
    X = df.drop(columns=['Health_Status'])
    y = df['Health_Status']

    # 3. Encoding Categorical Features (Gender)
    if 'Gender' in X.columns:
        le_gender = LabelEncoder()
        X['Gender'] = le_gender.fit_transform(X['Gender'])
        print(f"   - Encoded Gender: {dict(zip(le_gender.classes_, le_gender.transform(le_gender.classes_)))}")

    # 4. Encoding Target
    le_target = LabelEncoder()
    y_encoded = le_target.fit_transform(y)
    print(f"   - Encoded Target Classes: {dict(zip(le_target.classes_, le_target.transform(le_target.classes_)))}")

    # 5. Feature Selection / Dropping low importance
    # Initial manual drop of non-physiological columns if present (e.g. valid IDs). 
    # Current columns are all relevant features.

    # 6. Scaling (MinMax as requested)
    scaler = MinMaxScaler()
    X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns)
    
    return X_scaled, y_encoded, le_target, X.columns, scaler, le_gender

def train_and_eval(X, y, le_target, feature_names, scaler, le_gender):
    print("\n🧠 Training & Tuning Models...")
    
    # Split for final validation
    # Removed stratify because of single-sample classes
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    from sklearn.model_selection import KFold
    # Cross Validation Strategy
    # Using standard KFold because some classes (e.g. Low_Platelet) have only 1 sample
    # which breaks StratifiedKFold
    cv = KFold(n_splits=3, shuffle=True, random_state=42)

    models = {
        'RandomForest': {
            'model': RandomForestClassifier(random_state=42),
            'params': {
                'n_estimators': [50, 100, 200],
                'max_depth': [None, 10, 20],
                'min_samples_split': [2, 5]
            }
        }
    }

    if HAS_XGB:
        models['XGBoost'] = {
            'model': xgb.XGBClassifier(eval_metric='mlogloss', random_state=42),
            'params': {
                'n_estimators': [50, 100],
                'learning_rate': [0.01, 0.1, 0.2],
                'max_depth': [3, 5, 7]
            }
        }
    
    if HAS_LGB:
        models['LightGBM'] = {
            'model': lgb.LGBMClassifier(random_state=42, verbose=-1),
            'params': {
                'n_estimators': [50, 100],
                'learning_rate': [0.01, 0.1],
                'num_leaves': [31, 20]
            }
        }

    best_score = 0
    best_model = None
    best_name = ""

    results = []

    for name, config in models.items():
        print(f"   ➡️ Tuning {name}...")
        grid = GridSearchCV(config['model'], config['params'], cv=cv, scoring='accuracy', n_jobs=-1)
        grid.fit(X_train, y_train)
        
        # Validation on Holdout Set
        y_pred = grid.best_estimator_.predict(X_test)
        
        acc = accuracy_score(y_test, y_pred)
        prec = precision_score(y_test, y_pred, average='weighted', zero_division=0)
        rec = recall_score(y_test, y_pred, average='weighted', zero_division=0)
        f1 = f1_score(y_test, y_pred, average='weighted', zero_division=0)

        print(f"      Best Params: {grid.best_params_}")
        print(f"      Test Accuracy: {acc*100:.2f}%")

        if acc > best_score:
            best_score = acc
            best_model = grid.best_estimator_
            best_name = name
        
        results.append({
            'Model': name,
            'Accuracy': acc,
            'Precision': prec,
            'Recall': rec,
            'F1': f1
        })

    # Results Table
    res_df = pd.DataFrame(results).sort_values(by='Accuracy', ascending=False)
    print("\n📊 Model Comparison:")
    print(res_df)

    print(f"\n🏆 Best Model: {best_name} with {best_score*100:.2f}% Accuracy")

    # Feature Importance (if applicable)
    if hasattr(best_model, 'feature_importances_'):
        importances = best_model.feature_importances_
        indices = np.argsort(importances)[::-1]
        
        print("\n🌟 Feature Importance:")
        for f in range(X.shape[1]):
            print(f"   {feature_names[indices[f]]}: {importances[indices[f]]:.4f}")

    # Confusion Matrix
    print("\n📉 Confusion Matrix (Best Model):")
    final_preds = best_model.predict(X_test)
    cm = confusion_matrix(y_test, final_preds)
    print(cm)
    print("\nClassification Report:")
    print(classification_report(y_test, final_preds, target_names=le_target.classes_, zero_division=0))

    # Save Bundle
    artifact = {
        'model': best_model,
        'scaler': scaler,
        'le_target': le_target,
        'le_gender': le_gender,
        'feature_names': feature_names
    }
    joblib.dump(artifact, MODEL_FILE)
    print(f"\n💾 Final Model Artifacts saved to {MODEL_FILE}")

    # Sample Prediction
    sample = X_test.iloc[0].values.reshape(1, -1)
    # Reconstruct readable prediction
    pred_idx = best_model.predict(sample)[0]
    pred_label = le_target.inverse_transform([pred_idx])[0]
    
    print("\n🔍 Sample Prediction on Test Data:")
    print(f"   Input (Scaled): {sample}")
    print(f"   Predicted Status: {pred_label}")

if __name__ == "__main__":
    try:
        X_scaled, y_encoded, le_target, feature_names, scaler, le_gender = load_and_preprocess()
        train_and_eval(X_scaled, y_encoded, le_target, feature_names, scaler, le_gender)
    except Exception as e:
        print(f"❌ Error: {e}")
