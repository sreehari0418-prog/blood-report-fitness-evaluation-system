import time
import json
import random

def print_header(title):
    print("\n" + "="*50)
    print(f"   🚀 BACKEND API SERVER DEMO: {title}")
    print("="*50 + "\n")

def simulate_delay(seconds, message):
    print(f"⏳ {message}...", end="", flush=True)
    time.sleep(seconds)
    print(" ✅ Done!")

def api_endpoint_predict_disease(blood_data):
    print_header("/api/predict-disease (POST)")
    
    print("📡 Incoming Request Payload:")
    print(json.dumps(blood_data, indent=4))
    
    simulate_delay(1.0, "Validating access token")
    simulate_delay(0.5, "Parsing JSON data")
    
    # Simulate processing
    hemoglobin = blood_data.get('hemoglobin', 0)
    wbc = blood_data.get('wbc', 0)
    
    print(f"\n🔍 Analyzing Blood Parameters:")
    print(f"   - Hemoglobin: {hemoglobin} g/dL")
    print(f"   - WBC Count: {wbc} /mcL")
    
    simulate_delay(1.5, "Running Machine Learning Model (RandomForest)")
    
    # Mock logic
    result = "Healthy"
    if hemoglobin < 12:
        result = "Anemia Detected"
    elif wbc > 11000:
        result = "Infection / Leukocytosis"
        
    response = {
        "status": "success",
        "prediction": result,
        "confidence": f"{random.randint(85, 99)}%",
        "recommendations": [
            "Consult a general physician",
            "Maintain a balanced diet rich in iron"
        ]
    }
    
    print("\n📤 Sending JSON Response:")
    print(json.dumps(response, indent=4))
    
    return response

def api_endpoint_login():
    print_header("/api/login (POST)")
    
    email = input("Enter simulated email: ")
    password = input("Enter simulated password: ")
    
    payload = {"email": email, "password": "*" * len(password)}
    print("\n📡 Incoming Request Payload:")
    print(json.dumps(payload, indent=4))
    
    simulate_delay(0.8, "Hashing password")
    simulate_delay(0.8, "Checking database for user")
    
    token = f"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.{random.randint(10000,99999)}"
    
    response = {
        "status": "success",
        "token": token,
        "message": "Login successful"
    }
    
    print("\n📤 Sending JSON Response:")
    print(json.dumps(response, indent=4))

def main():
    while True:
        print("\n🔹 API SERVER ENDPOINTS:")
        print("1. Test Login API (/api/login)")
        print("2. Test Disease Prediction API (/api/predict-disease)")
        print("3. Exit")
        
        choice = input("\nSelect an endpoint to test (1-3): ")
        
        if choice == '1':
            api_endpoint_login()
            input("\nPress Enter to continue...")
        elif choice == '2':
            sample_data = {
                "hemoglobin": float(input("Enter Hemoglobin (e.g., 13.5): ")),
                "wbc": int(input("Enter WBC Count (e.g., 7000): ")),
                "platelets": 250000,
                "rbc": 4.8
            }
            api_endpoint_predict_disease(sample_data)
            input("\nPress Enter to continue...")
        elif choice == '3':
            break
        else:
            print("❌ Invalid choice")

if __name__ == "__main__":
    main()
