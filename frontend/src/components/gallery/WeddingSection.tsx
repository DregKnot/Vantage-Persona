// @ts-nocheck
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// =============================================================================
// WEDDING COUPLE LOOKS (Converted WebP Assets)
// =============================================================================
export interface WeddingLook {
  id: string;
  title: string;
  subtitle: string;
  silhouette: string;
  fabric: string;
  image: string;
  accent: string;
  tag: string;
}

export const WEDDING_LOOKS: WeddingLook[] = [
  {
    id: "01",
    title: "The Sovereign Vows",
    subtitle: "Midnight Wool & Liquid Silk Grosgrain",
    silhouette: "Architectural Peak Tuxedo",
    fabric: "Super 160s Merino & Italian Silk",
    image: "/pictures/Wedding/pexels-ahmetmert-38605784.webp",
    accent: "#d4af37",
    tag: "COUTURE LOOK 01",
  },
  {
    id: "02",
    title: "Eternal Radiance",
    subtitle: "Gossamer Pearl Veil & Tiered Organza",
    silhouette: "Ethereal Cathedral Gown",
    fabric: "French Chantilly & Hand-beaded Tulle",
    image: "/pictures/Wedding/pexels-anchau-1663967297-37939838.webp",
    accent: "#f5c518",
    tag: "COUTURE LOOK 02",
  },
  {
    id: "03",
    title: "Imperial Heritage",
    subtitle: "Hand-Woven Brocade with Gilded Threadwork",
    silhouette: "Structured Royal Tunic",
    fabric: "Heritage Gold Brocade & Raw Silk",
    image: "/pictures/Wedding/pexels-arief-hendriawan-2159489818-37821052.webp",
    accent: "#e5b73b",
    tag: "COUTURE LOOK 03",
  },
  {
    id: "04",
    title: "Timeless Majesty",
    subtitle: "Double-Breasted Ivory Dinner Ensemble",
    silhouette: "Sculpted Monolith Profile",
    fabric: "Mulberry Silk & Fine Barathea",
    image: "/pictures/Wedding/pexels-bin-seif-503827615-16119774.webp",
    accent: "#ffd700",
    tag: "COUTURE LOOK 04",
  },
  {
    id: "05",
    title: "Pure Devotion",
    subtitle: "Minimalist Columns & Dramatic Capelet",
    silhouette: "Fluid Column Gown",
    fabric: "Heavy Silk Crepe & Organza",
    image: "/pictures/Wedding/pexels-boko-shots-812604874-29895186.webp",
    accent: "#f3e5ab",
    tag: "COUTURE LOOK 05",
  },
  {
    id: "06",
    title: "Golden Hour Symphony",
    subtitle: "Warm Amber Champagne Chiffon & Velvet Trim",
    silhouette: "Sculpted Hourglass Drape",
    fabric: "Amber Satin & Silk Jacquard",
    image: "/pictures/Wedding/pexels-media-11398242.webp",
    accent: "#e6b800",
    tag: "COUTURE LOOK 06",
  },
  {
    id: "07",
    title: "Sacred Splendor",
    subtitle: "Deep Indigo Wool with Frosted Silver Lapel",
    silhouette: "Classic Three-Piece Bespoke",
    fabric: "English Mohair & Duchess Satin",
    image: "/pictures/Wedding/pexels-media-1446161.webp",
    accent: "#d4af37",
    tag: "COUTURE LOOK 07",
  },
  {
    id: "08",
    title: "Celestial Harmony",
    subtitle: "Illusion Neckline with Micro-Paillette Stars",
    silhouette: "Graceful Fluted Fishtail",
    fabric: "Illusion Tulle & Crystal Embroidery",
    image: "/pictures/Wedding/pexels-media-14888535.webp",
    accent: "#ffe082",
    tag: "COUTURE LOOK 08",
  },
  {
    id: "09",
    title: "Regal Nocturne",
    subtitle: "Smoked Obsidian Velvet Smoking Jacket",
    silhouette: "Tailored Shawl Collar",
    fabric: "Silk-Cotton Velvet & Satin Weave",
    image: "/pictures/Wedding/pexels-muhammad-naseer-2162947333-38588678.webp",
    accent: "#c5a059",
    tag: "COUTURE LOOK 09",
  },
  {
    id: "10",
    title: "Crown of Grace",
    subtitle: "Bespoke Emerald Velvet & Gilded Epaulets",
    silhouette: "Regal Royal Couturiere",
    fabric: "Imperial Silk & Gold Threading",
    image: "/pictures/Wedding/pexels-salihu-auwal-2163060299-40185217.webp",
    accent: "#dfa013",
    tag: "COUTURE LOOK 10",
  },
  {
    id: "11",
    title: "The Gilded Promise",
    subtitle: "Artisanal Brocade with Hand-Pleated Train",
    silhouette: "Monumental Ball Silhouette",
    fabric: "Gold Zari Silk & Structured Mikado",
    image: "/pictures/Wedding/pexels-stringz-visuals-266260947-12764798.webp",
    accent: "#f5c518",
    tag: "COUTURE LOOK 11",
  },
  {
    id: "12",
    title: "Ethereal Grandeur",
    subtitle: "Sculpted Corsetry & Whisper Cascades",
    silhouette: "High-Fashion Bridal Architecture",
    fabric: "Italian Silk Organza & French Lace",
    image: "/pictures/Wedding/pexels-the-explore-556996321-16748871.webp",
    accent: "#ffd700",
    tag: "COUTURE LOOK 12",
  },
  {
    id: "13",
    title: "Sacred Symphony",
    subtitle: "Deep Midnight Tuxedo with Silk Grosgrain",
    silhouette: "Bespoke Tailored Profile",
    fabric: "Super 180s Wool & Silk Faille",
    image: "/pictures/Wedding/pexels-thevisionaryvows-33417236.webp",
    accent: "#e5b73b",
    tag: "COUTURE LOOK 13",
  },
  {
    id: "14",
    title: "Infinite Elegance",
    subtitle: "Hand-Stitched Pearl Beading & Liquid Train",
    silhouette: "Monolithic Silk Sheath",
    fabric: "Heavy Crepe de Chine & Seed Pearls",
    image: "/pictures/Wedding/pexels-tushar-ahamed-1315521837-26186201.webp",
    accent: "#f9e4a8",
    tag: "COUTURE LOOK 14",
  },
];

// =============================================================================
// CURATED VENUE BACKGROUNDS (Softly Blurred Background Slideshow)
// =============================================================================
const VENUE_BACKGROUNDS = [
  "/pictures/Wedding/venue/jonathan-borba-OjJ2r2Qq92I-unsplash.webp",
  "/pictures/Wedding/venue/alexander-mass-JyAMGd2WYZk-unsplash.webp",
  "/pictures/Wedding/venue/pexels-alonssus-3212018.webp",
  "/pictures/Wedding/venue/pexels-bertellifotografia-17023018.webp",
  "/pictures/Wedding/venue/pexels-thevisionaryvows-33485971.webp",
  "/pictures/Wedding/venue/sumatra-weddings-tyKLwDFdrCU-unsplash.webp",
  "/pictures/Wedding/venue/vanessa-X9DCHscGbLQ-unsplash.webp",
  "/pictures/Wedding/venue/vitor-monthay-JL2n-GWXCJo-unsplash.webp",
];

// =============================================================================
// PARTICLE ENGINE TYPES
// =============================================================================
interface GoldParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
  type: "sparkle" | "drip" | "river";
  color: string;
  twinklePhase: number;
  twinkleSpeed: number;
  waveOffset: number;
}

export default function WeddingSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [venueIdx, setVenueIdx] = useState(0);

  // References for particle simulation & DOM tracking
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leftCordRef = useRef<HTMLDivElement>(null);
  const centerCordRef = useRef<HTMLDivElement>(null);
  const rightCordRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  // Venue slideshow cross-fade timer
  useEffect(() => {
    const timer = setInterval(() => {
      setVenueIdx((prev) => (prev + 1) % VENUE_BACKGROUNDS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  // Safe cyclic indices for displaying 3 hanging cards (left, center, right)
  const total = WEDDING_LOOKS.length;
  const leftIdx = (activeIdx - 1 + total) % total;
  const centerIdx = activeIdx;
  const rightIdx = (activeIdx + 1) % total;

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  // ===========================================================================
  // GOLD DUST & RIGHTWARD-FLOWING LIQUID GOLD RIVER CANVAS SIMULATION
  // ===========================================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: GoldParticle[] = [];
    const maxParticles = 650;

    // Palette of rich shimmering gold hues
    const goldPalette = [
      "#ffffff",
      "#fff8db",
      "#ffd700",
      "#ffe066",
      "#ffecb3",
      "#f5c518",
      "#d4af37",
      "#e5b73b",
      "#dfa013",
    ];

    let cachedW = 1200;
    let cachedH = 800;
    let cordPositions = [cachedW * 0.22, cachedW * 0.50, cachedW * 0.78];
    let cordHeight = cachedH * 0.38;
    let cardWidth = 280;
    let cardBottomY = cachedH * 0.72;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cachedW = rect.width;
      cachedH = rect.height;
      cordPositions = [cachedW * 0.22, cachedW * 0.50, cachedW * 0.78];
      cordHeight = cachedH * 0.38;
      cardWidth = Math.min(320, cachedW * 0.28);
      cardBottomY = cachedH * 0.72;
      canvas.width = cachedW * dpr;
      canvas.height = cachedH * dpr;
      canvas.style.width = `${cachedW}px`;
      canvas.style.height = `${cachedH}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Fast coordinate-based sparkle spawn (Zero getBoundingClientRect in hot loop)
    const spawnCordSparkle = (cordIdx: number, w: number, h: number) => {
      const baseX = cordPositions[cordIdx] || w * 0.5;
      const x = baseX + (Math.random() - 0.5) * 8;
      const y = Math.random() * cordHeight;

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.8,
        vy: 0.2 + Math.random() * 0.9,
        size: 0.9 + Math.random() * 1.8,
        alpha: 0.1,
        maxAlpha: 0.7 + Math.random() * 0.3,
        life: 0,
        maxLife: 90 + Math.random() * 70,
        type: "sparkle",
        color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.08 + Math.random() * 0.12,
        waveOffset: Math.random() * 100,
      });
    };

    // Fast coordinate-based drip spawn (Zero getBoundingClientRect in hot loop)
    const spawnCardDrip = (cardIdx: number, w: number, h: number) => {
      const baseX = cordPositions[cardIdx] || w * 0.5;
      const x = baseX - cardWidth / 2 + Math.random() * cardWidth;
      const y = cardBottomY + (Math.random() - 0.5) * 4;

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0.6 + Math.random() * 1.4,
        size: 1.2 + Math.random() * 2.3,
        alpha: 0.1,
        maxAlpha: 0.85 + Math.random() * 0.15,
        life: 0,
        maxLife: 280,
        type: "drip",
        color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.05 + Math.random() * 0.08,
        waveOffset: Math.random() * 100,
      });
    };

    // Helper: spawn river ambient particle flowing rightward
    const spawnRiverParticle = (w: number, h: number, initialX?: number) => {
      const riverDepth = Math.max(90, h * 0.14);
      const riverY = h - riverDepth + Math.random() * riverDepth;
      const x = initialX !== undefined ? initialX : -15 + Math.random() * 30;

      particles.push({
        x,
        y: riverY,
        vx: 1.2 + Math.random() * 1.8,
        vy: (Math.random() - 0.5) * 0.15,
        size: 1.0 + Math.random() * 2.6,
        alpha: 0.2,
        maxAlpha: 0.6 + Math.random() * 0.35,
        life: 0,
        maxLife: 400 + Math.random() * 200,
        type: "river",
        color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.04 + Math.random() * 0.06,
        waveOffset: Math.random() * 100,
      });
    };

    // Pre-populate river with particles so the river is active immediately
    for (let i = 0; i < 90; i++) {
      spawnRiverParticle(cachedW, cachedH, Math.random() * cachedW);
    }

    let frameCount = 0;
    let isSectionVisible = false;

    const render = () => {
      if (!isSectionVisible) return;
      frameCount++;
      const w = cachedW;
      const h = cachedH;
      const riverThreshold = h - Math.max(95, h * 0.15);

      ctx.clearRect(0, 0, w, h);

      // Draw subtle ambient golden river glow at the bottom
      const riverGradient = ctx.createLinearGradient(0, riverThreshold, 0, h);
      riverGradient.addColorStop(0, "rgba(212, 175, 55, 0)");
      riverGradient.addColorStop(0.4, "rgba(212, 175, 55, 0.06)");
      riverGradient.addColorStop(0.85, "rgba(245, 197, 24, 0.12)");
      riverGradient.addColorStop(1, "rgba(255, 215, 0, 0.18)");
      ctx.fillStyle = riverGradient;
      ctx.fillRect(0, riverThreshold, w, h - riverThreshold);

      // Continuous particle emissions
      if (particles.length < maxParticles) {
        // Emit sparkling glitter from strings
        if (frameCount % 2 === 0) {
          spawnCordSparkle(0, w, h);
          spawnCordSparkle(1, w, h);
          spawnCordSparkle(2, w, h);
        }

        // Emit dripping gold dust from bottom of cards
        if (frameCount % 3 === 0) {
          spawnCardDrip(0, w, h);
          spawnCardDrip(1, w, h);
          spawnCardDrip(2, w, h);
        }

        // Emit continuous river particles entering from the left or rising in the river bed
        if (frameCount % 2 === 0) {
          spawnRiverParticle(w, h);
        }
      }

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // Update and draw all particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        // Twinkle phase
        p.twinklePhase += p.twinkleSpeed;
        const pulse = 0.5 + 0.5 * Math.sin(p.twinklePhase);
        p.alpha = Math.min(p.maxAlpha, p.maxAlpha * pulse);

        if (p.type === "sparkle") {
          p.x += p.vx + Math.sin(p.life * 0.05 + p.waveOffset) * 0.3;
          p.y += p.vy;
          p.vy += 0.015;

          if (p.y >= riverThreshold) {
            p.type = "river";
            p.vy *= 0.5;
            p.vx = 1.4 + Math.random() * 1.5;
          }
        } else if (p.type === "drip") {
          p.vy += 0.055;
          p.vx += (Math.random() - 0.5) * 0.08;
          p.x += p.vx;
          p.y += p.vy;

          if (p.y >= riverThreshold) {
            p.type = "river";
            p.y = riverThreshold + Math.random() * (h - riverThreshold);
            p.vy = 0;
            p.vx = 1.6 + Math.random() * 1.8;
            p.maxLife = p.life + 350;
          }
        } else if (p.type === "river") {
          p.x += p.vx;
          p.y += Math.sin(p.x * 0.02 + p.life * 0.04 + p.waveOffset) * 0.4;
          p.vx = Math.min(p.vx + 0.005, 3.2);

          if (p.x > w - 100) {
            p.alpha *= 0.98;
          }
        }

        if (p.life > p.maxLife || p.x > w + 60 || p.y > h + 20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        if (p.size > 2.0 && pulse > 0.75) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 215, 0, 0.25)";
          ctx.fill();
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    // Pause 100% of particle loop when off-screen to preserve 60-120 FPS on rest of page
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isNowVisible = entry.isIntersecting;
        if (isNowVisible && !isSectionVisible) {
          isSectionVisible = true;
          animId = requestAnimationFrame(render);
        } else if (!isNowVisible && isSectionVisible) {
          isSectionVisible = false;
          cancelAnimationFrame(animId);
        }
      },
      { rootMargin: "150px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const currentLook = WEDDING_LOOKS[centerIdx];

  return (
    <section
      ref={containerRef}
      className="wedding-monumental-section"
      id="wedding-collection"
      data-auto-hint="Explore monumental wedding collection"
    >
      {/* =======================================================================
          1. BACKGROUND: SOFTLY BLURRED VENUE SLIDESHOW & VIGNETTE GRADIENTS
          ======================================================================= */}
      <div className="wedding-venue-bg-wrapper">
        {VENUE_BACKGROUNDS.map((venueUrl, idx) => (
          <div
            key={venueUrl}
            className={`wedding-venue-bg-slide ${idx === venueIdx ? "is-active" : ""}`}
            style={{ backgroundImage: `url('${venueUrl}')` }}
          />
        ))}

        {/* Soft blur backdrop filter */}
        <div className="wedding-venue-blur-layer" />

        {/* Rich dark vignette overlay that gradients into pure black at the bottom */}
        <div className="wedding-vignette-overlay" />
      </div>

      {/* =======================================================================
          2. HORIZONTAL STYLIZED WOODEN LOG (COVERS END TO END HORIZONTALLY)
             Handcrafted procedural vector digital art — not a static photo.
          ======================================================================= */}
      <div className="wedding-wood-log-wrapper">
        <svg
          className="wedding-wood-log-svg"
          viewBox="0 0 1920 68"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich multi-stop wood gradient simulating polished cedar & aged timber */}
            <linearGradient id="timberBarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a0f07" />
              <stop offset="8%" stopColor="#3b2010" />
              <stop offset="22%" stopColor="#5d341a" />
              <stop offset="38%" stopColor="#7a4623" />
              <stop offset="52%" stopColor="#8d522a" />
              <stop offset="68%" stopColor="#693c1d" />
              <stop offset="85%" stopColor="#442511" />
              <stop offset="94%" stopColor="#291409" />
              <stop offset="100%" stopColor="#120803" />
            </linearGradient>

            {/* Specular highlight stripe along the upper curvature */}
            <linearGradient id="timberHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="25%" stopColor="#d4af37" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#ffe699" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#d4af37" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>

            {/* Brass end caps gradient */}
            <linearGradient id="brassHardware" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="30%" stopColor="#aa7c11" />
              <stop offset="70%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#684a07" />
            </linearGradient>

            {/* Drop shadow for 3D realism */}
            <filter id="timberShadow" x="-2%" y="-10%" width="104%" height="180%">
              <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#000000" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* Natural undulating bark contour covering end to end horizontally */}
          <path
            d="M 0,6 
               Q 160,2 340,7 
               T 720,4 
               T 1100,8 
               T 1480,5 
               T 1760,8 
               L 1920,6 
               L 1920,58 
               Q 1760,62 1480,57 
               T 1100,61 
               T 720,56 
               T 340,60 
               L 0,57 Z"
            fill="url(#timberBarkGrad)"
            filter="url(#timberShadow)"
          />

          {/* Organic Wood Grain Striations & Growth Rings */}
          <path
            d="M 0,16 Q 280,11 600,17 T 1200,14 T 1920,16"
            stroke="#41210e"
            strokeWidth="1.8"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 0,26 Q 380,21 820,27 T 1540,24 T 1920,26"
            stroke="#2f1709"
            strokeWidth="1.4"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 0,38 Q 240,43 700,36 T 1360,40 T 1920,37"
            stroke="#9d6233"
            strokeWidth="1.2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 0,47 Q 440,51 980,45 T 1680,49 T 1920,47"
            stroke="#1d0d05"
            strokeWidth="2.2"
            fill="none"
            opacity="0.85"
          />

          {/* Top Edge Golden Specular Luster */}
          <path
            d="M 0,10 Q 480,6 960,11 T 1920,10"
            stroke="url(#timberHighlight)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Far Left Brass Wall Fixture */}
          <rect x="0" y="4" width="22" height="56" rx="3" fill="url(#brassHardware)" stroke="#ffe699" strokeWidth="1" />
          <circle cx="11" cy="18" r="3.5" fill="#2b1803" />
          <circle cx="11" cy="46" r="3.5" fill="#2b1803" />

          {/* Far Right Brass Wall Fixture */}
          <rect x="1898" y="4" width="22" height="56" rx="3" fill="url(#brassHardware)" stroke="#ffe699" strokeWidth="1" />
          <circle cx="1909" cy="18" r="3.5" fill="#2b1803" />
          <circle cx="1909" cy="46" r="3.5" fill="#2b1803" />

          {/* Golden Eyelet Suspension Mounts (where the golden strings attach) */}
          {/* Left Eyelet (at ~16% width = x: 307) */}
          <g transform="translate(307, 50)">
            <rect x="-10" y="0" width="20" height="7" rx="2" fill="url(#brassHardware)" />
            <circle cx="0" cy="11" r="7" fill="none" stroke="url(#brassHardware)" strokeWidth="3" />
            <circle cx="0" cy="11" r="3.5" fill="#0d0a06" />
          </g>

          {/* Center Eyelet (at ~50% width = x: 960) */}
          <g transform="translate(960, 50)">
            <rect x="-12" y="0" width="24" height="7" rx="2" fill="url(#brassHardware)" />
            <circle cx="0" cy="11" r="8" fill="none" stroke="url(#brassHardware)" strokeWidth="3.5" />
            <circle cx="0" cy="11" r="4" fill="#0d0a06" />
          </g>

          {/* Right Eyelet (at ~84% width = x: 1613) */}
          <g transform="translate(1613, 50)">
            <rect x="-10" y="0" width="20" height="7" rx="2" fill="url(#brassHardware)" />
            <circle cx="0" cy="11" r="7" fill="none" stroke="url(#brassHardware)" strokeWidth="3" />
            <circle cx="0" cy="11" r="3.5" fill="#0d0a06" />
          </g>
        </svg>

        {/* Timber Under-Glow Atmosphere */}
        <div className="wedding-wood-underglow" />
      </div>

      {/* =======================================================================
          3. FULL-STAGE PARTICLES CANVAS:
             - Glitter sparkles emanating from golden strings
             - Gold dust dripping from cards down to the bottom
             - Liquid gold river flowing rightward outside screen at bottom
          ======================================================================= */}
      <canvas ref={canvasRef} className="wedding-dust-river-canvas" />

      {/* =======================================================================
          4. MAIN ATELIER STAGE:
             - Hanging golden strings connecting from log to cards
             - Left suspended companion card
             - Center majestic editorial dossier ("A Priceless Moment") + hero card
             - Right suspended companion card
          ======================================================================= */}
      <div className="wedding-stage-container">
        
        {/* =====================================================================
            LEFT SUSPENDED CARD
            ===================================================================== */}
        <div className="wedding-suspended-column left-column">
          {/* Golden string hanging from wooden log */}
          <div ref={leftCordRef} className="wedding-golden-string string-left">
            <div className="string-glimmer-line" />
            <div className="string-ring-connector" />
          </div>

          {/* Suspended Card */}
          <div
            ref={leftCardRef}
            className="wedding-hanging-card card-left"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            title={`View ${WEDDING_LOOKS[leftIdx].title}`}
          >
            <div className="card-ornate-frame">
              <div className="card-corner-ornament top-left">✦</div>
              <div className="card-corner-ornament top-right">✦</div>
              <div className="card-image-box">
                <img
                  src={WEDDING_LOOKS[leftIdx].image}
                  alt={WEDDING_LOOKS[leftIdx].title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="card-inner-vignette" />
              </div>
              <div className="card-brass-plaque">
                <span className="card-num-tag">№ {WEDDING_LOOKS[leftIdx].id}</span>
                <span className="card-title-tag">{WEDDING_LOOKS[leftIdx].title}</span>
              </div>
            </div>
            {/* Golden dust emitter lip indicator */}
            <div className="card-dust-drip-lip" />
          </div>
        </div>

        {/* =====================================================================
            CENTER STAGE: "A PRICELESS MOMENT" EDITORIAL & HERO CARD
            ===================================================================== */}
        <div className="wedding-center-dossier-column">
          {/* Golden string hanging from wooden log to center card */}
          <div ref={centerCordRef} className="wedding-golden-string string-center">
            <div className="string-glimmer-line" />
            <div className="string-ring-connector" />
          </div>

          {/* Royal Editorial Writeup Header */}
          <div className="wedding-editorial-dossier">
            <div className="wedding-eyebrow-badge">
              <span className="badge-sparkle">✦</span>
              <span className="badge-text">ATELIER MATRIMONIAL // VANTAGE PERSONA</span>
              <span className="badge-sparkle">✦</span>
            </div>

            <h2 className="wedding-monumental-heading">A Priceless Moment</h2>

            <p className="wedding-manifesto-text">
              Your monumental day transcends ordinary time. At Vantage Persona, we curate every fabric drape,
              sculpted lapel, and whispering silk seam to reflect the magnitude of your vows. Walk into eternity
              flawlessly styled—an enduring masterpiece celebrating two souls, crafted for the moment you will
              remember forever.
            </p>

            <div className="wedding-pillars-row">
              <div className="pillar-pill">
                <span className="pillar-dot">✦</span>
                <span className="pillar-label">100% Bespoke Craft</span>
              </div>
              <div className="pillar-pill">
                <span className="pillar-dot">✦</span>
                <span className="pillar-label">Heritage Italian Silks</span>
              </div>
              <div className="pillar-pill">
                <span className="pillar-dot">✦</span>
                <span className="pillar-label">Master Bridal Stylist</span>
              </div>
            </div>
          </div>

          {/* Suspended Center Hero Card */}
          <div ref={centerCardRef} className="wedding-hanging-card card-center">
            <div className="card-ornate-frame hero-frame">
              <div className="card-corner-ornament top-left">✦</div>
              <div className="card-corner-ornament top-right">✦</div>
              <div className="card-corner-ornament bottom-left">✦</div>
              <div className="card-corner-ornament bottom-right">✦</div>

              <div className="card-image-box hero-image-box">
                <img
                  src={currentLook.image}
                  alt={currentLook.title}
                  loading="eager"
                  decoding="async"
                />
                <div className="card-inner-vignette" />

                {/* Floating Couture Badge */}
                <div className="hero-floating-badge">
                  <span className="badge-index">№ {currentLook.id}</span>
                  <span className="badge-divider">|</span>
                  <span className="badge-silhouette">{currentLook.silhouette}</span>
                </div>
              </div>

              <div className="card-brass-plaque hero-plaque">
                <div className="plaque-header">
                  <span className="plaque-tag">{currentLook.tag}</span>
                  <span className="plaque-fabric">{currentLook.fabric}</span>
                </div>
                <h3 className="plaque-title">{currentLook.title}</h3>
                <p className="plaque-subtitle">{currentLook.subtitle}</p>
              </div>
            </div>

            {/* Golden dust emitter lip */}
            <div className="card-dust-drip-lip" />
          </div>

          {/* Interactive Navigation Bar & Look Pills */}
          <div className="wedding-navigation-dock">
            <button
              onClick={handlePrev}
              className="wedding-nav-arrow-btn prev-btn"
              aria-label="Previous wedding look"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="wedding-look-counter-indicator">
              <span className="counter-current">{centerIdx + 1}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">{total}</span>
            </div>

            <button
              onClick={handleNext}
              className="wedding-nav-arrow-btn next-btn"
              aria-label="Next wedding look"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Call To Action */}
          <div className="wedding-cta-wrapper">
            <a href="#consultation" className="wedding-consultation-btn">
              <span className="btn-sparkle">✦</span>
              <span className="btn-text">RESERVE BRIDAL CONSULTATION</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* =====================================================================
            RIGHT SUSPENDED CARD
            ===================================================================== */}
        <div className="wedding-suspended-column right-column">
          {/* Golden string hanging from wooden log */}
          <div ref={rightCordRef} className="wedding-golden-string string-right">
            <div className="string-glimmer-line" />
            <div className="string-ring-connector" />
          </div>

          {/* Suspended Card */}
          <div
            ref={rightCardRef}
            className="wedding-hanging-card card-right"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            title={`View ${WEDDING_LOOKS[rightIdx].title}`}
          >
            <div className="card-ornate-frame">
              <div className="card-corner-ornament top-left">✦</div>
              <div className="card-corner-ornament top-right">✦</div>
              <div className="card-image-box">
                <img
                  src={WEDDING_LOOKS[rightIdx].image}
                  alt={WEDDING_LOOKS[rightIdx].title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="card-inner-vignette" />
              </div>
              <div className="card-brass-plaque">
                <span className="card-num-tag">№ {WEDDING_LOOKS[rightIdx].id}</span>
                <span className="card-title-tag">{WEDDING_LOOKS[rightIdx].title}</span>
              </div>
            </div>
            {/* Golden dust emitter lip */}
            <div className="card-dust-drip-lip" />
          </div>
        </div>

      </div>

      {/* =======================================================================
          5. BOTTOM LIQUID GOLD RIVER HORIZON & VIGNETTE BASE
             Deep black gradient base where the golden dust pools and flows rightward
          ======================================================================= */}
      <div className="wedding-river-bottom-horizon">
        <div className="river-water-mist-glow" />
        <div className="river-current-direction-indicator">
          <span>GLOWING GOLDEN CURRENT &rarr; SLOWLY FLOWING OFF-SCREEN</span>
        </div>
      </div>
    </section>
  );
}
