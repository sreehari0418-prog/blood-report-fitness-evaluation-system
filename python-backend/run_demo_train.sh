#!/bin/bash

echo "🚀 Starting Medical fitness Model Training Demo..."
echo "------------------------------------------------"

# 1. Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python could not be found. Please install Python 3.8+"
    exit 1
fi

# 2. Install Dependencies
echo "📦 Installing Dependencies (This may take a few minutes)..."
pip3 install -r requirements.txt

# 3. Generate Dummy Data
echo "🎨 Generating Synthetic Medical Data..."
python3 generate_dummy_data.py

# 4. Run Training
echo "🧠 Starting LayoutLMv3 Fine-Tuning..."
python3 train.py

echo "------------------------------------------------"
echo "✅ Demo Training Complete!"
echo "📂 Model saved to: $(pwd)/layoutlmv3-medical-finetuned"
echo "👉 You can now run the backend server: python3 server.py"
