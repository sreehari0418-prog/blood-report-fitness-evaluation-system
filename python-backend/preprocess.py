import cv2
import numpy as np
import os
from PIL import Image

def preprocess_image(image_path, output_path=None):
    """
    Applies medical document specific preprocessing:
    - Grayscale conversion
    - Gaussian blur (denoising)
    - Adaptive Thresholding (binarization)
    - Skew correction (deskewing)
    """
    # 1. Read Image
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError(f"Image not found at {image_path}")

    # 2. Grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 3. Denoise
    # fastNlMeansDenoising is great for text documents
    denoised = cv2.fastNlMeansDenoising(gray, None, 10, 7, 21)

    # 4. Thresholding (Binarization)
    # Adaptive thresholding handles shadows/uneven lighting better than simple threshold
    thresh = cv2.adaptiveThreshold(
        denoised, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
        cv2.THRESH_BINARY, 11, 2
    )

    # 5. Skew Correction (Deskewing)
    coords = np.column_stack(np.where(thresh > 0))
    angle = cv2.minAreaRect(coords)[-1]
    
    # Adjust angle logic
    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle
        
    (h, w) = img.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    rotated = cv2.warpAffine(thresh, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)

    # Save or Return
    if output_path:
        cv2.imwrite(output_path, rotated)
        print(f"✅ Preprocessed saved to {output_path}")
    
    return rotated

if __name__ == "__main__":
    # Test on dummy image
    # preprocess_image("dataset/raw_images/sample.jpg", "dataset/processed/sample_clean.jpg")
    print("Preprocess module ready.")
