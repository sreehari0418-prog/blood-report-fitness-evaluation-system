from fpdf import FPDF
import os

class CodePDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 15)
        self.cell(0, 10, 'Blood & Fitness App - Backend Code Documentation', 0, 1, 'C')
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

    def add_code_file(self, title, filepath):
        self.add_page()
        self.set_font('Arial', 'B', 12)
        self.set_fill_color(200, 220, 255)
        self.cell(0, 10, title, 1, 1, 'L', 1)
        self.ln(5)
        
        self.set_font('Courier', '', 8) # Monospaced font for code
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                code_lines = f.readlines()
                
            for line in code_lines:
                # Basic sanitation for PDF compatibility
                line = line.replace('\t', '    ').rstrip()
                # Encode to latin-1 to avoid unicode errors in standard FPDF, replacing chars that don't fit
                clean_line = line.encode('latin-1', 'replace').decode('latin-1')
                self.multi_cell(0, 4, clean_line)
                
        except Exception as e:
            self.set_font('Arial', 'I', 10)
            self.cell(0, 10, f"Error reading file: {str(e)}", 0, 1)

def create_pdf():
    pdf = CodePDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    
    # List of files to include with their titles
    files_to_include = [
        ("1. Main Backend Server (API & Logic)", "python-backend/unified_api.py"),
        ("2. Database Models & Schema", "python-backend/database.py"),
        ("3. Authentication Logic", "python-backend/auth_api.py"),
        ("4. ML Model Simulation Script", "backend-demos/ml_demo.py"),
        ("5. API Simulation Script", "backend-demos/api_demo.py"),
        ("6. Database Simulation Script", "backend-demos/database_demo.py"),
        ("7. Backend Requirements", "python-backend/requirements.txt")
    ]
    
    print("🚀 Generating PDF...")
    
    for title, path in files_to_include:
        if os.path.exists(path):
            print(f"Adding {title}...")
            pdf.add_code_file(title, path)
        else:
            print(f"⚠️ Warning: File not found: {path}")
            
    output_path = "Backend_Code_Documentation.pdf"
    pdf.output(output_path)
    print(f"\n✅ PDF Created Successfully: {output_path}")

if __name__ == "__main__":
    create_pdf()
