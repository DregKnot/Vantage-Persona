import os

css_path = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/src/styles/gallery.css'
ts_path = 'c:/Users/Dreonite/Documents/Vantage Persona/frontend/src/styles/galleryStyles.ts'

with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

target = '/* Section 6: Pinned Wedding Parallax */'
idx = content.find(target)
if idx == -1:
    print('Error: Target not found!')
    exit(1)

new_styles = """/* =========================================================================
   ACT III: THE WEDDING COLLECTION (MONUMENTAL ATELIER)
   - Blurred Venue Background Slideshow
   - Digital Procedural Wooden Log spanning End-to-End
   - Golden Strings with Sparkling Glitter Emitters
   - Suspended Couture Wedding Cards dripping Gold Dust
   - Center Editorial: "A Priceless Moment"
   - Liquid Gold River flowing horizontally off-screen
   ========================================================================= */

.wedding-monumental-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #000000;
    color: #ffffff;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 30px;
    box-sizing: border-box;
}

/* 1. Background: Softly Blurred Venue Slideshow & Vignette */
.wedding-venue-bg-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.wedding-venue-bg-slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center 30%;
    opacity: 0;
    transform: scale(1.0);
    transition: opacity 2s cubic-bezier(0.4, 0, 0.2, 1), transform 8s ease-out;
    filter: blur(8px) brightness(0.35) saturate(1.25);
    will-change: opacity, transform;
}

.wedding-venue-bg-slide.is-active {
    opacity: 1;
    transform: scale(1.05);
}

.wedding-venue-blur-layer {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(3px);
    pointer-events: none;
}

.wedding-vignette-overlay {
    position: absolute;
    inset: 0;
    background: 
        radial-gradient(ellipse 95% 75% at 50% 35%, rgba(15, 12, 8, 0.12) 0%, rgba(8, 6, 4, 0.65) 60%, rgba(0, 0, 0, 0.92) 88%, #000000 100%),
        linear-gradient(to bottom, transparent 55%, rgba(0, 0, 0, 0.85) 82%, #000000 100%);
    pointer-events: none;
}

/* 2. Horizontal Digital Wooden Log (Covers End to End Horizontally) */
.wedding-wood-log-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 68px;
    z-index: 15;
    pointer-events: none;
    overflow: visible;
}

.wedding-wood-log-svg {
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.95));
}

.wedding-wood-underglow {
    position: absolute;
    bottom: -22px;
    left: 0;
    width: 100%;
    height: 38px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
    pointer-events: none;
}

/* 3. Full-Stage Particle Canvas (Glitter, Drips, Flowing River) */
.wedding-dust-river-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    pointer-events: none;
}

/* 4. Main Atelier Stage Grid */
.wedding-stage-container {
    position: relative;
    z-index: 10;
    max-width: 1640px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 72px 3% 80px;
    display: grid;
    grid-template-columns: 290px 1fr 290px;
    gap: 36px;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
}

/* Suspended Columns */
.wedding-suspended-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4px;
}

/* Golden Strings */
.wedding-golden-string {
    position: relative;
    width: 3px;
    height: 85px;
    margin: 0 auto;
    background: linear-gradient(
        180deg,
        #aa7c11 0%,
        #ffd700 28%,
        #fff7d6 50%,
        #d4af37 75%,
        #825907 100%
    );
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.45);
    z-index: 12;
}

.string-glimmer-line {
    position: absolute;
    top: 0;
    left: -1px;
    width: 5px;
    height: 24px;
    background: linear-gradient(to bottom, transparent, #ffffff 50%, transparent);
    border-radius: 3px;
    animation: cordGlint 3.2s ease-in-out infinite;
}

.string-ring-connector {
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2.5px solid #ffd700;
    background: #1c140a;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
}

@keyframes cordGlint {
    0% { top: -15%; opacity: 0; }
    30% { opacity: 1; }
    100% { top: 105%; opacity: 0; }
}

/* Natural Pendulum Sway Physics */
@keyframes cardSwayLeft {
    0% { transform: rotate(-1.4deg); }
    50% { transform: rotate(1.2deg); }
    100% { transform: rotate(-1.4deg); }
}

@keyframes cardSwayRight {
    0% { transform: rotate(1.4deg); }
    50% { transform: rotate(-1.2deg); }
    100% { transform: rotate(1.4deg); }
}

@keyframes cardSwayCenter {
    0% { transform: rotate(-0.7deg); }
    50% { transform: rotate(0.7deg); }
    100% { transform: rotate(-0.7deg); }
}

/* Suspended Cards */
.wedding-hanging-card {
    position: relative;
    width: 100%;
    transform-origin: top center;
    transition: transform 0.4s ease, filter 0.4s ease;
    user-select: none;
}

.card-left {
    animation: cardSwayLeft 5.4s ease-in-out infinite alternate;
    cursor: pointer;
}

.card-right {
    animation: cardSwayRight 5.8s ease-in-out infinite alternate;
    cursor: pointer;
}

.card-center {
    animation: cardSwayCenter 6.6s ease-in-out infinite alternate;
    max-width: 540px;
    margin: 0 auto;
}

.wedding-hanging-card:hover {
    filter: brightness(1.08);
}

.card-left:hover, .card-right:hover {
    transform: scale(1.03) rotate(0deg) !important;
}

/* Card Ornate Frame */
.card-ornate-frame {
    position: relative;
    border: 1.5px solid rgba(212, 175, 55, 0.45);
    border-radius: 14px;
    background: rgba(14, 11, 8, 0.82);
    backdrop-filter: blur(16px);
    padding: 10px;
    box-shadow: 
        0 24px 50px rgba(0, 0, 0, 0.8),
        0 0 35px rgba(212, 175, 55, 0.12),
        inset 0 1px 1px rgba(255, 255, 255, 0.15);
    overflow: hidden;
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.card-ornate-frame:hover {
    border-color: rgba(255, 215, 0, 0.8);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.9),
        0 0 45px rgba(255, 215, 0, 0.22),
        inset 0 1px 2px rgba(255, 255, 255, 0.25);
}

.hero-frame {
    border: 2px solid rgba(212, 175, 55, 0.65);
    padding: 14px;
    box-shadow: 
        0 32px 65px rgba(0, 0, 0, 0.85),
        0 0 45px rgba(212, 175, 55, 0.18),
        inset 0 1px 2px rgba(255, 255, 255, 0.2);
}

/* Gold Corner Accents */
.card-corner-ornament {
    position: absolute;
    color: #ffd700;
    font-size: 0.85rem;
    line-height: 1;
    text-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
    pointer-events: none;
    z-index: 5;
}

.card-corner-ornament.top-left { top: 6px; left: 8px; }
.card-corner-ornament.top-right { top: 6px; right: 8px; }
.card-corner-ornament.bottom-left { bottom: 6px; left: 8px; }
.card-corner-ornament.bottom-right { bottom: 6px; right: 8px; }

/* Card Image Box */
.card-image-box {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4.2;
    border-radius: 9px;
    overflow: hidden;
    background-color: #000;
}

.card-image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.wedding-hanging-card:hover .card-image-box img {
    transform: scale(1.04);
}

.hero-image-box {
    aspect-ratio: 3 / 3.8;
}

.card-inner-vignette {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        transparent 30%,
        rgba(0, 0, 0, 0.25) 70%,
        rgba(0, 0, 0, 0.65) 100%
    );
    pointer-events: none;
}

/* Floating Hero Badge */
.hero-floating-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(14, 11, 8, 0.85);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 175, 55, 0.4);
    border-radius: 20px;
    padding: 6px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: #ffd700;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
}

.badge-divider {
    color: rgba(255, 255, 255, 0.2);
}

.badge-silhouette {
    color: #ffffff;
    font-weight: 500;
}

/* Card Brass Plaque */
.card-brass-plaque {
    padding: 12px 6px 4px;
    text-align: center;
}

.card-num-tag {
    display: block;
    font-size: 0.70rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #d4af37;
    margin-bottom: 2px;
}

.card-title-tag {
    display: block;
    font-family: var(--font-cormorant), 'Cinzel', serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hero-plaque {
    padding: 16px 8px 6px;
    text-align: left;
}

.plaque-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
}

.plaque-tag {
    font-weight: 700;
    color: #d4af37;
}

.plaque-fabric {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.70rem;
}

.plaque-title {
    font-family: var(--font-cormorant), 'Cinzel', serif;
    font-size: 1.55rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 4px;
    letter-spacing: 0.03em;
}

.plaque-subtitle {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
    line-height: 1.4;
}

/* Card Dust Drip Lip (Visual Anchor for Particles) */
.card-dust-drip-lip {
    position: absolute;
    bottom: -1px;
    left: 15%;
    width: 70%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ffd700, #ffffff, #ffd700, transparent);
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.7);
    border-radius: 1px;
}

/* =========================================================================
   CENTER EDITORIAL: "A PRICELESS MOMENT"
   ========================================================================= */
.wedding-center-dossier-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 4px;
}

.wedding-editorial-dossier {
    max-width: 720px;
    margin: 0 auto 28px;
    padding: 0 16px;
}

.wedding-eyebrow-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(212, 175, 55, 0.12);
    border: 1px solid rgba(212, 175, 55, 0.35);
    padding: 6px 16px;
    border-radius: 24px;
    margin-bottom: 16px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
}

.badge-sparkle {
    color: #ffd700;
    font-size: 0.75rem;
}

.badge-text {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: #f7e2a9;
    text-transform: uppercase;
}

.wedding-monumental-heading {
    font-family: var(--font-cormorant), 'Cinzel', serif;
    font-size: clamp(2.6rem, 4.4vw, 4.3rem);
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.1;
    margin: 0 0 16px;
    background: linear-gradient(135deg, #ffffff 25%, #f6e6be 65%, #d4af37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
}

.wedding-manifesto-text {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    max-width: 640px;
    margin: 0 auto 24px;
    font-weight: 300;
    letter-spacing: 0.015em;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.wedding-pillars-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 8px;
}

.pillar-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 5px 14px;
    border-radius: 16px;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.05em;
}

.pillar-dot {
    color: #ffd700;
    font-size: 0.65rem;
}

/* Navigation Dock & Arrows */
.wedding-navigation-dock {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 24px;
}

.wedding-nav-arrow-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(20, 16, 12, 0.8);
    border: 1px solid rgba(212, 175, 55, 0.4);
    color: #ffd700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
}

.wedding-nav-arrow-btn:hover {
    background: #ffd700;
    color: #0e0b07;
    border-color: #ffe699;
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.wedding-look-counter-indicator {
    font-family: var(--font-plus-jakarta), sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 4px;
}

.counter-current {
    color: #ffd700;
    font-size: 1.15rem;
}

.counter-sep {
    color: rgba(255, 255, 255, 0.3);
}

.counter-total {
    color: rgba(255, 255, 255, 0.6);
}

/* Call To Action */
.wedding-cta-wrapper {
    margin-top: 28px;
}

.wedding-consultation-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.18), rgba(184, 134, 11, 0.28));
    border: 1.5px solid rgba(212, 175, 55, 0.65);
    color: #ffffff;
    padding: 14px 28px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-decoration: none;
    transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.2);
}

.wedding-consultation-btn:hover {
    background: linear-gradient(135deg, #ffd700, #d4af37);
    color: #0e0b07;
    border-color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 215, 0, 0.45);
}

.btn-sparkle {
    color: #ffd700;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.wedding-consultation-btn:hover .btn-sparkle {
    color: #0e0b07;
}

/* 5. Bottom Liquid Gold River Horizon */
.wedding-river-bottom-horizon {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 95px;
    z-index: 7;
    pointer-events: none;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.75) 50%, transparent 100%);
}

.river-water-mist-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 140% 50% at 50% 100%,
        rgba(212, 175, 55, 0.14) 0%,
        rgba(245, 197, 24, 0.05) 55%,
        transparent 80%
    );
}

.river-current-direction-indicator {
    position: absolute;
    bottom: 10px;
    right: 24px;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: rgba(212, 175, 55, 0.45);
    text-transform: uppercase;
}

/* =========================================================================
   RESPONSIVE DESIGN (TABLETS & PHONES)
   ========================================================================= */
@media (max-width: 1280px) {
    .wedding-stage-container {
        grid-template-columns: 240px 1fr 240px;
        gap: 24px;
        padding: 70px 2% 70px;
    }
    
    .wedding-monumental-heading {
        font-size: 3rem;
    }
}

@media (max-width: 980px) {
    .wedding-stage-container {
        grid-template-columns: 1fr;
        max-width: 600px;
        padding: 70px 16px 60px;
    }

    .wedding-suspended-column.left-column,
    .wedding-suspended-column.right-column {
        display: none;
    }

    .wedding-monumental-heading {
        font-size: 2.5rem;
    }

    .card-center {
        max-width: 100%;
    }
}

@media (max-width: 640px) {
    .wedding-stage-container {
        padding-top: 60px;
    }

    .wedding-monumental-heading {
        font-size: 2.1rem;
    }

    .wedding-manifesto-text {
        font-size: 0.92rem;
    }

    .wedding-consultation-btn {
        width: 100%;
        justify-content: center;
        padding: 12px 20px;
    }

    .wedding-pillars-row {
        gap: 8px;
    }

    .pillar-pill {
        font-size: 0.72rem;
        padding: 4px 10px;
    }
}
"""

updated_content = content[:idx] + new_styles
with open(css_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write('// Automatically extracted internal CSS for Gallery Page\nexport const galleryStyles: string = `' + updated_content.replace('`', '\\`') + '`;\n')

print('SUCCESS: Updated gallery.css and synchronized galleryStyles.ts!')
