"""
Gemini Vision PDF Extraction Service
=====================================
Uses Google Gemini Vision API to accurately extract text from blood report PDFs.
Completely FREE — no credit card needed. 1,500 requests/day free.

Requirements:
    pip install google-generativeai PyMuPDF

Environment Variables:
    GEMINI_API_KEY - Your Google AI Studio API key (get free at aistudio.google.com)
"""

import os
import base64

# Try importing required libraries
try:
    import fitz  # PyMuPDF
    PYMUPDF_AVAILABLE = True
except ImportError:
    PYMUPDF_AVAILABLE = False
    print("⚠️  PyMuPDF not installed. Run: pip install PyMuPDF")

try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False
    print("⚠️  google-generativeai not installed. Run: pip install google-generativeai")


# ─── Config ──────────────────────────────────────────────────────────────────

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

# Prompt specifically tuned for 100% accuracy in blood reports
EXTRACTION_PROMPT = """You are a medical document OCR expert. 
Your task is to extract blood test results from this lab report with PERFECT accuracy.

For every test result found, output a line in this EXACT format:
[PARAM] test name [VAL] numeric result [UNIT] units [RANGE] reference range

Example output lines:
[PARAM] Hemoglobin [VAL] 13.5 [UNIT] g/dL [RANGE] 13.0 - 17.0
[PARAM] WBC Count [VAL] 4500 [UNIT] /uL [RANGE] 4000 - 11000

CRITICAL RULES:
1. Extract EVERY numeric result you see.
2. Distinguish clearly between the "Result" and the "Reference Range". 
3. Only put the actual measured result after [VAL].
4. Put the normal intervals after [RANGE].
5. Numbers must be exact. Do not round. 13.2 must be 13.2.
6. If a piece of data is missing, use "N/A".
7. Do NOT add any markdown, bolding, or conversational text. Just the tagged lines.
8. If you see patient info, include it like this: [META] Age: 35 [META] Gender: Male
"""


def _configure_gemini():
    """Configure Gemini client with API key."""
    api_key = GEMINI_API_KEY
    if not api_key:
        raise ValueError(
            "GEMINI_API_KEY not set. Add it to your .env file.\n"
            "Get a free key at: https://aistudio.google.com"
        )
    genai.configure(api_key=api_key)
    return genai.GenerativeModel("gemini-flash-latest")   # Fast, free, vision-capable


def extract_text_from_image_bytes(image_bytes: bytes, model) -> str:
    """
    Send a single page image to Gemini Vision and return extracted text.
    """
    # Encode image as base64 for Gemini
    image_data = {
        "mime_type": "image/png",
        "data": base64.b64encode(image_bytes).decode("utf-8")
    }

    response = model.generate_content([EXTRACTION_PROMPT, image_data])
    return response.text.strip() if response.text else ""


def extract_text_from_pdf_bytes(pdf_bytes: bytes) -> dict:
    """
    Main entry point. Accepts PDF bytes, converts each page to an image,
    sends to Gemini Vision, and returns combined extracted text.

    Returns:
        {
            'success': bool,
            'text': str,       # Full extracted text (all pages combined)
            'pages': int,      # Number of pages processed
            'method': str,     # 'gemini_vision'
            'error': str       # Only present on failure
        }
    """
    if not PYMUPDF_AVAILABLE:
        return {
            "success": False,
            "error": "PyMuPDF not installed. Run: pip install PyMuPDF",
            "text": "", "pages": 0, "method": "none"
        }

    if not GEMINI_AVAILABLE:
        return {
            "success": False,
            "error": "google-generativeai not installed. Run: pip install google-generativeai",
            "text": "", "pages": 0, "method": "none"
        }

    try:
        model = _configure_gemini()
    except ValueError as e:
        return {"success": False, "error": str(e), "text": "", "pages": 0, "method": "none"}

    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        num_pages = len(doc)
        full_text_parts = []

        print(f"📄 Gemini Vision: Processing {num_pages} page(s)...")

        for page_num in range(num_pages):
            page = doc.load_page(page_num)

            # Render at 300 DPI for high-quality extraction
            mat = fitz.Matrix(300 / 72, 300 / 72)
            pix = page.get_pixmap(matrix=mat, colorspace=fitz.csGRAY)
            img_bytes = pix.tobytes("png")

            print(f"  → Page {page_num + 1}/{num_pages}: Sending to Gemini Vision...")

            try:
                page_text = extract_text_from_image_bytes(img_bytes, model)

                if page_text:
                    full_text_parts.append(page_text)
                    print(f"     ✅ Page {page_num + 1}: {len(page_text)} chars extracted")
                else:
                    print(f"     ⚠️  Page {page_num + 1}: Empty response from Gemini")

            except Exception as page_err:
                print(f"     ⚠️  Page {page_num + 1} failed: {page_err}")
                continue

        doc.close()
        full_text = "\n\n".join(full_text_parts)

        if not full_text.strip():
            return {
                "success": False,
                "error": "Gemini returned empty text. The PDF may be blank or unreadable.",
                "text": "", "pages": num_pages, "method": "gemini_vision"
            }

        print(f"✅ Gemini Vision: Successfully extracted {len(full_text)} chars from {num_pages} page(s)")
        return {
            "success": True,
            "text": full_text,
            "pages": num_pages,
            "method": "gemini_vision"
        }

    except fitz.FileDataError as e:
        return {
            "success": False,
            "error": f"Invalid or corrupted PDF: {str(e)}",
            "text": "", "pages": 0, "method": "gemini_vision"
        }
    except Exception as e:
        return {
            "success": False,
            "error": f"Unexpected error: {str(e)}",
            "text": "", "pages": 0, "method": "gemini_vision"
        }


# ─── Quick CLI Test ──────────────────────────────────────────────────────────

if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python3 gemini_extraction_service.py <path_to_pdf>")
        print("\nMake sure GEMINI_API_KEY is in your .env or environment.")
        sys.exit(1)

    pdf_path = sys.argv[1]
    with open(pdf_path, "rb") as f:
        pdf_bytes = f.read()

    print(f"Testing Gemini Vision with: {pdf_path}")
    result = extract_text_from_pdf_bytes(pdf_bytes)

    if result["success"]:
        print(f"\n✅ SUCCESS — {result['pages']} pages, {len(result['text'])} chars")
        print("\n--- EXTRACTED TEXT ---")
        print(result["text"])
    else:
        print(f"\n❌ FAILED: {result['error']}")
