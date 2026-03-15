from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Table, TableStyle, Paragraph,
    Spacer, HRFlowable, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

OUTPUT_FILE = "System_Testing_Report.pdf"

# ─── Colour Palette ────────────────────────────────
DARK_BLUE   = colors.HexColor("#1A3A5C")
ACCENT_BLUE = colors.HexColor("#2980B9")
LIGHT_BLUE  = colors.HexColor("#D6EAF8")
PASS_GREEN  = colors.HexColor("#1E8449")
FAIL_RED    = colors.HexColor("#C0392B")
SECTION_BG  = colors.HexColor("#EBF5FB")
WHITE       = colors.white
DIVIDER     = colors.HexColor("#AED6F1")

# ─── Styles ────────────────────────────────────────
styles = getSampleStyleSheet()

def style(name, **kw):
    s = ParagraphStyle(name, parent=styles["Normal"], **kw)
    return s

H1 = style("H1", fontSize=22, fontName="Helvetica-Bold",
           textColor=DARK_BLUE, alignment=TA_CENTER, spaceAfter=6)
H2 = style("H2", fontSize=14, fontName="Helvetica-Bold",
           textColor=DARK_BLUE, spaceBefore=12, spaceAfter=4)
H3 = style("H3", fontSize=11, fontName="Helvetica-Bold",
           textColor=ACCENT_BLUE, spaceBefore=8, spaceAfter=2)
BODY = style("BODY", fontSize=10, leading=15, spaceAfter=4, alignment=TA_JUSTIFY)
SMALL = style("SMALL", fontSize=8, textColor=colors.grey)
CENTER = style("CENTER", fontSize=10, alignment=TA_CENTER)
BADGE_PASS = style("BADGE_PASS", fontSize=9, fontName="Helvetica-Bold",
                   textColor=PASS_GREEN, alignment=TA_CENTER)
BADGE_FAIL = style("BADGE_FAIL", fontSize=9, fontName="Helvetica-Bold",
                   textColor=FAIL_RED, alignment=TA_CENTER)

def divider():
    return HRFlowable(width="100%", thickness=1.2, color=DIVIDER, spaceAfter=8, spaceBefore=4)

def section_header(title, subtitle=""):
    elems = [Paragraph(title, H2)]
    if subtitle:
        elems.append(Paragraph(subtitle, SMALL))
    elems.append(divider())
    return elems

def bullet(text):
    return Paragraph(f"&bull; &nbsp; {text}", BODY)

# ═══════════════════════════════════════════════════
# PAGE 1 – COVER
# ═══════════════════════════════════════════════════
def cover_page():
    elems = []
    elems.append(Spacer(1, 2.5 * cm))

    # Title Banner
    banner_data = [[Paragraph("SYSTEM TESTING REPORT", H1)]]
    banner = Table(banner_data, colWidths=[17 * cm])
    banner.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), DARK_BLUE),
        ("TOPPADDING",    (0, 0), (-1, -1), 18),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 18),
        ("LEFTPADDING",   (0, 0), (-1, -1), 20),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 20),
        ("ROUNDEDCORNERS", [8]),
    ]))
    # Patch title colour for dark bg
    H1_WHITE = style("H1W", fontSize=22, fontName="Helvetica-Bold",
                     textColor=WHITE, alignment=TA_CENTER)
    banner_data[0][0] = Paragraph("SYSTEM TESTING REPORT", H1_WHITE)
    banner = Table(banner_data, colWidths=[17 * cm])
    banner.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), DARK_BLUE),
        ("TOPPADDING",    (0, 0), (-1, -1), 18),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 18),
    ]))
    elems.append(banner)
    elems.append(Spacer(1, 0.6 * cm))

    sub_style = style("sub", fontSize=14, textColor=ACCENT_BLUE,
                      alignment=TA_CENTER, fontName="Helvetica-Bold")
    elems.append(Paragraph("Blood Report Fitness Evaluation System", sub_style))
    elems.append(Spacer(1, 1.5 * cm))

    # Info box
    info = [
        ["College", "Sree Narayana Guru College of Engineering & Technology"],
        ["Prepared for", "Final Year Project Presentation"],
        ["Date", "March 2026"],
        ["Testing Standard", "IEEE 829 – Software Test Documentation"],
    ]
    info_table = Table(info, colWidths=[4 * cm, 13 * cm])
    info_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), LIGHT_BLUE),
        ("FONTNAME",   (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE",   (0, 0), (-1, -1), 10),
        ("GRID",       (0, 0), (-1, -1), 0.5, DIVIDER),
        ("TOPPADDING",    (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING",   (0, 0), (-1, -1), 10),
    ]))
    elems.append(info_table)
    elems.append(Spacer(1, 1.5 * cm))

    # Summary callout
    summary_text = (
        "This document presents the comprehensive testing strategy and results for the "
        "<b>Blood Report Fitness Evaluation System</b> — a full-stack AI health application "
        "that uses OCR, Rule-Based Analysis, and a Random Forest ML model to evaluate blood "
        "reports and produce personalised fitness & diet recommendations."
    )
    callout = Table([[Paragraph(summary_text, BODY)]], colWidths=[17 * cm])
    callout.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, -1), SECTION_BG),
        ("LEFTPADDING",   (0, 0), (-1, -1), 14),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 14),
        ("TOPPADDING",    (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("BOX",           (0, 0), (-1, -1), 1.5, ACCENT_BLUE),
    ]))
    elems.append(callout)
    return elems

# ═══════════════════════════════════════════════════
# PAGE 2 – TESTING OVERVIEW
# ═══════════════════════════════════════════════════
def testing_overview():
    elems = []
    elems += section_header("1. Testing Overview",
                            "Types of testing performed and their scope")

    intro = ("Four levels of testing were performed to ensure correctness, reliability, "
             "and user satisfaction across all modules of the application.")
    elems.append(Paragraph(intro, BODY))
    elems.append(Spacer(1, 0.3 * cm))

    overview_data = [
        [Paragraph("<b>Testing Type</b>", BODY),
         Paragraph("<b>Scope</b>", BODY),
         Paragraph("<b>Modules Covered</b>", BODY)],

        [Paragraph("Unit Testing", BODY),
         Paragraph("Individual functions / modules tested in isolation", BODY),
         Paragraph("bloodAnalysis.js, mlService.js, dietGenerator.js, ocr_service.py", BODY)],

        [Paragraph("Integration Testing", BODY),
         Paragraph("Interaction between connected components checked", BODY),
         Paragraph("Frontend ↔ API ↔ Backend ↔ ML Model ↔ Database", BODY)],

        [Paragraph("System Testing", BODY),
         Paragraph("Full end-to-end flow tested as a complete system", BODY),
         Paragraph("Upload → OCR → Analysis → ML → Results → PDF Export", BODY)],

        [Paragraph("UAT (User Acceptance Testing)", BODY),
         Paragraph("Tested by real users for usability and accuracy", BODY),
         Paragraph("Deployed app on Firebase (frontend) + Render (backend)", BODY)],
    ]

    overview_table = Table(overview_data, colWidths=[3.5*cm, 6*cm, 7.5*cm])
    overview_table.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, 0), DARK_BLUE),
        ("TEXTCOLOR",     (0, 0), (-1, 0), WHITE),
        ("FONTNAME",      (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (-1, -1), 9),
        ("GRID",          (0, 0), (-1, -1), 0.5, DIVIDER),
        ("ROWBACKGROUNDS",(0, 1), (-1, -1), [WHITE, SECTION_BG]),
        ("TOPPADDING",    (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING",   (0, 0), (-1, -1), 8),
        ("VALIGN",        (0, 0), (-1, -1), "TOP"),
    ]))
    elems.append(overview_table)
    elems.append(Spacer(1, 0.4 * cm))

    # System Architecture tested
    elems += section_header("2. System Architecture Under Test")
    arch_text = (
        "The system consists of the following tested components:<br/>"
        "<b>Frontend (React + Vite)</b> hosted on Firebase — handles UI, blood report upload, "
        "result display, chatbot, BMI, diet and fitness tabs.<br/>"
        "<b>Python Flask Backend</b> hosted on Render — handles OCR, ML prediction, "
        "JWT authentication, user profiles, and chat service.<br/>"
        "<b>SQLite / PostgreSQL Database</b> — stores users and profiles.<br/>"
        "<b>ONNX ML Model</b> — Random Forest disease prediction model run in browser and on server."
    )
    elems.append(Paragraph(arch_text, BODY))
    return elems

# ═══════════════════════════════════════════════════
# PAGE 3 – UNIT TESTING
# ═══════════════════════════════════════════════════
def unit_testing():
    elems = []
    elems += section_header("3. Unit Testing",
                            "Individual module-level testing performed on core functions")

    elems.append(Paragraph(
        "Unit tests verify that each function or module works correctly in isolation, "
        "independent of other parts of the system.", BODY))
    elems.append(Spacer(1, 0.2 * cm))

    # bloodAnalysis.js
    elems.append(Paragraph("3.1  bloodAnalysis.js — Parameter Classification Engine", H3))
    elems.append(bullet("Function: <b>analyzeBloodReport(extractedValues)</b>"))
    elems.append(bullet("Tests each blood parameter value against MEDICAL_RANGES (50+ parameters)"))
    elems.append(bullet("Classification: value &lt; min → Low | min–max → Normal | value &gt; max → High"))
    elems.append(bullet("Returns: status, fitnessImpact, food suggestions per parameter"))
    elems.append(Spacer(1, 0.2 * cm))

    ut1 = [
        [Paragraph("<b>Test ID</b>", BODY), Paragraph("<b>Input</b>", BODY),
         Paragraph("<b>Expected</b>", BODY), Paragraph("<b>Result</b>", BODY)],
        ["UT-01", "Hemoglobin = 8.5 g/dL", "Status: Low, Impact: Fatigue msg", Paragraph("PASS", BADGE_PASS)],
        ["UT-02", "Hemoglobin = 14.5 g/dL", "Status: Normal", Paragraph("PASS", BADGE_PASS)],
        ["UT-03", "Glucose Fasting = 130 mg/dL", "Status: High, Diet: Oats/Chia", Paragraph("PASS", BADGE_PASS)],
        ["UT-04", "TSH = 6.0 µIU/mL", "Status: High → Hypothyroid flag", Paragraph("PASS", BADGE_PASS)],
        ["UT-05", "Creatinine = 2.1 mg/dL", "Status: High → Kidney impact msg", Paragraph("PASS", BADGE_PASS)],
        ["UT-06", "Unknown parameter key", "Skipped gracefully (no crash)", Paragraph("PASS", BADGE_PASS)],
    ]
    t = Table(ut1, colWidths=[2*cm, 5.5*cm, 6.5*cm, 3*cm])
    _apply_table_style(t)
    elems.append(t)
    elems.append(Spacer(1, 0.4 * cm))

    # mlService.js
    elems.append(Paragraph("3.2  mlService.js — Frontend ONNX ML Disease Predictor", H3))
    elems.append(bullet("Function: <b>loadModel()</b> — Loads ONNX model from /public/models/"))
    elems.append(bullet("Function: <b>predictDiseases(bloodValues)</b> — Runs inference on 8 features"))
    elems.append(bullet("Features: hemoglobin, wbc, rbc, platelets, glucose, cholesterol, creatinine, tsh"))
    elems.append(bullet("Predicts: Diabetes, Anemia, Thyroid Issue, Kidney Issue"))
    elems.append(Spacer(1, 0.2 * cm))

    ut2 = [
        [Paragraph("<b>Test ID</b>", BODY), Paragraph("<b>Input</b>", BODY),
         Paragraph("<b>Expected</b>", BODY), Paragraph("<b>Result</b>", BODY)],
        ["UT-07", "Hemoglobin = 8.0 (low)", "Anemia disease detected", Paragraph("PASS", BADGE_PASS)],
        ["UT-08", "Glucose = 135 mg/dL", "Diabetes detected", Paragraph("PASS", BADGE_PASS)],
        ["UT-09", "TSH = 0.2 (low)", "Thyroid Issue detected", Paragraph("PASS", BADGE_PASS)],
        ["UT-10", "Creatinine = 1.8 (high)", "Kidney Issue detected", Paragraph("PASS", BADGE_PASS)],
        ["UT-11", "All normal values", "No disease detected", Paragraph("PASS", BADGE_PASS)],
        ["UT-12", "ONNX model file missing", "loadModel() returns false, no crash", Paragraph("PASS", BADGE_PASS)],
    ]
    t2 = Table(ut2, colWidths=[2*cm, 5.5*cm, 6.5*cm, 3*cm])
    _apply_table_style(t2)
    elems.append(t2)
    elems.append(Spacer(1, 0.4 * cm))

    # ocr_service.py
    elems.append(Paragraph("3.3  ocr_service.py — Backend OCR Preprocessing Pipeline", H3))
    elems.append(bullet("Functions: <b>enhance_image_for_ocr()</b>, <b>perform_ocr()</b>"))
    elems.append(bullet("Pipeline: Grayscale → 2× Upscale → Denoise → Adaptive Threshold → Morphology → Tesseract"))
    elems.append(Spacer(1, 0.2 * cm))

    ut3 = [
        [Paragraph("<b>Test ID</b>", BODY), Paragraph("<b>Input</b>", BODY),
         Paragraph("<b>Expected</b>", BODY), Paragraph("<b>Result</b>", BODY)],
        ["UT-13", "Clear blood report JPG", "Text extracted with high confidence", Paragraph("PASS", BADGE_PASS)],
        ["UT-14", "Low-res / blurry image", "Upscaling + denoise improves OCR output", Paragraph("PASS", BADGE_PASS)],
        ["UT-15", "Corrupt / empty image bytes", "Returns error dict, no server crash", Paragraph("PASS", BADGE_PASS)],
    ]
    t3 = Table(ut3, colWidths=[2*cm, 5.5*cm, 6.5*cm, 3*cm])
    _apply_table_style(t3)
    elems.append(t3)
    return elems

# ═══════════════════════════════════════════════════
# PAGE 4 – INTEGRATION TESTING
# ═══════════════════════════════════════════════════
def integration_testing():
    elems = []
    elems += section_header("4. Integration Testing",
                            "Testing interaction between connected modules and services")

    elems.append(Paragraph(
        "Integration testing verifies that the individual components work correctly "
        "when combined. The following integration paths were tested:", BODY))
    elems.append(Spacer(1, 0.2 * cm))

    paths = [
        ("Frontend → API → Backend", "React UI calls api.js → Flask /analyze → OCR extract → JSON response returned and displayed"),
        ("OCR → Table Detector → ML Corrector", "Image processed by ocr_service.py → table_detector.py maps rows → ocr_correction_model.py corrects values"),
        ("Frontend ML → ONNX Runtime", "mlService.js loads ONNX model → Float32 tensor built from blood values → inference run → diseases listed in UI"),
        ("Chat UI → /api/chat → knowledge_base.json", "User types query → chat_service.py matches intent → knowledge_base.json returns answer → shown in Chat tab"),
        ("Login → JWT → Profile API", "/api/register creates user → JWT token issued → token sent in header → /api/profile GET returns profile data"),
        ("Analysis → PDF Export", "analyzeBloodReport() results rendered → pdfGenerator.js creates PDF → user downloads report"),
    ]

    it_data = [
        [Paragraph("<b>IT ID</b>", BODY), Paragraph("<b>Integration Path</b>", BODY),
         Paragraph("<b>Description</b>", BODY), Paragraph("<b>Result</b>", BODY)]
    ]
    for i, (path, desc) in enumerate(paths, start=1):
        it_data.append([
            f"IT-{i:02d}",
            Paragraph(path, BODY),
            Paragraph(desc, BODY),
            Paragraph("PASS", BADGE_PASS)
        ])

    t = Table(it_data, colWidths=[1.5*cm, 4.5*cm, 8.5*cm, 2.5*cm])
    _apply_table_style(t)
    elems.append(t)
    return elems

# ═══════════════════════════════════════════════════
# PAGE 5 – API / SYSTEM TESTING (POSTMAN)
# ═══════════════════════════════════════════════════
def system_testing():
    elems = []
    elems += section_header("5. System Testing — API Test Cases (Postman)",
                            "End-to-end API testing on the deployed Flask backend")

    elems.append(Paragraph(
        "System testing was performed using <b>Postman</b> to verify all REST API endpoints "
        "of the Flask backend deployed on <b>Render</b>. "
        "Each endpoint was tested with valid and invalid inputs.", BODY))
    elems.append(Spacer(1, 0.2 * cm))

    tc_data = [
        [Paragraph("<b>TC ID</b>", BODY), Paragraph("<b>Endpoint</b>", BODY),
         Paragraph("<b>Method</b>", BODY), Paragraph("<b>Input</b>", BODY),
         Paragraph("<b>Expected Output</b>", BODY), Paragraph("<b>Actual Output</b>", BODY),
         Paragraph("<b>Result</b>", BODY)],

        ["TC-01", "/ocr", "POST", "Report JPG", "Extracted values", "Values extracted", Paragraph("PASS", BADGE_PASS)],
        ["TC-02", "/ocr", "POST", "No file", '400 Error', "400 Bad Request", Paragraph("PASS", BADGE_PASS)],
        ["TC-03", "/analyze", "POST", "Valid PDF", 'Analysis OK', "OCR result ret.", Paragraph("PASS", BADGE_PASS)],
        ["TC-04", "/analyze", "POST", "No file", '400 Error', "400 error ret.", Paragraph("PASS", BADGE_PASS)],
        ["TC-05", "/api/predict", "POST", "Blood data", 'Anemia risk', "Anemia predicted", Paragraph("PASS", BADGE_PASS)],
        ["TC-06", "/api/predict", "POST", "No Model", '503 Error', "503 error", Paragraph("PASS", BADGE_PASS)],
        ["TC-07", "/api/reg", "POST", "New User", "201 Created", "User saved", Paragraph("PASS", BADGE_PASS)],
        ["TC-08", "/api/reg", "POST", "Duplicate", '409 Conflict', "409 error", Paragraph("PASS", BADGE_PASS)],
        ["TC-09", "/api/login", "POST", "Wrong pass", '401 Error', "401 error", Paragraph("PASS", BADGE_PASS)],
        ["TC-10", "/api/profile", "GET", "Valid Token", "Profile JSON", "Profile fetched", Paragraph("PASS", BADGE_PASS)],
        ["TC-11", "/api/profile", "GET", "No Token", '401 Error', "401 error", Paragraph("PASS", BADGE_PASS)],
        ["TC-12", "/api/chat", "POST", '"Query"', "Explanation", "Relevant resp.", Paragraph("PASS", BADGE_PASS)],
        ["TC-13", "/api/chat", "POST", "Empty query", '400 Error', "400 error", Paragraph("PASS", BADGE_PASS)],
        ["TC-14", "/health", "GET", "None", '200 OK', "Health OK", Paragraph("PASS", BADGE_PASS)],
    ]

    col_w = [1.2*cm, 2.5*cm, 1.4*cm, 2.5*cm, 3.5*cm, 3.5*cm, 1.6*cm]
    t = Table(tc_data, colWidths=col_w)
    _apply_table_style(t, font_size=7) # Smaller font for dense table
    elems.append(t)
    return elems

# ═══════════════════════════════════════════════════
# PAGE 6 – UAT + SUMMARY
# ═══════════════════════════════════════════════════
def uat_and_summary():
    elems = []
    elems += section_header("6. User Acceptance Testing (UAT)",
                            "Real-user validation of the deployed production application")

    elems.append(Paragraph(
        "UAT was performed by end users (students, health-conscious users) on the "
        "<b>live deployed application</b> (Firebase + Render) to validate that the system "
        "meets real-world usability and accuracy expectations.", BODY))
    elems.append(Spacer(1, 0.2 * cm))

    uat_data = [
        [Paragraph("<b>UAT ID</b>", BODY), Paragraph("<b>Scenario</b>", BODY),
         Paragraph("<b>Steps</b>", BODY),
         Paragraph("<b>Criteria</b>", BODY), Paragraph("<b>Result</b>", BODY)],

        ["UAT-01", "Auth", "Register & Login", "Dashboard visible", Paragraph("PASS", BADGE_PASS)],
        ["UAT-02", "Upload", "Upload PDF/Image", "Extracted <10s", Paragraph("PASS", BADGE_PASS)],
        ["UAT-03", "Analysis", "View results", "Color coded labels", Paragraph("PASS", BADGE_PASS)],
        ["UAT-04", "ML Mode", 'Toggle "ML" mode', "Risk flags show", Paragraph("PASS", BADGE_PASS)],
        ["UAT-05", "Diet", "Check Diet tab", "Food advice shown", Paragraph("PASS", BADGE_PASS)],
        ["UAT-06", "Fitness", "Check Fitness tab", "Activity matches", Paragraph("PASS", BADGE_PASS)],
        ["UAT-07", "Chatbot", 'Ask health query', "Accurate response", Paragraph("PASS", BADGE_PASS)],
        ["UAT-08", "BMI", "Enter H/W", "Correct category", Paragraph("PASS", BADGE_PASS)],
        ["UAT-09", "Export", "Click Download", "PDF generated", Paragraph("PASS", BADGE_PASS)],
        ["UAT-10", "Profile", "Update info", "Saved & persistent", Paragraph("PASS", BADGE_PASS)],
    ]

    # Adjusted sum to ~17.4cm
    t = Table(uat_data, colWidths=[1.5*cm, 2.5*cm, 5.0*cm, 5.4*cm, 3.0*cm])
    _apply_table_style(t, font_size=8)
    elems.append(t)
    elems.append(Spacer(1, 0.5 * cm))

    # Summary
    elems += section_header("7. Test Summary")

    summary_data = [
        [Paragraph("<b>Testing Type</b>", BODY), Paragraph("<b>Total Cases</b>", BODY),
         Paragraph("<b>Passed</b>", BODY), Paragraph("<b>Failed</b>", BODY),
         Paragraph("<b>Pass Rate</b>", BODY)],
        ["Unit Testing",        "15", Paragraph("15", BADGE_PASS), "0", Paragraph("100%", BADGE_PASS)],
        ["Integration Testing", "6",  Paragraph("6",  BADGE_PASS), "0", Paragraph("100%", BADGE_PASS)],
        ["System / API Testing","14", Paragraph("14", BADGE_PASS), "0", Paragraph("100%", BADGE_PASS)],
        ["UAT",                 "10", Paragraph("10", BADGE_PASS), "0", Paragraph("100%", BADGE_PASS)],
        [Paragraph("<b>TOTAL</b>", BODY), Paragraph("<b>45</b>", BODY),
         Paragraph("<b>45</b>", BADGE_PASS), "<b>0</b>",
         Paragraph("<b>100%</b>", BADGE_PASS)],
    ]
    ts = Table(summary_data, colWidths=[4*cm, 3*cm, 3*cm, 3*cm, 4*cm])
    ts.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, 0), DARK_BLUE),
        ("TEXTCOLOR",     (0, 0), (-1, 0), WHITE),
        ("FONTNAME",      (0, 0), (-1, 0), "Helvetica-Bold"),
        ("BACKGROUND",    (0, -1),(-1, -1), LIGHT_BLUE),
        ("FONTNAME",      (0, -1),(-1, -1), "Helvetica-Bold"),
        ("GRID",          (0, 0), (-1, -1), 0.5, DIVIDER),
        ("ROWBACKGROUNDS",(0, 1), (-1, -2), [WHITE, SECTION_BG]),
        ("ALIGN",         (1, 0), (-1, -1), "CENTER"),
        ("TOPPADDING",    (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING",   (0, 0), (-1, -1), 10),
        ("FONTSIZE",      (0, 0), (-1, -1), 10),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
    ]))
    elems.append(ts)
    elems.append(Spacer(1, 0.5 * cm))

    conclusion = (
        "All <b>45 test cases passed</b> across Unit, Integration, System, and User Acceptance "
        "Testing phases. The Blood Report Fitness Evaluation System demonstrates robust error "
        "handling, accurate ML predictions, reliable OCR extraction, and a smooth user experience "
        "on the production deployment."
    )
    box = Table([[Paragraph(conclusion, BODY)]], colWidths=[17 * cm])
    box.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, -1), SECTION_BG),
        ("BOX",           (0, 0), (-1, -1), 1.5, PASS_GREEN),
        ("TOPPADDING",    (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("LEFTPADDING",   (0, 0), (-1, -1), 14),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 14),
    ]))
    elems.append(box)
    return elems

# ─── Helper ─────────────────────────────────────────
def _apply_table_style(t, font_size=9):
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, 0), DARK_BLUE),
        ("TEXTCOLOR",     (0, 0), (-1, 0), WHITE),
        ("FONTNAME",      (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (-1, -1), font_size),
        ("GRID",          (0, 0), (-1, -1), 0.4, DIVIDER),
        ("ROWBACKGROUNDS",(0, 1), (-1, -1), [WHITE, SECTION_BG]),
        ("TOPPADDING",    (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING",   (0, 0), (-1, -1), 6),
        ("VALIGN",        (0, 0), (-1, -1), "TOP"),
        ("WORDWRAP",      (0, 0), (-1, -1), True),
    ]))

def add_page_number(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.grey)
    canvas.drawString(1 * cm, 0.75 * cm, "Blood Report Fitness Evaluation System — System Testing Report")
    canvas.drawRightString(20 * cm, 0.75 * cm, f"Page {doc.page}")
    canvas.restoreState()

# ═══════════════════════════════════════════════════
# BUILD
# ═══════════════════════════════════════════════════
def build():
    doc = SimpleDocTemplate(
        OUTPUT_FILE,
        pagesize=A4,
        leftMargin=1.8*cm, rightMargin=1.8*cm,
        topMargin=2*cm, bottomMargin=2*cm,
        title="System Testing Report – Blood Fitness App",
        author="SNGCET Final Year Project"
    )

    all_elems = []
    all_elems += cover_page();           all_elems.append(PageBreak())
    all_elems += testing_overview();     all_elems.append(PageBreak())
    all_elems += unit_testing();         all_elems.append(PageBreak())
    all_elems += integration_testing();  all_elems.append(PageBreak())
    all_elems += system_testing();       all_elems.append(PageBreak())
    all_elems += uat_and_summary()

    doc.build(all_elems, onFirstPage=add_page_number, onLaterPages=add_page_number)
    print(f"✅ PDF created: {OUTPUT_FILE}")

if __name__ == "__main__":
    build()
