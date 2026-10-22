// @ts-nocheck
"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import MorphSlider from "@/components/common/MorphSlider";

export interface FlushLook {
  id: string;
  tag: string;
  h2: string;
  subtitle: string;
  p: string;
  image: string;
  caption: string;
  fabric: string;
  silhouette: string;
  accent: string;
}

export const FLUSH_LOOKS: FlushLook[] = [
  {
    id: "01",
    tag: "LOOK 01 // SUPREME",
    h2: "THE SUPREME STATE",
    subtitle: "Architectural Volume & Intentional Weight",
    p: "In the Vantage world, 'Flush' isn't just about abundance; it's about the precision of volume and the architecture of presence. When fashion is flush, it occupies space with an intentional weight, creating a silhouette that is both grounded and ethereal.",
    image: "/pictures/Flush_section/alexi-romano-CCx6Fz_CmOI-unsplash.webp",
    caption: "THE SUPREME STATE",
    fabric: "Sculpted Wool & Heavy Silk",
    silhouette: "Monolithic Column",
    accent: "#1e40af"
  },
  {
    id: "02",
    tag: "LOOK 02 // PURITY",
    h2: "ANCIENT GRACE",
    subtitle: "Immaculate Preservation & Elongated Drape",
    p: "This captures a royalty defined by immaculate preservation and traditional purity. The spotless white ao dai offers a seamless, elongated silhouette that is both powerful and delicate.",
    image: "/pictures/Flush_section/anh-q-tran-bNNtwg_2AUE-unsplash.webp",
    caption: "ANCIENT GRACE",
    fabric: "Pure Imperial Silk",
    silhouette: "Elongated Tunic",
    accent: "#2563eb"
  },
  {
    id: "03",
    tag: "LOOK 03 // DENSITY",
    h2: "DENSITY OF STYLE",
    subtitle: "Calculated Chromatic Saturation",
    p: "A study in saturation. Here, color and texture are stacked with calculated intensity. It is not excess, but the absolute fulfillment of a vision where every thread contributes to a monumental fashion statement.",
    image: "/pictures/Flush_section/laura-chouette-SYlkSg5Njfs-unsplash.webp",
    caption: "DENSITY OF STYLE",
    fabric: "Multi-layered Brocade",
    silhouette: "Layered Monolith",
    accent: "#3b82f6"
  },
  {
    id: "04",
    tag: "LOOK 04 // MONUMENT",
    h2: "MONUMENTAL PRESENCE",
    subtitle: "Contemporary Composition & Poise",
    p: "Beyond the garment lies the identity. The final evolution of 'Flush' is the transformation of the wearer into a walking monument of contemporary elegance, unyielding and perfectly composed.",
    image: "/pictures/Flush_section/michael-kyule-g-qdii0n-Sk-unsplash.webp",
    caption: "MONUMENTAL PRESENCE",
    fabric: "Structured Wool Blend",
    silhouette: "Architectural Poise",
    accent: "#1d4ed8"
  },
  {
    id: "05",
    tag: "LOOK 05 // OPULENCE",
    h2: "THE REIGN OF OPULENCE",
    subtitle: "Tulle Avalanche Colliding with Sheerness",
    p: "This look commands with a flush of texture and an unconventional regal confidence. The avalanche of ivory tulle collides with sleek, futuristic sheerness.",
    image: "/pictures/Flush_section/leoni-fleming-xKb0eYfN_D4-unsplash.webp",
    caption: "THE REIGN OF OPULENCE",
    fabric: "Layered Ivory Tulle",
    silhouette: "Volumetric Cloud",
    accent: "#2563eb"
  },
  {
    id: "06",
    tag: "LOOK 06 // WHISPER",
    h2: "WHISPERED WEALTH",
    subtitle: "Pinstripe Precision & Authority",
    p: "A sophisticated, highly refined take on 'flush' that uses pattern instead of piled fabric. The crisp pinstripe suit is the classic uniform of tradition and authority.",
    image: "/pictures/Flush_section/mohsen-karimi-_SsyDr6RnRg-unsplash.webp",
    caption: "WHISPERED WEALTH",
    fabric: "Superfine Worsted Wool",
    silhouette: "Savile Tailored Suit",
    accent: "#1e3a8a"
  },
  {
    id: "07",
    tag: "LOOK 07 // MATRIARCH",
    h2: "MATRIARCHAL ORDER",
    subtitle: "Historic Nobility & Ruffled Collar",
    p: "The deep black coat with its high, ruffled collar and pearlescent buttons channels historic nobility, but the structured tailoring feels contemporary.",
    image: "/pictures/Flush_section/ospan-ali-nyrSsBzhZ4Y-unsplash.webp",
    caption: "MATRIARCHAL ORDER",
    fabric: "Midnight Gabardine",
    silhouette: "High-Collar Greatcoat",
    accent: "#1e40af"
  },
  {
    id: "08",
    tag: "LOOK 08 // HERITAGE",
    h2: "INHERITED ELEGANCE",
    subtitle: "Oversized Shearling & Abundant Ease",
    p: "This aesthetic is rooted in the ease of true wealth—royalty in its most relaxed, abundant form. The heavy texture of the oversized beige shearling coat creates a literal flush of fabric.",
    image: "/pictures/Flush_section/reza-delkhosh-1h4SHm3SZ0c-unsplash.webp",
    caption: "INHERITED ELEGANCE",
    fabric: "Natural Shearling",
    silhouette: "Cocoon Overcoat",
    accent: "#2563eb"
  }
];

// Single static array reference to prevent unnecessary WebGL engine re-instantiations
export const FLUSH_SLIDER_ITEMS = FLUSH_LOOKS.map((item) => ({
  image: item.image,
  caption: item.caption
}));

const TRANSITION_OPTIONS = [
  { id: "melt", label: "Melt" },
  { id: "ripple", label: "Ripple" },
  { id: "swirl", label: "Swirl" },
  { id: "shear", label: "Shear" }
] as const;

export default function Flush() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionMode, setTransitionMode] = useState<"melt" | "ripple" | "swirl" | "shear">("melt");
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const sliderRef = useRef<{
    next: () => void;
    prev: () => void;
    goTo: (idx: number) => void;
    getIndex: () => number;
  } | null>(null);

  const currentLook = FLUSH_LOOKS[activeIndex] || FLUSH_LOOKS[0];

  // Freeze all active animations in this section while the user is scrolling the page
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout | null = null;
    const onScroll = () => {
      setIsScrolling(true);
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  const handleIndexChange = useCallback((newIdx: number) => {
    setActiveIndex(newIdx);
  }, []);

  const handleNext = () => {
    sliderRef.current?.next();
  };

  const handleGoTo = (idx: number) => {
    if (idx === activeIndex) return;
    sliderRef.current?.goTo(idx);
  };

  const toggleAutoplay = () => {
    setIsAutoplay((prev) => !prev);
  };

  return (
    <section
      className={`section-5 container-fade ${isScrolling ? "is-page-scrolling" : ""}`}
      id="flush"
    >
      {/* Background Atmosphere - Luminous White with Blue Accents */}
      <div className="section-5-bg" />
      <div className="flush-ambient-glow" />

      {/* Haute Couture Header */}
      <div className="flush-header-section">
        <div className="flush-header-badge">
          <span className="flush-badge-pulse" />
          <span>ACT II // THE VOLUME ARCHIVE // COUTURE 2026</span>
        </div>
        <h1 className="flush-main-title">
          Fashion is <br />
          <span className="kings-cross">Flush</span>
        </h1>
        <p className="flush-header-tagline">
          THE ARCHITECTURE OF VOLUME — WHERE FABRIC MEETS SCULPTURAL SUPREMACY
        </p>
      </div>

      {/* Main Haute Couture Stage Grid */}
      <div className="flush-content-section">
        <div className="flush-container">
          
          {/* Left Column: Compact Tailored Royal Dossier Card */}
          <div className="flush-text-side">
            <div className="flush-dossier-card royal-porcelain-card">
              {/* Dossier Top Bar */}
              <div className="flush-dossier-meta">
                <div className="flush-phase-counter">
                  <span className="flush-counter-dot" />
                  <span className="flush-counter-label">
                    PHASE {String(activeIndex + 1).padStart(2, "0")} / 08
                  </span>
                </div>
                <div className="flush-look-tag">{currentLook.tag}</div>
              </div>

              {/* Dynamic Heading & Description */}
              <div className="flush-content-area" key={activeIndex}>
                <h2 className="flush-heading-title">{currentLook.h2}</h2>
                <div className="flush-subtitle-bar">
                  <span className="flush-accent-bar" />
                  <span className="flush-subtitle-text">{currentLook.subtitle}</span>
                </div>
                <p className="flush-editorial-text">{currentLook.p}</p>

                {/* Compact Garment Architecture Specs */}
                <div className="flush-specs-grid">
                  <div className="flush-spec-item">
                    <span className="spec-label">FABRICATION</span>
                    <span className="spec-value">{currentLook.fabric}</span>
                  </div>
                  <div className="flush-spec-item">
                    <span className="spec-label">SILHOUETTE</span>
                    <span className="spec-value">{currentLook.silhouette}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Phase Selector Pills (01 to 08) */}
              <div className="flush-phase-pills-container">
                <span className="pills-title">PHASE SELECTION:</span>
                <div className="flush-phase-pills" role="tablist" aria-label="Select Flush Phase">
                  {FLUSH_LOOKS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={`Jump to Look ${idx + 1}: ${item.h2}`}
                      className={`flush-pill-btn ${idx === activeIndex ? "is-active" : ""}`}
                      onClick={() => handleGoTo(idx)}
                    >
                      <span className="pill-num">{item.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Compact Controls & Shader Mode Bar */}
              <div className="flush-actions-bar">
                {/* Primary Next Phase Button */}
                <button
                  type="button"
                  className="change-img-btn flush-next-cta"
                  id="change-flush-img"
                  onClick={handleNext}
                  title="Morph to next phase"
                >
                  <span>NEXT PHASE</span>
                  <span className="btn-counter">
                    ({String(activeIndex + 1).padStart(2, "0")}/08)
                  </span>
                  <svg
                    className="btn-arrow"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Autoplay & Transition Selectors */}
                <div className="flush-controls-secondary">
                  {/* Autoplay toggle */}
                  <button
                    type="button"
                    className={`flush-autoplay-toggle ${isAutoplay ? "is-active" : ""}`}
                    onClick={toggleAutoplay}
                    aria-label={isAutoplay ? "Pause Autoplay" : "Enable Autoplay"}
                    title={isAutoplay ? "Pause automatic slide progression" : "Enable automatic morphing"}
                  >
                    <span className={`toggle-beacon ${isAutoplay && !isScrolling ? "pulse" : ""}`} />
                    <span className="toggle-label">
                      {isScrolling ? "SCROLL PAUSE" : isAutoplay ? "AUTO ON" : "PAUSED"}
                    </span>
                  </button>

                  {/* Transition Mode Segmented Control */}
                  <div className="flush-shader-selector" title="WebGL GPU Morph Shader">
                    {TRANSITION_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        className={`shader-opt-btn ${transitionMode === opt.id ? "is-active" : ""}`}
                        onClick={() => setTransitionMode(opt.id)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: WebGL Morph Stage (Enlarged Hero Picture Stage) */}
          <div className="flush-image-side">
            <div className="flush-morph-stage-frame">
              {/* Corner Accents for Haute Couture Framing */}
              <div className="corner-accent top-left" />
              <div className="corner-accent top-right" />
              <div className="corner-accent bottom-left" />
              <div className="corner-accent bottom-right" />

              {/* The WebGL MorphSlider Container */}
              <div className="flush-morph-slider-wrapper">
                <MorphSlider
                  ref={sliderRef}
                  items={FLUSH_SLIDER_ITEMS}
                  transition={transitionMode}
                  duration={1.25}
                  intensity={0.58}
                  scale={2.2}
                  aberration={0.32}
                  drift={0.35}
                  autoplay={isAutoplay && !isScrolling}
                  autoplayDelay={4.8}
                  radius={16}
                  showCaptions={false}
                  showControls={true}
                  showIndicators={true}
                  onIndexChange={handleIndexChange}
                  className="flush-slider-embed"
                />

                {/* Floating On-Canvas Couture Overlay */}
                <div className="flush-stage-overlay-badge">
                  <span className="badge-index">№ {currentLook.id}</span>
                  <span className="badge-divider">|</span>
                  <span className="badge-name">{currentLook.h2}</span>
                </div>

                {/* Interactive Gesture Hint */}
                <div className="flush-gesture-hint">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 7h8M8 12h8M8 17h8" strokeLinecap="round" />
                  </svg>
                  <span>DRAG TO FLUID MORPH</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
