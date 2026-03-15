from reportlab.lib.pagesizes import landscape, A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, HRFlowable, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

OUTPUT_FILE = "System_Testing_Slide.pdf"

# --- Styles ---
styles = getSampleStyleSheet()

college_name_style = ParagraphStyle(
    'CollegeName',
    parent=styles['Normal'],
    fontSize=18,
    fontName='Helvetica-Bold',
    textColor=colors.black,
    alignment=TA_CENTER,
    spaceAfter=2
)

address_style = ParagraphStyle(
    'Address',
    parent=styles['Normal'],
    fontSize=10,
    fontName='Helvetica',
    textColor=colors.black,
    alignment=TA_CENTER,
    spaceAfter=10
)

section_title_style = ParagraphStyle(
    'SectionTitle',
    parent=styles['Normal'],
    fontSize=24,
    fontName='Helvetica-Bold',
    textColor=colors.HexColor("#4A76A8"),
    alignment=TA_CENTER,
    spaceAfter=20
)

body_style = ParagraphStyle(
    'BodyText',
    parent=styles['Normal'],
    fontSize=12,
    leading=16,
    textColor=colors.black,
    alignment=TA_LEFT,
    spaceAfter=10
)

bold_body_style = ParagraphStyle(
    'BoldBody',
    parent=body_style,
    fontName='Helvetica-Bold'
)

table_header_style = ParagraphStyle(
    'TableHeader',
    parent=styles['Normal'],
    fontSize=10,
    fontName='Helvetica-Bold',
    textColor=colors.black,
    alignment=TA_LEFT
)

table_cell_style = ParagraphStyle(
    'TableCell',
    parent=styles['Normal'],
    fontSize=9,
    fontName='Helvetica',
    textColor=colors.black,
    alignment=TA_LEFT
)

def build_pdf():
    # Use landscape A4 to mimic a PPT slide
    doc = SimpleDocTemplate(OUTPUT_FILE, pagesize=landscape(A4), topMargin=1*cm, bottomMargin=1*cm)
    elements = []

    # 1. College Header
    elements.append(Paragraph("Sree Narayana Guru College of Engineering & Technology", college_name_style))
    elements.append(Paragraph("Chalakcode P.O., Korom, Payyanur, Kannur-670307", address_style))
    
    # 2. Section Title
    elements.append(Spacer(1, 0.5 * cm))
    elements.append(Paragraph("SYSTEM TESTING", section_title_style))
    
    # 3. Intro Text
    elements.append(Paragraph("<b>Testing:</b> Details of testing.. how you perform testing in your project- specify it:", bold_body_style))
    elements.append(Spacer(1, 0.2 * cm))
    
    # 4. Types of Testing Performed
    elements.append(Paragraph("<b>Types of Testing Performed</b>", bold_body_style))
    elements.append(Paragraph("<b>Unit Testing</b> – Individual modules tested (Blood Parameter Parser, ML Classifier, Diet Generator, OCR Pipeline).", body_style))
    elements.append(Paragraph("<b>Integration Testing</b> – Checked interaction between Frontend, Backend API, ML and Database.", body_style))
    elements.append(Paragraph("<b>System Testing</b> – Entire system tested for end-to-end report evaluation flow.", body_style))
    elements.append(Paragraph("<b>User Acceptance Testing (UAT)</b> – Tested by health-conscious users for ease of interpretation.", body_style))
    
    elements.append(Spacer(1, 0.3 * cm))
    elements.append(Paragraph("<b>POSTMAN testing..</b>", bold_body_style))
    elements.append(Paragraph("<b>Ex:</b>", bold_body_style))
    
    # 5. Test Case Table
    data = [
        [Paragraph("<b>Test Case ID</b>", table_header_style), 
         Paragraph("<b>Module</b>", table_header_style), 
         Paragraph("<b>Input</b>", table_header_style), 
         Paragraph("<b>Expected Output</b>", table_header_style), 
         Paragraph("<b>Actual Output</b>", table_header_style), 
         Paragraph("<b>Result</b>", table_header_style)]
    ]
    
    test_cases = [
        ["TC01", "Report Upload", "Empty file upload", "Validation error msg", "Error message shown", "Pass"],
        ["TC02", "Parameter Extraction", "Valid PDF report", "Extracted Hb, WBC, RBC", "Correct values extracted", "Pass"],
        ["TC03", "ML Prediction", "Low Hemoglobin data", "Anemia risk detected", "Anemia flagged 95%", "Pass"],
        ["TC04", "Chatbot Module", "Diet for low HB?", "Iron-rich food advice", "Correct health advice", "Pass"],
        ["TC05", "PDF Generation", "Completed analysis", "Downloadable PDF", "PDF generated correctly", "Pass"]
    ]
    
    for tc in test_cases:
        row = [Paragraph(str(cell), table_cell_style) for cell in tc]
        data.append(row)

    # Table layout
    table = Table(data, colWidths=[2.5*cm, 3.5*cm, 4*cm, 6*cm, 6*cm, 2.5*cm])
    table.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    elements.append(table)
    
    doc.build(elements)
    print(f"Created {OUTPUT_FILE}")

if __name__ == "__main__":
    build_pdf()
