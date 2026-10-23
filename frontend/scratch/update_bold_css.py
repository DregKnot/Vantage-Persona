import os

css_path = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/src/styles/gallery.css'
ts_path = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/src/styles/galleryStyles.ts'

with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update .bold-abstract-grid and .abstract-card styles
old_grid_block = """/* The Abstract Grid Inside */
.bold-abstract-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
    padding: 0 5%;
    width: 100%;
}

.abstract-card {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    background: rgba(22, 17, 13, 0.78);
    border: 1px solid rgba(214, 180, 120, 0.18);
    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
}

.abstract-card:hover {
    transform: translateY(-8px);
    border-color: rgba(214, 180, 120, 0.65);
    box-shadow: 0 22px 55px rgba(0, 0, 0, 0.65), 0 0 35px rgba(212, 175, 55, 0.18);
}

.abstract-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(80%) contrast(1.1);
    transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.abstract-card:hover img {
    filter: grayscale(0%) contrast(1.02);
    transform: scale(1.05);
}

/* Asymmetric Grid Layout Variants */
.abstract-card.tall-monolith {
    grid-row: span 2;
    min-height: 640px;
}

.abstract-card.wide-panorama {
    grid-column: span 2;
    min-height: 330px;
}

.abstract-card.offset-down {
    margin-top: 55px;
    min-height: 440px;
}

.abstract-card.offset-up {
    margin-top: -30px;
    min-height: 430px;
}

.abstract-card.standard {
    min-height: 390px;
}

.abstract-card.focus-square {
    aspect-ratio: 1 / 1;
    min-height: 320px;
}"""

new_grid_block = """/* The Abstract Grid Inside - High-Density Dense Packing (Zero Gaps) */
.bold-abstract-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense; /* Automatically backfills any vacant cell so zero empty spaces appear */
    gap: 20px;
    padding: 0 4%;
    width: 100%;
    box-sizing: border-box;
}

.abstract-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(22, 17, 13, 0.85);
    border: 1px solid rgba(214, 180, 120, 0.18);
    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    content-visibility: auto; /* Browser optimization: skips paint work for off-screen cards */
    contain-intrinsic-size: 340px;
}

.abstract-card:hover {
    transform: translateY(-5px);
    border-color: rgba(214, 180, 120, 0.65);
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.65), 0 0 25px rgba(212, 175, 55, 0.18);
}

.abstract-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(80%) contrast(1.1);
    transition: filter 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.abstract-card:hover img {
    filter: grayscale(0%) contrast(1.02);
    transform: scale(1.04);
}

/* 1. Marquee Hero Monolith (Reduced to only 2 marquee anchors) */
.abstract-card.tall-monolith {
    grid-row: span 2;
    min-height: 560px;
}

/* 2. Panoramic Widescreen Cut (Reduced to only 2 cinematic breathers) */
.abstract-card.wide-panorama {
    grid-column: span 2;
    min-height: 280px;
    aspect-ratio: 16 / 9;
}

/* 3. Standard Portrait Card (Primary backbone) */
.abstract-card.standard {
    min-height: 350px;
    aspect-ratio: 3 / 4;
}

/* 4. Compact Tiles & Focus Squares (Smaller grids that pack densely) */
.abstract-card.compact-tile,
.abstract-card.focus-square {
    min-height: 260px;
    aspect-ratio: 1 / 1;
}

/* Reset legacy offsets to ensure clean aligned packing */
.abstract-card.offset-down,
.abstract-card.offset-up {
    margin-top: 0 !important;
    min-height: 340px;
}"""

if old_grid_block in css:
    css = css.replace(old_grid_block, new_grid_block)
    print("Replaced old_grid_block successfully!")
else:
    print("Warning: old_grid_block exact match not found, checking line endings...")
    old_grid_block_crlf = old_grid_block.replace('\n', '\r\n')
    if old_grid_block_crlf in css:
        css = css.replace(old_grid_block_crlf, new_grid_block)
        print("Replaced old_grid_block (CRLF) successfully!")
    else:
        print("Error: Could not locate grid block!")
        exit(1)

# 2. Fix the nested keyframes syntax error around voidStreamScroll
old_keyframes = """@keyframes voidStreamScroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(-33.333333%); }

@keyframes voidStreamScrollHorizontal {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333333%); }
}
}"""

new_keyframes = """@keyframes voidStreamScroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(-33.333333%); }
}

@keyframes voidStreamScrollHorizontal {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333333%); }
}"""

if old_keyframes in css:
    css = css.replace(old_keyframes, new_keyframes)
    print("Fixed nested @keyframes successfully!")
elif old_keyframes.replace('\n', '\r\n') in css:
    css = css.replace(old_keyframes.replace('\n', '\r\n'), new_keyframes)
    print("Fixed nested @keyframes (CRLF) successfully!")
else:
    print("Note: keyframes already clean or slightly different.")

# Write to gallery.css
with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

# Sync to galleryStyles.ts
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write('// Automatically extracted internal CSS for Gallery Page\nexport const galleryStyles: string = `' + css.replace('`', '\\`') + '`;\n')

print("SUCCESS: Updated gallery.css and synchronized galleryStyles.ts!")
