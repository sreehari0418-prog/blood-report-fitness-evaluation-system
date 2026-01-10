from flask import Flask, request, jsonify
from flask_cors import CORS
import bcrypt
import jwt
import os
from datetime import datetime, timedelta
from database import init_db, get_db_connection

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

# Secret key for JWT (use environment variable in production)
SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key-change-in-production')

# Initialize database on startup
init_db()

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'message': 'Auth API is running'})

@app.route('/api/register', methods=['POST'])
def register():
    """Register a new user"""
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            return jsonify({'error': 'Email and password are required'}), 400
        
        # Hash password
        password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        
        # Insert into database
        conn = get_db_connection()
        cursor = conn.cursor()
        
        try:
            cursor.execute(
                'INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, ?)',
                (email, password_hash.decode('utf-8'), datetime.utcnow().isoformat())
            )
            user_id = cursor.lastrowid
            
            # Create default profile
            cursor.execute(
                'INSERT INTO profiles (user_id, name, updated_at) VALUES (?, ?, ?)',
                (user_id, email.split('@')[0], datetime.utcnow().isoformat())
            )
            
            conn.commit()
            
            # Generate JWT token
            token = jwt.encode({
                'user_id': user_id,
                'email': email,
                'exp': datetime.utcnow() + timedelta(days=7)
            }, SECRET_KEY, algorithm='HS256')
            
            return jsonify({
                'success': True,
                'token': token,
                'user': {'email': email, 'id': user_id}
            }), 201
            
        except Exception as e:
            conn.rollback()
            if 'UNIQUE constraint failed' in str(e):
                return jsonify({'error': 'Email already exists'}), 409
            raise
        finally:
            conn.close()
            
    except Exception as e:
        print(f"Registration error: {str(e)}")
        return jsonify({'error': 'Registration failed'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    """Login user"""
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            return jsonify({'error': 'Email and password are required'}), 400
        
        # Get user from database
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE email = ?', (email,))
        user = cursor.fetchone()
        conn.close()
        
        if not user:
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Check password
        if not bcrypt.checkpw(password.encode('utf-8'), user['password_hash'].encode('utf-8')):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Generate JWT token
        token = jwt.encode({
            'user_id': user['id'],
            'email': user['email'],
            'exp': datetime.utcnow() + timedelta(days=7)
        }, SECRET_KEY, algorithm='HS256')
        
        return jsonify({
            'success': True,
            'token': token,
            'user': {'email': user['email'], 'id': user['id']}
        }), 200
        
    except Exception as e:
        print(f"Login error: {str(e)}")
        return jsonify({'error': 'Login failed'}), 500

@app.route('/api/profile', methods=['GET'])
def get_profile():
    """Get user profile"""
    try:
        # Get token from header
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({'error': 'No token provided'}), 401
        
        token = auth_header.split(' ')[1]
        
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            user_id = payload['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401
        
        # Get profile from database
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM profiles WHERE user_id = ?', (user_id,))
        profile = cursor.fetchone()
        conn.close()
        
        if not profile:
            return jsonify({'error': 'Profile not found'}), 404
        
        return jsonify({
            'success': True,
            'profile': dict(profile)
        }), 200
        
    except Exception as e:
        print(f"Profile fetch error: {str(e)}")
        return jsonify({'error': 'Failed to fetch profile'}), 500

@app.route('/api/profile', methods=['PUT'])
def update_profile():
    """Update user profile"""
    try:
        # Get token from header
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({'error': 'No token provided'}), 401
        
        token = auth_header.split(' ')[1]
        
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            user_id = payload['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401
        
        data = request.json
        
        # Update profile in database
        conn = get_db_connection()
        cursor = conn.cursor()
        
        cursor.execute('''
            UPDATE profiles SET 
                name = ?, age = ?, gender = ?, height = ?, heightCm = ?,
                weight = ?, blood_group = ?, diseases = ?, allergies = ?,
                notes = ?, updated_at = ?
            WHERE user_id = ?
        ''', (
            data.get('name'), data.get('age'), data.get('gender'),
            data.get('height'), data.get('heightCm'), data.get('weight'),
            data.get('bloodGroup'), data.get('diseases'), data.get('allergies'),
            data.get('notes'), datetime.utcnow().isoformat(), user_id
        ))
        
        conn.commit()
        conn.close()
        
        return jsonify({'success': True, 'message': 'Profile updated'}), 200
        
    except Exception as e:
        print(f"Profile update error: {str(e)}")
        return jsonify({'error': 'Failed to update profile'}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
