from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import bcrypt
import jwt
import os
import werkzeug
from datetime import datetime, timedelta

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Configuration
SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key-change-in-production')
UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

# Database Configuration
# Use SQLite locally, but allow overriding with DATABASE_URL for PostgreSQL on Render/Neon
db_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'bloodfit.db')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', f'sqlite:///{db_path}')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ============================================================================
# DATABASE MODELS
# ============================================================================

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    profile = db.relationship('Profile', backref='user', uselist=False)

class Profile(db.Model):
    __tablename__ = 'profiles'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(100))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(20))
    height = db.Column(db.Integer)
    heightCm = db.Column(db.Integer)
    weight = db.Column(db.Float)
    blood_group = db.Column(db.String(10))
    diseases = db.Column(db.Text)
    allergies = db.Column(db.Text)
    notes = db.Column(db.Text)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'age': self.age,
            'gender': self.gender,
            'height': self.height,
            'heightCm': self.heightCm,
            'weight': self.weight,
            'bloodGroup': self.blood_group, # Map back to frontend expectation
            'diseases': self.diseases,
            'allergies': self.allergies,
            'notes': self.notes,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

# Create Tables
with app.app_context():
    db.create_all()

@app.route('/', methods=['GET'])
def index():
    return jsonify({
        'status': 'ok',
        'message': 'Blood & Fit API is online (SQLAlchemy Mode)'
    }), 200

# ============================================================================
# HEALTH CHECK
# ============================================================================

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'ok', 
        'message': 'Blood & Fit API is running',
        'database': 'connected'
    }), 200

# ============================================================================
# AUTHENTICATION
# ============================================================================

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            return jsonify({'error': 'Email and password are required'}), 400
        
        # Check if user exists
        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already exists'}), 409
        
        # Hash password
        hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        
        # Create user
        new_user = User(email=email, password_hash=hashed_pw)
        db.session.add(new_user)
        db.session.commit()
        
        # Create default profile
        new_profile = Profile(user_id=new_user.id, name=email.split('@')[0])
        db.session.add(new_profile)
        db.session.commit()
        
        # Generate Token
        token = jwt.encode({
            'user_id': new_user.id,
            'email': new_user.email,
            'exp': datetime.utcnow() + timedelta(days=7)
        }, SECRET_KEY, algorithm='HS256')
        
        return jsonify({
            'success': True,
            'token': token,
            'user': {'email': email, 'id': new_user.id}
        }), 201
            
    except Exception as e:
        db.session.rollback()
        print(f"Registration error: {str(e)}")
        return jsonify({'error': 'Registration failed'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        
        user = User.query.filter_by(email=email).first()
        
        if not user or not bcrypt.checkpw(password.encode('utf-8'), user.password_hash.encode('utf-8')):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        token = jwt.encode({
            'user_id': user.id,
            'email': user.email,
            'exp': datetime.utcnow() + timedelta(days=7)
        }, SECRET_KEY, algorithm='HS256')
        
        return jsonify({
            'success': True,
            'token': token,
            'user': {'email': user.email, 'id': user.id}
        }), 200
        
    except Exception as e:
        print(f"Login error: {str(e)}")
        return jsonify({'error': 'Login failed'}), 500

@app.route('/api/profile', methods=['GET'])
def get_profile():
    try:
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({'error': 'No token provided'}), 401
        
        token = auth_header.split(' ')[1]
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            user_id = payload['user_id']
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401
        
        profile = Profile.query.filter_by(user_id=user_id).first()
        
        if not profile:
            return jsonify({'error': 'Profile not found'}), 404
        
        return jsonify({
            'success': True,
            'profile': profile.to_dict()
        }), 200
        
    except Exception as e:
        print(f"Profile error: {str(e)}")
        return jsonify({'error': 'Failed to fetch profile'}), 500

@app.route('/api/profile', methods=['PUT'])
def update_profile():
    try:
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({'error': 'No token provided'}), 401
        
        token = auth_header.split(' ')[1]
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            user_id = payload['user_id']
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401
            
        data = request.json
        profile = Profile.query.filter_by(user_id=user_id).first()
        
        if not profile:
            return jsonify({'error': 'Profile not found'}), 404
            
        # Update fields
        profile.name = data.get('name', profile.name)
        profile.age = data.get('age', profile.age)
        profile.gender = data.get('gender', profile.gender)
        profile.height = data.get('height', profile.height)
        profile.heightCm = data.get('heightCm', profile.heightCm)
        profile.weight = data.get('weight', profile.weight)
        profile.blood_group = data.get('bloodGroup', profile.blood_group)
        profile.diseases = data.get('diseases', profile.diseases)
        profile.allergies = data.get('allergies', profile.allergies)
        profile.notes = data.get('notes', profile.notes)
        profile.updated_at = datetime.utcnow()
        
        db.session.commit()
        return jsonify({'success': True, 'message': 'Profile updated'}), 200
        
    except Exception as e:
        db.session.rollback()
        print(f"Update error: {str(e)}")
        return jsonify({'error': 'Failed to update profile'}), 500

# ============================================================================
# ML CONFIGURATION & LOADING
# ============================================================================

import joblib
import pandas as pd
import numpy as np

# Path to the trained model
MODEL_PATH = "ml_models_advanced/best_blood_model.pkl"
ML_ARTIFACTS = None

# Load Model on Startup
try:
    if os.path.exists(MODEL_PATH):
        print(f"🧠 Loading Advanced ML Model from {MODEL_PATH}...")
        ML_ARTIFACTS = joblib.load(MODEL_PATH)
        print("✅ Model & Artifacts Loaded Successfully")
    else:
        print(f"⚠️ Model file not found at {MODEL_PATH}. Prediction endpoint will return 503.")
except Exception as e:
    print(f"❌ Failed to load model: {e}")

# ============================================================================
# ML ENDPOINTS
# ============================================================================

@app.route('/api/predict-disease', methods=['POST'])
def predict_disease():
    if not ML_ARTIFACTS:
        return jsonify({"error": "ML Model not loaded on server"}), 503
    
    try:
        data = request.json
        print(f"📥 Received Prediction Request: {data}")

        # 1. Prepare Dataframe with correct column order
        feature_names = ML_ARTIFACTS['feature_names']
        
        # Create input dictionary - careful handling of missing values
        input_data = {}
        for col in feature_names:
            val = data.get(col, 0.0)
            try:
                val = float(val)
            except:
                val = 0.0
            input_data[col] = [val]
        
        df_input = pd.DataFrame(input_data)

        # 2. Preprocessing: Scale Features
        scaler = ML_ARTIFACTS['scaler']
        X_scaled = pd.DataFrame(scaler.transform(df_input[feature_names]), columns=feature_names)

        # 3. Predict
        model = ML_ARTIFACTS['model']
        pred_idx = model.predict(X_scaled)[0]
        # Decode the label (0 -> "Healthy", 1 -> "Anemia", etc.)
        pred_label = ML_ARTIFACTS['le_target'].inverse_transform([pred_idx])[0]
        
        # Get Probability/Confidence
        confidence = 0.0
        if hasattr(model, "predict_proba"):
            probs = model.predict_proba(X_scaled)
            confidence = float(np.max(probs))

        print(f"📤 Prediction: {pred_label} ({confidence:.2f})")

        return jsonify({
            "status": "success",
            "prediction": pred_label,
            "confidence": f"{confidence*100:.1f}%",
            "message": "Analysis based on random forest model"
        })

    except Exception as e:
        print(f"❌ Prediction Error: {e}")
        return jsonify({"error": str(e)}), 400

@app.route('/analyze', methods=['POST'])
def analyze_report():
    from extract import extract_data
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
            print(f"🧠 Processing {filename} with OCR and Extraction...")
            results = extract_data(filepath)
            
            return jsonify({
                "message": "Analysis Complete",
                "raw_results": results, 
                "ml_enabled": True
            })

        except Exception as e:
            print(f"❌ Error during extraction: {e}")
            return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5001))
    print(f"🚀 Blood & Fit Unified API (SQLAlchemy + ML) running on port {port}")
    app.run(host='0.0.0.0', port=port, debug=True)
