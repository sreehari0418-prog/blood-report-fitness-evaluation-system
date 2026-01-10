import os
import sys
import json
from PIL import Image
import pytesseract
import numpy as np

# Configuration
MODEL_PATH = "layoutlmv3-medical-finetuned" # Path to trained model
IMAGE_PATH = "dataset/raw_images/sample_report.jpg"

def normalize_box(box, width, height):
    return [
        int(1000 * (box[0] / width)),
        int(1000 * (box[1] / height)),
        int(1000 * (box[2] / width)),
        int(1000 * (box[3] / height)),
    ]

def extract_data(image_path):
    # 1. Load Image
    image = Image.open(image_path).convert("RGB")
    width, height = image.size

    # 2. OCR (Tesseract) to get words and boxes
    # We need words and boxes for LayoutLMv3
    ocr_data = pytesseract.image_to_data(image, output_type=pytesseract.Output.DICT)
    words = []
    boxes = []

    for i in range(len(ocr_data['text'])):
        word = ocr_data['text'][i].strip()
        if not word:
            continue
        
        words.append(word)
        x, y, w, h = ocr_data['left'][i], ocr_data['top'][i], ocr_data['width'][i], ocr_data['height'][i]
        boxes.append(normalize_box([x, y, x + w, y + h], width, height))

    # 3. Load Model & Processor
    try:
        import torch
        from transformers import LayoutLMv3Processor, LayoutLMv3ForTokenClassification
        
        processor = LayoutLMv3Processor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
        model = LayoutLMv3ForTokenClassification.from_pretrained(MODEL_PATH)
    except Exception as e:
        print(f"⚠️ Error loading primary model: {e}. Falling back to base model.")
        from transformers import LayoutLMv3Processor, LayoutLMv3ForTokenClassification
        import torch
        
        processor = LayoutLMv3Processor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
        model = LayoutLMv3ForTokenClassification.from_pretrained("microsoft/layoutlmv3-base")

    # 4. Prepare Inputs
    encoding = processor(image, words, boxes=boxes, return_tensors="pt")
    
    # 5. Predict
    with torch.no_grad():
        outputs = model(**encoding)
        predictions = outputs.logits.argmax(-1).squeeze().tolist()

    # 6. Map to Labels
    # LABELS matched from train.py
    id2label = model.config.id2label
    if not id2label:
         # Fallback default
         LABELS = ["O", "B-TEST_NAME", "I-TEST_NAME", "B-VALUE", "I-VALUE", "B-UNIT", "I-UNIT", "B-RANGE", "I-RANGE"]
         id2label = {i: label for i, label in enumerate(LABELS)}

    extracted_results = []
    current_entity = {"text": "", "label": None}

    for i, pred_id in enumerate(predictions):
        label = id2label.get(pred_id, "O")
        word = words[i] if i < len(words) else "" # Safety check

        if label != "O":
            extracted_results.append({
                "word": word,
                "label": label
            })
    
    print(json.dumps(extracted_results, indent=2))
    return extracted_results

if __name__ == "__main__":
    img_path = sys.argv[1] if len(sys.argv) > 1 else IMAGE_PATH
    extract_data(img_path)
