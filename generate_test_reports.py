import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

# --- Configuration ---
OUTPUT_FILE = "Perfect_Blood_Reports_Sample.pdf"
PAGES = 4

# --- Styles ---
styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Heading1'],
    fontSize=20,
    textColor=colors.HexColor("#1A5276"),
    alignment=TA_CENTER,
    spaceAfter=20
)
header_style = ParagraphStyle(
    'HeaderStyle',
    parent=styles['Normal'],
    fontSize=10,
    textColor=colors.grey,
    alignment=TA_LEFT
)
lab_name_style = ParagraphStyle(
    'LabName',
    parent=styles['Normal'],
    fontSize=14,
    fontName='Helvetica-Bold',
    textColor=colors.black,
    alignment=TA_LEFT
)

def create_report_page(doc, page_num):
    elements = []
    
    # Header
    elements.append(Paragraph("<b>PERFECT HEALTH DIAGNOSTICS</b>", lab_name_style))
    elements.append(Paragraph("123 Medical Plaza, Health City | Tel: +123 456 7890", header_style))
    elements.append(Spacer(1, 0.5 * cm))
    elements.append(HRFlowable(width="100%", thickness=1, color=colors.black))
    elements.append(Spacer(1, 0.5 * cm))
    
    # Patient Info (Simulated)
    patient_data = [
        [Paragraph("<b>Patient Name:</b> Test User", styles['Normal']), Paragraph(f"<b>Report ID:</b> PH-2026-00{page_num}", styles['Normal'])],
        [Paragraph("<b>Age/Gender:</b> 30Y / Male", styles['Normal']), Paragraph("<b>Date:</b> 03-Mar-2026", styles['Normal'])]
    ]
    pt_table = Table(patient_data, colWidths=[10*cm, 6*cm])
    pt_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP')]))
    elements.append(pt_table)
    elements.append(Spacer(1, 1 * cm))
    
    # Title
    titles = [
        "COMPREHENSIVE HEMATOLOGY REPORT",
        "KIDNEY AND LIVER FUNCTION TEST",
        "LIPID PROFILE AND DIABETES SCREENING",
        "VITAMINS AND THYROID EVALUATION"
    ]
    elements.append(Paragraph(titles[page_num-1], title_style))
    
    # Data Table
    # Format: [Parameter, Value, Unit, Reference Range]
    data = [
        [Paragraph("<b>TEST NAME</b>", styles['Normal']), 
         Paragraph("<b>RESULT</b>", styles['Normal']), 
         Paragraph("<b>UNIT</b>", styles['Normal']), 
         Paragraph("<b>REFERENCE RANGE</b>", styles['Normal'])]
    ]
    
    if page_num == 1:
        data.extend([
            ["Hemoglobin", "14.5", "g/dL", "13.0 - 17.0"],
            ["Total Leucocyte Count", "7500", "/µL", "4000 - 11000"],
            ["Platelet Count", "2.8", "Lakh/µL", "1.5 - 4.5"],
            ["RBC Count", "5.2", "mil/µL", "4.5 - 5.9"],
            ["Hematocrit", "44.2", "%", "38.0 - 50.0"],
            ["MCV", "88.0", "fL", "80.0 - 100.0"],
            ["MCH", "30.5", "pg", "27.0 - 33.0"],
            ["ESR", "12", "mm/hr", "0 - 20"]
        ])
    elif page_num == 2:
        data.extend([
            ["Serum Creatinine", "0.95", "mg/dL", "0.60 - 1.30"],
            ["Blood Urea Nitrogen", "14.0", "mg/dL", "7.0 - 20.0"],
            ["Uric Acid", "5.8", "mg/dL", "3.5 - 7.2"],
            ["eGFR", "105", "mL/min", "90 - 150"],
            ["Total Bilirubin", "0.7", "mg/dL", "0.3 - 1.2"],
            ["SGOT", "28", "U/L", "10 - 40"],
            ["SGPT", "32", "U/L", "7 - 56"],
            ["Alkaline Phosphatase", "85", "U/L", "44 - 147"]
        ])
    elif page_num == 3:
        data.extend([
            ["Total Cholesterol", "185", "mg/dL", "0 - 200"],
            ["HDL Cholesterol", "55", "mg/dL", "40 - 100"],
            ["LDL Cholesterol", "95", "mg/dL", "0 - 100"],
            ["Triglycerides", "110", "mg/dL", "0 - 150"],
            ["Glucose Fasting", "92", "mg/dL", "70 - 100"],
            ["HbA1c", "5.2", "%", "4.0 - 5.6"]
        ])
    elif page_num == 4:
        data.extend([
            ["TSH", "2.45", "µIU/mL", "0.40 - 4.00"],
            ["Total T3", "140", "ng/dL", "80 - 200"],
            ["Total T4", "8.5", "µg/dL", "5.0 - 12.0"],
            ["Vitamin B12", "450", "pg/mL", "200 - 900"],
            ["Vitamin D", "42", "ng/mL", "30 - 100"],
            ["Ferritin", "120", "ng/mL", "20 - 300"]
        ])

    table = Table(data, colWidths=[6*cm, 3*cm, 3*cm, 4*cm])
    table.setStyle(TableStyle([
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 12),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('GRID', (0,0), (-1,-1), 1, colors.grey),
        ('ALIGN', (1,1), (1,-1), 'CENTER'),
        ('ALIGN', (2,1), (2,-1), 'CENTER'),
        ('ALIGN', (3,1), (3,-1), 'CENTER'),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#D5F5E3")),
    ]))
    elements.append(table)
    
    # Footer
    elements.append(Spacer(1, 2 * cm))
    elements.append(Paragraph("<i>Note: This is a digitally generated sample report for application testing purposes.</i>", header_style))
    
    return elements

def build_pdf():
    doc = SimpleDocTemplate(OUTPUT_FILE, pagesize=A4)
    all_elements = []
    
    for i in range(1, PAGES + 1):
        all_elements.extend(create_report_page(doc, i))
        from reportlab.platypus import PageBreak
        if i < PAGES:
            all_elements.append(PageBreak())
            
    doc.build(all_elements)
    print(f"Created {OUTPUT_FILE}")

if __name__ == "__main__":
    build_pdf()
