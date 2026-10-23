import re
import os
from PIL import Image

bold_file = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/src/components/gallery/BoldSection.tsx'
with open(bold_file, 'r', encoding='utf-8') as f:
    text = f.read()

images = re.findall(r'/pictures/BlackModels/[^"]+\.webp', text)
unique_images = sorted(list(set(images)))
print(f"Total unique images referenced in BoldSection: {len(unique_images)}")

base_dir = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/public'
total_bytes = 0
total_pixels = 0

for rel in unique_images:
    full_path = os.path.join(base_dir, rel.lstrip('/'))
    if os.path.exists(full_path):
        size_kb = os.path.getsize(full_path) / 1024
        total_bytes += os.path.getsize(full_path)
        with Image.open(full_path) as im:
            w, h = im.size
            total_pixels += w * h
            if w > 2000 or h > 2000 or size_kb > 500:
                print(f"HEAVY: {os.path.basename(full_path)}: {w}x{h} ({size_kb:.1f} KB)")

print(f"\nTotal file size: {total_bytes / (1024*1024):.2f} MB")
print(f"Total raw pixel texture memory: {(total_pixels * 4) / (1024*1024):.2f} MB of VRAM")
