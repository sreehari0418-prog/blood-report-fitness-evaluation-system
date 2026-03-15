#!/usr/bin/env python3
"""
System Specification PDF Generator
Blood Report Fitness Evaluation System
Updated: 2026 – Includes ML Random Forest Classifier Details
College Template – Sree Narayana Guru College of Engineering & Technology
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import os

# ─── Paths ────────────────────────────────────────────────────────────────────
BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PDF = os.path.join(BASE_DIR, "System_Specification.pdf")

# ─── Colors ───────────────────────────────────────────────────────────────────
HEADING_COLOR  = colors.HexColor("#0D47A1")   # Dark Blue
ACCENT_COLOR   = colors.HexColor("#B71C1C")   # Red line
ML_BG_COLOR    = colors.HexColor("#E3F2FD")   # Light blue for ML sections
DARK_TEXT      = colors.HexColor("#212121")
BULLET         = "•"

# ─── Page Setup ───────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
MARGIN = 2 * cm

# ─── Styles ───────────────────────────────────────────────────────────────────
styles = getSampleStyleSheet()

def s(name, **kw):
    base = kw.pop("parent", "Normal")
    return ParagraphStyle(name, parent=styles[base], **kw)

TITLE_MAIN = s("TM", fontName="Times-Bold",   fontSize=22, textColor=HEADING_COLOR,
               alignment=TA_CENTER, spaceBefore=4, spaceAfter=6)
SECTION_H  = s("SH", fontName="Times-Bold",   fontSize=17, textColor=HEADING_COLOR,
               alignment=TA_CENTER, spaceAfter=4)
SUB_H      = s("SubH", fontName="Times-Bold", fontSize=14, textColor=DARK_TEXT,
               spaceBefore=8, spaceAfter=4)
BODY       = s("Body", fontName="Times-Roman", fontSize=12, textColor=DARK_TEXT,
               alignment=TA_JUSTIFY, spaceAfter=3)
POINT      = s("Pt",  fontName="Times-Roman",  fontSize=12, textColor=DARK_TEXT,
               leftIndent=16, spaceAfter=4)
SMALL      = s("Sm",  fontName="Times-Roman",  fontSize=11, textColor=DARK_TEXT,
               leftIndent=30, spaceAfter=3)
CODE_S     = s("Code", fontName="Courier",    fontSize=10, textColor=DARK_TEXT,
               leftIndent=30, spaceAfter=2, backColor=colors.HexColor("#F5F5F5"))

def bp(text):
    return Paragraph(f"{BULLET}  {text}", POINT)

def sp(text):
    return Paragraph(f"    ◦  {text}", SMALL)

def red_line():
    return HRFlowable(width="100%", thickness=1.5, color=ACCENT_COLOR, spaceAfter=8)

def blue_line():
    return HRFlowable(width="100%", thickness=0.7, color=HEADING_COLOR,
                      spaceBefore=4, spaceAfter=6)

def college_header():
    data = [[
        Paragraph(
            "<b>Sree Narayana Guru College of Engineering &amp; Technology</b><br/>"
            "<font size='9'>Chalakkode P.O., Korom, Payyannur, Kannur – 670307</font>",
            s("hdr", fontName="Times-Bold", fontSize=12, textColor=DARK_TEXT, alignment=TA_CENTER)
        )
    ]]
    t = Table(data, colWidths=[PAGE_W - 2*MARGIN])
    t.setStyle(TableStyle([
        ("BOX",           (0,0), (-1,-1), 1,   colors.black),
        ("BACKGROUND",    (0,0), (-1,-1), colors.HexColor("#FFF9E6")),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
    ]))
    return t

def section_heading(title):
    return Paragraph(title, SECTION_H)

# ─── Story ────────────────────────────────────────────────────────────────────
story = []

# ==============================================================================
# PAGE 1 – TITLE PAGE
# ==============================================================================
story += [
    college_header(),
    Spacer(1, 1.4*cm),
    Paragraph("SYSTEM SPECIFICATION DOCUMENT", TITLE_MAIN),
    red_line(),
    Spacer(1, 0.5*cm),
    Paragraph("Project Title:", SUB_H),
    Paragraph("Blood Report Fitness Evaluation System", s("PT2", fontName="Times-Bold",
              fontSize=15, textColor=HEADING_COLOR, alignment=TA_CENTER, spaceAfter=10)),
    Spacer(1, 0.4*cm),
    Paragraph("Version: 2.0 (Updated – March 2026)", s("Ver", fontName="Times-Roman",
              fontSize=12, alignment=TA_CENTER, textColor=colors.grey)),
    Spacer(1, 0.4*cm),
    Paragraph("Department: Computer Science &amp; Engineering", s("Dep", fontName="Times-Roman",
              fontSize=12, alignment=TA_CENTER, textColor=DARK_TEXT)),
    Spacer(1, 1.5*cm),
    Paragraph("Prepared By: Project Group Members", BODY),
    Paragraph("Guided By: Faculty Mentor", BODY),
    PageBreak(),
]

# ==============================================================================
# PAGE 2 – OVERVIEW & OBJECTIVES
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("1. SYSTEM OVERVIEW"),
    red_line(), Spacer(1, 0.3*cm),
    Paragraph(
        "The Blood Report Fitness Evaluation System is a full-stack web and mobile application "
        "that automatically analyses blood test reports using Optical Character Recognition (OCR) "
        "and a Machine Learning (ML) classification engine. Users upload their blood report as an "
        "image or PDF; the system extracts 100+ medical parameters, evaluates each parameter "
        "against established clinical reference ranges, and generates personalised diet plans, "
        "fitness recommendations, and disease risk assessments in seconds.",
        BODY),
    Spacer(1, 0.4*cm),
    Paragraph("1.1 Key Objectives", SUB_H),
    bp("Automate extraction of blood parameters from scanned reports using OCR."),
    bp("Classify health status using a trained Random Forest Classifier ML model."),
    bp("Generate personalised diet and fitness recommendations per blood parameter."),
    bp("Provide an AI-powered health chatbot for follow-up medical queries."),
    bp("Store analysis history securely via Firebase Firestore and local storage."),
    bp("Support Android deployment through Capacitor 6.0 for mobile access."),
    PageBreak(),
]

# ==============================================================================
# PAGE 3 – TECHNOLOGY STACK
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("2. TECHNOLOGY STACK"),
    red_line(), Spacer(1, 0.3*cm),
]

stack_data = [
    [Paragraph("<b>Layer</b>", s("th", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
     Paragraph("<b>Technology</b>", s("th", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
     Paragraph("<b>Purpose</b>", s("th", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER))],

    [Paragraph("Frontend UI",      s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("React 18.3 + Vite", s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Single-page web application", s("td", fontName="Times-Roman", fontSize=11))],

    [Paragraph("OCR Engine",       s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Tesseract.js 5.0", s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Client-side text extraction from images/PDF", s("td", fontName="Times-Roman", fontSize=11))],

    [Paragraph("ML Backend",       s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Python Flask + scikit-learn", s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Random Forest disease prediction API", s("td", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Database",         s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Firebase Firestore + SQLite", s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Cloud & local report / profile storage", s("td", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Authentication",   s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Firebase Auth + bcrypt + JWT", s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Secure user login & session tokens", s("td", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Mobile",           s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Capacitor 6.0",   s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Android APK packaging", s("td", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Deployment",       s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Render.com (backend) + GitHub Pages (frontend)", s("td", fontName="Times-Roman", fontSize=11)),
     Paragraph("Cloud hosting & continuous deployment", s("td", fontName="Times-Roman", fontSize=11))],
]

col_w = (PAGE_W - 2*MARGIN) / 3
t = Table(stack_data, colWidths=[col_w]*3, repeatRows=1)
t.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), HEADING_COLOR),
    ("TEXTCOLOR",     (0,0), (-1,0), colors.white),
    ("GRID",          (0,0), (-1,-1), 0.5, colors.grey),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [colors.white, ML_BG_COLOR]),
    ("VALIGN",        (0,0), (-1,-1), "TOP"),
    ("TOPPADDING",    (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
]))
story += [t, PageBreak()]

# ==============================================================================
# PAGE 4 – ML RANDOM FOREST CLASSIFIER (MAIN UPDATE)
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("3. ML MODULE – RANDOM FOREST CLASSIFIER"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("3.1 Overview", SUB_H),
    Paragraph(
        "The core intelligence of the system is a Random Forest Classifier trained using "
        "scikit-learn on a synthetic but medically grounded dataset derived from CBC (Complete "
        "Blood Count) parameters.  The classifier predicts the patient's overall "
        "<b>Health Status</b> (e.g., Normal, Anemia, Leukopenia, Thrombocytopenia, etc.) "
        "from numerical blood values.",
        BODY),
    Spacer(1, 0.3*cm),

    Paragraph("3.2 Input Features (18 Blood Parameters)", SUB_H),
]

features = [
    ("Age", "Years"),
    ("Gender", "M / F (encoded 1 / 0)"),
    ("Total Leukocyte Count (WBC)", "×10³/µL"),
    ("RBC Count", "×10⁶/µL"),
    ("Hemoglobin", "g/dL"),
    ("Hematocrit (PCV)", "%"),
    ("MCV", "fL"),
    ("MCH", "pg"),
    ("MCHC", "g/dL"),
    ("RDW-CV", "%"),
    ("Platelet Count", "×10³/µL"),
    ("Neutrophils", "%"),
    ("Lymphocytes", "%"),
    ("Monocytes", "%"),
    ("Eosinophils", "%"),
    ("Basophils", "%"),
    ("Absolute Neutrophil Count", "×10³/µL"),
    ("Absolute Lymphocyte Count", "×10³/µL"),
]

feat_data = [
    [Paragraph("<b>#</b>",        s("fh", fontName="Times-Bold", fontSize=11, alignment=TA_CENTER)),
     Paragraph("<b>Feature</b>",  s("fh", fontName="Times-Bold", fontSize=11, alignment=TA_CENTER)),
     Paragraph("<b>Unit</b>",     s("fh", fontName="Times-Bold", fontSize=11, alignment=TA_CENTER))]
]
for i, (name, unit) in enumerate(features, 1):
    feat_data.append([
        Paragraph(str(i), s("fn", fontName="Times-Roman", fontSize=11, alignment=TA_CENTER)),
        Paragraph(name,   s("fn", fontName="Times-Roman", fontSize=11)),
        Paragraph(unit,   s("fn", fontName="Times-Roman", fontSize=11)),
    ])

col_f = [(PAGE_W - 2*MARGIN)*0.1, (PAGE_W - 2*MARGIN)*0.6, (PAGE_W - 2*MARGIN)*0.3]
ft = Table(feat_data, colWidths=col_f, repeatRows=1)
ft.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), HEADING_COLOR),
    ("TEXTCOLOR",     (0,0), (-1,0), colors.white),
    ("GRID",          (0,0), (-1,-1), 0.4, colors.grey),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [colors.white, ML_BG_COLOR]),
    ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
    ("TOPPADDING",    (0,0), (-1,-1), 4),
    ("BOTTOMPADDING", (0,0), (-1,-1), 4),
]))
story += [ft, PageBreak()]

# ==============================================================================
# PAGE 5 – ML: Training Pipeline & Algorithm Details
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("3. ML MODULE – TRAINING PIPELINE"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("3.3 Training Pipeline", SUB_H),
    bp("Step 1 – <b>Dataset Loading:</b> CSV file with 18 blood parameter features + Health_Status target label."),
    bp("Step 2 – <b>Gender Encoding:</b> Categorical 'M/F' mapped to numeric 1/0 via LabelEncoder."),
    bp("Step 3 – <b>Imputation:</b> Missing values filled with column mean using SimpleImputer (strategy='mean')."),
    bp("Step 4 – <b>Target Encoding:</b> Health status labels (Normal, Anemia, etc.) encoded with LabelEncoder."),
    bp("Step 5 – <b>Normalisation:</b> All features scaled to [0, 1] range using MinMaxScaler."),
    bp("Step 6 – <b>Train/Test Split:</b> 80% training / 20% validation (random_state=42)."),
    bp("Step 7 – <b>Hyperparameter Tuning:</b> GridSearchCV with 3-fold KFold cross-validation."),
    bp("Step 8 – <b>Model Training:</b> Random Forest Classifier fitted on training set."),
    bp("Step 9 – <b>Evaluation:</b> Accuracy, Precision, Recall, F1-score on hold-out test set."),
    bp("Step 10 – <b>Persistence:</b> Best model bundle saved as .pkl via joblib."),
    Spacer(1, 0.3*cm),

    Paragraph("3.4 Random Forest Algorithm", SUB_H),
    Paragraph(
        "A Random Forest is an ensemble learning method that constructs a multitude of decision "
        "trees during training. Each tree is trained on a random bootstrap sample of the data, "
        "and each split considers a random subset of features (max_features). At prediction time, "
        "the majority vote across all trees determines the final class label, which reduces "
        "overfitting compared to a single decision tree.",
        BODY),
    Spacer(1, 0.3*cm),

    Paragraph("3.5 Hyperparameter Grid (GridSearchCV)", SUB_H),
]

hp_data = [
    [Paragraph("<b>Parameter</b>", s("hph", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
     Paragraph("<b>Values Tried</b>", s("hph", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
     Paragraph("<b>Optimal (example)</b>", s("hph", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER))],
    [Paragraph("n_estimators",      s("hpd", fontName="Courier", fontSize=11)),
     Paragraph("[50, 100, 200]",     s("hpd", fontName="Times-Roman", fontSize=11)),
     Paragraph("100",               s("hpd", fontName="Times-Roman", fontSize=11))],
    [Paragraph("max_depth",          s("hpd", fontName="Courier", fontSize=11)),
     Paragraph("[None, 10, 20]",     s("hpd", fontName="Times-Roman", fontSize=11)),
     Paragraph("None (fully grown)", s("hpd", fontName="Times-Roman", fontSize=11))],
    [Paragraph("min_samples_split",  s("hpd", fontName="Courier", fontSize=11)),
     Paragraph("[2, 5]",             s("hpd", fontName="Times-Roman", fontSize=11)),
     Paragraph("2",                 s("hpd", fontName="Times-Roman", fontSize=11))],
    [Paragraph("random_state",       s("hpd", fontName="Courier", fontSize=11)),
     Paragraph("42 (fixed)",         s("hpd", fontName="Times-Roman", fontSize=11)),
     Paragraph("42",                s("hpd", fontName="Times-Roman", fontSize=11))],
]

col_hp = [(PAGE_W - 2*MARGIN)*0.35, (PAGE_W - 2*MARGIN)*0.35, (PAGE_W - 2*MARGIN)*0.30]
hpt = Table(hp_data, colWidths=col_hp, repeatRows=1)
hpt.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), HEADING_COLOR),
    ("TEXTCOLOR",     (0,0), (-1,0), colors.white),
    ("GRID",          (0,0), (-1,-1), 0.5, colors.grey),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [colors.white, ML_BG_COLOR]),
    ("TOPPADDING",    (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
]))
story += [hpt, PageBreak()]

# ==============================================================================
# PAGE 6 – ML: Output Classes, API & ONNX Details
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("3. ML MODULE – OUTPUT, API & MODEL SERVING"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("3.6 Output Classes (Target Labels)", SUB_H),
    bp("Normal – All blood parameters within acceptable reference ranges."),
    bp("Anemia – Low Hemoglobin / RBC Count / Hematocrit."),
    bp("Leukopenia – Abnormally low White Blood Cell count."),
    bp("Leukocytosis – Elevated White Blood Cell count (infection indicator)."),
    bp("Thrombocytopenia – Low Platelet Count (&lt; 1.5 lakh/µL)."),
    bp("Neutrophilia / Neutropenia – Neutrophil percentage deviation."),
    bp("Lymphocytosis – Elevated Lymphocyte percentage."),
    Spacer(1, 0.3*cm),

    Paragraph("3.7 Flask REST API Endpoint", SUB_H),
    bp("Endpoint: POST /api/predict-disease"),
    bp("Input: JSON object with 16–18 blood parameter keys and numeric values."),
    bp("Processing: Standard MinMaxScaler transform → RandomForest.predict()."),
    bp("Output: JSON with fields 'prediction' (label), 'confidence' (%), 'status'."),
    bp("Confidence: Derived from model.predict_proba() – maximum class probability."),
    bp("Fallback: Returns HTTP 503 if model file is unavailable at startup."),
    Spacer(1, 0.3*cm),

    Paragraph("3.8 Browser-Side ONNX Inference (Supplementary)", SUB_H),
    Paragraph(
        "In addition to the Flask backend model, the system also ships an ONNX export of a "
        "simplified multi-label Random Forest (trained on 8 key parameters: haemoglobin, WBC, "
        "RBC, platelets, glucose, cholesterol, creatinine, TSH). This ONNX model runs <b>entirely "
        "in the browser</b> via onnxruntime-web, allowing offline disease screening without a server. "
        "Predictions cover: Diabetes, Anemia, Thyroid Issue, and Kidney Issue. "
        "A rule-based safety-net fallback supplements the ONNX output.",
        BODY),
    Spacer(1, 0.2*cm),
    bp("ONNX model path: /public/models/disease_prediction_model.onnx"),
    bp("Input tensor shape: Float32[1, 8] – one row, eight features."),
    bp("Output: Per-disease binary labels via output names (label0…label3)."),
    PageBreak(),
]

# ==============================================================================
# PAGE 7 – ANALYSIS MODES & MODULES
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("4. SYSTEM MODULES & ANALYSIS MODES"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("4.1 Blood Report Analysis Modes", SUB_H),

    Paragraph("<b>Mode 1 – ML Mode (Rule-Based Expert System, labelled 'ML' in UI):</b>", BODY),
    bp("Uses a comprehensive JSON rule-base (MEDICAL_RANGES) of 100+ parameters."),
    bp("Each extracted value compared against clinical min/max reference ranges."),
    bp("Colour-coded result: Normal (green), Low (yellow), High (red) per parameter."),
    bp("generateDiseasePredictions() function maps abnormal values to disease risks."),
    bp("Provides diet foods and fitness impact text for each abnormal parameter."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>Mode 2 – Advanced ML Mode (backend Random Forest, labelled 'ML (Experimental)'):</b>", BODY),
    bp("Sends 16 CBC features to the Flask /api/predict-disease endpoint."),
    bp("Receives overall Health Status prediction + confidence score from RFC."),
    bp("Backend OCR service (/ocr) also assists in PDF parameter extraction."),
    bp("User can review & edit AI-extracted values before final analysis."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>Mode 3 – Manual Mode:</b>", BODY),
    bp("User selects up to 20 parameters from a dropdown and enters values manually."),
    bp("Same MEDICAL_RANGES rule-base applied for status classification."),
    bp("Useful when OCR extraction fails or user has partial lab data."),
    Spacer(1, 0.3*cm),

    Paragraph("4.2 Application Modules", SUB_H),

    Paragraph("<b>Login / Registration Module:</b>", BODY),
    bp("Firebase Authentication (email + password)."),
    bp("JWT tokens used for Flask API secured endpoints."),
    bp("Automatic session restoration on app launch via auth state listener."),
    Spacer(1, 0.1*cm),

    Paragraph("<b>Profile Setup Module:</b>", BODY),
    bp("Collects age, gender, height, weight, blood group, pre-existing diseases."),
    bp("Stored in Firebase Firestore and synced to Flask SQLite database."),
    PageBreak(),
]

# ==============================================================================
# PAGE 8 – MORE MODULES
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("4. SYSTEM MODULES (CONTINUED)"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("<b>Blood Evaluation Module (BloodEvaluation.jsx):</b>", BODY),
    bp("Accepts JPG/PNG image or multi-page PDF blood reports."),
    bp("PDF pages rendered to canvas via pdfjs-dist, then passed to Tesseract.js OCR."),
    bp("Gen-2 adaptive parser: Levenshtein fuzzy matching, smart scaling, range removal."),
    bp("Digital Lens preprocessing: contrast enhancement for poor-quality scan images."),
    bp("Report history saved to localStorage (user-email-keyed) and Firestore."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>BMI Calculator Module:</b>", BODY),
    bp("Calculates BMI, ideal weight range, caloric needs using Mifflin-St Jeor formula."),
    bp("Visual BMI gauge with colour zones (Underweight / Normal / Overweight / Obese)."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>Fitness & Workout Module:</b>", BODY),
    bp("Personalised workout plans based on BMI and blood parameter deficiencies."),
    bp("Home workout routines with step-by-step exercise animations."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>Specialised Diet Module:</b>", BODY),
    bp("Generates weekly meal plans aligned with blood report deficiencies."),
    bp("Food suggestions mapped to each abnormal blood parameter."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>Weight Progress Tracker:</b>", BODY),
    bp("Log daily weight; visualise trends with interactive chart."),
    bp("Data stored per user email key in localStorage for isolation."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>AI Health Chatbot (AIChat + chat_service.py):</b>", BODY),
    bp("Flask /api/chat endpoint powered by a medical knowledge base (knowledge_base.json)."),
    bp("Context-aware: receives user profile, blood report values, conversation history."),
    bp("Frontend also caches 200+ predefined Q&A for instant offline responses."),
    Spacer(1, 0.2*cm),

    Paragraph("<b>PDF Report Generator:</b>", BODY),
    bp("pdfGenerator.js creates downloadable PDF summaries of analysis results."),
    bp("Includes parameter table, risk predictions, and diet/fitness advice."),
    PageBreak(),
]

# ==============================================================================
# PAGE 9 – DATA FLOW & ARCHITECTURE
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("5. DATA FLOW & SYSTEM ARCHITECTURE"),
    red_line(), Spacer(1, 0.3*cm),
]

arch_data = [
    [Paragraph("<b>Layer</b>",      s("ah", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
     Paragraph("<b>Component</b>",  s("ah", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
     Paragraph("<b>Technology</b>", s("ah", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER))],

    [Paragraph("Presentation",        s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("React SPA (JSX components)", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("React 18.3 + Vite",   s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("OCR Engine",          s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Tesseract.js / pdfjs-dist", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Browser-side (no server)", s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("ML Inference (local)", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("ONNX RF Model (8 params)", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("onnxruntime-web",      s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("ML Inference (cloud)", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("RFC 18-param Model → Flask API", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Python 3.10 + scikit-learn 1.x", s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Rule Engine",         s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("MEDICAL_RANGES + bloodAnalysis.js", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("JavaScript (client-side)",  s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Database (cloud)",    s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("User profiles, reports, weight logs", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Firebase Firestore",   s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Database (local)",    s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("User + Profile tables (Flask backend)", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("SQLite via SQLAlchemy", s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Auth",                s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Email / Password login, JWT tokens", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Firebase Auth + bcrypt + PyJWT", s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("API Server",          s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("/api/predict-disease, /api/chat, /ocr", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Flask 3.x + Flask-CORS", s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Mobile",             s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Android APK (wraps React app)", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Capacitor 6.0",      s("ad", fontName="Times-Roman", fontSize=11))],

    [Paragraph("Deployment",         s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("Backend on Render, Frontend on GitHub Pages", s("ad", fontName="Times-Roman", fontSize=11)),
     Paragraph("render.yaml, GitHub Actions", s("ad", fontName="Times-Roman", fontSize=11))],
]

col3 = (PAGE_W - 2*MARGIN) / 3
at = Table(arch_data, colWidths=[col3]*3, repeatRows=1)
at.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), HEADING_COLOR),
    ("TEXTCOLOR",     (0,0), (-1,0), colors.white),
    ("GRID",          (0,0), (-1,-1), 0.5, colors.grey),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [colors.white, ML_BG_COLOR]),
    ("VALIGN",        (0,0), (-1,-1), "TOP"),
    ("TOPPADDING",    (0,0), (-1,-1), 5),
    ("BOTTOMPADDING", (0,0), (-1,-1), 5),
]))
story += [at, PageBreak()]

# ==============================================================================
# PAGE 10 – REQUIREMENTS ANALYSIS
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("6. REQUIREMENTS ANALYSIS"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("6.1 Functional Requirements", SUB_H),
    bp("FR-01: The system shall allow users to register and log in via email and password."),
    bp("FR-02: Users shall be able to upload blood reports as JPG, PNG, or PDF files."),
    bp("FR-03: The system shall extract blood parameter values using OCR."),
    bp("FR-04: The system shall classify extracted values as Normal, Low, or High."),
    bp("FR-05: The system shall predict overall health status using the Random Forest model."),
    bp("FR-06: The system shall generate personalised diet and fitness recommendations."),
    bp("FR-07: Users shall be able to manually enter up to 20 blood parameter values."),
    bp("FR-08: The AI chatbot shall answer health queries in real time."),
    bp("FR-09: The system shall maintain a history of analysed reports per user."),
    bp("FR-10: Users shall be able to export analysis results as a PDF report."),
    bp("FR-11: The system shall send periodic reminders to check blood health."),
    Spacer(1, 0.3*cm),

    Paragraph("6.2 Non-Functional Requirements", SUB_H),
    bp("NFR-01: OCR analysis shall complete within 10 seconds for a single-page report."),
    bp("NFR-02: ML prediction API shall respond within 2 seconds under normal load."),
    bp("NFR-03: The application shall function offline (OCR + rule-based mode)."),
    bp("NFR-04: User data shall be stored per user email to prevent data leakage."),
    bp("NFR-05: The frontend shall be responsive across mobile (360px) and desktop."),
    bp("NFR-06: Passwords shall be hashed using bcrypt with salt rounds ≥ 10."),
    bp("NFR-07: JWT tokens shall expire after 7 days for session security."),
    PageBreak(),
]

# ==============================================================================
# PAGE 11 – TESTING
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("7. TESTING STRATEGY"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("7.1 White Box Testing", SUB_H),
    bp("Unit tested OCR Gen-2 parser: Levenshtein fuzzy matching, smart value scaling."),
    bp("Boundary value analysis on all 100+ MEDICAL_RANGES min/max thresholds."),
    bp("Tested processTextData() with varied raw OCR strings to validate extraction."),
    bp("Validated Random Forest training pipeline: imputation, encoding, split ratios."),
    Spacer(1, 0.2*cm),

    Paragraph("7.2 Black Box Testing", SUB_H),
    bp("Functional testing of the full upload → analyse → recommend user journey."),
    bp("Tested invalid file types, empty PDFs, and corrupted images for robustness."),
    bp("Verified that ML prediction API returns correct labels for synthetic inputs."),
    bp("Tested chatbot responses against 200+ predefined Q&A pairs."),
    Spacer(1, 0.2*cm),

    Paragraph("7.3 Integration & System Testing", SUB_H),
    bp("End-to-end tested frontend-to-backend communication via /api/predict-disease."),
    bp("Verified Firebase Firestore read/write for report storage and retrieval."),
    bp("Tested Android APK (Capacitor) on physical devices and emulator."),
    bp("Validated ONNX model inference in Chrome and Firefox browsers."),
    Spacer(1, 0.2*cm),

    Paragraph("7.4 Performance Testing", SUB_H),
    bp("Average OCR processing time: 5–10 seconds per blood report image."),
    bp("ML API average response time: &lt; 1.5 seconds on Render.com deployment."),
    bp("ONNX browser inference: &lt; 200 ms after model loaded into memory."),
    PageBreak(),
]

# ==============================================================================
# PAGE 12 – CONCLUSION & FUTURE SCOPE
# ==============================================================================
story += [
    college_header(), Spacer(1, 0.6*cm),
    section_heading("8. CONCLUSION & FUTURE SCOPE"),
    red_line(), Spacer(1, 0.3*cm),

    Paragraph("8.1 Conclusion", SUB_H),
    Paragraph(
        "The Blood Report Fitness Evaluation System successfully integrates OCR, a rule-based "
        "medical knowledge engine, and a trained Random Forest Classifier to provide automated, "
        "personalised blood report analysis accessible to non-medical users. The dual-mode "
        "architecture (browser-side rule engine + server-side ML API) ensures the application "
        "remains functional both offline and with enhanced ML predictions when connected. "
        "Firebase authentication, Firestore-based cloud storage, PDF export, and Android "
        "packaging complete the end-to-end solution.",
        BODY),
    Spacer(1, 0.3*cm),

    Paragraph("8.2 Future Scope", SUB_H),
    bp("Integrate a Large Language Model (LLM) for deeper natural-language report explanations."),
    bp("Expand training dataset with real anonymised clinical records for higher accuracy."),
    bp("Add support for Lipid Panel, Liver Function Test (LFT), and Kidney Function Test (KFT) parameters."),
    bp("Implement doctor-sharing feature: generate shareable encrypted report links."),
    bp("Build iOS version using Capacitor for cross-platform mobile coverage."),
    bp("Introduce trend analysis: compare multiple reports over time with charts."),
    bp("Add voice-based input for health chatbot accessibility."),
    Spacer(1, 0.5*cm),

    Paragraph("References", SUB_H),
    bp("Breiman, L. (2001). Random Forests. Machine Learning, 45(1), 5–32."),
    bp("Kumar et al. (2021). Automated Blood Report Analysis using CNN. IJCSE."),
    bp("Singh et al. (2020). OCR for Medical Documents using Tesseract. IJECE."),
    bp("Patel et al. (2022). Health Recommender Systems: A Survey. IEEE Access."),
    bp("scikit-learn Documentation – https://scikit-learn.org"),
    bp("React.js Documentation – https://react.dev"),
    bp("Tesseract.js – https://tesseract.projectnaptha.com"),
    bp("Firebase Documentation – https://firebase.google.com/docs"),
]

# ─── Build PDF ────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT_PDF,
    pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=MARGIN,  bottomMargin=MARGIN,
    title="Blood Report Fitness Evaluation System – System Specification",
    author="Project Group",
)
doc.build(story)
print(f"✅  PDF created: {OUTPUT_PDF}")
