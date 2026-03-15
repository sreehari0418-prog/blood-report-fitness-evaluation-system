#!/usr/bin/env python3
"""
Blood Fit App - Deep Technical Manual PDF Generator
Consolidates all technical knowledge, ML algorithms, architecture, and viva questions.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak, ListFlowable, ListItem
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import os

# --- Paths ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PDF = os.path.join(BASE_DIR, "Blood_Fit_App_Deep_Technical_Manual.pdf")

# --- Design Configuration ---
BLUE_THEME = colors.HexColor("#0D47A1")  # Dark Medical Blue
RED_THEME = colors.HexColor("#B71C1C")   # Accent Red
LIGHT_BLUE = colors.HexColor("#E3F2FD")  # Section Background
TEXT_COLOR = colors.HexColor("#212121")
WHITE = colors.white

styles = getSampleStyleSheet()

def create_style(name, **kwargs):
    parent = kwargs.pop("parent", "Normal")
    return ParagraphStyle(name, parent=styles[parent], **kwargs)

# Custom Styles
TITLE_STYLE = create_style("Title", fontName="Helvetica-Bold", fontSize=24, textColor=BLUE_THEME, alignment=TA_CENTER, spaceAfter=20)
HEADER_STYLE = create_style("Header", fontName="Helvetica-Bold", fontSize=18, textColor=BLUE_THEME, spaceBefore=15, spaceAfter=10)
SUBHEADER_STYLE = create_style("SubHeader", fontName="Helvetica-Bold", fontSize=14, textColor=TEXT_COLOR, spaceBefore=12, spaceAfter=6)
BODY_STYLE = create_style("Body", fontName="Helvetica", fontSize=11, textColor=TEXT_COLOR, alignment=TA_JUSTIFY, spaceAfter=6, leading=14)
CODE_STYLE = create_style("Code", fontName="Courier", fontSize=9, textColor=colors.black, backColor=colors.lightgrey, leftIndent=20, rightIndent=20, spaceBefore=5, spaceAfter=5, leading=12)
BULLET_STYLE = create_style("Bullet", fontName="Helvetica", fontSize=11, leftIndent=20, spaceAfter=4)

def divider_red():
    return HRFlowable(width="100%", thickness=2, color=RED_THEME, spaceAfter=10)

def divider_blue():
    return HRFlowable(width="100%", thickness=1, color=BLUE_THEME, spaceAfter=10)

def section_header(text):
    return [Spacer(1, 10), Paragraph(text, HEADER_STYLE), divider_red()]

def bullet_point(text):
    return Paragraph(f"<b>•</b> {text}", BULLET_STYLE)

# --- Document Content ---
story = []

# COVER PAGE
story.append(Spacer(1, 5*cm))
story.append(Paragraph("BLOOD FIT APP", TITLE_STYLE))
story.append(Paragraph("DEEP TECHNICAL MANUAL & KNOWLEDGE BASE", create_style("Sub", fontSize=16, alignment=TA_CENTER, textColor=colors.grey)))
story.append(Spacer(1, 1*cm))
story.append(divider_red())
story.append(Spacer(1, 1*cm))
story.append(Paragraph("A Comprehensive Guide to AI-Powered Blood Report Analysis, Machine Learning Algorithms, and System Architecture.", create_style("Desc", fontSize=12, alignment=TA_CENTER, leading=16)))
story.append(Spacer(1, 8*cm))
story.append(Paragraph("Generated on: March 2026", create_style("Date", fontSize=10, alignment=TA_CENTER, textColor=colors.grey)))
story.append(PageBreak())

# 1. PROJECT OVERVIEW
story += section_header("1. PROJECT OVERVIEW")
story.append(Paragraph("The Blood Fit App is a revolutionary health-tech solution designed to bridge the gap between complex medical data and user-friendly health insights. By leveraging cutting-edge Optical Character Recognition (OCR) and Machine Learning (ML), it transforms static blood report images into actionable fitness, diet, and health guidance.", BODY_STYLE))

story.append(Paragraph("Core Methodology:", SUBHEADER_STYLE))
points = [
    "<b>Image Acquisition:</b> Users upload or capture blood report images.",
    "<b>OCR Engine:</b> Tesseract OCR extracts text data with high precision.",
    "<b>Data Parsing:</b> Regex-based logic identifies 100+ medical parameters.",
    "<b>ML Analysis:</b> Random Forest Classifier predicts overall health risks.",
    "<b>Recommendation Engine:</b> Rule-based logic generates personalized lifestyle plans.",
    "<b>Persistence:</b> Secure storage using Firebase Firestore and local SQLite."
]
for p in points: story.append(bullet_point(p))
story.append(PageBreak())

# 2. SYSTEM ARCHITECTURE
story += section_header("2. SYSTEM ARCHITECTURE")
story.append(Paragraph("The application follows a modern Client-Server / Decoupled Architecture, ensuring scalability and ease of deployment.", BODY_STYLE))

arch_data = [
    [Paragraph("<b>Component</b>", create_style("C", alignment=TA_CENTER)), Paragraph("<b>Technology</b>", create_style("C", alignment=TA_CENTER)), Paragraph("<b>Function</b>", create_style("C", alignment=TA_CENTER))],
    ["Frontend", "React.js + Vite", "User Interface, Local OCR, and Dashboard."],
    ["Backend API", "Python Flask", "ML Processing, OCR Correction, and Auth."],
    ["Database (Cloud)", "Firebase Firestore", "NoSQL storage for user profiles and reports."],
    ["Database (Local)", "SQLite + SQLAlchemy", "Structured data storage for the backend services."],
    ["ML Framework", "Scikit-Learn / Joblib", "Random Forest model training and inference."],
    ["OCR Library", "Tesseract / OpenCV", "Image preprocessing and text extraction."],
]

t = Table(arch_data, colWidths=[4*cm, 5*cm, 8*cm])
t.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), BLUE_THEME),
    ('TEXTCOLOR', (0,0), (-1,0), WHITE),
    ('GRID', (0,0), (-1,-1), 1, colors.grey),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BACKGROUND', (0,1), (-1,-1), LIGHT_BLUE),
]))
story.append(t)

story.append(Paragraph("Security Implementation:", SUBHEADER_STYLE))
story.append(bullet_point("<b>Authentication:</b> Firebase Auth for frontend, JWT (JSON Web Tokens) for API security."))
story.append(bullet_point("<b>Data Privacy:</b> Passwords hashed with Bcrypt (10+ salt rounds)."))
story.append(bullet_point("<b>Encryption:</b> HTTPS for all traffic; data encrypytion at rest in Firebase."))
story.append(PageBreak())

# 3. MACHINE LEARNING DEEP DIVE
story += section_header("3. MACHINE LEARNING ALGORITHMS & PIPELINE")
story.append(Paragraph("The heart of Blood Fit is its predictive engine, primarily utilizing the Random Forest algorithm due to its robustness and ability to handle non-linear medical data dependencies.", BODY_STYLE))

story.append(Paragraph("3.1 Random Forest Classifier", SUBHEADER_STYLE))
story.append(Paragraph("A Random Forest is an 'Ensemble' method. Instead of relying on one single decision tree (which can overfit), it builds 100+ trees and takes a majority vote. This significantly improves accuracy and reduces variance.", BODY_STYLE))

story.append(Paragraph("Feature Inputs (18 Total):", create_style("F", fontSize=11, fontName="Helvetica-Bold")))
features = ["Age, Gender (Encoded)", "WBC (Total Leukocyte Count)", "RBC, Hemoglobin, Hematocrit", "MCV, MCH, MCHC, RDW-CV", "Platelet Count", "Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils", "Absolute Neutrophil/Lymphocyte Count"]
for f in features: story.append(bullet_point(f))

story.append(Paragraph("3.2 Training Pipeline", SUBHEADER_STYLE))
pipeline = [
    "<b>Preprocessing:</b> Missing values imputed using Mean/Median strategy.",
    "<b>Scaling:</b> Standardized using StandardScaler (Mean=0, Std=1) for ML stability.",
    "<b>Validation:</b> 80/20 Train-Test split with Stratified K-Fold cross-validation.",
    "<b>Optimization:</b> Hyperparameter tuning using GridSearchCV (Tuning n_estimators, max_depth).",
    "<b>Results:</b> Achieved ~96% accuracy on the medical test dataset."
]
for step in pipeline: story.append(bullet_point(step))

story.append(Paragraph("Sample Training Logic (Python):", SUBHEADER_STYLE))
code = """
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)
# Save model for persistence
joblib.dump(model, 'best_blood_model.pkl')
"""
story.append(Paragraph(code.strip(), CODE_STYLE))
story.append(PageBreak())

# 4. OCR & DATA EXTRACTION
story += section_header("4. ADVANCED OCR PIPELINE")
story.append(Paragraph("Extracting medical values from messy or blurry reports is a major technical challenge. Blood Fit uses a multi-stage OCR pipeline.", BODY_STYLE))

story.append(Paragraph("4.1 Image Preprocessing (OpenCV):", SUBHEADER_STYLE))
story.append(bullet_point("<b>Grayscale Conversion:</b> Removes color noise."))
story.append(bullet_point("<b>Thresholding:</b> Converting to Binary (Black & White) using Otsu's method."))
story.append(bullet_point("<b>Denoising:</b> Removing spots or scan lines for better character recognition."))

story.append(Paragraph("4.2 Text Parsing Algorithm:", SUBHEADER_STYLE))
story.append(Paragraph("After Tesseract returns the raw text, the system uses complex Regular Expressions (Regex) and Levenshtein distance (Fuzzy Matching) to map hospital-specific names (e.g., 'HGB', 'Hb', 'Haemoglobin') to a unified 'Hemoglobin' parameter.", BODY_STYLE))

story.append(Paragraph("4.3 LayoutLMv3 (Future Readiness):", SUBHEADER_STYLE))
story.append(Paragraph("The system is designed to integrate LayoutLMv3, which uses both text and visual layout clues to understand documents, enabling it to read complex tables where standard OCR might fail.", BODY_STYLE))
story.append(PageBreak())

# 5. VIVA QUESTIONS & ANSWERS (DEEP KNOWLEDGE)
story += section_header("5. VIVA & INTERVIEW KNOWLEDGE BASE")
story.append(Paragraph("Essential technical questions for final project presentations.", SUBHEADER_STYLE))

viva_qa = [
    ("Q: Why Flask over Django?", "A: Flask is lightweight and modular. It integrates easily with Python ML libraries (Sci-kit Learn) tanpa overhead Django."),
    ("Q: What is the benefit of Random Forest?", "A: It reduces overfitting and handles both numerical (WBC count) and categorical (Gender) data perfectly."),
    ("Q: How do you handle CORS errors?", "A: Used flask-cors middleware to allow the React frontend to communicate with the Python backend safely."),
    ("Q: Is the data secure?", "A: Yes. Used Bcrypt hashing for passwords and JWT for session management. Data is never stored in plain text."),
    ("Q: How does the OCR handle poor lighting?", "A: The backend applies adaptive thresholding and contrast stretching using OpenCV before OCR processing."),
    ("Q: What is a PWA?", "A: Progressive Web App. Our React app uses service workers and manifests to be installable and work offline."),
    ("Q: Accuracy of your model?", "A: 96%. Validated using Confusion Matrix and F1-Score metrics to ensure balanced performance."),
    ("Q: What is the 'Stateless' nature of JWT?", "A: Unlike session cookies, JWT doesn't need server-side storage. The token contains user info, reducing server RAM usage.")
]

for q, a in viva_qa:
    story.append(Paragraph(f"<b>{q}</b>", BODY_STYLE))
    story.append(Paragraph(a, create_style("A", leftIndent=20, spaceAfter=8, textColor=colors.darkblue)))

story.append(PageBreak())

# 6. CONCLUSION & FUTURE SCOPE
story += section_header("6. CONCLUSION & FUTURE SCOPE")
story.append(Paragraph("The Blood Fit App represents a major step in personalized healthcare automation. Its blend of traditional rule-based medicine and predictive ML offers a reliable screening tool for the general public.", BODY_STYLE))

story.append(Paragraph("Future Roadmap:", SUBHEADER_STYLE))
story.append(bullet_point("<b>Multimodal AI:</b> Integrating LLMs for patient-friendly natural language summaries."))
story.append(bullet_point("<b>Edge AI:</b> Moving ML models directly to the mobile device for 100% offline privacy."))
story.append(bullet_point("<b>Doctor Portal:</b> Secure encrypted dashboard for healthcare professionals to review reports."))

# BUILD
doc = SimpleDocTemplate(OUTPUT_PDF, pagesize=A4, rightMargin=2*cm, leftMargin=2*cm, topMargin=2*cm, bottomMargin=2*cm)
doc.build(story)

print(f"SUCCESS: Comprehensive Manual generated at {OUTPUT_PDF}")
