import time
import random
import uuid
import datetime

def print_header(title):
    print("\n" + "="*50)
    print(f"   💾 DATABASE OPERATIONS DEMO: {title}")
    print("="*50 + "\n")

def simulate_delay(seconds, message):
    print(f"⏳ {message}...", end="", flush=True)
    time.sleep(seconds)
    print(" ✅ Done!")

def create_user_collection():
    print_header("Initializing Firestore DB")
    simulate_delay(1.0, "Connecting to Firebase Project: blood-fitness-app")
    simulate_delay(0.5, "Authenticating service account")
    print("\n📂 Database Connection Established: firestore://databases/(default)/documents")

def insert_new_user():
    print_header("CREATE: Insert New User")
    
    name = input("Enter user name: ")
    email = input("Enter email: ")
    user_id = str(uuid.uuid4())[:8]
    
    user_doc = {
        "userId": user_id,
        "name": name,
        "email": email,
        "created_at": datetime.datetime.now().isoformat(),
        "role": "patient"
    }
    
    print("\n📝 Preparing Document:")
    print(user_doc)
    
    simulate_delay(0.8, f"Writing to collection 'users/{user_id}'")
    
    print("\n🎉 Record Inserted Successfully!")
    return user_id

def query_blood_reports(user_id):
    print_header("READ: Query Blood Reports")
    
    simulate_delay(0.5, f"Querying collection 'blood_reports' where userId == '{user_id}'")
    
    # Simulate data fetching
    reports = [
        {"date": "2023-01-15", "hemoglobin": 12.5, "status": "Normal"},
        {"date": "2023-06-20", "hemoglobin": 13.2, "status": "Normal"},
        {"date": "2024-02-10", "hemoglobin": 11.8, "status": "Low Iron"}
    ]
    
    print(f"\nFound {len(reports)} records for user {user_id}:")
    print("-" * 60)
    print(f"{'Date':<15} | {'Hemoglobin':<12} | {'Status'}")
    print("-" * 60)
    
    for r in reports:
        print(f"{r['date']:<15} | {r['hemoglobin']:<12} | {r['status']}")
    print("-" * 60)

def main():
    create_user_collection()
    
    while True:
        print("\n🔹 DATABASE OPERATIONS:")
        print("1. Register New User (CREATE)")
        print("2. Retrieve Reports (READ)")
        print("3. Exit")
        
        choice = input("\nSelect operation (1-3): ")
        
        if choice == '1':
            latest_user_id = insert_new_user()
            input("\nPress Enter to continue...")
        elif choice == '2':
            uid = input("Enter User ID (or press Enter for demo ID): ") or "user_12345"
            query_blood_reports(uid)
            input("\nPress Enter to continue...")
        elif choice == '3':
            break
        else:
            print("❌ Invalid choice")

if __name__ == "__main__":
    main()
