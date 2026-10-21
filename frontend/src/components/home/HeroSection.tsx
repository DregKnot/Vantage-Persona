"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [modelTagOpen, setModelTagOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>("Model");
  const heroRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle 3D tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 12, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
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
            backgroundImage: "url('/pictures/pexels-joerg-hartmann-626385254-28388982.jpg')",
            transform: `scale(1.1) translate3d(${-mouseOffset.x * 0.4}px, ${-mouseOffset.y * 0.4}px, 0)`,
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
          transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
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
        <div className="card-top-row">
          {/* Left: Introductions & Heritage */}
          <div className="card-header-left">
            <span className="card-eyebrow-mini">VANTAGE PERSONA • WINTER ATELIER</span>
            <h1 className="card-introducing-title">INTRODUCING</h1>
            <div className="card-meta-row">
              <span className="meta-month">DECEMBER</span>
              <span className="meta-year">2026</span>
              <span className="meta-founded">YEAR <em>Founded</em></span>
            </div>
            <div className="card-discoverability-badge">
              <span className="badge-tag">DISCOVERABILITY</span>
              <span className="badge-sub">IMPORTANT CONTENT IS EASY TO FIND</span>
            </div>
          </div>

          {/* Right: Modern UX / UI & Staggered Look Cards */}
          <div className="card-header-right">
            <div className="card-right-label">
              <span>Vantage</span>
              <strong>FASHION</strong>
            </div>

            {/* Staggered Floating Look Previews */}
            <div className="staggered-look-stack">
              {/* Look 1: Man */}
              <div
                className={`staggered-card card-man ${activeCategory === "Man" ? "active" : ""}`}
                onClick={() => setActiveCategory(activeCategory === "Man" ? null : "Man")}
                title="Explore Men's Tailoring"
              >
                <img
                  src="/pictures/Casual/chris-mac-t3R6M_9GVRY-unsplash.webp"
                  alt="Men's Collection Preview"
                />
                <button type="button" className="pill-tag-btn">
                  <span className="tag-plus">+</span> Man
                </button>
              </div>

              {/* Look 2: Woman */}
              <div
                className={`staggered-card card-woman ${activeCategory === "Woman" ? "active" : ""}`}
                onClick={() => setActiveCategory(activeCategory === "Woman" ? null : "Woman")}
                title="Explore Women's Couture"
              >
                <img
                  src="/pictures/Casual/helga-pettersen-Z0EtZNXY_eE-unsplash.webp"
                  alt="Women's Collection Preview"
                />
                <button type="button" className="pill-tag-btn">
                  <span className="tag-plus">+</span> Women
                </button>
              </div>

              {/* Look 3: Bespoke */}
              <div
                className={`staggered-card card-kids ${activeCategory === "Bespoke" ? "active" : ""}`}
                onClick={() => setActiveCategory(activeCategory === "Bespoke" ? null : "Bespoke")}
                title="Explore Bespoke Tailoring"
              >
                <img
                  src="/pictures/Cooperate/ben-iwara-jHzZp4wYRbk-unsplash.webp"
                  alt="Bespoke Collection Preview"
                />
                <button type="button" className="pill-tag-btn">
                  <span className="tag-plus">+</span> Bespoke
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- BOTTOM BAR OF CARD ----------------- */}
        <div className="card-bottom-row">
          {/* Bottom Left Group: Polaroid & Luxury Rotating Atelier Seal */}
          <div className="card-bottom-left-group">
            <div className="floating-polaroid-card">
              <div className="polaroid-image-box">
                <img
                  src="/pictures/Casual/albert-dera-ILip77SbmOE-unsplash.webp"
                  alt="Burgundy Wool Knit Overcoat"
                />
              </div>
              <div className="polaroid-info">
                <div className="polaroid-title">Burgundy Cotton Knit &amp; Overcoat</div>
                <div className="polaroid-price">
                  <strong>$756</strong> <small>+ VAT</small>
                </div>
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
                    ★ VANTAGE PERSONA ★ BESPOKE LUXURY ★ ATELIER SARTORIAL ★ 2026 ★
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

          {/* Bottom Right: Editorial Sartorial Terminology */}
          <div className="card-editorial-terms">
            <span className="term-item">Kurti</span>
            <span className="term-item">Selwar</span>
            <span className="term-item">T-Shirt</span>
            <span className="term-highlight">Jacket wear</span>
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
            transform: `translate3d(${mouseOffset.x * 1.1}px, ${mouseOffset.y * 0.8}px, 0)`,
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
