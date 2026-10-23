"use client";

import React from "react";
import "@/styles/gallery.css";
import SmoothScrollProvider from "@/components/gallery/SmoothScrollProvider";
import BoldSection from "@/components/gallery/BoldSection";
import Flush from "@/components/gallery/Flush";
import WeddingSection from "@/components/gallery/WeddingSection";

export default function GalleryPage() {
  return (
    <SmoothScrollProvider>
      <main className="gallery-page-container">

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
           ACT III: THE WEDDING COLLECTION (Monumental Haute Couture Atelier)
           - Blurred Venue Slideshow Background
           - Digital Procedural Wooden Log spanning End-to-End
           - Golden Strings with Constant Sparkling Glitter Emissions
           - Suspended Couture Wedding Looks dripping Gold Dust
           - Center Dossier: "A Priceless Moment"
           - Liquid Gold River flowing horizontally off-screen at bottom
           ========================================================================= */}
        <WeddingSection />
      </main>
    </SmoothScrollProvider>
  );
}
