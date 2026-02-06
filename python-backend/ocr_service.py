"""
Backend OCR Service
Provides enhanced OCR endpoint with preprocessing and ML correction.
Uses pytesseract (lightweight) instead of EasyOCR/PaddleOCR.
"""

from flask import request, jsonify
import cv2
import numpy as np
from PIL import Image
import io
import subprocess
import os

# Import our custom modules
from ocr_correction_model import OCRCorrector
from table_detector import TableDetector

def enhance_image_for_ocr(image_bytes):
    """
    Apply advanced preprocessing to improve OCR accuracy.
    """
    # Convert bytes to numpy array
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    # 1. Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # 2. Upscale 2x for better resolution
    height, width = gray.shape
    upscaled = cv2.resize(gray, (width * 2, height * 2), interpolation=cv2.INTER_CUBIC)
    
    # 3. Denoise
    denoised = cv2.fastNlMeansDenoising(upscaled, None, h=10, templateWindowSize=7, searchWindowSize=21)
    
    # 4. Adaptive thresholding (better than simple binary)
    thresh = cv2.adaptiveThreshold(
        denoised, 255, 
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
        cv2.THRESH_BINARY, 
        11, 2
    )
    
    # 5. Deskew (if needed)
    # This is complex, skipping for now
    
    # 6. Morphological operations to remove noise
    kernel = np.ones((1, 1), np.uint8)
    processed = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
    
    return processed

def perform_ocr(image_bytes):
    """
    Perform OCR using pytesseract with enhanced preprocessing.
    """
    try:
        # Preprocess image
        processed_img = enhance_image_for_ocr(image_bytes)
        
        # Save temporarily
        temp_path = '/tmp/ocr_temp.png'
        cv2.imwrite(temp_path, processed_img)
        
        # Run tesseract
        result = subprocess.run(
            ['tesseract', temp_path, 'stdout', '--psm', '6'],
            capture_output=True,
            text=True
        )
        
        text = result.stdout
        
        # Calculate confidence (simple heuristic)
        confidence = min(100, len(text) * 2)  # Rough estimate
        
        # Clean up
        if os.path.exists(temp_path):
            os.remove(temp_path)
        
        return {
            'text': text,
            'confidence': confidence,
            'method': 'tesseract_enhanced'
        }
        
    except Exception as e:
        return {
            'text': '',
            'confidence': 0,
            'error': str(e)
        }

def create_ocr_endpoint(app):
    """
    Add /ocr endpoint to Flask app.
    """
    
    @app.route('/ocr', methods=['POST'])
    def ocr_image():
        """
        Enhanced OCR endpoint with preprocessing and ML correction.
        
        Request: multipart/form-data with 'image' file
        Response: JSON with text, confidence, and corrected values
        """
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400
        
        file = request.files['image']
        image_bytes = file.read()
        
        print("📸 Processing image for OCR...")
        
        # 1. Perform OCR
        ocr_result = perform_ocr(image_bytes)
        
        if 'error' in ocr_result:
            return jsonify({'error': ocr_result['error']}), 500
        
        raw_text = ocr_result['text']
        confidence = ocr_result['confidence']
        
        print(f"✓ OCR completed (confidence: {confidence}%)")
        print(f"  Extracted {len(raw_text)} characters")
        
        # 2. Detect table structure
        detector = TableDetector()
        lines = raw_text.split('\n')
        table_data = detector.parse_table(lines)
        medical_params = detector.map_to_medical_parameters(table_data)
        
        print(f"✓ Table detection completed: {len(medical_params)} parameters")
        
        # 3. Apply ML correction
        corrector = OCRCorrector()
        corrected_values = corrector.batch_correct(medical_params)
        
        # Count corrections
        corrections_made = sum(1 for v in corrected_values.values() if v.get('corrected'))
        print(f"✓ ML correction applied: {corrections_made} values corrected")
        
        # 4. Format response
        response = {
            'success': True,
            'raw_text': raw_text,
            'confidence': confidence,
            'detected_values': {
                k: v['value'] for k, v in corrected_values.items()
            },
            'corrections': {
                k: {
                    'value': v['value'],
                    'was_corrected': v['corrected'],
                    'reason': v.get('reason', '')
                } 
                for k, v in corrected_values.items() if v.get('corrected')
            },
            'table_structure': table_data[:3] if table_data else [],  # Sample
            'stats': {
                'parameters_found': len(medical_params),
                'corrections_made': corrections_made,
                'extraction_method': 'table_detection'
            }
        }
        
        return jsonify(response)
    
    return app

# Test function
if __name__ == "__main__":
    print("✅ OCR endpoint module ready")
    print("To use: from ocr_service import create_ocr_endpoint")
    print("        app = create_ocr_endpoint(app)")
