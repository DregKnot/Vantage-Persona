"use client";

import React, { useState } from "react";
import { galleryStyles } from "@/styles/galleryStyles";
import SmoothScrollProvider from "@/components/gallery/SmoothScrollProvider";
import BoldSection from "@/components/gallery/BoldSection";
import Flush from "@/components/gallery/Flush";

export default function GalleryPage() {


  // Wedding Slides State
  const weddingSlides = [
    {
      index: "01",
      title: "Timeless",
      desc: "The perfect blend of tradition and modern aesthetics. Unveil the elegance of the ultimate day.",
      img: "/pictures/Wedding/pexels-media-11398242.webp",
      cardLabel: "The Silhouette",
      cardTitle: "Graceful finishing",
      bgClass: "bg-slide-0",
    },
    {
      index: "02",
      title: "Vows",
      desc: "Capturing the essence of eternal promises in structured silhouettes designed for motion.",
      img: "/pictures/Wedding/pexels-media-1446161.webp",
      cardLabel: "Accessories",
      cardTitle: "Minimal jewelry",
      bgClass: "bg-slide-1",
    },
    {
      index: "03",
      title: "Elegance",
      desc: "Sophisticated tailoring for your most important day. A masterpiece of fabric architecture.",
      img: "/pictures/Wedding/pexels-media-14888535.webp",
      cardLabel: "Tailoring",
      cardTitle: "Sculpted profile",
      bgClass: "bg-slide-2",
    },
  ];

  const [weddingIdx, setWeddingIdx] = useState(0);

  return (
    <SmoothScrollProvider>
      <main className="gallery-page-container">
        {/* Internal CSS embedded directly within Gallery Page */}
        <style
          id="gallery-internal-css"
          dangerouslySetInnerHTML={{ __html: galleryStyles }}
        />

        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="hero-bg">
            <img
              src="/pictures/Cooperate/dwayne-joe-Lx_rPnFwPTk-unsplash.webp"
              alt="Gallery Hero Background"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero-content">
            <h1 className="vantage-text">VANTAGE</h1>
            <span className="collection-text">Collection</span>
          </div>
          <div className="year-text">2026</div>
        </section>

        {/* =========================================================================
           ACT I: FASHION IS BOLD (Modularized Architecture)
           ========================================================================= */}
        <BoldSection />

        {/* =========================================================================
           ACT II: FASHION IS FLUSH (Modularized Architecture & WebGL MorphSlider)
           ========================================================================= */}
        <Flush />

        {/* =========================================================================
           ACT III: THE WEDDING COLLECTION
           ========================================================================= */}
        <section className="wedding-pin-wrapper container-fade" id="wedding-collection" data-auto-hint="Explore wedding collection">
          <div className="wedding-sticky-container" style={{ position: "relative" }}>
            <div className="wedding-left-images">
              <div className="wedding-image-track">
                <div className="wedding-img-slide">
                  <img
                    src={weddingSlides[weddingIdx].img}
                    alt={weddingSlides[weddingIdx].title}
                    loading="lazy"
                    decoding="async"
                    style={{ transition: "opacity 0.4s ease" }}
                  />
                  <div className="wedding-floating-card top-right-card">
                    <span className="card-label">{weddingSlides[weddingIdx].cardLabel}</span>
                    <span className="card-title">{weddingSlides[weddingIdx].cardTitle}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wedding-right-text">
              <div className="large-bg-number" id="wedding-number">
                {weddingSlides[weddingIdx].index}
              </div>

              <div className="wedding-text-content-area">
                <h4 className="wedding-sub-heading">WEDDING COLLECTION</h4>
                <div className="wedding-text-track">
                  <div className="wedding-text-slide active-text">
                    <h2 className="main-heading">{weddingSlides[weddingIdx].title}</h2>
                    <p className="wedding-description">{weddingSlides[weddingIdx].desc}</p>
                    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                      {weddingSlides.map((s, idx) => (
                        <button
                          key={s.index}
                          onClick={() => setWeddingIdx(idx)}
                          style={{
                            background: idx === weddingIdx ? "#d4af37" : "rgba(255,255,255,0.08)",
                            color: idx === weddingIdx ? "#0d0a08" : "#fff",
                            border: idx === weddingIdx ? "1px solid #f8e3b4" : "1px solid rgba(255,255,255,0.15)",
                            padding: "8px 18px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            fontFamily: "var(--font-plus-jakarta)",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {s.index} — {s.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}
