# Presentation Folder

This folder contains presentation materials for the Blood Report Fitness Evaluation System.

## Contents

1. **TECHNICAL_DOCUMENTATION.md** - Comprehensive 4-page technical documentation
   - System Architecture
   - OCR Processing Flow
   - Medical Knowledge Base
   - Tools & Deployment

## Viewing the Document

Open `TECHNICAL_DOCUMENTATION.md` in any markdown viewer that supports Mermaid diagrams:
- VS Code (with Mermaid extension)
- GitHub (renders automatically)
- Typora
- Obsidian

## Converting to PDF

### Option 1: Using VS Code
1. Install "Markdown PDF" extension
2. Open the .md file
3. Right-click → "Markdown PDF: Export (pdf)"

### Option 2: Using Pandoc (Command Line)
```bash
pandoc TECHNICAL_DOCUMENTATION.md -o presentation.pdf --pdf-engine=xelatex
```

### Option 3: Using Online Tools
- Upload to https://www.markdowntopdf.com/
- Or use GitHub's built-in PDF export

## Notes
- All flowcharts are created using Mermaid syntax
- Document is optimized for printing on A4/Letter paper
- Approximately 4 pages when converted to PDF
