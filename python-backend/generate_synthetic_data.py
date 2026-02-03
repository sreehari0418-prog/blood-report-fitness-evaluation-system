import csv
import random
import numpy as np

OUTPUT_FILE = "dataset/training_data.csv"
NUM_SAMPLES = 2000

# Medical Thresholds (for labeling)
THRESHOLDS = {
    'diabetes_glucose': 126,
    'anemia_hb_male': 13.5,
    'anemia_hb_female': 12.0,
    'thyroid_tsh_low': 0.4,
    'thyroid_tsh_high': 4.0,
    'kidney_creatinine': 1.4
}

def generate_sample(id):
    gender = random.choice(['male', 'female'])
    
    # Generate realistic values with some outliers to simulate diseases
    
    # Glucose: Normal 70-100, Prediabetes 100-125, Diabetes 126+
    if random.random() < 0.2: # 20% chance of diabetes
        glucose = random.uniform(126, 300)
    else:
        glucose = random.uniform(70, 125)
        
    # Hemoglobin: Male 13.5-17.5, Female 12.0-15.5
    if random.random() < 0.15: # 15% chance of anemia
        if gender == 'male':
            hb = random.uniform(8.0, 13.4)
        else:
            hb = random.uniform(8.0, 11.9)
    else:
        if gender == 'male':
            hb = random.uniform(13.5, 17.5)
        else:
            hb = random.uniform(12.0, 15.5)

    # TSH: 0.4 - 4.0
    if random.random() < 0.15: # 15% thyroid issue
        if random.random() < 0.5:
            tsh = random.uniform(0.01, 0.39) # Hyper
        else:
            tsh = random.uniform(4.1, 20.0) # Hypo
    else:
        tsh = random.uniform(0.4, 4.0)

    # Creatinine: 0.6 - 1.2 (Male), 0.5 - 1.1 (Female)
    if random.random() < 0.1: # 10% kidney issue
        creatinine = random.uniform(1.4, 5.0)
    else:
        creatinine = random.uniform(0.5, 1.3)

    # Other metrics (helper metrics)
    wbc = random.uniform(4000, 11000)
    rbc = random.uniform(4.5, 5.9) if gender == 'male' else random.uniform(4.1, 5.1)
    platelets = random.uniform(150000, 450000)
    cholesterol = random.uniform(125, 200)

    # Labels
    has_diabetes = 1 if glucose > THRESHOLDS['diabetes_glucose'] else 0
    
    is_anemic = 0
    if gender == 'male' and hb < THRESHOLDS['anemia_hb_male']: is_anemic = 1
    if gender == 'female' and hb < THRESHOLDS['anemia_hb_female']: is_anemic = 1
    
    has_thyroid = 1 if (tsh < THRESHOLDS['thyroid_tsh_low'] or tsh > THRESHOLDS['thyroid_tsh_high']) else 0
    
    has_kidney = 1 if creatinine > THRESHOLDS['kidney_creatinine'] else 0

    return {
        'filename': f'synthetic_{id}',
        'hemoglobin': round(hb, 1),
        'wbc': round(wbc, 0),
        'rbc': round(rbc, 2),
        'platelets': round(platelets, 0),
        'glucose': round(glucose, 0),
        'cholesterol': round(cholesterol, 0),
        'creatinine': round(creatinine, 2),
        'tsh': round(tsh, 2),
        'has_diabetes': has_diabetes,
        'has_anemia': is_anemic,
        'has_thyroid': has_thyroid,
        'has_kidney_issue': has_kidney
    }

def main():
    headers = [
        'filename', 
        'hemoglobin', 'wbc', 'rbc', 'platelets', 'glucose', 'cholesterol', 'creatinine', 'tsh',
        'has_diabetes', 'has_anemia', 'has_thyroid', 'has_kidney_issue'
    ]
    
    print(f"🚀 Generating {NUM_SAMPLES} synthetic blood report samples...")
    
    with open(OUTPUT_FILE, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        
        for i in range(NUM_SAMPLES):
            writer.writerow(generate_sample(i))
            
    print(f"✅ Generated {NUM_SAMPLES} samples. Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
