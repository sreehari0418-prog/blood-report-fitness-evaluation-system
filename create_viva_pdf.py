
from fpdf import FPDF
import re

class PDF(FPDF):
    def header(self):
        # Arial bold 15
        self.set_font('Arial', 'B', 15)
        # Move to the right
        self.cell(80)
        # Title
        self.cell(30, 10, 'Viva Q&A - Blood App', 0, 0, 'C')
        # Line break
        self.ln(20)

    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Arial italic 8
        self.set_font('Arial', 'I', 8)
        # Page number
        self.cell(0, 10, 'Page ' + str(self.page_no()) + '/{nb}', 0, 0, 'C')

def create_pdf(md_file, output_file):
    pdf = PDF()
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=15)
    
    with open(md_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    def sanitize(text):
        # Replacements for common issues
        replacements = {
            '\u2013': '-', '\u2014': '-', # En-dash, Em-dash
            '\u2018': "'", '\u2019': "'", # Smart quotes
            '\u201c': '"', '\u201d': '"', # Smart double quotes
            '\u2026': '...',             # Ellipsis
        }
        for k, v in replacements.items():
            text = text.replace(k, v)
        # Encode to latin-1 and replace errors, then decode back
        return text.encode('latin-1', 'replace').decode('latin-1')

    pdf.set_font('Arial', 'B', 16)
    pdf.cell(0, 10, sanitize('Blood Report & Fitness Evaluation System'), 0, 1, 'C')
    pdf.set_font('Arial', '', 12)
    pdf.cell(0, 10, sanitize('Comprehensive Viva Voce Questions & Answers'), 0, 1, 'C')
    pdf.ln(10)
    
    current_section = ""
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        line = sanitize(line)

        if line.startswith('# '):
            # Main Title already handled
            continue
            
        elif line.startswith('## '):
            # Section Header
            section_title = line.replace('## ', '').replace('*', '')
            pdf.ln(5)
            pdf.set_font('Arial', 'B', 14)
            pdf.set_text_color(200, 50, 50) # Dark Red for sections
            pdf.multi_cell(0, 10, section_title)
            pdf.set_text_color(0, 0, 0)
            pdf.ln(2)
            
        elif line.startswith('**Q'):
            # Question
            question_text = line.replace('**', '')
            pdf.set_font('Arial', 'B', 11)
            pdf.multi_cell(0, 6, question_text)
            
        elif line.startswith('**A:'):
            # Answer
            answer_text = line.replace('**A:**', '').strip()
            # If line had bold markers inside answer text, remove them
            answer_text = answer_text.replace('**', '')
            pdf.set_font('Arial', '', 11)
            pdf.multi_cell(0, 6, "Answer: " + answer_text)
            pdf.ln(3) # Space between Q&A pairs
            
        elif line.startswith('---'):
            pdf.add_page()
            
        else:
            # Just normal text or continuation
            # Heuristic: if it looks like part of an answer
            pdf.set_font('Arial', '', 11)
            pdf.multi_cell(0, 6, line.replace('**', ''))

    pdf.output(output_file, 'F')
    print(f"PDF generated successfully: {output_file}")

if __name__ == "__main__":
    create_pdf('VIVA_QUESTIONS_AND_ANSWERS.md', 'Project_Viva_Questions.pdf')
