import os
from PIL import Image

models_dir = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/public/pictures/BlackModels'
thumbs_dir = os.path.join(models_dir, 'thumbs')
micro_dir = os.path.join(models_dir, 'micro')

os.makedirs(thumbs_dir, exist_ok=True)
os.makedirs(micro_dir, exist_ok=True)

processed_master = 0
processed_thumbs = 0
processed_micro = 0

master_orig_bytes = 0
master_new_bytes = 0

files = [f for f in os.listdir(models_dir) if f.endswith('.webp') and not os.path.isdir(os.path.join(models_dir, f))]

print(f"Starting master compression pipeline for {len(files)} models...")

for f in files:
    src_path = os.path.join(models_dir, f)
    thumb_path = os.path.join(thumbs_dir, f)
    micro_path = os.path.join(micro_dir, f)
    
    orig_size = os.path.getsize(src_path)
    master_orig_bytes += orig_size
    
    try:
        with Image.open(src_path) as im:
            if im.mode != 'RGB':
                im = im.convert('RGB')
            w, h = im.size
            
            # 1. OPTIMIZE MASTER ORIGINAL (Studio 4K standard: max 2560px @ 88q, method=6)
            max_dim = max(w, h)
            if max_dim > 2560:
                scale_master = 2560.0 / max_dim
                master_im = im.resize((int(w * scale_master), int(h * scale_master)), Image.Resampling.LANCZOS)
            else:
                master_im = im.copy()
            
            # Save master directly with ultra-high fidelity quality=88, method=6
            master_im.save(src_path, 'WEBP', quality=88, method=6)
            master_new_bytes += os.path.getsize(src_path)
            processed_master += 1
            
            # 2. GENERATE ULTRA-RETINA GRID THUMBNAIL (Max 960px @ 88q, method=6)
            # 960px is the mathematical sweet spot for 2x/3x Retina screens displaying 350-450px cards
            scale_thumb = 960.0 / max(w, h)
            if scale_thumb < 1.0:
                thumb_im = im.resize((int(w * scale_thumb), int(h * scale_thumb)), Image.Resampling.LANCZOS)
            else:
                thumb_im = im.copy()
            thumb_im.save(thumb_path, 'WEBP', quality=88, method=6)
            processed_thumbs += 1
            
            # 3. GENERATE STREAM MICRO-THUMBNAIL (Max 360px @ 82q, method=6)
            # Lightweight 12-15 KB for 120 FPS infinite marquee & 3D spiral vortex
            scale_micro = 360.0 / max(w, h)
            if scale_micro < 1.0:
                micro_im = im.resize((int(w * scale_micro), int(h * scale_micro)), Image.Resampling.LANCZOS)
            else:
                micro_im = im.copy()
            micro_im.save(micro_path, 'WEBP', quality=82, method=6)
            processed_micro += 1
            
    except Exception as e:
        print(f"Error processing {f}: {e}")

print("\n================ COMPRESSION RESULTS ================")
print(f"Masters optimized: {processed_master}")
print(f"Original Master Total Size: {master_orig_bytes / (1024*1024):.2f} MB")
print(f"Optimized Master Total Size: {master_new_bytes / (1024*1024):.2f} MB ({(1 - master_new_bytes/master_orig_bytes)*100:.1f}% reduction)")
print(f"Ultra-Retina 960px Thumbs generated: {processed_thumbs}")
print(f"Stream Micro Thumbs generated: {processed_micro}")

thumb_bytes = sum(os.path.getsize(os.path.join(thumbs_dir, f)) for f in os.listdir(thumbs_dir) if f.endswith('.webp'))
micro_bytes = sum(os.path.getsize(os.path.join(micro_dir, f)) for f in os.listdir(micro_dir) if f.endswith('.webp'))

print(f"Total Grid Thumbs folder: {thumb_bytes / (1024*1024):.2f} MB (~{thumb_bytes/(1024*processed_thumbs):.1f} KB / card)")
print(f"Total Stream Micro folder: {micro_bytes / (1024*1024):.2f} MB (~{micro_bytes/(1024*processed_micro):.1f} KB / item)")
print("=====================================================")
