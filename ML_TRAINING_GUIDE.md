# How to Train the ML Model with 1000 Images

To train the advanced Python-based model (LayoutLMv3) with your own dataset, follow these steps.

## 1. Organize Your Images
1.  Navigate to `python-backend/dataset`.
2.  Create a folder named `images` and paste all **1000 blood report images** there.
    ```bash
    mkdir -p python-backend/dataset/images
    # Copy your files here
    ```

## 2. Label Your Data (Critical Step)
Machine Learning models don't learn from images alone; they need to know *what* is in them. You need to create a JSON file that tells the model where the text is.

**Option A: Automatic (Weak Supervision - Recommended for Speed)**
Since we have a good Rule-Based engine (the Browser logic), we can use it to "pre-label" your images.
1.  I can write a script to run OCR on all 1000 images.
2.  It will find text like "Hemoglobin: 13.5" and create a label for it.
3.  This saves you from drawing 1000 boxes manually.

**Option B: Manual (High Accuracy)**
Use a tool like [Label Studio](https://labelstud.io/) to draw boxes around "Test Name" and "Value" for all 1000 images. This takes time (approx 10-20 hours) but gives the best results.

## 3. Environment Setup
You need to install the heavy AI libraries. run:
```bash
cd python-backend
pip install -r requirements.txt
pip install torch torchvision torchaudio
pip install transformers datasets seqeval
```

## 4. Run Training
Once images are in `dataset/images` and labels are in `dataset/labels.json`, run:
```bash
python train.py
```
This will start using your computer's CPU/GPU to learn from the 1000 images. It may take several hours.

## Next Step
**Do you have the 1000 images ready in a folder?**
If yes, I can write the "Pre-Labeling Script" to automatically generate the labels for you so you can start training immediately.
