import os
import json
import pytesseract
from PIL import Image
from tqdm import tqdm

# Configuration
DATASET_DIR = "dataset/images"
OUTPUT_FILE = "dataset/labels.json"

# Keyword Map (Same as frontend logic)
KEYWORD_MAP = {
    'hemoglobin': ['hemoglobin', 'hb', 'hgb'],
    'rbc': ['rbc', 'red blood cell', 'erythrocyte'],
    'wbc': ['wbc', 'white blood cell', 'leucocyte', 'tlc'],
    'platelet': ['platelet', 'plt'],
    'glucose': ['glucose', 'sugar', 'fbs', 'ppbs'],
    'cholesterol': ['cholesterol'],
    'creatinine': ['creatinine'],
    'tsh': ['tsh', 'thyroid']
}

def auto_label():
    if not os.path.exists(DATASET_DIR):
        print(f"❌ Error: {DATASET_DIR} does not exist.")
        return

    images = [f for f in os.listdir(DATASET_DIR) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if not images:
        print(f"❌ No images found in {DATASET_DIR}")
        return

    print(f"🚀 Found {len(images)} images. Starting Auto-Labeling...")
    
    dataset_labels = []

    for img_file in tqdm(images):
        img_path = os.path.join(DATASET_DIR, img_file)
        try:
            image = Image.open(img_path)
            
            # Get OCR data with bounding boxes
            data = pytesseract.image_to_data(image, output_type=pytesseract.Output.DICT)
            
            n_boxes = len(data['text'])
            tokens = []
            bboxes = []
            ner_tags = []
            
            width, height = image.size

            for i in range(n_boxes):
                word = data['text'][i].strip()
                if not word:
                    continue

                # Normalization for bounding box (0-1000 scale)
                x, y, w, h = data['left'][i], data['top'][i], data['width'][i], data['height'][i]
                norm_box = [
                    int((x / width) * 1000),
                    int((y / height) * 1000),
                    int(((x + w) / width) * 1000),
                    int(((y + h) / height) * 1000)
                ]

                # Label Logic
                label = "O"
                lower_word = word.lower()
                
                # Check Key
                for key, synonyms in KEYWORD_MAP.items():
                    if any(s in lower_word for s in synonyms):
                        label = "B-TEST_NAME"
                        break
                
                # Check Value (Basic Heuristic: is it a number?)
                if label == "O" and word.replace('.', '', 1).isdigit():
                     # Usually values come after test names. Simple heuristic.
                     label = "B-VALUE"

                tokens.append(word)
                bboxes.append(norm_box)
                ner_tags.append(label)

            dataset_labels.append({
                "id": img_file,
                "file_name": img_file,
                "tokens": tokens,
                "bboxes": bboxes,
                "ner_tags": ner_tags
            })

        except Exception as e:
            print(f"⚠️ Error processing {img_file}: {e}")

    # Save
    with open(OUTPUT_FILE, "w") as f:
        json.dump(dataset_labels, f, indent=2)

    print(f"✅ Auto-Labeling Complete! Labels saved to {OUTPUT_FILE}")
    print(f"📊 Total Labeled: {len(dataset_labels)}")

if __name__ == "__main__":
    auto_label()
