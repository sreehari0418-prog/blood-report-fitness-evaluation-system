#!/bin/bash

# Blood & Fit Backend Demo Runner
# Helper script to run Python demos in terminal

echo "⚙️  Blood & Fit - Backend Logic Demonstration"
echo "==========================================="
echo ""
echo "Choose a backend component to demonstrate:"
echo "1. 🚀 API Server Logic (Simulate Requests)"
echo "2. 💾 Database Operations (Simulate Storage)"
echo "3. 🧠 Machine Learning Model (Simulate AI)"
echo "4. ❌ Exit"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo "Starting API Server Demo..."
        python3 api_demo.py
        ;;
    2)
        echo "Starting Database Demo..."
        python3 database_demo.py
        ;;
    3)
        echo "Starting ML Model Demo..."
        python3 ml_demo.py
        ;;
    4)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid option. Please run the script again."
        ;;
esac
