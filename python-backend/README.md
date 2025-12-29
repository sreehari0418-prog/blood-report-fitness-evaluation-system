# 🧠 Python ML Backend for Blood Report Analysis

This folder contains the complete pipeline to train a custom **Deep Learning Model (LayoutLMv3)** for extracting structured data from medical blood reports.

## 📂 Structure

- `data_loader.py`: Downloads 1000+ medical report images from Hugging Face.
- `preprocess.py`: Cleans images (denoising, deskewing) using OpenCV to improve OCR accuracy.
- `train.py`: Fine-tunes a Microsoft LayoutLMv3 model to recognize Test Names, Values, and Units.
- `extract.py`: Runs the trained model on a new image to extract data JSON.

## 🚀 How to Run

### 1. Setup Environment
You need Python 3.8+ and a GPU (recommended).

```bash
pip install -r requirements.txt
# Also install Tesseract-OCR on your system:
# sudo apt install tesseract-ocr  (Linux)
# brew install tesseract          (Mac)
```

### 2. Download Data
Fetch the datasets from Hugging Face.
```bash
python data_loader.py
```

### 3. Preprocess Images
Clean up the noisy scans.
```bash
python preprocess.py
```

### 4. Train Model
**Note:** You must label your data first (using Label Studio or similar) for supervised training. The script `train.py` contains the architecture configuration.
```bash
python train.py
```

### 5. Run Inference
Extract data from a new report.
```bash
python extract.py path/to/my_report.jpg
```

## 🛠 Model Architecture
We use **LayoutLMv3**, a multimodal Transformer model that understands:
1. **Text**: (OCR words)
2. **Layout**: (Position/Bounding boxes)
3. **Image**: (Visual features)

This is state-of-the-art for document understanding.
