#!/usr/bin/env python3
"""
Complete App Knowledge PDF Generator (Expanded Version)
Blood Report Fitness Evaluation System
Includes Deep Algorithm Details & Full 100+ Feature Breakdown
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm, mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Image, HRFlowable, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import os

# ─── Paths ────────────────────────────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PDF = os.path.join(BASE_DIR, "Complete_App_Knowledge_Presentation.pdf")

# ─── Colors ───────────────────────────────────────────────────────────────────
HEADING_COLOR = colors.HexColor("#0D47A1")   # Dark Blue
ACCENT_COLOR  = colors.HexColor("#B71C1C")   # Red
BG_COLOR      = colors.HexColor("#F4F7F9")   # Light Gray/Blue
TEXT_COLOR    = colors.HexColor("#212121")
ML_ACCENT     = colors.HexColor("#6A1B9A")   # Purple for ML
BULLET        = "•"

# ─── Page Setup ───────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
MARGIN = 1.2 * cm

# ─── Styles ───────────────────────────────────────────────────────────────────
styles = getSampleStyleSheet()

def s(name, **kw):
    base = kw.pop("parent", "Normal")
    return ParagraphStyle(name, parent=styles[base], **kw)

TITLE_MAIN = s("TM", fontName="Helvetica-Bold", fontSize=26, textColor=HEADING_COLOR, alignment=TA_CENTER, spaceAfter=10)
TITLE_SUB  = s("TS", fontName="Helvetica", fontSize=15, textColor=TEXT_COLOR, alignment=TA_CENTER, spaceAfter=20)
SECTION_H  = s("SH", fontName="Helvetica-Bold", fontSize=18, textColor=HEADING_COLOR, spaceBefore=12, spaceAfter=6)
SUB_H      = s("SubH", fontName="Helvetica-Bold", fontSize=14, textColor=TEXT_COLOR, spaceBefore=8, spaceAfter=4)
BODY       = s("Body", fontName="Helvetica", fontSize=10.5, textColor=TEXT_COLOR, alignment=TA_JUSTIFY, spaceAfter=6)
POINT      = s("Pt", fontName="Helvetica", fontSize=10.5, textColor=TEXT_COLOR, leftIndent=20, spaceAfter=4)
SMALL_BOLD = s("SB", fontName="Helvetica-Bold", fontSize=9, textColor=HEADING_COLOR)
TABLE_TEXT = s("TT", fontName="Helvetica", fontSize=8.5, textColor=TEXT_COLOR)
VIVA_Q     = s("VQ", fontName="Helvetica-Bold", fontSize=11, textColor=HEADING_COLOR, spaceBefore=6)
VIVA_A     = s("VA", fontName="Helvetica-Oblique", fontSize=11, textColor=TEXT_COLOR, leftIndent=20, spaceAfter=6)

def bp(text):
    return Paragraph(f"<b>{BULLET}</b> {text}", POINT)

def red_line():
    return HRFlowable(width="100%", thickness=2, color=ACCENT_COLOR, spaceAfter=10)

def college_header():
    data = [[
        Paragraph(
            "<b>Sree Narayana Guru College of Engineering &amp; Technology</b><br/>"
            "<font size='9'>Chalakkode P.O., Korom, Payyannur, Kannur – 670307</font>",
            s("hdr", fontName="Helvetica-Bold", fontSize=12, alignment=TA_CENTER)
        )
    ]]
    t = Table(data, colWidths=[PAGE_W - 2*MARGIN])
    t.setStyle(TableStyle([
        ("BOX", (0,0), (-1,-1), 0.5, colors.grey),
        ("BACKGROUND", (0,0), (-1,-1), colors.HexColor("#FFF9E6")),
        ("TOPPADDING", (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
    ]))
    return t

# ─── Medical Ranges (Subset for Table) ────────────────────────────────────────
# I will include a representative set of the 100+ parameters grouped logically
medical_data = [
    # Hematology
    ("Hemoglobin", "13 - 17", "g/dL", "Low: Anemia/Fatigue | High: Dehydration"),
    ("RBC Count", "4.5 - 5.9", "mil/µL", "Low: Anemia | High: Thick blood stress"),
    ("WBC Count", "4000 - 11000", "/µL", "Low: Low immunity | High: Infection"),
    ("Platelets", "1.5 - 4.5", "Lakh/µL", "Low: Bleeding risk | High: Clotting risk"),
    ("MCV", "80 - 100", "fL", "Low: Microcytic | High: Macrocytic (B12)"),
    ("Hematocrit", "38 - 50", "%", "Low: Anemia | High: Fluid loss"),
    # Kidney
    ("Creatinine", "0.6 - 1.3", "mg/dL", "High: Kidney stress/filtration issue"),
    ("BUN", "7 - 20", "mg/dL", "High: Protein load/Kidney load"),
    ("Uric Acid", "3.5 - 7.2", "mg/dL", "High: Gout risk/Purine buildup"),
    # Liver
    ("Bilirubin Total", "0.3 - 1.2", "mg/dL", "High: Liver stress/Jaundice risk"),
    ("SGOT (AST)", "10 - 40", "U/L", "High: Liver or Muscle cell damage"),
    ("SGPT (ALT)", "7 - 56", "U/L", "High: Specific liver inflammation"),
    ("Alk. Phosphatase", "44 - 147", "U/L", "High: Bone or Liver activity"),
    # Glucose/Diabetes
    ("Glucose Fasting", "70 - 100", "mg/dL", "High: Diabetes/Pre-diabetes risk"),
    ("HbA1c", "4.0 - 5.6", "%", "High: Long-term glucose poor control"),
    # Lipids
    ("Cholesterol", "0 - 200", "mg/dL", "High: Cardiac/Artery plaque risk"),
    ("HDL (Good)", "40 - 100", "mg/dL", "Low: Decreased heart protection"),
    ("LDL (Bad)", "0 - 100", "mg/dL", "High: Atherosclerosis risk"),
    ("Triglycerides", "0 - 150", "mg/dL", "High: Metabolic syndrome risk"),
    # Thyroid
    ("TSH", "0.4 - 4.0", "µIU/mL", "High: Hypothyroid | Low: Hyperthyroid"),
    ("T3 / T4", "Varies", "ng/dL", "Markers for active metabolism rate"),
    # Vitamins
    ("Vitamin B12", "200 - 900", "pg/mL", "Low: Nerve issues/Brain fog"),
    ("Vitamin D", "30 - 100", "ng/mL", "Low: Bone density/Mood issues"),
    # Electrolytes
    ("Sodium", "135 - 145", "mmol/L", "Maintenance of fluid balance"),
    ("Potassium", "3.5 - 5.1", "mmol/L", "Heart rhythm and muscle function"),
]

# ─── Content Construction ─────────────────────────────────────────────────────
story = []

# 1. TITLE PAGE
story.append(college_header())
story.append(Spacer(1, 4*cm))
story.append(Paragraph("BLOOD REPORT FITNESS EVALUATION SYSTEM", TITLE_MAIN))
story.append(red_line())
story.append(Paragraph("EXPANDED TECHNICAL KNOWLEDGE & ALGORITHM GUIDE", TITLE_SUB))
story.append(Spacer(1, 1*cm))
story.append(Paragraph("<b>Scientific Deep Dive:</b> Machine Learning & Medical Analytics", s("Subt", alignment=TA_CENTER, fontSize=13)))
story.append(Spacer(1, 4*cm))
story.append(Paragraph("<b>Project Domain:</b> AI in Healthcare / Medical Data Science", BODY))
story.append(Paragraph("<b>Version:</b> 2.5 (High Detail)", BODY))
story.append(PageBreak())

# 2. RANDOM FOREST ALGORITHM DEEP DIVE
story.append(college_header())
story.append(Paragraph("1. MACHINE LEARNING: RANDOM FOREST DEEP DIVE", SECTION_H))
story.append(red_line())
story.append(Paragraph("<b>1.1 What is a Random Forest?</b>", SUB_H))
story.append(Paragraph(
    "Random Forest is an <b>Ensemble Learning</b> method that achieves high accuracy and robustness by combining the predictions of "
    "multiple Decision Trees. It operates on the principle of the <i>'Wisdom of the Crowds'</i>—where the collective decision of many "
    "weak learners (individual trees) is stronger and more stable than any single learner.",
    BODY))

story.append(Paragraph("<b>1.2 Core Mechanism: Bagging & Feature Randomness</b>", SUB_H))
story.append(Paragraph("The algorithm uses two key techniques to ensure diversity among trees:", BODY))
story.append(bp("<b>Bootstrapped Aggregation (Bagging):</b> Each tree is trained on a random subset of the data (with replacement). This reduces variance and prevents the model from memorizing the noise in the training set."))
story.append(bp("<b>Feature Randomness (The 'Random' part):</b> At each node split in the tree, only a random subset of the total features is considered. For example, if we have 18 blood parameters, a node might only 'see' Hemoglobin, MCV, and Glucose to make its decision. This forces trees to find different patterns."))

story.append(Paragraph("<b>1.3 The Prediction Process (Voting)</b>", SUB_H))
story.append(Paragraph(
    "When a new blood report is analyzed, every tree in the forest (e.g., 100 trees) makes a separate prediction. "
    "For <b>Classification</b> (our use case), the final result is determined by a <b>Majority Vote</b>. If 85 trees predict 'Anemia' and 15 predict 'Normal', "
    "the forest outputs 'Anemia' with a confidence score of 85%.",
    BODY))

story.append(Paragraph("<b>1.4 Why use it for Blood Reports?</b>", SUB_H))
story.append(bp("<b>High Dimensionality:</b> It handles 100+ parameters without requiring complex feature engineering."))
story.append(bp("<b>Non-Linearity:</b> Medical conditions often depend on complex interactions (e.g., High TSH + Low T4 for Hypothyroidism) which RFC captures easily."))
story.append(bp("<b>Robustness:</b> It is not easily affected by outliers or noisy OCR data."))
story.append(PageBreak())

# 3. DETAILED FEATURE ANALYSIS (MEDICAL PARAMETERS)
story.append(college_header())
story.append(Paragraph("2. FEATURE ANALYSIS: 100+ BLOOD PARAMETERS", SECTION_H))
story.append(red_line())
story.append(Paragraph(
    "Our system identifies and evaluates over 100 parameters across several medical sub-domains. Below is a detailed breakdown "
    "of the most critical features used in the Analysis and ML pipeline.",
    BODY))

# Parameter Table
table_header = [
    [Paragraph("<b>Parameter Name</b>", s("th", alignment=TA_CENTER, textColor=colors.white)), 
     Paragraph("<b>Normal Range</b>", s("th", alignment=TA_CENTER, textColor=colors.white)), 
     Paragraph("<b>Unit</b>", s("th", alignment=TA_CENTER, textColor=colors.white)), 
     Paragraph("<b>Clinical Significance / Impact</b>", s("th", alignment=TA_CENTER, textColor=colors.white))]
]

formatted_rows = []
for p, r, u, d in medical_data:
    formatted_rows.append([
        Paragraph(p, SMALL_BOLD),
        Paragraph(r, TABLE_TEXT),
        Paragraph(u, TABLE_TEXT),
        Paragraph(d, TABLE_TEXT)
    ])

pt = Table(table_header + formatted_rows, colWidths=[3.5*cm, 2.5*cm, 2*cm, 9.5*cm])
pt.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), HEADING_COLOR),
    ("GRID", (0,0), (-1,-1), 0.5, colors.grey),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("PADDING", (0,0), (-1,-1), 6),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, BG_COLOR]),
]))
story.append(pt)

story.append(Spacer(1, 0.5*cm))
story.append(Paragraph("<i>Note: The system supports an extended list including Absolute counts, Electrolytes, Pancreatic enzymes, and rare markers not shown in this summary table.</i>", s("Ital", fontSize=8.5)))
story.append(PageBreak())

# 4. TRAINING PIPELINE & DATA FLOW
story.append(college_header())
story.append(Paragraph("3. ML TRAINING PIPELINE", SECTION_H))
story.append(red_line())
story.append(Paragraph(
    "To ensure high accuracy, the Random Forest model undergoes a rigorous training and validation process using Scikit-Learn.",
    BODY))

story.append(Paragraph("<b>Step 1: Dataset Preparation</b>", SUB_H))
story.append(Paragraph("Thousands of synthetic and real anonymized records are consolidated. Missing values are filled using <b>Mean Imputation</b>.", BODY))

story.append(Paragraph("<b>Step 2: Encoding & Normalization</b>", SUB_H))
story.append(Paragraph("Categorical data (like Gender) is Label Encoded. All numeric values are scaled using <b>MinMaxScaler</b> to ensure features with large units (like WBC 11000) don't dominate those with small units (like Creatinine 0.8).", BODY))

story.append(Paragraph("<b>Step 3: Cross-Validation</b>", SUB_H))
story.append(Paragraph("The data is split into 80% training and 20% testing. We use <b>K-Fold Cross-Validation</b> to ensure the model generalizes well across different subsets of data.", BODY))

story.append(Paragraph("<b>Step 4: Model Export (ONNX)</b>", SUB_H))
story.append(Paragraph("The final trained model is exported to <b>ONNX (Open Neural Network Exchange)</b> format. This allows us to run the forest directly in the user's web browser, providing instant, private predictions without sending sensitive data to a server.", BODY))
story.append(PageBreak())

# 5. VIVA PREP: ALGORITHM & FEATURES
story.append(college_header())
story.append(Paragraph("4. VIVA VOCE: DEEP TECHNICAL Q&A", SECTION_H))
story.append(red_line())

viva_qa = [
    ("Q. Why is it called a 'Random' Forest?", "Because of two layers of randomness: 1. Random bootstrapping of data for each tree, and 2. Random selection of features for each node split. This prevents the trees from becoming too similar and reduces the overall error rate."),
    ("Q. What are 'Hyperparameters' in your Random Forest?", "The most important ones are 'n_estimators' (number of trees, we use 100), 'max_depth' (longest path from root to leaf), and 'min_samples_split' (minimum data points needed to split a node further)."),
    ("Q. How does the system handle values outside the 100+ parameters it knows?", "The OCR extraction logic is 'Adaptive'. It uses keyword mapping (RegEx) to find known keys. If a parameter isn't in our MEDICAL_RANGES, it is ignored by the evaluation logic but still available in the raw OCR text for user reference."),
    ("Q. Is the model interpretable?", "Yes. We can calculate 'Feature Importance'. For example, our forest identifies Hemoglobin and RBC as the highest importance features for predicting Anemia, aligning with medical science."),
    ("Q. How do you handle imbalanced data in healthcare?", "We use techniques like <b>Class Weighting</b> in Scikit-Learn, which tells the algorithm to pay more attention to rare conditions (like Thrombocytopenia) to ensure they aren't ignored during training."),
]

for q, a in viva_qa:
    story.append(Paragraph(q, VIVA_Q))
    story.append(Paragraph(a, VIVA_A))

story.append(PageBreak())

# 10. CONCLUSION
story.append(college_header())
story.append(Spacer(1, 6*cm))
story.append(Paragraph("PRESENTATION END", TITLE_MAIN))
story.append(red_line())
story.append(Paragraph(
    "This expanded guide provides the technical foundation for the Blood Report Fitness Evaluation System. "
    "By combining the ensemble power of Random Forest with an extensive medical rule-base, the system achieves a unique "
    "balance of high-level screening and granular parameter analysis.",
    BODY))
story.append(Spacer(1, 2*cm))
story.append(Paragraph("Thank You!", s("TY", alignment=TA_CENTER, fontSize=32, textColor=HEADING_COLOR, fontName="Helvetica-Bold")))

# ─── Build PDF ────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT_PDF,
    pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=MARGIN,  bottomMargin=MARGIN,
    title="Blood Report Fitness Evaluation System – Expanded Knowledge Guide",
    author="Project Team"
)

doc.build(story)
print(f"✅ PDF created: {OUTPUT_PDF}")
