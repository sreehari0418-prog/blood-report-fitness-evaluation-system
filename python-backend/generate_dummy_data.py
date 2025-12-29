import os
import json
from PIL import Image, ImageDraw, ImageFont
import random

OUTPUT_DIR = "dataset/dummy_data"
IMAGES_DIR = os.path.join(OUTPUT_DIR, "images")
LABELS_FILE = os.path.join(OUTPUT_DIR, "labels.json")

def create_dummy_dataset(num_samples=10):
    if not os.path.exists(IMAGES_DIR):
        os.makedirs(IMAGES_DIR)

    dataset = []

    for i in range(num_samples):
        # 1. Create a blank image
        width, height = 800, 1000
        image = Image.new("RGB", (width, height), "white")
        draw = ImageDraw.Draw(image)
        
        # 2. Add some "Text"
        params = ["Hemoglobin", "RBC", "WBC", "Platelets", "Sugar"]
        y_cursor = 100
        
        words = []
        bboxes = []
        labels = [] # NER tags

        for param in params:
            # Test Name
            text = param
            draw.text((50, y_cursor), text, fill="black")
            bbox = [50, y_cursor, 200, y_cursor + 20]
            
            words.append(text)
            bboxes.append(bbox)
            labels.append("B-TEST_NAME")

            # Value
            val = str(random.randint(10, 150))
            draw.text((300, y_cursor), val, fill="black")
            bbox_val = [300, y_cursor, 350, y_cursor + 20]
            
            words.append(val)
            bboxes.append(bbox_val)
            labels.append("B-VALUE")

            y_cursor += 50
        
        img_filename = f"sample_{i}.jpg"
        image.save(os.path.join(IMAGES_DIR, img_filename))
        
        # 3. Create JSON Entry (HuggingFace Dataset format style)
        entry = {
            "id": str(i),
            "file_name": img_filename,
            "tokens": words,
            "bboxes": bboxes, # These need normalization usually (0-1000)
            "ner_tags": labels 
        }
        dataset.append(entry)

    with open(LABELS_FILE, "w") as f:
        json.dump(dataset, f)

    print(f"✅ Generated {num_samples} synthetic samples in {OUTPUT_DIR}")

if __name__ == "__main__":
    create_dummy_dataset()
