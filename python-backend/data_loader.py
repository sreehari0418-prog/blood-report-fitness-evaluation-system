import os
from datasets import load_dataset
from PIL import Image
from tqdm import tqdm

# Configuration
DATASET_NAMES = [
    "naive-bayes/medical-report-ocr-dataset",  # Fictional example name, replace with real found datasets
    "nielsr/doclaynet",  # Great for layout analysis
]
SAVE_DIR = "dataset/raw_images"

def download_datasets():
    """
    Downloads medical report datasets from Hugging Face and saves images locally.
    """
    if not os.path.exists(SAVE_DIR):
        os.makedirs(SAVE_DIR)
    
    print(f"🚀 Starting download for datasets: {DATASET_NAMES}")

    for ds_name in DATASET_NAMES:
        try:
            print(f"📥 Loading {ds_name}...")
            # Streaming=True allows downloading without saving huge layout files immediately
            dataset = load_dataset(ds_name, split="train", streaming=True)
            
            count = 0
            limit = 500 # Download 500 images per dataset

            for i, item in enumerate(tqdm(dataset)):
                if count >= limit:
                    break
                
                # Check for image key (datasets vary)
                if 'image' in item:
                    image = item['image']
                elif 'file_name' in item:
                    # Logic to fetch file if path is given
                    continue
                else:
                    continue

                # Save Image
                img_path = os.path.join(SAVE_DIR, f"{ds_name.replace('/', '_')}_{i}.jpg")
                
                # Convert to RGB to avoid mode errors
                if image.mode != "RGB":
                    image = image.convert("RGB")
                    
                image.save(img_path)
                count += 1
            
            print(f"✅ Successfully downloaded {count} images from {ds_name}")

        except Exception as e:
            print(f"❌ Error downloading {ds_name}: {e}")

if __name__ == "__main__":
    download_datasets()
