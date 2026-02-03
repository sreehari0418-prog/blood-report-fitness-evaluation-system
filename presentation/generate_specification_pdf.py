from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Flowable, Image, ListFlowable, ListItem
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing, Rect, Line, String, Polygon, Circle
from reportlab.graphics import renderPDF

# Configuration
GROUP_NUMBER = "6"  # Updated group number
OUTPUT_FILENAME = f"Group{GROUP_NUMBER}_SystemSpecification_v8.pdf"

class NumberedCanvas(canvas.Canvas):
    """Custom canvas for page numbering and footer"""
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_number(self, page_count):
        # Footer with page number
        self.setFont("Helvetica", 9)
        self.setFillColor(colors.black)
        footer_text = f"Blood Report Fitness Evaluation System – Group {GROUP_NUMBER}"
        self.drawCentredString(A4[0] / 2, 0.5 * inch, footer_text)
        self.drawRightString(A4[0] - 0.75 * inch, 0.5 * inch, f"Page {self._pageNumber}")

class ArchitectureDiagram(Flowable):
    """Custom Flowable to draw the detailed architecture diagram"""
    def __init__(self, width=480, height=450):
        Flowable.__init__(self)
        self.width = width
        self.height = height

    def draw(self):
        d = Drawing(self.width, self.height)
        
        # Colors
        layer_bg = colors.HexColor('#F5F5F5')
        layer_border = colors.HexColor('#9E9E9E')
        
        ui_color = colors.HexColor('#BBDEFB') # Blue
        proc_color = colors.HexColor('#C8E6C9') # Green
        logic_color = colors.HexColor('#FFF9C4') # Yellow
        data_color = colors.HexColor('#E1BEE7') # Purple
        
        stroke = colors.black
        
        def draw_layer_bg(y, h, label):
            d.add(Rect(0, y, self.width, h, fillColor=layer_bg, strokeColor=layer_border, strokeWidth=1, rx=5, ry=5))
            d.add(String(10, y + h - 15, label, fontName='Helvetica-BoldOblique', fontSize=9, fillColor=colors.grey))

        def draw_box(x, y, w, h, text, fill):
            d.add(Rect(x, y, w, h, fillColor=fill, strokeColor=stroke, strokeWidth=1.5, rx=4, ry=4))
            
            words = text.split()
            if len(words) > 1:
                mid = len(words) // 2
                l1 = " ".join(words[:round(len(words)/2 + 0.1)])
                l2 = " ".join(words[round(len(words)/2 + 0.1):])
                d.add(String(x + w/2, y + h/2 + 6, l1, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9))
                d.add(String(x + w/2, y + h/2 - 6, l2, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9))
            else:
                d.add(String(x + w/2, y + h/2 - 3, text, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9))

        def draw_arrow(x1, y1, x2, y2):
            d.add(Line(x1, y1, x2, y2, strokeColor=stroke, strokeWidth=1))
            arrow_size = 4
            if x1 == x2: # Vertical
                if y2 < y1: # Down
                    p = Polygon(points=[x2, y2, x2-arrow_size, y2+arrow_size*2, x2+arrow_size, y2+arrow_size*2], fillColor=stroke, strokeWidth=0)
                else: # Up
                    p = Polygon(points=[x2, y2, x2-arrow_size, y2-arrow_size*2, x2+arrow_size, y2-arrow_size*2], fillColor=stroke, strokeWidth=0)
            elif y1 == y2: # Horizontal
                if x2 > x1: # Right
                    p = Polygon(points=[x2, y2, x2-arrow_size*2, y2+arrow_size, x2-arrow_size*2, y2-arrow_size], fillColor=stroke, strokeWidth=0)
                else: # Left
                    p = Polygon(points=[x2, y2, x2+arrow_size*2, y2+arrow_size, x2+arrow_size*2, y2-arrow_size], fillColor=stroke, strokeWidth=0)
            else: # Diagnostic fallback
                 p = Circle(x2, y2, 2, fillColor=stroke, strokeWidth=0)
            d.add(p)

        # Draw Layers
        # Top to Bottom specific coordinates
        layer_h = 90
        
        # 1. UI Layer (Top)
        y_ui = 350
        draw_layer_bg(y_ui, layer_h, "Presentation Layer (React Frontend)")
        
        # 2. Processing Layer
        y_proc = 240
        draw_layer_bg(y_proc, layer_h, "Processing Layer (Client-Side Logic)")
        
        # 3. Intelligence Layer
        y_int = 130
        draw_layer_bg(y_int, layer_h, "Medical Intelligence Layer")
        
        # 4. Data Layer (Bottom)
        y_data = 20
        draw_layer_bg(y_data, layer_h, "Data Persistence Layer")
        
        # --- Draw Components ---
        
        # UI Components
        draw_box(40, y_ui + 30, 100, 40, "Image Capture Input", ui_color)
        draw_box(180, y_ui + 30, 120, 40, "Results Dashboard UI", ui_color)
        draw_box(340, y_ui + 30, 100, 40, "Profile Manager", ui_color)
        
        # Processing Components
        draw_box(40, y_proc + 30, 100, 40, "Digital Lens Preprocessing", proc_color)
        draw_box(180, y_proc + 30, 120, 40, "Tesseract.js OCR Engine", proc_color)
        draw_box(340, y_proc + 30, 100, 40, "Regex & Keyword Parser", proc_color)
        
        # Intelligence Components
        draw_box(40, y_int + 30, 100, 40, "Disease Prediction Model", logic_color)
        draw_box(180, y_int + 30, 120, 40, "Medical Knowledge Base", logic_color)
        draw_box(340, y_int + 30, 100, 40, "Diet Plan Generator", logic_color)
        
        # Data Components
        draw_box(180, y_data + 30, 120, 40, "Browser LocalStorage", data_color)
        draw_box(340, y_data + 30, 100, 40, "JSON Export", data_color)
        
        # --- Arrows / Flow ---
        
        # --- Arrows / Flow ---
        
        # --- Arrows / Flow ---
        
        # 1. User -> Capture
        # Top down to Capture box
        draw_arrow(90, y_ui + 80, 90, y_ui + 70) 
        
        # 2. Capture -> Preprocessing
        # Capture Bottom (380) -> Lens Top (310)
        draw_arrow(90, y_ui + 30, 90, y_proc + 70)
        
        # 3. Preprocessing -> OCR
        # Lens Right (140) -> OCR Left (180)
        draw_arrow(140, y_proc + 50, 180, y_proc + 50)
        
        # 4. OCR -> Regex
        # OCR Right (300) -> Regex Left (340)
        draw_arrow(300, y_proc + 50, 340, y_proc + 50)
        
        # 5. Regex -> Knowledge Base
        # Path: Regex Bottom (390, 270) -> Down to Rail (220) -> Left to KB x (240) -> Down to KB Top (200)
        draw_arrow(390, y_proc + 30, 390, y_int + 90) # Down to 220
        draw_arrow(390, y_int + 90, 240, y_int + 90) # Left to 240
        draw_arrow(240, y_int + 90, 240, y_int + 70) # Down to 200
        
        # 6. Medical Knowledge Internal Flow
        # KB (Center) feeds Prediction (Left) and Diet (Right)
        # KB Left (180, 180) -> Pred Right (140, 180)
        draw_arrow(180, y_int + 50, 140, y_int + 50)
        
        # KB Right (300, 180) -> Diet Left (340, 180)
        draw_arrow(300, y_int + 50, 340, y_int + 50)
        
        # 7. Intelligence -> Presentation (Results)
        # Path: From KB Rail (240, 220) -> Left to Far Left Channel (20) -> Up to UI Rail (360) -> Right to UI x (240) -> Up to UI Bottom (380)
        # This creates a clean loop around the left side
        draw_arrow(240, y_int + 90, 20, y_int + 90) # Left to Rail
        draw_arrow(20, y_int + 90, 20, y_ui + 10)   # Up Channel (220->360)
        draw_arrow(20, y_ui + 10, 240, y_ui + 10)   # Right to UI x
        draw_arrow(240, y_ui + 10, 240, y_ui + 30)  # Up to Box
        
        # 8. Persistence (KB -> Storage)
        # KB Bottom (240, 160) -> Storage Top (240, 90)
        draw_arrow(240, y_int + 30, 240, y_data + 70)

        # 9. Persistence (Profile -> Storage)
        # Profile Right (440, 400) -> Far Right Channel (460) -> Down -> Left to Storage (Right 440)
        draw_arrow(440, y_ui + 50, 465, y_ui + 50) # Right out (Center y=400)
        draw_arrow(465, y_ui + 50, 465, y_data + 70) # Down Channel (400->90)
        draw_arrow(465, y_data + 70, 440, y_data + 50) # Left into Storage Box (Center y=70). Note: Right edge is 440.
        # Adjusted y target to y_data+50 (70) which is center of box.
        
        renderPDF.draw(d, self.canv, 0, 0)

def create_pdf():
    # Create PDF
    doc = SimpleDocTemplate(
        OUTPUT_FILENAME,
        pagesize=A4,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=1*inch,
        bottomMargin=1*inch
    )

    elements = []

    # Styles
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#003366'),
        spaceAfter=30,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=14,
        textColor=colors.black,
        spaceAfter=12,
        alignment=TA_CENTER,
        fontName='Helvetica'
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor('#003366'),
        spaceAfter=12,
        spaceBefore=12,
        fontName='Helvetica-Bold'
    )

    subheading_style = ParagraphStyle(
        'CustomSubHeading',
        parent=styles['Heading3'],
        fontSize=13,
        textColor=colors.HexColor('#2c3e50'), # Darker grey/blue
        spaceAfter=8,
        spaceBefore=8,
        fontName='Helvetica-Bold'
    )
    
    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=11,
        textColor=colors.black,
        spaceAfter=6,
        leading=16,
        alignment=TA_JUSTIFY,
        fontName='Helvetica'
    )

    bullet_style = ParagraphStyle(
        'BulletWrapper',
        parent=normal_style,
        leftIndent=20,
        bulletIndent=10,
        spaceAfter=4
    )

    # ========== COVER PAGE ==========
    elements.append(Spacer(1, 0.5*inch))
    
    # Department/College (Moved to top)
    elements.append(Paragraph("<b>SREE NARAYANA GURU COLLEGE OF ENGINEERING AND TECHNOLOGY</b>", subtitle_style))
    elements.append(Spacer(1, 0.8*inch))
    
    # Project Title
    elements.append(Paragraph("Blood Report Fitness Evaluation System", title_style))
    elements.append(Spacer(1, 0.4*inch))
    
    # Group Number
    elements.append(Paragraph(f"<b>Group Number:</b> {GROUP_NUMBER}", subtitle_style))
    elements.append(Spacer(1, 0.6*inch))
    
    # Submitted by section
    elements.append(Paragraph("<b>Submitted by:</b>", subtitle_style))
    elements.append(Spacer(1, 0.1*inch))
    
    group_members = [
        "DHIYA MANOJ",
        "SREEHARI T",
        "VARSHA RAMACHANDRAN",
        "VISMAYA PI"
    ]
    
    for member in group_members:
        elements.append(Paragraph(member, subtitle_style))
        elements.append(Spacer(1, 0.1*inch))
        
    elements.append(Spacer(1, 0.4*inch))
    
    # Guide Name
    elements.append(Paragraph("<b>Guided by:</b>", subtitle_style))
    elements.append(Spacer(1, 0.1*inch))
    elements.append(Paragraph("Ms Sruthi Krishnan", subtitle_style))
    
    elements.append(Spacer(1, 0.8*inch))
    
    # Date of Submission
    elements.append(Paragraph("<b>Date of Submission:</b> January 27, 2026", subtitle_style))
    
    elements.append(PageBreak())
    
    # ========== SYSTEM SPECIFICATION SECTION ==========
    elements.append(Paragraph("System Specification", heading_style))
    
    # Project Summary
    elements.append(Paragraph("<b>Project Summary</b>", subheading_style))
    elements.append(Paragraph("The Blood Report Fitness Evaluation System is a comprehensive native Android application designed to empower users to understand their health data. Built using React with Capacitor framework, it utilizes advanced Optical Character Recognition (OCR) technology to scan and analyze physical blood test reports, enabling users to digitize their medical records effortlessly. The app features automated health reminders with local notifications that alert users every 3 months for their next blood checkup. Beyond simple digitization, the platform acts as an intelligent health companion, providing personalized diet plans, fitness recommendations, and health insights based on specific blood biomarkers.", normal_style))
    
    # Key Features
    elements.append(Paragraph("<b>Key Features</b>", subheading_style))
    features = [
        "<b>Smart Blood Report Analysis:</b> Instantly scans and digitizes over 100 medical parameters from physical reports using Tesseract.js.",
        "<b>Personalized Diet Recommendations:</b> Generates custom meal plans tailored to specific health conditions (e.g., Anemia, Diabetes) identified in the report.",
        "<b>Fitness Guidance:</b> Suggests exercise routines appropriate for the user's current health status and fitness goals.",
        "<b>Digital Lens Technology:</b> Advanced image preprocessing to enhance OCR accuracy, correcting for low-quality or poorly lit images.",
        "<b>3-Month Checkup Reminders:</b> Automatic local notifications remind users every 3 months to schedule their next blood test, ensuring regular health monitoring.",
        "<b>Offline-First Architecture:</b> Fully functional native Android app that works without internet connection, storing all data locally on the device.",
        "<b>AI Health Assistant:</b> Integrated chatbot to answer general health queries and explain medical terms."
    ]
    for feature in features:
        elements.append(Paragraph(f"• {feature}", bullet_style))

    # Tech Stack
    elements.append(Paragraph("<b>Technology Stack</b>", subheading_style))
    tech_stack = [
        "<b>Frontend:</b> React 18.3.1 for a dynamic and responsive user interface.",
        "<b>Build Tool:</b> Vite 5.3.1 for fast development and optimized production builds.",
        "<b>OCR Engine:</b> Tesseract.js 5.0.3 running entirely client-side for privacy and speed.",
        "<b>Mobile Framework:</b> Capacitor 6.0.0 wrapping React app as a native Android application.",
        "<b>Notifications:</b> Capacitor Local Notifications 6.1.3 for automated health reminders.",
        "<b>Development Environment:</b> Android Studio for native app compilation and deployment.",
        "<b>Styling:</b> Vanilla CSS with modern Glassmorphism design principles.",
        "<b>PWA Support:</b> vite-plugin-pwa for offline capabilities and web installability."
    ]
    for tech in tech_stack:
        elements.append(Paragraph(f"• {tech}", bullet_style))

    elements.append(PageBreak())
    
    # ========== REQUIREMENTS SPECIFICATION ==========
    elements.append(Paragraph("System Requirements", heading_style))
    
    # Hardware Requirements
    elements.append(Paragraph("<b>Hardware Requirements</b>", subheading_style))
    
    hw_requirements = [
        "<b>For Web Application (PWA):</b>",
        "• Processor: Dual-core 1.5 GHz or higher",
        "• RAM: Minimum 2 GB (4 GB recommended)",
        "• Storage: 100 MB free disk space",
        "• Camera: 5 MP or higher (for image capture)",
        "• Display: 1280x720 resolution minimum",
        "",
        "<b>For Android Application:</b>",
        "• Android Version: 7.0 (Nougat) or higher",
        "• RAM: Minimum 2 GB",
        "• Storage: 150 MB free space",
        "• Camera: Rear camera with autofocus"
    ]
    for req in hw_requirements:
        if req:
            elements.append(Paragraph(req, bullet_style if req.startswith("•") else normal_style))
    
    # Software Requirements
    elements.append(Paragraph("<b>Software Requirements</b>", subheading_style))
    
    sw_requirements = [
        "<b>Development Environment:</b>",
        "• Node.js: v16.0 or higher",
        "• npm: v7.0 or higher",
        "• Git: v2.30 or higher",
        "• Code Editor: VS Code (recommended) or any modern IDE",
        "",
        "<b>Client-Side (Browser):</b>",
        "• Google Chrome: v90+",
        "• Mozilla Firefox: v88+",
        "• Safari: v14+",
        "• Microsoft Edge: v90+",
        "• JavaScript: ES6+ enabled",
        "",
        "<b>Optional Backend:</b>",
        "• Python: v3.8 or higher",
        "• Flask/FastAPI: Latest stable version",
        "• SQLite: v3.35 or higher"
    ]
    for req in sw_requirements:
        if req:
            elements.append(Paragraph(req, bullet_style if req.startswith("•") else normal_style))
    
    elements.append(PageBreak())
    
    # Functional Requirements
    elements.append(Paragraph("Functional Requirements", heading_style))
    
    functional_reqs = [
        "<b>FR1: Blood Report Analysis</b>",
        "• The system shall accept blood report images in JPEG, PNG, or PDF format.",
        "• The system shall extract text from the uploaded image using OCR technology.",
        "• The system shall recognize and parse at least 100 different medical parameters.",
        "• The system shall validate extracted values against physiological ranges.",
        "",
        "<b>FR2: Health Assessment</b>",
        "• The system shall compare extracted values against medical reference ranges.",
        "• The system shall classify each parameter as Normal, Low, or High.",
        "• The system shall predict potential health conditions based on extracted data.",
        "• The system shall provide risk assessment (Low, Medium, High, Critical).",
        "",
        "<b>FR3: Personalized Recommendations</b>",
        "• The system shall generate diet plans based on identified deficiencies.",
        "• The system shall suggest fitness activities appropriate for user's health status.",
        "• The system shall provide food recommendations for each abnormal parameter.",
        "",
        "<b>FR4: Data Management</b>",
        "• The system shall store user profiles and report history locally.",
        "• The system shall allow users to view, edit, and delete saved reports.",
        "• The system shall support exporting reports as PDF documents.",
        "• The system shall track weight and BMI over time.",
        "",
        "<b>FR5: User Interface</b>",
        "• The system shall provide a responsive interface for mobile and desktop.",
        "• The system shall display results in color-coded format for easy interpretation.",
        "• The system shall include an AI chatbot for health-related queries."
    ]
    for req in functional_reqs:
        if req:
            elements.append(Paragraph(req, bullet_style if req.startswith("•") else normal_style))
    
    elements.append(PageBreak())
    
    # Non-Functional Requirements
    elements.append(Paragraph("Non-Functional Requirements", heading_style))
    
    nonfunctional_reqs = [
        "<b>NFR1: Performance</b>",
        "• OCR processing shall complete within 10 seconds for standard quality images.",
        "• The application shall load the main interface within 2 seconds.",
        "• The system shall handle concurrent analysis of multiple parameters efficiently.",
        "",
        "<b>NFR2: Accuracy</b>",
        "• OCR shall achieve minimum 90% accuracy on printed blood reports.",
        "• Parameter extraction shall have less than 5% error rate after validation.",
        "• Disease prediction rules shall be based on established medical guidelines.",
        "",
        "<b>NFR3: Usability</b>",
        "• The interface shall be intuitive requiring no training for basic operations.",
        "• The system shall provide clear error messages and guidance.",
        "• The application shall be accessible on devices with screen readers.",
        "",
        "<b>NFR4: Reliability</b>",
        "• The system shall function offline without network connectivity.",
        "• Data shall be persisted locally to prevent loss on browser closure.",
        "• The system shall gracefully handle invalid or corrupted images.",
        "",
        "<b>NFR5: Security & Privacy</b>",
        "• All data processing shall occur client-side (no server uploads).",
        "• User data shall be stored only in the local browser/device.",
        "• The system shall not transmit health data over the network.",
        "",
        "<b>NFR6: Compatibility</b>",
        "• The PWA shall be installable on Android, iOS, and desktop platforms.",
        "• The application shall support multiple screen sizes (320px to 4K).",
        "• The system shall function on browsers released within the last 2 years.",
        "",
        "<b>NFR7: Maintainability</b>",
        "• Code shall follow React best practices and component-based architecture.",
        "• Medical knowledge base shall be easily updatable without code changes.",
        "• The system shall include comprehensive inline documentation."
    ]
    for req in nonfunctional_reqs:
        if req:
            elements.append(Paragraph(req, bullet_style if req.startswith("•") else normal_style))

    elements.append(PageBreak())
    
    # ========== MODULE DESCRIPTION SECTION ==========
    elements.append(Paragraph("Module Description", heading_style))
    
    # Module 1
    elements.append(Paragraph("<b>1. Blood Analysis Engine (bloodAnalysis.js)</b>", subheading_style))
    elements.append(Paragraph("This is the core intelligence module of the system. It contains a comprehensive medical knowledge base covering over 100 blood parameters. The module defines reference ranges for normal, low, and high values for each parameter. It parses the raw text extracted by the OCR engine, validates the values against likely physiological ranges to prevent errors, and identifies potential health issues.", normal_style))
    
    # Module 2
    elements.append(Paragraph("<b>2. OCR Scanning Interface (BloodEvaluation.jsx)</b>", subheading_style))
    elements.append(Paragraph("The primary user interface for data entry. This module handles image capturing and uploading. It integrates the 'Digital Lens' algorithm which preprocesses images (converting to grayscale, adjusting contrast) before passing them to the OCR engine. It features a three-tier pattern matching system to accurately extract numerical values even from noisy text, distinguishing between decimals, integers, and malformed numbers.", normal_style))

    # Module 3
    elements.append(Paragraph("<b>3. Diet & Recommendation Generator (SpecializedDiet.jsx)</b>", subheading_style))
    elements.append(Paragraph("Based on the analysis results, this module constructs personalized action plans. It filters through a database of dietary recommendations to suggest foods that help correct specific deficiencies (e.g., iron-rich foods for low hemoglobin). It also generates a shopping list and provides lifestyle tips tailored to the user's unique blood profile.", normal_style))
    
    # Module 4
    elements.append(Paragraph("<b>4. Profile & Progress Dashboard (ProfileDashboard.jsx & WeightProgress.jsx)</b>", subheading_style))
    elements.append(Paragraph("Manages user data persistence and visualization. This module allows users to track their health trends over time, log parameters like weight and BMI, and view their report history. It utilizes LocalStorage to ensure data remains available even when offline, providing a seamless mobile app experience.", normal_style))

    elements.append(PageBreak())
    
    # ========== ARCHITECTURAL DIAGRAM SECTION ==========
    elements.append(Paragraph("Architectural Diagram", heading_style))
    elements.append(Spacer(1, 0.2*inch))
    
    # Draw Architecture
    elements.append(ArchitectureDiagram(width=480, height=450))
    
    elements.append(Spacer(1, 0.2*inch))
    elements.append(Paragraph("Figure 1: High-Level System Architecture and Data Flow", 
                             ParagraphStyle('Caption', parent=normal_style, fontSize=10, 
                                          textColor=colors.grey, alignment=TA_CENTER)))

    # Build PDF
    doc.build(elements, canvasmaker=NumberedCanvas)
    print(f"✓ PDF created successfully: {OUTPUT_FILENAME}")

if __name__ == "__main__":
    create_pdf()
