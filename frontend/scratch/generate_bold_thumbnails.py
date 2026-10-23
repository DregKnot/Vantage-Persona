import os
from PIL import Image

src_dir = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/public/pictures/BlackModels'
thumbs_dir = os.path.join(src_dir, 'thumbs')
micro_dir = os.path.join(src_dir, 'micro')

os.makedirs(thumbs_dir, exist_ok=True)
os.makedirs(micro_dir, exist_ok=True)

count = 0
for f in os.listdir(src_dir):
    if f.endswith('.webp') and not os.path.isdir(os.path.join(src_dir, f)):
        src_path = os.path.join(src_dir, f)
        thumb_path = os.path.join(thumbs_dir, f)
        micro_path = os.path.join(micro_dir, f)
        
        try:
            with Image.open(src_path) as im:
                if im.mode != 'RGB':
                    im = im.convert('RGB')
                
                # 1. Grid Card Thumbnail (max 720px on longest edge)
                w, h = im.size
                scale_thumb = 720.0 / max(w, h)
                if scale_thumb < 1.0:
                    thumb_im = im.resize((int(w * scale_thumb), int(h * scale_thumb)), Image.Resampling.LANCZOS)
                else:
                    thumb_im = im
                thumb_im.save(thumb_path, 'WEBP', quality=82, method=4)
                
                # 2. Chamber Stream Micro Thumbnail (max 320px on longest edge)
                scale_micro = 320.0 / max(w, h)
                if scale_micro < 1.0:
                    micro_im = im.resize((int(w * scale_micro), int(h * scale_micro)), Image.Resampling.LANCZOS)
                else:
                    micro_im = im
                micro_im.save(micro_path, 'WEBP', quality=78, method=4)
                
                count += 1
        except Exception as e:
            print(f"Error on {f}: {e}")

print(f"Generated {count} optimized grid thumbnails and micro thumbnails!")
