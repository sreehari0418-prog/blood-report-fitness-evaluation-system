from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = "dataset/test_samples"
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# 30 Samples provided by user
samples = [
    """Hemoglobin: 14.2 g/dL\nWBC Count: 6,800 /µL\nPlatelet Count: 245,000 /µL\nFasting Glucose: 92 mg/dL\nTotal Cholesterol: 176 mg/dL\nSerum Creatinine: 0.9 mg/dL\nSGPT (ALT): 32 U/L\nTSH: 2.1 µIU/mL""",
    """Hemoglobin: 12.8 g/dL\nWBC Count: 8,200 /µL\nPlatelet Count: 310,000 /µL\nFasting Glucose: 108 mg/dL\nTotal Cholesterol: 189 mg/dL\nSerum Creatinine: 0.8 mg/dL\nSGPT (ALT): 28 U/L\nTSH: 3.4 µIU/mL""",
    """Hemoglobin: 15.5 g/dL\nWBC Count: 5,900 /µL\nPlatelet Count: 270,000 /µL\nFasting Glucose: 85 mg/dL\nTotal Cholesterol: 162 mg/dL\nSerum Creatinine: 1.0 mg/dL\nSGPT (ALT): 35 U/L\nTSH: 1.9 µIU/mL""",
    """Hemoglobin: 13.0 g/dL\nWBC Count: 9,400 /µL\nPlatelet Count: 220,000 /µL\nFasting Glucose: 124 mg/dL\nTotal Cholesterol: 205 mg/dL\nSerum Creatinine: 1.1 mg/dL\nSGPT (ALT): 46 U/L\nTSH: 3.9 µIU/mL""",
    """Hemoglobin: 11.8 g/dL\nWBC Count: 7,200 /µL\nPlatelet Count: 260,000 /µL\nFasting Glucose: 95 mg/dL\nTotal Cholesterol: 178 mg/dL\nSerum Creatinine: 0.7 mg/dL\nSGPT (ALT): 30 U/L\nTSH: 2.5 µIU/mL""",
    """Hemoglobin: 16.1 g/dL\nWBC Count: 6,000 /µL\nPlatelet Count: 198,000 /µL\nFasting Glucose: 82 mg/dL\nTotal Cholesterol: 156 mg/dL\nSerum Creatinine: 1.2 mg/dL\nSGPT (ALT): 22 U/L\nTSH: 1.4 µIU/mL""",
    """Hemoglobin: 13.6 g/dL\nWBC Count: 10,200 /µL\nPlatelet Count: 290,000 /µL\nFasting Glucose: 130 mg/dL\nTotal Cholesterol: 214 mg/dL\nSerum Creatinine: 1.3 mg/dL\nSGPT (ALT): 55 U/L\nTSH: 4.2 µIU/mL""",
    """Hemoglobin: 12.4 g/dL\nWBC Count: 6,400 /µL\nPlatelet Count: 230,000 /µL\nFasting Glucose: 89 mg/dL\nTotal Cholesterol: 174 mg/dL\nSerum Creatinine: 0.8 mg/dL\nSGPT (ALT): 26 U/L\nTSH: 1.6 µIU/mL""",
    """Hemoglobin: 14.8 g/dL\nWBC Count: 7,900 /µL\nPlatelet Count: 270,000 /µL\nFasting Glucose: 99 mg/dL\nTotal Cholesterol: 182 mg/dL\nSerum Creatinine: 1.0 mg/dL\nSGPT (ALT): 40 U/L\nTSH: 2.2 µIU/mL""",
    """Hemoglobin: 13.1 g/dL\nWBC Count: 5,700 /µL\nPlatelet Count: 200,000 /µL\nFasting Glucose: 77 mg/dL\nTotal Cholesterol: 158 mg/dL\nSerum Creatinine: 0.9 mg/dL\nSGPT (ALT): 20 U/L\nTSH: 1.8 µIU/mL""",
    """Hemoglobin: 15.0 g/dL\nWBC Count: 8,400 /µL\nPlatelet Count: 320,000 /µL\nFasting Glucose: 114 mg/dL\nTotal Cholesterol: 192 mg/dL\nSerum Creatinine: 1.0 mg/dL\nSGPT (ALT): 38 U/L\nTSH: 3.1 µIU/mL""",
    """Hemoglobin: 12.0 g/dL\nWBC Count: 9,800 /µL\nPlatelet Count: 240,000 /µL\nFasting Glucose: 145 mg/dL\nTotal Cholesterol: 218 mg/dL\nSerum Creatinine: 1.2 mg/dL\nSGPT (ALT): 60 U/L\nTSH: 4.8 µIU/mL""",
    """Hemoglobin: 14.5 g/dL\nWBC Count: 7,600 /µL\nPlatelet Count: 256,000 /µL\nFasting Glucose: 91 mg/dL\nTotal Cholesterol: 173 mg/dL\nSerum Creatinine: 0.9 mg/dL\nSGPT (ALT): 28 U/L\nTSH: 2.0 µIU/mL""",
    """Hemoglobin: 13.3 g/dL\nWBC Count: 6,900 /µL\nPlatelet Count: 260,000 /µL\nFasting Glucose: 87 mg/dL\nTotal Cholesterol: 166 mg/dL\nSerum Creatinine: 0.8 mg/dL\nSGPT (ALT): 24 U/L\nTSH: 1.5 µIU/mL""",
    """Hemoglobin: 16.2 g/dL\nWBC Count: 5,800 /µL\nPlatelet Count: 210,000 /µL\nFasting Glucose: 105 mg/dL\nTotal Cholesterol: 184 mg/dL\nSerum Creatinine: 1.1 mg/dL\nSGPT (ALT): 34 U/L\nTSH: 2.3 µIU/mL""",
    """Hemoglobin: 11.5 g/dL\nWBC Count: 10,000 /µL\nPlatelet Count: 280,000 /µL\nFasting Glucose: 125 mg/dL\nTotal Cholesterol: 212 mg/dL\nSerum Creatinine: 1.4 mg/dL\nSGPT (ALT): 58 U/L\nTSH: 4.6 µIU/mL""",
    """Hemoglobin: 14.7 g/dL\nWBC Count: 8,100 /µL\nPlatelet Count: 230,000 /µL\nFasting Glucose: 93 mg/dL\nTotal Cholesterol: 170 mg/dL\nSerum Creatinine: 0.8 mg/dL\nSGPT (ALT): 26 U/L\nTSH: 2.0 µIU/mL""",
    """Hemoglobin: 13.8 g/dL\nWBC Count: 7,400 /µL\nPlatelet Count: 250,000 /µL\nFasting Glucose: 100 mg/dL\nTotal Cholesterol: 180 mg/dL\nSerum Creatinine: 0.9 mg/dL\nSGPT (ALT): 33 U/L\nTSH: 2.8 µIU/mL""",
    """Hemoglobin: 12.9 g/dL\nWBC Count: 9,600 /µL\nPlatelet Count: 260,000 /µL\nFasting Glucose: 110 mg/dL\nTotal Cholesterol: 192 mg/dL\nSerum Creatinine: 1.1 mg/dL\nSGPT (ALT): 44 U/L\nTSH: 3.3 µIU/mL""",
    """Hemoglobin: 15.8 g/dL\nWBC Count: 6,200 /µL\nPlatelet Count: 235,000 /µL\nFasting Glucose: 88 mg/dL\nTotal Cholesterol: 168 mg/dL\nSerum Creatinine: 0.9 mg/dL\nSGPT (ALT): 31 U/L\nTSH: 2.1 µIU/mL""",
    """Hemoglobin: 13.7 g/dL\nWBC Count: 7,100 /µL\nPlatelet Count: 245,000 /µL\nFasting Glucose: 97 mg/dL\nTotal Cholesterol: 175 mg/dL\nSerum Creatinine: 1.0 mg/dL\nSGPT (ALT): 29 U/L\nTSH: 2.2 µIU/mL""",
    """Hemoglobin: 12.3 g/dL\nWBC Count: 8,800 /µL\nPlatelet Count: 280,000 /µL\nFasting Glucose: 115 mg/dL\nTotal Cholesterol: 205 mg/dL\nSerum Creatinine: 1.1 mg/dL\nSGPT (ALT): 41 U/L\nTSH: 3.6 µIU/mL""",
    """Hemoglobin: 14.1 g/dL\nWBC Count: 6,000 /µL\nPlatelet Count: 210,000 /µL\nFasting Glucose: 90 mg/dL\nTotal Cholesterol: 160 mg/dL\nSerum Creatinine: 0.9 mg/dL\nSGPT (ALT): 25 U/L\nTSH: 1.7 µIU/mL""",
    """Hemoglobin: 16.0 g/dL\nWBC Count: 9,500 /µL\nPlatelet Count: 320,000 /µL\nFasting Glucose: 125 mg/dL\nTotal Cholesterol: 215 mg/dL\nSerum Creatinine: 1.3 mg/dL\nSGPT (ALT): 52 U/L\nTSH: 4.3 µIU/mL""",
    """Hemoglobin: 11.9 g/dL\nWBC Count: 10,400 /µL\nPlatelet Count: 300,000 /µL\nFasting Glucose: 132 mg/dL\nTotal Cholesterol: 228 mg/dL\nSerum Creatinine: 1.4 mg/dL\nSGPT (ALT): 64 U/L\nTSH: 4.8 µIU/mL""",
    """Hemoglobin: 15.3 g/dL\nWBC Count: 7,200 /µL\nPlatelet Count: 255,000 /µL\nFasting Glucose: 83 mg/dL\nTotal Cholesterol: 168 mg/dL\nSerum Creatinine: 0.8 mg/dL\nSGPT (ALT): 27 U/L\nTSH: 1.5 µIU/mL""",
    """Hemoglobin: 13.5 g/dL\nWBC Count: 9,000 /µL\nPlatelet Count: 280,000 /µL\nFasting Glucose: 108 mg/dL\nTotal Cholesterol: 186 mg/dL\nSerum Creatinine: 1.0 mg/dL\nSGPT (ALT): 36 U/L\nTSH: 2.9 µIU/mL""",
    """Hemoglobin: 14.9 g/dL\nWBC Count: 5,900 /µL\nPlatelet Count: 210,000 /µL\nFasting Glucose: 77 mg/dL\nTotal Cholesterol: 155 mg/dL\nSerum Creatinine: 0.9 mg/dL\nSGPT (ALT): 22 U/L\nTSH: 1.8 µIU/mL""",
    """Hemoglobin: 12.6 g/dL\nWBC Count: 8,500 /µL\nPlatelet Count: 260,000 /µL\nFasting Glucose: 118 mg/dL\nTotal Cholesterol: 198 mg/dL\nSerum Creatinine: 1.1 mg/dL\nSGPT (ALT): 40 U/L\nTSH: 3.5 µIU/mL""",
    """Hemoglobin: 15.7 g/dL\nWBC Count: 6,300 /µL\nPlatelet Count: 230,000 /µL\nFasting Glucose: 92 mg/dL\nTotal Cholesterol: 178 mg/dL\nSerum Creatinine: 1.0 mg/dL\nSGPT (ALT): 30 U/L\nTSH: 2.0 µIU/mL """
]

def create_images():
    for i, content in enumerate(samples):
        # Create image with white background
        img = Image.new('RGB', (600, 400), color='white')
        d = ImageDraw.Draw(img)
        
        # Add Header
        d.text((20, 20), f"LAB REPORT SAMPLE #{i+1}", fill="darkblue")
        d.text((20, 40), "-"*50, fill="black")
        
        # Add content with spacing
        y = 60
        for line in content.split('\n'):
            d.text((30, y), line, fill="black")
            y += 30 # spacing
            
        # Save
        filename = f"sample_{i+1}.jpg"
        path = os.path.join(OUTPUT_DIR, filename)
        img.save(path)
        print(f"Generated: {path}")

if __name__ == "__main__":
    create_images()
