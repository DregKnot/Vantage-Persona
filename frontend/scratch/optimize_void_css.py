css_path = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/src/styles/gallery.css'
ts_path = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/src/styles/galleryStyles.ts'

with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

old_overlay = """.void-stream-thumb::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(145deg, rgba(214, 180, 120, 0.42) 0%, rgba(225, 110, 45, 0.25) 60%, rgba(212, 175, 55, 0.35) 100%);
    mix-blend-mode: color;
    opacity: 0;
    will-change: opacity;
    transition: opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
}"""

new_overlay = """.void-stream-thumb::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(145deg, rgba(214, 180, 120, 0.25) 0%, rgba(225, 110, 45, 0.15) 60%, rgba(212, 175, 55, 0.2) 100%);
    opacity: 0.3;
    pointer-events: none;
}

.void-thumb-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.6) 100%);
    pointer-events: none;
}"""

if old_overlay in css:
    css = css.replace(old_overlay, new_overlay)
    print("Replaced old_overlay (LF)!")
elif old_overlay.replace('\n', '\r\n') in css:
    css = css.replace(old_overlay.replace('\n', '\r\n'), new_overlay)
    print("Replaced old_overlay (CRLF)!")
else:
    print("Notice: overlay rule already updated.")

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write('// Automatically extracted internal CSS for Gallery Page\nexport const galleryStyles: string = `' + css.replace('`', '\\`') + '`;\n')

print("SUCCESS: void CSS optimized and galleryStyles synced!")
