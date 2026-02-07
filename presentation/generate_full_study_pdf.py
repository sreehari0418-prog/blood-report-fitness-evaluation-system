import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image, Preformatted
from reportlab.lib.colors import black, blue, darkblue, grey, whitesmoke, lightgrey

# Output Filename
OUTPUT_FILENAME = "BloodReport_Comprehensive_Study_Guide.pdf"

# Project Root (Assumes script is run from inside 'presentation' folder)
PROJECT_ROOT = "../"

# Files to Exclude
EXCLUDE_DIRS = {'node_modules', '.git', 'dist', 'build', '__pycache__', 'android', 'dataset', '.idea', '.vscode'}
EXCLUDE_FILES = {'package-lock.json', 'yarn.lock', '.DS_Store', 'generate_specification_pdf.py', 'generate_full_study_pdf.py'}
INCLUDE_EXTENSIONS = {'.js', '.jsx', '.css', '.html', '.py', '.json', '.md', '.xml'}

# Styles
styles = getSampleStyleSheet()
title_style = ParagraphStyle('Title', parent=styles['Title'], fontSize=24, spaceAfter=20, textColor=darkblue)
h1_style = ParagraphStyle('Heading1', parent=styles['Heading1'], fontSize=18, spaceBefore=20, spaceAfter=10, textColor=darkblue)
h2_style = ParagraphStyle('Heading2', parent=styles['Heading2'], fontSize=14, spaceBefore=15, spaceAfter=8, textColor=black)
h3_style = ParagraphStyle('Heading3', parent=styles['Heading3'], fontSize=12, spaceBefore=10, spaceAfter=5, textColor=black)
body_style = ParagraphStyle('BodyText', parent=styles['BodyText'], fontSize=10, leading=14, alignment=TA_JUSTIFY)
code_style = ParagraphStyle('Code', parent=styles['Code'], fontSize=8, leading=10, fontName='Courier', alignment=TA_LEFT, backColor=whitesmoke, borderPadding=5)
caption_style = ParagraphStyle('Caption', parent=styles['Normal'], fontSize=9, alignment=TA_CENTER, textColor=grey)

story = []

def add_cover_page():
    story.append(Spacer(1, 2*inch))
    story.append(Paragraph("Blood Report Fitness Evaluation System", title_style))
    story.append(Spacer(1, 0.5*inch))
    story.append(Paragraph("Comprehensive Technical Study Guide & Source Code", styles['Heading2']))
    story.append(Spacer(1, 2*inch))
    story.append(Paragraph("Submitted by: Group 5", body_style))
    story.append(Paragraph("Date: February 2026", body_style))
    story.append(PageBreak())

def add_project_overview():
    story.append(Paragraph("1. Project Overview", h1_style))
    
    content = """
    The Blood Report Fitness Evaluation System is a comprehensive full-stack web application designed to bridge the gap between medical data and actionable health insights. 
    By leveraging OCR (Optical Character Recognition) and medical rule-based algorithms, the system allows users to upload raw blood test report images and receive instant, personalized feedback.
    
    <b>Core Objectives:</b>
    1. <b>Digitize Health Records:</b> Convert physical paper reports into digital data.
    2. <b>Simplify Medical Jargon:</b> Explain complex blood parameters in simple terms.
    3. <b>Actionable Insights:</b> Generate diet plans and workout routines based on specific deficiencies.
    4. <b>Predictive Analysis:</b> Flag potential health risks early using established medical ranges.
    """
    story.append(Paragraph(content, body_style))
    story.append(Spacer(1, 0.2*inch))
    
    tech_stack = """
    <b>Technology Stack:</b><br/>
    - <b>Frontend:</b> React.js, Vite, Tailwind CSS / Vanilla CSS<br/>
    - <b>OCR Engine:</b> Tesseract.js (Client-side execution)<br/>
    - <b>Storage:</b> LocalStorage (Privacy-focused, offline capable)<br/>
    - <b>Backend (Optional ML):</b> Python, LayoutLMv3, Flask (for advanced training)<br/>
    - <b>Deployment:</b> Vercel / Netlify compatible
    """
    story.append(Paragraph(tech_stack, body_style))
    story.append(PageBreak())

def add_architecture():
    story.append(Paragraph("2. System Architecture", h1_style))
    
    story.append(Paragraph("2.1 High-Level Design", h2_style))
    desc = """
    The application follows a client-heavy architecture to ensure data privacy and speed. 
    Unlike traditional apps that send sensitive images to a server, this system performs OCR processing directly in the user's browser proper.
    """
    story.append(Paragraph(desc, body_style))
    
    story.append(Paragraph("2.2 Data Flow Pipeline", h2_style))
    pipeline = """
    1. <b>Image Input:</b> User uploads or snaps a photo of the blood report.
    2. <b>Preprocessing:</b> Image is converted to grayscale to enhance text contrast.
    3. <b>OCR Extraction:</b> Tesseract.js scans the image line by line.
    4. <b>Keyword Parsing:</b> The text stream is analyzed against a dictionary of medical terms (e.g., 'Hemoglobin', 'WBC', 'Cholesterol').
    5. <b>Value Extraction:</b> Regex patterns identify numerical values associated with keywords.
    6. <b>Analysis:</b> Extracted values are compared against 'MEDICAL_RANGES' constant.
    7. <b>Result Generation:</b> The UI displays the status (Normal/Low/High), impact, and diet advice.
    """
    story.append(Paragraph(pipeline, body_style))
    story.append(PageBreak())

def add_deep_dive_logic():
    story.append(Paragraph("3. Deep Dive: Core Algorithms", h1_style))
    
    story.append(Paragraph("3.1 The Parsing Logic", h2_style))
    text = """
    The heart of the application lies in `bloodAnalysis.js`. The `analyzeBloodReport` function takes the raw text string from the OCR engine.
    It splits the text into lines and iterates through a mapped object `KEYWORD_MAP`.
    
    Crucially, it handles OCR errors. For example, '5.3' might be read as '53'. 
    The system includes sanity checks to verify if a value falls within a physically possible medical range. If '53' is detected for a value normally between 4-15, logic may flag it or attempt to correct it.
    """
    story.append(Paragraph(text, body_style))
    
    story.append(Paragraph("3.2 Diet Recommendation Engine", h2_style))
    text2 = """
    Based on the status (Low/High), the system queries the `MEDICAL_RANGES` database.
    Each parameter entry contains specific 'foods' and 'impact' fields.
    If 'Hemoglobin' is 'Low', the UI automatically filters and displays Iron-rich foods.
    This is not AI-generated hallucination; it is a deterministic rule-based expert system for safety.
    """
    story.append(Paragraph(text2, body_style))
    
def add_theoretical_concepts():
    story.append(PageBreak())
    story.append(Paragraph("4. Theoretical Concepts & Algorithms", h1_style))
    
    story.append(Paragraph("4.1 Tesseract OCR Internal Architecture", h2_style))
    text = """
    Tesseract.js is a WebAssembly port of the Tesseract OCR engine originally developed by HP and now maintained by Google. Its core uses an <b>LSTM (Long Short-Term Memory)</b> neural network, a type of Recurrent Neural Network (RNN) well-suited for sequence prediction problems like handwriting or printed text recognition.
    <br/><br/>
    <b>How it works:</b>
    1. <b>Adaptive Thresholding:</b> Converts the color image into binary (black and white).
    2. <b>Connected Component Analysis:</b> Finds outlines of character components.
    3. <b>Line & Word Finding:</b> Organizes components into text lines and words.
    4. <b>Recognition Pass:</b> Passes character sequences through the LSTM model to predict the most likely character string.
    """
    story.append(Paragraph(text, body_style))
    
    story.append(Paragraph("4.2 Levenshtein Distance (Fuzzy Matching)", h2_style))
    text2 = """
    Since OCR is imperfect, we often use Fuzzy Matching algorithms like Levenshtein Distance to correct typos. This algorithm calculates the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.
    <br/><br/>
    <b>Example:</b> Converting 'Heamoglobin' to 'Hemoglobin'.
    <br/>
    Difference = 1 substitution ('a' -> removed).
    <br/>
    This allows our system to recognize parameter names even if Tesseract misreads a letter.
    """
    story.append(Paragraph(text2, body_style))
    
    story.append(Paragraph("4.3 LayoutLMv3 (Backend Advanced ML)", h2_style))
    text3 = """
    The project includes backend code for <b>LayoutLMv3</b>, a multimodal Transformer model by Microsoft. Unlike standard OCR which only sees text, LayoutLMv3 "sees" the document structure.
    <br/>
    It combines three embeddings:
    1. <b>Text Embedding:</b> The meaning of words.
    2. <b>Layout Embedding:</b> The (x,y) coordinates of bounding boxes.
    3. <b>Image Embedding:</b> Visual features from the document scan.
    <br/>
    This is superior for table extraction where position matters as much as text.
    """
    story.append(Paragraph(text3, body_style))

def add_viva_questions():
    story.append(PageBreak())
    story.append(Paragraph("5. Viva Voce Q&A (50+ Questions)", h1_style))
    story.append(Paragraph("Prepare for your final review with these 50 essential questions and answers.", body_style))
    story.append(Spacer(1, 0.2*inch))
    
    questions = [
        ("1. What makes this project unique/innovative?", "It runs OCR entirely in the browser (Client-side) ensuring 100% data privacy, unlike apps that send medical data to clouds."),
        ("2. Which OCR engine controls the text extraction?", "Tesseract.js, a WebAssembly port of the famous Google Tesseract engine."),
        ("3. Why did you choose React for this project?", "Its component-based architecture makes the UI modular (easy to reuse cards/tables) and its virtual DOM ensures high performance."),
        ("4. How do you handle OCR errors in numeric values?", "We use 'Range Sanity Checks'. If a value is physically impossible (e.g., Hemoglobin > 50), the system flags or discards it."),
        ("5. Is the diet recommendation AI-generated?", "No, it is a deterministic rule-based system using a curated medical database to ensure safe, proven advice."),
        ("6. What is the role of LocalStorage here?", "It stores user data (reports, profile) persistently on the device itself without needing a backend server."),
        ("7. Can this app work offline?", "Yes, because it's a PWA (Progressive Web App) capable design and Tesseract.js loads models from cache."),
        ("8. What is 'Vite' and why use it?", "Vite is a build tool that uses native ES modules for instant server start, significantly faster than Webpack."),
        ("9. Explain the data flow when a user uploads an image.", "Image -> Canvas Draw -> Tesseract API -> Text String -> Regex Parser -> State Update -> UI Render."),
        ("10. What is 'Pre-processing' in OCR context?", "Modifying the image (grayscale, contrast increasing) before sending it to OCR to improve accuracy."),
        ("11. What is the purpose of `useEffect` in your code?", "To handle side effects like triggering OCR when an image is selected, or fetching data on component mount."),
        ("12. How does the 'Router' work in React?", "React Router enables Single Page Application (SPA) behavior, changing the URL without reloading the page."),
        ("13. What is the time complexity of the parsing algorithm?", "O(N) where N is the number of lines, as we iterate through the text once to extract data."),
        ("14. Explain what 'Levenshtein Distance' is.", "A metric for measuring difference between two sequences. Used for fuzzy matching mis-spelled words."),
        ("15. What is 'LSTM' in Tesseract?", "Long Short-Term Memory, a type of Recurrent Neural Network used to recognize sequences of characters."),
        ("16. Which Hook manages the application state?", "`useState` for local component state and `useContext` (if used) for global app state."),
        ("17. How do you ensure the app is responsive?", "Using CSS media queries and Flexbox/Grid layouts in Tailwind CSS handles different screen sizes."),
        ("18. What is the difference between specific gravity and pH in urine tests?", "Specific gravity measures concentration; pH measures acidity. Both are parameters our app can track."),
        ("19. How would you scale this to a million users?", "Since it's client-side, scaling is easy. We only serve static assets via CDN. The computation burden is on user devices."),
        ("20. What is the backend folder for?", "It contains experimental Python code for training custom models (LayoutLMv3) on specific hospital formats."),
        ("21. Why use Python for the backend experiments?", "Python has the richest ecosystem for ML/AI (PyTorch, HuggingFace, OpenCV)."),
        ("22. What is 'LayoutLMv3'?", "A multimodal transformer model that understands text position (layout) and visual features, not just text."),
        ("23. How does the BMI calculator work?", "Standard formula: Weight(kg) / Height(m)^2. It also categorizes the result (Obese, Normal, etc.)."),
        ("24. What security measures are in place?", "Since no data leaves the phone, interception risk is zero. We rely on browser sandboxing."),
        ("25. How do you handle different image formats (PNG, JPG)?", "The implementation uses the HTML5 File API and Canvas, which supports standard image formats natively."),
        ("26. What is 'Confidence Score' in OCR?", "Tesseract returns a score (0-100) indicating how sure it is about a word. We can filter out low-confidence reads."),
        ("27. Can this detect handwritten reports?", "Tesseract is primarily for printed text. Handwritten recognition requires a different model (like MNIST-trained nets)."),
        ("28. What is the 'State' in React?", "An object determining how that component renders and behaves. When state changes, the component re-renders."),
        ("29. Explain 'Props' vs 'State'.", "Props are passed from parent to child (read-only); State is managed within the component (mutable)."),
        ("30. What is a 'Component Lifecycle'?", "Phases a component goes through: Mounting (birth), Updating (growth), and Unmounting (death)."),
        ("31. Why use 'Tailwind CSS'?", "It's a utility-first framework that speeds up styling by checking classes directly in HTML without separate CSS files."),
        ("32. What is 'Node.js' role here?", "It is the runtime environment used for build tools (Vite) and package management (npm)."),
        ("33. How does the PDF generation in Python work?", "We use `ReportLab`, a library that draws text and shapes onto a canvas object to create PDFs programmatically."),
        ("34. What is 'PyTorch'?", "The deep learning framework used in our backend scripts to train the LayoutLMv3 model."),
        ("35. What is 'Hugging Face'?", "A platform providing pre-trained models (like LayoutLMv3) and datasets for NLP and Computer Vision."),
        ("36. What is the main challenge in this project?", "Accuracy of OCR on low-quality or blurry mobile camera images."),
        ("37. How did you optimize performance?", "By using React.memo to prevent unnecessary re-renders and lazy loading components."),
        ("38. What is 'Prop Drilling'?", "Passing data through multiple levels of components. We avoid this by using Context or localized state."),
        ("39. Explain the folder structure.", "`src` for frontend code, `public` for static assets, `python-backend` for ML experiments."),
        ("40. What is 'npm'?", "Node Package Manager, used to install dependencies like `tesseract.js` and `react`."),
        ("41. How does the system recognize 'Haemoglobin' vs 'Hemoglobin'?", "Using fuzzy matching or simpler regex variations like /H[ae]?moglobin/."),
        ("42. What happens if a user uploads a non-medical image?", "The parser will fail to find keywords and return an error or empty result asking the user to retry."),
        ("43. Can this be turned into a mobile app?", "Yes, using Capacitor or Ionic we can wrap this web app into a native Android/iOS APK."),
        ("44. What is 'Git'?", "Version control system to track code changes and collaborate."),
        ("45. What is the benefit of 'Functional Components'?", "They are simpler, support Hooks, and have less boilerplate than Class components."),
        ("46. What is a 'Promise' in JS?", "An object representing the eventual completion (or failure) of an async operation (like OCR)."),
        ("47. How do you format the extracted dates?", "Using standard JS `Date` object or libraries like `date-fns` to normalize formats like DD/MM/YYYY."),
        ("48. What future improvements would you suggest?", "Cloud backup (optional), multi-language support, and a doctor consultation integration."),
        ("49. Does the app support Dark Mode?", "Yes, if implemented via Tailwind's `dark:` classes or CSS variables."),
        ("50. Summarize the project in one sentence.", "A privacy-first, AI-powered health assistant that turns paper blood reports into digital, actionable fitness plans.")
    ]
    
    for i, (q, a) in enumerate(questions):
        # Keep Q & A together on same page if possible
        story.append(Paragraph(q, h3_style))
        story.append(Paragraph(f"<b>Answer:</b> {a}", body_style))
        story.append(Spacer(1, 0.15*inch))
    
    story.append(PageBreak())

def add_source_code_section():
    story.append(Paragraph("6. Full Source Code Reference", h1_style))
    story.append(Paragraph("This section contains the complete source code for deep study.", body_style))
    story.append(Spacer(1, 0.5*inch))
    
    total_files = 0
    
    for root, dirs, files in os.walk(PROJECT_ROOT):
        # Filter exclusions
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in sorted(files):
            if file in EXCLUDE_FILES:
                continue
            
            ext = os.path.splitext(file)[1]
            if ext not in INCLUDE_EXTENSIONS:
                continue
            
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, PROJECT_ROOT)
            
            # Skip if it's too deep in some unexpected folder
            if "node_modules" in rel_path or ".git" in rel_path:
                continue

            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception as e:
                print(f"Skipping {rel_path}: {e}")
                continue
            
            # Header for file
            story.append(Paragraph(f"File: {rel_path}", h2_style))
            story.append(Spacer(1, 5))
            
            # Code Content (Sanitized for PDF)
            content = content.replace('\t', '    ')
            
            # Preformatted block
            code_block = Preformatted(content, code_style)
            story.append(code_block)
            story.append(Spacer(1, 0.3*inch))
            
            total_files += 1
            print(f"Added {rel_path}")

    print(f"Total files added: {total_files}")

def build_pdf():
    print("Generating PDF...")
    add_cover_page()
    add_project_overview()
    add_architecture()
    add_deep_dive_logic()
    add_theoretical_concepts()
    add_viva_questions()
    add_source_code_section()
    
    doc = SimpleDocTemplate(OUTPUT_FILENAME, pagesize=A4,
                            rightMargin=50, leftMargin=50,
                            topMargin=50, bottomMargin=50)
    
    doc.build(story)
    print(f"PDF Generated: {OUTPUT_FILENAME}")

if __name__ == "__main__":
    build_pdf()
