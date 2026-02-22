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

# Prompt specifically tuned for blood / pathology lab reports
EXTRACTION_PROMPT = """You are a medical document OCR expert. Extract ALL text from this blood report lab result page.

CRITICAL RULES:
1. Extract EVERY line of text exactly as printed — do not skip anything
2. For tables, output each row on its own line with values separated by spaces
3. Preserve all numbers exactly (e.g., 13.2, 4.5, 210000)
4. Include: test names, observed values, units, reference ranges
5. Include: patient name, age, sex, date if present
6. Do NOT add any commentary, interpretation or markdown — just plain extracted text

Output format: plain text exactly as it appears on the document."""


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
