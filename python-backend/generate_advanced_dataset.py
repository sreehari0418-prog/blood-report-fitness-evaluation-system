"""
Advanced Blood Report Dataset Generator
Generates comprehensive medical dataset with 60+ parameters for ML training.
Excludes personal data (Age, Gender, Name, etc.) - ONLY medical values.
"""

import pandas as pd
import numpy as np
import os

# Set random seed for reproducibility
np.random.seed(42)

# Number of samples to generate
N_SAMPLES = 200

# Define medical reference ranges (min, max, unit)
# These are typical adult reference ranges
REFERENCE_RANGES = {
    # CBC Parameters
    'Total_Leukocyte_Count': (4000, 11000),  # cells/µL
    'RBC_Count': (4.5, 5.5),  # million cells/µL
    'Hemoglobin': (12.0, 16.0),  # g/dL
    'Hematocrit': (36.0, 46.0),  # %
    'MCV': (80.0, 100.0),  # fL
    'MCH': (27.0, 32.0),  # pg
    'MCHC': (32.0, 36.0),  # g/dL
    'RDW_CV': (11.5, 14.5),  # %
    'Platelet_Count': (150000, 400000),  # cells/µL
    'Neutrophils': (40.0, 70.0),  # %
    'Lymphocytes': (20.0, 40.0),  # %
    'Monocytes': (2.0, 8.0),  # %
    'Eosinophils': (1.0, 4.0),  # %
    'Basophils': (0.0, 1.0),  # %
    'Absolute_Neutrophil_Count': (2000, 7000),  # cells/µL
    'Absolute_Lymphocyte_Count': (1000, 4000),  # cells/µL
    
    # Liver Function Test (LFT)
    'SGOT_AST': (10, 40),  # U/L
    'SGPT_ALT': (7, 56),  # U/L
    'Alkaline_Phosphatase': (44, 147),  # U/L
    'Total_Bilirubin': (0.1, 1.2),  # mg/dL
    'Direct_Bilirubin': (0.0, 0.3),  # mg/dL
    'Indirect_Bilirubin': (0.1, 0.9),  # mg/dL
    'Total_Protein': (6.0, 8.3),  # g/dL
    'Albumin': (3.5, 5.5),  # g/dL
    'Globulin': (2.0, 3.5),  # g/dL
    'A_G_Ratio': (1.0, 2.5),  # ratio
    
    # Kidney Function Test (KFT)
    'Urea': (15, 40),  # mg/dL
    'Creatinine': (0.6, 1.2),  # mg/dL
    'Uric_Acid': (3.5, 7.2),  # mg/dL
    'Sodium': (136, 145),  # mEq/L
    'Potassium': (3.5, 5.0),  # mEq/L
    'Chloride': (98, 107),  # mEq/L
    
    # Lipid Profile
    'Total_Cholesterol': (125, 200),  # mg/dL
    'HDL': (40, 60),  # mg/dL
    'LDL': (70, 130),  # mg/dL
    'VLDL': (10, 40),  # mg/dL
    'Triglycerides': (50, 150),  # mg/dL
    'LDL_HDL_Ratio': (1.5, 3.5),  # ratio
    'TC_HDL_Ratio': (2.5, 5.0),  # ratio
    
    # Blood Sugar
    'Fasting_Blood_Sugar': (70, 100),  # mg/dL
    'Postprandial_Blood_Sugar': (90, 140),  # mg/dL
    'HbA1c': (4.0, 5.6),  # %
    
    # Thyroid Profile
    'T3': (0.8, 2.0),  # ng/mL
    'T4': (5.0, 12.0),  # µg/dL
    'TSH': (0.4, 4.0),  # µIU/mL
    
    # Electrolytes & Minerals
    'Calcium': (8.5, 10.5),  # mg/dL
    'Magnesium': (1.7, 2.2),  # mg/dL
    'Phosphorus': (2.5, 4.5),  # mg/dL
    'Iron': (60, 170),  # µg/dL
    'Ferritin': (12, 300),  # ng/mL
    'Vitamin_B12': (200, 900),  # pg/mL
    'Vitamin_D': (30, 100),  # ng/mL
    
    # Inflammatory / Infection Markers
    'ESR': (0, 20),  # mm/hr
    'CRP': (0.0, 3.0),  # mg/L
    'D_Dimer': (0.0, 0.5),  # µg/mL
    'Procalcitonin': (0.0, 0.1),  # ng/mL
}

def generate_sample(health_status):
    """
    Generate a single blood report sample based on health status.
    
    health_status: 'Normal', 'Mild_Risk', or 'High_Risk'
    """
    sample = {}
    
    for param, (min_val, max_val) in REFERENCE_RANGES.items():
        if health_status == 'Normal':
            # Generate value within normal range
            value = np.random.uniform(min_val, max_val)
        
        elif health_status == 'Mild_Risk':
            # 70% chance normal, 30% chance slightly out of range
            if np.random.random() < 0.7:
                value = np.random.uniform(min_val, max_val)
            else:
                # Slightly out of range (10-30% deviation)
                deviation = np.random.uniform(0.1, 0.3)
                if np.random.random() < 0.5:
                    value = min_val * (1 - deviation)  # Below normal
                else:
                    value = max_val * (1 + deviation)  # Above normal
        
        else:  # High_Risk
            # 40% chance normal, 60% chance significantly out of range
            if np.random.random() < 0.4:
                value = np.random.uniform(min_val, max_val)
            else:
                # Significantly out of range (30-70% deviation)
                deviation = np.random.uniform(0.3, 0.7)
                if np.random.random() < 0.5:
                    value = min_val * (1 - deviation)
                else:
                    value = max_val * (1 + deviation)
        
        # Round to appropriate decimal places
        if max_val > 1000:
            value = round(value, 0)
        elif max_val > 10:
            value = round(value, 1)
        else:
            value = round(value, 2)
        
        sample[param] = value
    
    sample['Health_Status'] = health_status
    return sample

def generate_dataset():
    """Generate complete dataset with balanced classes."""
    
    print("🧬 Generating Advanced Blood Report Dataset...")
    
    samples = []
    
    # Generate balanced dataset
    n_normal = int(N_SAMPLES * 0.5)  # 50% Normal
    n_mild = int(N_SAMPLES * 0.3)    # 30% Mild Risk
    n_high = N_SAMPLES - n_normal - n_mild  # 20% High Risk
    
    print(f"   - Normal: {n_normal} samples")
    print(f"   - Mild Risk: {n_mild} samples")
    print(f"   - High Risk: {n_high} samples")
    
    for _ in range(n_normal):
        samples.append(generate_sample('Normal'))
    
    for _ in range(n_mild):
        samples.append(generate_sample('Mild_Risk'))
    
    for _ in range(n_high):
        samples.append(generate_sample('High_Risk'))
    
    # Create DataFrame
    df = pd.DataFrame(samples)
    
    # Shuffle rows
    df = df.sample(frac=1, random_state=42).reset_index(drop=True)
    
    # Save to CSV
    output_path = 'dataset/advanced_blood_dataset.csv'
    os.makedirs('dataset', exist_ok=True)
    df.to_csv(output_path, index=False)
    
    print(f"\n✅ Dataset Created: {output_path}")
    print(f"   - Total Samples: {len(df)}")
    print(f"   - Features: {len(df.columns) - 1}")  # Exclude Health_Status
    print(f"   - Target: Health_Status")
    
    # Display sample statistics
    print("\n📊 Class Distribution:")
    print(df['Health_Status'].value_counts())
    
    print("\n🔬 Sample Features (First 5):")
    print(df.columns.tolist()[:5])
    
    print("\n💡 Dataset Preview:")
    print(df.head(3))
    
    return df

if __name__ == "__main__":
    generate_dataset()
