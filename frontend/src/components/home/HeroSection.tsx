"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface PresentationLook {
  id: string;
  step: string;
  label: string;
  subtitle: string;
  image: string;
  alt: string;
}

const PRESENTATIONS: PresentationLook[] = [
  {
    id: "everyday",
    step: "01",
    label: "Everyday",
    subtitle: "Effortless Silhouette",
    image: "/pictures/Casual/chris-mac-t3R6M_9GVRY-unsplash.webp",
    alt: "Everyday elevated casual luxury tailoring with red beanie and textured dark overcoat",
  },
  {
    id: "professional",
    step: "02",
    label: "Professional",
    subtitle: "Executive Poise",
    image: "/pictures/Casual/helga-pettersen-Z0EtZNXY_eE-unsplash.webp",
    alt: "Professional tailored wool check coat with cream knit sleeve and leather shoulder bag",
  },
  {
    id: "occasion",
    step: "03",
    label: "Occasion",
    subtitle: "Ceremonial Gala",
    image: "/pictures/Party/eyitayo-adekoya-oJmQ4oFtvbM-unsplash.webp",
    alt: "Occasion evening haute couture and celebration ensemble",
  },
  {
    id: "bespoke",
    step: "04",
    label: "Bespoke",
    subtitle: "Atelier Signature",
    image: "/pictures/Cooperate/ben-iwara-jHzZp4wYRbk-unsplash.webp",
    alt: "Bespoke emerald textured atelier vest with tie and sunglasses",
  },
];

export default function HeroSection() {
  const [modelTagOpen, setModelTagOpen] = useState(false);
  const [activePresentation, setActivePresentation] = useState<string>("everyday");
  const heroRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  // Subtle 3D tilt on mouse move directly injecting CSS custom properties
  // Completely eliminates 60+ React component re-renders per second!
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 12;

      heroRef.current.style.setProperty("--hero-bg-x", `${-x * 0.4}px`);
      heroRef.current.style.setProperty("--hero-bg-y", `${-y * 0.4}px`);
      heroRef.current.style.setProperty("--hero-card-x", `${x * 0.5}px`);
      heroRef.current.style.setProperty("--hero-card-y", `${y * 0.5}px`);
      heroRef.current.style.setProperty("--hero-model-x", `${x * 1.1}px`);
      heroRef.current.style.setProperty("--hero-model-y", `${y * 0.8}px`);
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (heroRef.current) {
      heroRef.current.style.setProperty("--hero-bg-x", "0px");
      heroRef.current.style.setProperty("--hero-bg-y", "0px");
      heroRef.current.style.setProperty("--hero-card-x", "0px");
      heroRef.current.style.setProperty("--hero-card-y", "0px");
      heroRef.current.style.setProperty("--hero-model-x", "0px");
      heroRef.current.style.setProperty("--hero-model-y", "0px");
    }
  };

  return (
    <section
      ref={heroRef}
      className="vantage-hero-editorial"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero"
    >
      {/* =========================================================================
          LAYER 1: BLURRED LUXURY ATRIUM BACKGROUND & CELESTIAL ORBITAL ARCS
          ========================================================================= */}
      <div className="hero-bg-layer">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: "url('/pictures/pexels-joerg-hartmann-626385254-28388982.webp')",
            transform: "scale(1.1) translate3d(var(--hero-bg-x, 0px), var(--hero-bg-y, 0px), 0)",
          }}
        />
        {/* Warm Golden / Amber Vignette Overlay */}
        <div className="hero-bg-overlay" />

        {/* Geometric Celestial Orbital Lines (Inspired by Reference Design) */}
        <svg
          className="hero-orbital-arcs"
          viewBox="0 0 1600 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large Outer Arc */}
          <circle
            cx="800"
            cy="450"
            r="540"
            stroke="rgba(255, 235, 205, 0.22)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          {/* Inner Golden Arc */}
          <circle
            cx="800"
            cy="450"
            r="420"
            stroke="rgba(214, 192, 151, 0.28)"
            strokeWidth="1.2"
          />
          {/* Tilted Intersection Oval */}
          <ellipse
            cx="800"
            cy="450"
            rx="660"
            ry="310"
            transform="rotate(-12 800 450)"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
          />
          {/* Fine Vertical Axis */}
          <line
            x1="800"
            y1="40"
            x2="800"
            y2="860"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 2: MIDSIZED GRAINY FROSTED GLASS CARD (THE CENTER EDITORIAL CANVAS)
          ========================================================================= */}
      <div
        className="hero-glass-card"
        style={{
          transform: "translate3d(var(--hero-card-x, 0px), var(--hero-card-y, 0px), 0)",
        }}
      >
        {/* Grain Texture Overlay */}
        <div className="hero-glass-grain" />

        {/* Subtle Ambient Card Glow */}
        <div className="hero-glass-glow" />

        {/* Huge Ghost Watermark Script behind model */}
        <div className="hero-watermark-text" aria-hidden="true">
          Persona
        </div>

        {/* ----------------- TOP BAR OF CARD ----------------- */}
        {/* ----------------- TOP BAR OF CARD ----------------- */}
        <div className="card-top-row">
          {/* Left: Brand Identity, Main Headline, Supporting Head, Description & CTAs */}
          <div className="card-header-left">
            <span className="card-eyebrow-mini">VANTAGE PERSONA • THE ART OF PERSONAL STYLE</span>
            <h1 className="hero-main-headline">BEYOND THE OUTFIT.</h1>
            <h2 className="hero-supporting-heading">Style is personal. So are we.</h2>
            <p className="hero-description-text">
              We discover who you are, understand how you want to be seen, and curate a look that speaks for you. From everyday elegance to unforgettable occasions, every detail is considered.
            </p>

            {/* Action CTA Group */}
            <div className="hero-cta-group">
              <Link href="/appointment" className="hero-primary-btn">
                <span>Discover Your Persona</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/gallery" className="hero-secondary-btn">
                <span>Explore Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right: Right-Side Editorial Text & 4 Curated Presentation Cards */}
          <div className="card-header-right">
            <div className="card-right-editorial">
              <span className="right-editorial-lead">Your presence, reimagined.</span>
              <div
                className="right-editorial-disciplines"
                role="tablist"
                aria-label="Style Presentations"
              >
                {PRESENTATIONS.map((item, index) => {
                  const isActive = activePresentation === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      {index > 0 && <span className="discipline-dot" aria-hidden="true">·</span>}
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`discipline-tab-btn ${isActive ? "active" : ""}`}
                        onClick={() => setActivePresentation(item.id)}
                      >
                        {item.label.toUpperCase()}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* 4 Presentation Look Cards - Vertical Staircase Layout */}
            <div
              className="staircase-presentation-stack"
              role="region"
              aria-label="Curated Style Presentations Staircase"
            >
              {PRESENTATIONS.map((item, index) => {
                const isActive = activePresentation === item.id;
                return (
                  <div
                    key={item.id}
                    className={`staircase-card step-${index + 1} ${isActive ? "active" : ""}`}
                    onClick={() => setActivePresentation(item.id)}
                    title={`Explore ${item.label} (${item.subtitle})`}
                    role="button"
                    tabIndex={0}
                    style={{
                      "--step-index": index,
                    } as React.CSSProperties}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActivePresentation(item.id);
                      }
                    }}
                  >
                    <span className="staircase-step-num">{item.step}</span>
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <button
                      type="button"
                      className="pill-tag-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePresentation(item.id);
                      }}
                    >
                      <span className="tag-plus">+</span> {item.label}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ----------------- BOTTOM BAR OF CARD ----------------- */}
        <div className="card-bottom-row">
          {/* Bottom Left Group: Polaroid & Luxury Rotating Atelier Seal */}
          <div className="card-bottom-left-group">
            {/* The 4 Pillars of Presence: Atelier Philosophy Capsule */}
            <div
              className="floating-philosophy-card"
              role="region"
              aria-label="The 4 Pillars of Presence"
              suppressHydrationWarning
            >
              <div className="philosophy-image-box">
                <img
                  src="/pictures/Casual/albert-dera-ILip77SbmOE-unsplash.webp"
                  alt="Vantage Persona Atelier Curation"
                  loading="lazy"
                  decoding="async"
                  suppressHydrationWarning
                />
                <span className="philosophy-image-tag">ATELIER CODEX</span>
              </div>

              <div className="philosophy-content">
                <span className="philosophy-eyebrow">THE FULL PERSONA SYSTEM</span>
                <h3 className="philosophy-title">The 4 Pillars of Presence</h3>

                <div className="philosophy-pillars-list">
                  <div className="philosophy-pillar-item">
                    <span className="pillar-num">01</span>
                    <span className="pillar-name">Creative Direction</span>
                    <span className="pillar-desc">Identity</span>
                  </div>
                  <div className="philosophy-pillar-item">
                    <span className="pillar-num">02</span>
                    <span className="pillar-name">Atelier Styling</span>
                    <span className="pillar-desc">Silhouette</span>
                  </div>
                  <div className="philosophy-pillar-item">
                    <span className="pillar-num">03</span>
                    <span className="pillar-name">Lens &amp; Cinema</span>
                    <span className="pillar-desc">Archive</span>
                  </div>
                  <div className="philosophy-pillar-item">
                    <span className="pillar-num">04</span>
                    <span className="pillar-name">Haute Beauté</span>
                    <span className="pillar-desc">Grooming</span>
                  </div>
                </div>

                <a href="#board-section" className="philosophy-trustees-link">
                  <span>13 Artisans • The Board</span>
                  <span className="link-arrow" aria-hidden="true">↘</span>
                </a>
              </div>
            </div>

            {/* Luxury Rotating Atelier Seal nestled next to Polaroid */}
            <div className="luxury-rotating-seal" title="Vantage Persona Certified Sartorial Atelier">
              <svg viewBox="0 0 160 160" className="seal-svg">
                <path
                  id="sealTextPath"
                  d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                  fill="none"
                />
                <text className="seal-text">
                  <textPath href="#sealTextPath" startOffset="0%">
                    ★ VANTAGE PERSONA ★ BESPOKE LUXURY ★ ATELIER SARTORIAL ★ EST. 2024 ★
                  </textPath>
                </text>
              </svg>
              <div className="seal-center-badge">
                <span className="seal-stars">✦ ✦ ✦</span>
                <span className="seal-brand">VP</span>
                <span className="seal-sub">PARIS • MILAN</span>
              </div>
            </div>
          </div>

          {/* Bottom Right: Bottom Microcopy */}
          <div className="card-bottom-right-micro">
            <span className="bottom-microcopy-tag">CURATED FOR THE INDIVIDUAL</span>
            <span className="bottom-microcopy-sub">✦ BESPOKE SARTORIAL ATELIER • EST. 2024</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LAYER 3: FOREGROUND MODEL (LadyWhite.png) - CENTERED IN FRONT OF CARD
          ========================================================================= */}
      <div className="hero-model-layer">
        <div
          className="model-portrait-wrapper"
          style={{
            transform: "translate3d(var(--hero-model-x, 0px), var(--hero-model-y, 0px), 0)",
          }}
        >
          <img
            src="/pictures/LadyWhite.webp"
            alt="Vantage Persona Muse in Haute Couture Noir Winter Overcoat and Beret"
            className="model-hero-img"
          />

          {/* Interactive Model Tag Pill */}
          <div
            className={`model-interactive-pill ${modelTagOpen ? "expanded" : ""}`}
          >
            <button
              type="button"
              className="pill-badge"
              aria-expanded={modelTagOpen}
              aria-label="Toggle Model Sartorial Details"
              onClick={() => setModelTagOpen(!modelTagOpen)}
            >
              <span className="plus-symbol">{modelTagOpen ? "×" : "+"}</span>
              <span className="pill-text">Model</span>
            </button>

            {modelTagOpen && (
              <div className="model-detail-popover">
                <span className="detail-code">VP-COUTURE #001</span>
                <h4>Signature Noir Woolen Ensemble</h4>
                <p>
                  Handcrafted turtleneck &amp; structural double-breasted overcoat accented with brass
                  buttons, kidskin leather gloves, and sculpted velvet beret.
                </p>
                <Link href="/appointment" className="detail-cta">
                  Book Fitting ↗
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
