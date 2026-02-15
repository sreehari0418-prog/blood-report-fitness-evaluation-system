import time
import random

def print_header(title):
    print("\n" + "="*50)
    print(f"   🧠 ML MODEL DEMO: {title}")
    print("="*50 + "\n")

def simulate_delay(seconds, message):
    print(f"⏳ {message}...", end="", flush=True)
    time.sleep(seconds)
    print(" ✅ Done!")

def show_dataset():
    print_header("Loading Training Dataset")
    simulate_delay(1.0, "Reading CSV from disk")
    
    print("\n📊 Dataset Preview (First 5 Rows):")
    data = [
        {"id": 1, "hemoglobin": 11.2, "wbc": 4500,  "label": "Anemia"},
        {"id": 2, "hemoglobin": 14.5, "wbc": 7200,  "label": "Healthy"},
        {"id": 3, "hemoglobin": 10.1, "wbc": 12000, "label": "Infection"},
        {"id": 4, "hemoglobin": 15.0, "wbc": 6800,  "label": "Healthy"},
        {"id": 5, "hemoglobin": 13.0, "wbc": 15000, "label": "Leukocytosis"}
    ]
    
    print(f"{'ID':<5} | {'Hemoglobin':<12} | {'WBC':<8} | {'Label'}")
    print("-" * 50)
    for r in data:
        print(f"{r['id']:<5} | {r['hemoglobin']:<12} | {r['wbc']:<8} | {r['label']}")
    print("-" * 50)
    print("\nTotal Samples: 10,000")

def simulate_training():
    print_header("Training RandomForest Classifier")
    
    print("🚀 Initializing model parameters: n_estimators=100, max_depth=5")
    simulate_delay(0.5, "Splitting train/test data (80/20)")
    
    print("\n🏋️ Training Progress:")
    for i in range(1, 6):
        print(f"Epoch {i}/5: Loss: {random.uniform(0.1, 0.5):.4f} - Accuracy: {80 + i*3:.2f}%")
        time.sleep(0.5)
        
    print("\n💾 Saving model weights to 'model.pkl'")
    simulate_delay(1.0, "Serializing model")
    
    print("\n🎯 Final Model Accuracy: 96.5%")

def make_prediction():
    print_header("Live Prediction Test")
    
    h = float(input("Enter Hemoglobin Level: "))
    w = int(input("Enter WBC Count: "))
    
    print(f"\n🔮 Input Tensor: [[{h}, {w}]]")
    
    simulate_delay(0.8, "Loading 'model.pkl'")
    simulate_delay(0.5, "Running inference")
    
    # Simple logic for demo
    prediction = "Healthy"
    if h < 12: prediction = "Anemia"
    elif w > 11000: prediction = "Infection"
    
    confidence = random.uniform(0.85, 0.99)
    
    print(f"\n📢 PREDICTION RESULT: {prediction}")
    print(f"🔥 Confidence Score: {confidence:.2%}")

def main():
    while True:
        print("\n🔹 MACHINE LEARNING PIPELINE:")
        print("1. View Dataset (Inspect Data)")
        print("2. Train Model (Simulate Training)")
        print("3. Test Prediction (Inference)")
        print("4. Exit")
        
        choice = input("\nSelect operation (1-4): ")
        
        if choice == '1':
            show_dataset()
            input("\nPress Enter to continue...")
        elif choice == '2':
            simulate_training()
            input("\nPress Enter to continue...")
        elif choice == '3':
            make_prediction()
            input("\nPress Enter to continue...")
        elif choice == '4':
            break
        else:
            print("❌ Invalid choice")

if __name__ == "__main__":
    main()
