#!/usr/bin/env python3
"""
Blood Fit App - Technical Description PDF Generator
Focuses on Dataset, Database, Frontend, and Backend architectures.
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

# --- Paths ---
BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PDF = os.path.join(BASE_DIR, "Blood_Fit_App_Description.pdf")

# --- Colors ---
HEADING_COLOR  = colors.HexColor("#1A237E")   # Indigo
ACCENT_COLOR   = colors.HexColor("#C62828")   # Deep Red
BG_COLOR       = colors.HexColor("#F1F8E9")   # Very Light Green
DARK_TEXT      = colors.HexColor("#212121")
BULLET         = "•"

# --- Page Setup ---
PAGE_W, PAGE_H = A4
MARGIN = 2 * cm

# --- Styles ---
styles = getSampleStyleSheet()

def s(name, **kw):
    base = kw.pop("parent", "Normal")
    return ParagraphStyle(name, parent=styles[base], **kw)

TITLE_MAIN = s("TM", fontName="Helvetica-Bold", fontSize=24, textColor=HEADING_COLOR,
               alignment=TA_CENTER, spaceBefore=10, spaceAfter=10)
SECTION_H  = s("SH", fontName="Helvetica-Bold", fontSize=18, textColor=HEADING_COLOR,
               alignment=TA_LEFT, spaceBefore=12, spaceAfter=6)
SUB_H      = s("SubH", fontName="Helvetica-Bold", fontSize=14, textColor=DARK_TEXT,
               spaceBefore=8, spaceAfter=4)
BODY       = s("Body", fontName="Helvetica", fontSize=12, textColor=DARK_TEXT,
               alignment=TA_JUSTIFY, spaceAfter=6)
POINT      = s("Pt", fontName="Helvetica", fontSize=11, textColor=DARK_TEXT,
               leftIndent=20, spaceAfter=4)

def bp(text):
    return Paragraph(f"{BULLET} {text}", POINT)

def red_line():
    return HRFlowable(width="100%", thickness=2, color=ACCENT_COLOR, spaceAfter=10)

def section_header(text):
    return [Spacer(1, 0.5*cm), Paragraph(text, SECTION_H), red_line()]

# --- Content ---
story = []

# Title Page
story += [
    Spacer(1, 4*cm),
    Paragraph("BLOOD FIT APP", TITLE_MAIN),
    Paragraph("TECHNICAL ARCHITECTURE & DESCRIPTION", s("TS", fontName="Helvetica-Bold", fontSize=16, alignment=TA_CENTER, textColor=colors.grey)),
    Spacer(1, 1*cm),
    red_line(),
    Spacer(1, 2*cm),
    Paragraph("<b>Author:</b> Project Development Team", BODY),
    Paragraph("<b>Date:</b> March 2026", BODY),
    Paragraph("<b>Components Covered:</b> Dataset, Database, Frontend, Backend", BODY),
    PageBreak()
]

# Section 1: Dataset
story += section_header("1. DATASET ARCHITECTURE")
story += [
    Paragraph(
        "The core of the Blood Fit app's diagnostic intelligence relies on a medically-grounded dataset "
        "designed for training high-accuracy classification models. The dataset primarily focuses on "
        "Complete Blood Count (CBC) parameters to predict systemic health conditions.",
        BODY
    ),
    Paragraph("1.1 Data Source & Composition", SUB_H),
    Paragraph(
        "The dataset consists of thousands of records, combining anonymized clinical data frames with "
        "synthetic data generated through medical rule-based algorithms to ensure balanced class distribution "
        "across various health conditions.",
        BODY
    ),
    Paragraph("1.2 Key Features (18 Parameters)", SUB_H),
]

features_data = [
    ["Parameter", "Description", "Unit"],
    ["Age / Gender", "Demographic identifiers for reference range normalization", "Years / M-F"],
    ["Hemoglobin", "Oxygen-carrying protein in red blood cells", "g/dL"],
    ["WBC Count", "Total Leukocyte count (Infection marker)", "x10³/µL"],
    ["RBC Count", "Total Red Blood Cell count", "x10⁶/µL"],
    ["Platelet Count", "Blood clotting cells", "x10³/µL"],
    ["MCV / MCH / MCHC", "Indices describing RBC size and hemoglobin content", "fL / pg / g/dL"],
    ["Neutrophils", "Primary defense against bacterial infection (%)", "%"],
    ["Lymphocytes", "Primary defense against viral infection (%)", "%"],
    ["Monocytes / Eos / Baso", "Specific white blood cell subtypes (%)", "%"]
]

t = Table(features_data, colWidths=[4*cm, 8*cm, 3*cm])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HEADING_COLOR),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, -1), 10),
    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
    ('BACKGROUND', (0, 1), (-1, -1), colors.whitesmoke),
    ('GRID', (0, 0), (-1, -1), 1, colors.grey)
]))
story += [t, Spacer(1, 0.5*cm)]
story += [
    Paragraph("1.3 Target Classes", SUB_H),
    bp("<b>Normal:</b> All parameters within clinical reference ranges."),
    bp("<b>Anemia:</b> Low Hemoglobin/RBC counts."),
    bp("<b>Leukocytosis:</b> High WBC indicating active infection."),
    bp("<b>Thrombocytopenia:</b> Critically low platelet counts."),
    PageBreak()
]

# Section 2: Database
story += section_header("2. DATABASE SYSTEM")
story += [
    Paragraph(
        "The application utilizes a dual-database strategy to provide seamless cloud synchronization "
        "balanced with local persistence for backend processing.",
        BODY
    ),
    Paragraph("2.1 Technologies", SUB_H),
    bp("<b>SQLite:</b> Used in the Python Flask backend for efficient local relational storage."),
    bp("<b>SQLAlchemy:</b> Object-Relational Mapper (ORM) for Python to manage schema migrations."),
    bp("<b>Firebase Firestore:</b> NoSQL cloud database for real-time frontend data synchronization."),
    Paragraph("2.2 Schema Overview (Relational)", SUB_H),
]

schema_data = [
    ["Table", "Columns", "Purpose"],
    ["Users", "id, email, password_hash, created_at", "Authentication and user identity"],
    ["Profiles", "user_id, name, age, gender, height, weight, diseases", "User health profile and metadata"],
    ["Reports", "id, user_id, parameters (JSON), prediction, date", "Stored blood report analysis history"]
]

t2 = Table(schema_data, colWidths=[3*cm, 7*cm, 5*cm])
t2.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HEADING_COLOR),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('GRID', (0, 0), (-1, -1), 1, colors.grey),
    ('FONTSIZE', (0, 0), (-1, -1), 10),
    ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
    ('VALIGN', (0, 0), (-1, -1), 'TOP')
]))
story += [t2, Spacer(1, 0.5*cm)]
story += [
    Paragraph("2.3 Data Security", SUB_H),
    bp("Passwords are never stored in plain text (bcrypt hashing utilized)."),
    bp("Row-level isolation ensures users can only access their own profile and history."),
    PageBreak()
]

# Section 3: Frontend
story += section_header("3. FRONTEND ARCHITECTURE")
story += [
    Paragraph(
        "The frontend is a modern, high-performance Single Page Application (SPA) designed to "
        "handle complex image processing and ML inference directly in the client browser.",
        BODY
    ),
    Paragraph("3.1 Core Stack", SUB_H),
    bp("<b>React 18:</b> Component-based UI architecture."),
    bp("<b>Vite:</b> Ultra-fast build tool and dev server."),
    bp("<b>Tesseract.js:</b> On-device OCR for extracting text from report images."),
    bp("<b>ONNX Runtime Web:</b> Client-side ML inference for instant disease screening."),
    bp("<b>Capacitor:</b> Cross-platform bridge for deploying to Android/iOS."),
    Paragraph("3.2 Key Components", SUB_H),
    bp("<b>OCR Engine:</b> Multi-stage pipeline (Preprocessing -> Text Extraction -> Fuzzy Mapping)."),
    bp("<b>Health Dashboard:</b> Visual representation of blood trends and BMI gauges."),
    bp("<b>AI Chat Interface:</b> Real-time interaction with the medical knowledge base."),
    PageBreak()
]

# Section 4: Backend
story += section_header("4. BACKEND & AI SERVICES")
story += [
    Paragraph(
        "The backend is a lightweight yet powerful Python-based microservice that handles "
        "heavy ML computations, advanced OCR correction, and the intelligent chatbot service.",
        BODY
    ),
    Paragraph("4.1 API Infrastructure", SUB_H),
    bp("<b>Flask:</b> RESTful API framework for service communication."),
    bp("<b>JWT (JSON Web Tokens):</b> Secure, stateless authentication for API endpoints."),
    Paragraph("4.2 AI & Machine Learning Module", SUB_H),
    Paragraph(
        "The system employs a <b>Random Forest Classifier</b> for diagnostic predictions. "
        "The model is trained on the CBC dataset to provide multi-class classification with "
        "confidence scoring.",
        BODY
    ),
    bp("<b>Scikit-learn:</b> Library used for model training and feature scaling."),
    bp("<b>Joblib:</b> Serialization of the trained model and label encoders."),
    Paragraph("4.3 Intelligent Chatbot", SUB_H),
    Paragraph(
        "Powered by a structured medical knowledge base, the chatbot uses NLP techniques to "
        "provide context-aware answers to user health queries based on their specific blood reports.",
        BODY
    ),
    PageBreak()
]

# Conclusion
story += [
    Spacer(1, 2*cm),
    Paragraph("SUMMARY", SECTION_H),
    red_line(),
    Paragraph(
        "The Blood Fit app integrates sophisticated data science with modern web technologies. "
        "By combining client-side OCR and server-side ML, it delivers a robust, secure, and "
        "highly accessible health evaluation platform.",
        BODY
    ),
    Spacer(1, 4*cm),
    Paragraph("Generated by Antigravity AI", s("Tail", alignment=TA_CENTER, fontSize=10, textColor=colors.grey))
]

# Build PDF
doc = SimpleDocTemplate(
    OUTPUT_PDF,
    pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=MARGIN,  bottomMargin=MARGIN,
    title="Blood Fit App Technical Description",
    author="Project Team",
)
doc.build(story)
print(f"✅ PDF created: {OUTPUT_PDF}")
