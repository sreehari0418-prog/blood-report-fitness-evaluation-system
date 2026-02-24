FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies for OCR and OpenCV
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose the port (Render uses $PORT)
EXPOSE 5001

# Command to run the application
CMD gunicorn --workers 1 --timeout 120 unified_api:app --bind 0.0.0.0:$PORT
