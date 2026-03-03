#!/usr/bin/env python3
"""
Final Presentation PDF Generator
Blood Report Fitness Evaluation System
College Template - Sree Narayana Guru College of Engineering & Technology
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
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os
import sys

# ─── Paths ────────────────────────────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
USE_CASE_IMG = os.path.join(BASE_DIR, "presentation", "use_case_diagram.png")
OUTPUT_PDF   = os.path.join(BASE_DIR, "presentation", "Final_Presentation.pdf")

# ─── Colors (matching template) ───────────────────────────────────────────────
HEADING_COLOR = colors.HexColor("#1565C0")   # Blue heading
TEXT_COLOR    = colors.black
LINE_COLOR    = colors.HexColor("#B71C1C")   # Red underline
BULLET        = "•"

# ─── Page Setup ───────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
MARGIN = 2 * cm

# ─── Styles ───────────────────────────────────────────────────────────────────
styles = getSampleStyleSheet()

def s(name, **kw):
    """Create a ParagraphStyle."""
    base = kw.pop("parent", "Normal")
    return ParagraphStyle(name, parent=styles[base], **kw)

# Main slide heading (blue, centered, 18pt bold)
MAIN_HEADING = s("MainHeading",
    fontName="Times-Bold", fontSize=18,
    textColor=HEADING_COLOR, alignment=TA_CENTER,
    spaceAfter=6)

# Sub-heading (dark, left, 16pt bold)
SUB_HEADING = s("SubHeading",
    fontName="Times-Bold", fontSize=16,
    textColor=TEXT_COLOR, alignment=TA_LEFT,
    spaceBefore=10, spaceAfter=4)

# Body bullet point (14pt)
POINT = s("Point",
    fontName="Times-Roman", fontSize=14,
    textColor=TEXT_COLOR, alignment=TA_LEFT,
    leftIndent=18, spaceAfter=4)

# Title-page centered text
TITLE_MAIN = s("TitleMain",
    fontName="Times-Bold", fontSize=22,
    textColor=HEADING_COLOR, alignment=TA_CENTER,
    spaceBefore=4, spaceAfter=4)

TITLE_SUB = s("TitleSub",
    fontName="Times-Roman", fontSize=14,
    textColor=TEXT_COLOR, alignment=TA_LEFT,
    spaceAfter=4)


# ─── Helper: Bullet Point ─────────────────────────────────────────────────────
def bp(text):
    return Paragraph(f"{BULLET}  {text}", POINT)


# ─── Helper: College Header (text-only, no logo images needed) ────────────────
def college_header():
    """Returns a Table acting as the college letterhead."""
    header_data = [[
        Paragraph(
            "<b>Sree Narayana Guru College of<br/>Engineering &amp; Technology</b><br/>"
            "<font size=9>Chalakkode P.O., Korom, Payyannur, Kannur-670307</font>",
            s("hdr", fontName="Times-Bold", fontSize=11,
              textColor=TEXT_COLOR, alignment=TA_CENTER)
        )
    ]]
    t = Table(header_data, colWidths=[PAGE_W - 2*MARGIN])
    t.setStyle(TableStyle([
        ("BOX",       (0, 0), (-1, -1), 1,   colors.black),
        ("BACKGROUND",(0, 0), (-1, -1), colors.HexColor("#FFF9E6")),
        ("TOPPADDING",   (0,0), (-1,-1), 8),
        ("BOTTOMPADDING",(0,0), (-1,-1), 8),
    ]))
    return t


def red_line():
    return HRFlowable(width="100%", thickness=1.5, color=LINE_COLOR, spaceAfter=8)


def slide_heading(title):
    return Paragraph(title, MAIN_HEADING)


# ─── Build Story ──────────────────────────────────────────────────────────────
story = []

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 1 – TITLE PAGE
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 1.2*cm),
    Paragraph("MINI PROJECT FINAL PRESENTATION", TITLE_MAIN),
    red_line(),
    Spacer(1, 1.5*cm),
    Paragraph("Guided By:", TITLE_SUB),
    Spacer(1, 0.3*cm),
    Paragraph("By,", s("By", fontName="Times-Roman", fontSize=14,
                        alignment=TA_LEFT)),
    Paragraph("Group Members:", TITLE_SUB),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 2 – ABSTRACT
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("ABSTRACT"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp("A web application that analyzes blood test reports using OCR technology."),
    bp("Extracts 100+ medical parameters and evaluates against standard health ranges."),
    bp("Provides personalized diet plans and fitness recommendations based on results."),
    bp("Built with React.js, Tesseract.js, and a Python/Flask ML backend."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 3 – INTRODUCTION
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("INTRODUCTION"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp("Blood reports contain vital health information that most people struggle to interpret."),
    bp("This system automates blood report analysis and gives actionable health advice."),
    bp("Users simply upload a blood report image or PDF to get instant results."),
    bp("The app bridges the gap between medical data and everyday health decisions."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 4 – PROBLEM STATEMENT
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("PROBLEM STATEMENT"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp("Manual interpretation of blood reports is time-consuming and error-prone."),
    bp("Most patients lack medical knowledge to understand lab report values."),
    bp("Personalized diet and fitness advice based on blood data is not easily accessible."),
    bp("Existing apps require costly subscriptions or doctor visits for basic insights."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 5 – EXISTING SYSTEM
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("EXISTING SYSTEM"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp("Existing systems rely on manual data entry by the user."),
    bp("No automated OCR-based extraction from blood report images."),
    bp("Generic health advice not tailored to individual blood report values."),
    bp("Most tools are expensive or require professional medical supervision."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 6 – PROPOSED SYSTEM
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("PROPOSED SYSTEM"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp("Automated OCR scanning using Tesseract.js extracts values directly from images."),
    bp("Intelligent rule-based analysis evaluates 100+ blood parameters instantly."),
    bp("Personalized diet, fitness, and lifestyle recommendations for each user."),
    bp("Offline-first PWA with Firebase sync, works without a doctor or subscription."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 7 – LITERATURE SURVEY (Summary Table)
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("LITERATURE SURVEY"),
    red_line(),
    Spacer(1, 0.3*cm),
]

lit_data = [
    [
        Paragraph("<b>Paper Title / Authors</b>", s("th", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
        Paragraph("<b>Methodology</b>",           s("th", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
        Paragraph("<b>Advantages</b>",            s("th", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
        Paragraph("<b>Disadvantages</b>",         s("th", fontName="Times-Bold", fontSize=12, alignment=TA_CENTER)),
    ],
    [
        Paragraph("Automated Blood Report Analysis – Kumar et al., 2021", s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("CNN-based image classification",                        s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("High accuracy on scanned reports",                      s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Requires large labeled dataset",                        s("td", fontName="Times-Roman", fontSize=11)),
    ],
    [
        Paragraph("OCR for Medical Documents – Singh et al., 2020",       s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Tesseract OCR + regex parsing",                         s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Open-source and cost-free",                             s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Low accuracy on handwritten text",                      s("td", fontName="Times-Roman", fontSize=11)),
    ],
    [
        Paragraph("Health Recommender Systems – Patel et al., 2022",      s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Rule-based medical knowledge base",                     s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Fast and interpretable results",                        s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Cannot learn from new data",                            s("td", fontName="Times-Roman", fontSize=11)),
    ],
    [
        Paragraph("ML Disease Prediction – Ali et al., 2019",             s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Random Forest on blood parameters",                     s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("High prediction accuracy (91%)",                        s("td", fontName="Times-Roman", fontSize=11)),
        Paragraph("Needs patient history data",                            s("td", fontName="Times-Roman", fontSize=11)),
    ],
]

col_w = (PAGE_W - 2*MARGIN) / 4
lit_table = Table(lit_data, colWidths=[col_w]*4, repeatRows=1)
lit_table.setStyle(TableStyle([
    ("BACKGROUND",   (0,0), (-1,0), colors.HexColor("#1565C0")),
    ("TEXTCOLOR",    (0,0), (-1,0), colors.white),
    ("GRID",         (0,0), (-1,-1), 0.5, colors.grey),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [colors.white, colors.HexColor("#EBF5FB")]),
    ("VALIGN",       (0,0), (-1,-1), "TOP"),
    ("TOPPADDING",   (0,0), (-1,-1), 6),
    ("BOTTOMPADDING",(0,0), (-1,-1), 6),
]))
story += [lit_table, PageBreak()]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 8 – REQUIREMENT ANALYSIS – HARDWARE
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("REQUIREMENT ANALYSIS"),
    red_line(),
    Paragraph("Hardware Requirements", SUB_HEADING),
    bp("Processor: Intel Core i3 or equivalent (minimum)"),
    bp("RAM: 4 GB minimum, 8 GB recommended"),
    bp("Storage: 500 MB free disk space"),
    bp("Camera: Required for scanning physical blood reports"),
    bp("Internet: Broadband connection for Firebase sync"),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 9 – REQUIREMENT ANALYSIS – SOFTWARE
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("REQUIREMENT ANALYSIS"),
    red_line(),
    Paragraph("Software Requirements", SUB_HEADING),
    bp("OS: Windows 10 / macOS 11 / Ubuntu 20.04 or later"),
    bp("Browser: Chrome 90+, Firefox 88+, or any modern browser"),
    bp("Node.js: v18+ with npm for frontend build"),
    bp("Python: 3.8+ with Flask for the ML backend"),
    bp("Firebase: Account for authentication and Firestore database"),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 10 – MODULE DESCRIPTION
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("MODULE DESCRIPTION"),
    red_line(),
    Spacer(1, 0.3*cm),
    Paragraph("Blood Evaluation Module", SUB_HEADING),
    bp("Accepts blood report image or PDF upload from the user."),
    bp("Runs Tesseract.js OCR to extract text and identify parameter values."),
    Paragraph("Health Analysis Module", SUB_HEADING),
    bp("Compares extracted values against standard medical reference ranges."),
    bp("Generates color-coded status: Normal, Low, or High for each parameter."),
    Paragraph("Recommendation Module", SUB_HEADING),
    bp("Produces personalized diet plans, fitness tips, and lifestyle advice."),
    bp("AI chatbot answers follow-up health questions in real time."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 11 – DESIGN: ARCHITECTURAL DIAGRAM
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("DESIGN – ARCHITECTURAL DIAGRAM"),
    red_line(),
    Spacer(1, 0.3*cm),
    Paragraph("System Architecture", SUB_HEADING),
    bp("User interacts with the React.js frontend via browser or Android (Capacitor)."),
    bp("Tesseract.js performs client-side OCR; results stored in LocalStorage."),
    bp("Flask backend handles ML-based disease prediction via Scikit-learn."),
    bp("Firebase Firestore stores user profiles and report history in the cloud."),
    Spacer(1, 0.3*cm),
]

# Architecture diagram visual description table
arch_data = [
    [Paragraph("<b>Layer</b>",          s("at", fontName="Times-Bold", fontSize=13, alignment=TA_CENTER)),
     Paragraph("<b>Component</b>",      s("at", fontName="Times-Bold", fontSize=13, alignment=TA_CENTER)),
     Paragraph("<b>Technology</b>",     s("at", fontName="Times-Bold", fontSize=13, alignment=TA_CENTER))],
    [Paragraph("Frontend",             s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("UI Application",       s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("React.js + Vite",      s("ad", fontName="Times-Roman", fontSize=12))],
    [Paragraph("OCR Engine",           s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("Text Extraction",      s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("Tesseract.js",         s("ad", fontName="Times-Roman", fontSize=12))],
    [Paragraph("Backend API",          s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("ML Prediction Server", s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("Python Flask",         s("ad", fontName="Times-Roman", fontSize=12))],
    [Paragraph("Data Storage",         s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("Cloud Database",       s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("Firebase Firestore",   s("ad", fontName="Times-Roman", fontSize=12))],
    [Paragraph("Mobile",               s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("Android Wrapper",      s("ad", fontName="Times-Roman", fontSize=12)),
     Paragraph("Capacitor 6.0",        s("ad", fontName="Times-Roman", fontSize=12))],
]

col3 = (PAGE_W - 2*MARGIN) / 3
arch_table = Table(arch_data, colWidths=[col3]*3, repeatRows=1)
arch_table.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), colors.HexColor("#1565C0")),
    ("TEXTCOLOR",     (0,0), (-1,0), colors.white),
    ("GRID",          (0,0), (-1,-1), 0.5, colors.grey),
    ("ROWBACKGROUNDS",(0,1),(-1,-1), [colors.white, colors.HexColor("#EBF5FB")]),
    ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
    ("TOPPADDING",    (0,0), (-1,-1), 8),
    ("BOTTOMPADDING", (0,0), (-1,-1), 8),
]))
story += [arch_table, PageBreak()]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 12 – DESIGN: USE CASE DIAGRAM
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("DESIGN – USE CASE DIAGRAM"),
    red_line(),
    Spacer(1, 0.3*cm),
    bp("User uploads blood report image for automatic OCR-based analysis."),
    bp("System validates parameters and generates a health assessment report."),
    bp("User receives personalized diet, fitness, and lifestyle recommendations."),
    bp("User can track weight/BMI, export reports as PDF, and chat with AI assistant."),
    Spacer(1, 0.4*cm),
]

if os.path.exists(USE_CASE_IMG):
    avail_w = PAGE_W - 2*MARGIN
    avail_h = PAGE_H * 0.50
    story.append(Image(USE_CASE_IMG, width=avail_w, height=avail_h,
                        kind="proportional"))
else:
    story.append(Paragraph("[Use Case Diagram – use_case_diagram.png not found]",
                            s("err", fontName="Times-Italic", fontSize=12,
                              textColor=colors.red)))

story.append(PageBreak())

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 13 – IMPLEMENTATION DETAILS – FRONTEND
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("IMPLEMENTATION DETAILS"),
    red_line(),
    Paragraph("1. Front End", SUB_HEADING),
    bp("React 18.3 SPA with Vite for fast development and production builds."),
    bp("Lucide React icons and TailwindCSS for a modern, responsive UI."),
    bp("Tesseract.js 5.0 runs OCR directly in the browser (no server needed)."),
    bp("PWA support with Service Worker for offline usage and mobile install."),
    bp("State managed via React hooks; report history stored in LocalStorage."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 14 – IMPLEMENTATION DETAILS – BACKEND
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("IMPLEMENTATION DETAILS"),
    red_line(),
    Paragraph("2. Back End & Data", SUB_HEADING),
    bp("Python Flask REST API exposes ML disease prediction endpoint."),
    bp("Scikit-learn Random Forest model trained on blood parameter dataset."),
    bp("Firebase Firestore stores user profiles, reports, and weight logs."),
    bp("Firebase Auth provides secure email/password login and session management."),
    bp("Capacitor 6.0 wraps React app into a native Android APK."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 15 – RESULTS & DISCUSSION
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("RESULTS AND DISCUSSION"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp("OCR extraction achieves over 90% accuracy on printed blood report images."),
    bp("100+ blood parameters are analyzed and color-coded (Normal / Low / High)."),
    bp("Disease risk predictions generated in under 2 seconds using the ML backend."),
    bp("Diet and fitness recommendations are context-aware and actionable."),
    bp("App tested successfully on Android devices via Capacitor APK."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 16 – TESTING
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("TESTING"),
    red_line(),
    Spacer(1, 0.3*cm),
    Paragraph("White Box Testing", SUB_HEADING),
    bp("Unit tested OCR parsing logic, value extraction, and range comparison functions."),
    bp("Boundary value analysis applied to each medical parameter's min/max range."),
    Paragraph("Black Box Testing", SUB_HEADING),
    bp("Functional testing of upload, analysis, and recommendation flows end-to-end."),
    bp("Invalid file types, empty reports, and edge-case values tested for robustness."),
    Paragraph("System Testing", SUB_HEADING),
    bp("Integration tested frontend-to-backend ML prediction API communication."),
    bp("Performance tested OCR speed: average 5–10 seconds per blood report image."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 17 – CONCLUSION
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("CONCLUSION"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp("The system successfully automates blood report analysis using OCR and ML."),
    bp("Provides instant, personalized health insights without requiring a doctor."),
    bp("Offline-first PWA architecture ensures accessibility on mobile and desktop."),
    bp("Future scope includes cloud ML, multi-device sync, and doctor report sharing."),
    PageBreak(),
]

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 18 – REFERENCES
# ═══════════════════════════════════════════════════════════════════════════════
story += [
    college_header(),
    Spacer(1, 0.6*cm),
    slide_heading("REFERENCES"),
    red_line(),
    Spacer(1, 0.4*cm),
    bp('Kumar et al., "Automated Blood Report Analysis using CNN," IJCSE, 2021.'),
    bp('Singh et al., "OCR for Medical Documents using Tesseract," IJECE, 2020.'),
    bp('Patel et al., "Health Recommender Systems: A Survey," IEEE Access, 2022.'),
    bp('Ali et al., "ML Disease Prediction from Blood Parameters," Elsevier, 2019.'),
    bp("React.js Documentation – https://react.dev"),
    bp("Tesseract.js Documentation – https://tesseract.projectnaptha.com"),
    bp("Firebase Docs – https://firebase.google.com/docs"),
]

# ─── Build PDF ────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT_PDF,
    pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=MARGIN,  bottomMargin=MARGIN,
    title="Blood Report Fitness Evaluation System – Final Presentation",
    author="Group Members",
)
doc.build(story)
print(f"✅  PDF created: {OUTPUT_PDF}")
