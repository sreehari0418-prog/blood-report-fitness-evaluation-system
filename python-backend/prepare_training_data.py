import os
import csv
import re
import pytesseract
from PIL import Image
from tqdm import tqdm

# Configuration
DATASET_DIR = "dataset/images"
OUTPUT_FILE = "dataset/training_data.csv"

# Medical Thresholds for Labeling
THRESHOLDS = {
    'diabetes_glucose': 126,  # mg/dL (fasting)
    'anemia_hemoglobin_male': 13.5,
    'anemia_hemoglobin_female': 12.0,
    'thyroid_tsh_low': 0.4,
    'thyroid_tsh_high': 4.0,
    'kidney_creatinine': 1.4
}

# Regex Patterns to find values (simplified)
PATTERNS = {
    'hemoglobin': [r'hemoglobin.*?(\d+\.?\d*)', r'hb.*?(\d+\.?\d*)'],
    'wbc': [r'wbc.*?(\d+\.?\d*)', r'white blood cell.*?(\d+\.?\d*)', r'leucocyte.*?(\d+\.?\d*)'],
    'rbc': [r'rbc.*?(\d+\.?\d*)', r'red blood cell.*?(\d+\.?\d*)'],
    'platelet': [r'platelet.*?(\d+\.?\d*)', r'plt.*?(\d+\.?\d*)'],
    'glucose': [r'glucose.*?(\d+\.?\d*)', r'sugar.*?(\d+\.?\d*)', r'fbs.*?(\d+\.?\d*)'],
    'cholesterol': [r'cholesterol.*?(\d+\.?\d*)'],
    'creatinine': [r'creatinine.*?(\d+\.?\d*)'],
    'tsh': [r'tsh.*?(\d+\.?\d*)', r'thyroid stimulating.*?(\d+\.?\d*)']
}

def extract_value(text, type_key):
    """Extract first number matching the pattern for the key"""
    text_lower = text.lower()
    for pattern in PATTERNS.get(type_key, []):
        match = re.search(pattern, text_lower)
        if match:
            try:
                return float(match.group(1))
            except ValueError:
                continue
    return None

def determine_gender(text):
    """Try to determine gender from report text"""
    text_lower = text.lower()
    if 'female' in text_lower or 'mrs' in text_lower or 'miss' in text_lower:
        return 'female'
    return 'male' # Default

def prepare_data():
    if not os.path.exists(DATASET_DIR):
        print(f"❌ Error: {DATASET_DIR} does not exist.")
        return

    images = [f for f in os.listdir(DATASET_DIR) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if not images:
        print(f"❌ No images found in {DATASET_DIR}")
        return

    print(f"🚀 Found {len(images)} images. Extracting data & generating labels...")
    
    # CSV Header
    headers = [
        'filename', 
        'hemoglobin', 'wbc', 'rbc', 'platelets', 'glucose', 'cholesterol', 'creatinine', 'tsh',
        'has_diabetes', 'has_anemia', 'has_thyroid', 'has_kidney_issue'
    ]
    
    data_rows = []
    
    for img_file in tqdm(images):
        img_path = os.path.join(DATASET_DIR, img_file)
        try:
            # Simple OCR to get all text
            text = pytesseract.image_to_string(Image.open(img_path))
            
            # Extract Values
            gender = determine_gender(text)
            
            row = {
                'filename': img_file,
                'hemoglobin': extract_value(text, 'hemoglobin') or 0.0,
                'wbc': extract_value(text, 'wbc') or 0.0,
                'rbc': extract_value(text, 'rbc') or 0.0,
                'platelets': extract_value(text, 'platelet') or 0.0,
                'glucose': extract_value(text, 'glucose') or 0.0,
                'cholesterol': extract_value(text, 'cholesterol') or 0.0,
                'creatinine': extract_value(text, 'creatinine') or 0.0,
                'tsh': extract_value(text, 'tsh') or 0.0
            }
            
            # Generate Health Labels (Logic)
            # 1. Diabetes
            row['has_diabetes'] = 1 if row['glucose'] > THRESHOLDS['diabetes_glucose'] else 0
            
            # 2. Anemia
            threshold_hb = THRESHOLDS['anemia_hemoglobin_female'] if gender == 'female' else THRESHOLDS['anemia_hemoglobin_male']
            # Only label if HB is found (>0) and below threshold
            row['has_anemia'] = 1 if (row['hemoglobin'] > 0 and row['hemoglobin'] < threshold_hb) else 0
            
            # 3. Thyroid
            row['has_thyroid'] = 1 if (row['tsh'] > 0 and (row['tsh'] < THRESHOLDS['thyroid_tsh_low'] or row['tsh'] > THRESHOLDS['thyroid_tsh_high'])) else 0
            
            # 4. Kidney
            row['has_kidney_issue'] = 1 if row['creatinine'] > THRESHOLDS['kidney_creatinine'] else 0

            # Only add robust data (at least one valid value found)
            if any([row['hemoglobin'], row['glucose'], row['tsh'], row['creatinine']]):
                data_rows.append(row)
                
        except Exception as e:
            print(f"⚠️ Error processing {img_file}: {e}")

    # Save to CSV
    with open(OUTPUT_FILE, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(data_rows)

    print(f"✅ Data Preparation Complete! Saved to {OUTPUT_FILE}")
    print(f"📊 Processed {len(images)} images, extracted valid data from {len(data_rows)}")

if __name__ == "__main__":
    prepare_data()
