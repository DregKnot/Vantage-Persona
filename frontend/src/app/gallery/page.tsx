"use client";

import React, { useState } from "react";
import { galleryStyles } from "@/styles/galleryStyles";

interface SlitImage {
  src: string;
  alt: string;
  tag: string;
}

interface AbstractItem {
  id: string;
  index?: string;
  title?: string;
  subtitle?: string;
  src?: string;
  layout?: "tall-monolith" | "wide-panorama" | "offset-down" | "offset-up" | "standard" | "focus-square";
  isPause?: boolean;
  quote?: string;
  meta?: string;
  coords?: string;
}

export default function GalleryPage() {
  // Act I: BOLD Section Interactive States
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState<{
    src: string;
    title: string;
    index: string;
    subtitle?: string;
  } | null>(null);

  // Curated Slit Images (Intense eye gazes, cheekbones, sculpted collars)
  const slitImages: SlitImage[] = [
    { src: "/pictures/BlackModels/pexels-media-11434885.webp", alt: "Gaze of Intent", tag: "LOOK 01 // GAZE" },
    { src: "/pictures/BlackModels/chuxie-daniels-Q_OZvYusj0w-unsplash.webp", alt: "Sovereign Angle", tag: "LOOK 02 // ANGLE" },
    { src: "/pictures/BlackModels/apex-360-ioRBT9swcK8-unsplash.webp", alt: "Sculpted Profile", tag: "LOOK 03 // SCULPT" },
    { src: "/pictures/BlackModels/divine-effiong-9oQrjjRU0mA-unsplash.webp", alt: "Avant-Garde Drape", tag: "LOOK 04 // DRAPE" },
    { src: "/pictures/BlackModels/eze-joseph-0Rkv32PDGjI-unsplash.webp", alt: "Monochrome Majesty", tag: "LOOK 05 // CROWN" },
    { src: "/pictures/BlackModels/pexels-media-13646260.webp", alt: "Piercing Focus", tag: "LOOK 06 // SILHOUETTE" },
    { src: "/pictures/BlackModels/pexels-media-28453251.webp", alt: "Raw Texture", tag: "LOOK 07 // TEXTURE" },
    { src: "/pictures/BlackModels/shimo-yann-OgqnGYsyug8-unsplash.webp", alt: "Runway Presence", tag: "LOOK 08 // PRESENCE" },
  ];

  // Curated Abstract Grid Looks with Asymmetric Layout Roles & Typographic Pauses
  const abstractArchive: AbstractItem[] = [
    { id: "01", index: "№ 01", title: "Sculpted Obsidian", subtitle: "Avant-Garde Tailoring", src: "/pictures/BlackModels/apex-360-9UX-VAXPD4s-unsplash.webp", layout: "tall-monolith" },
    { id: "02", index: "№ 02", title: "Angular Tension", subtitle: "Structured Woolen Cut", src: "/pictures/BlackModels/chuxie-daniels-nM-075GyuF0-unsplash.webp", layout: "offset-down" },
    { id: "03", index: "№ 03", title: "Raw Velvet Silhouette", subtitle: "Monochrome Archive", src: "/pictures/BlackModels/divine-effiong-k3Srj786qtk-unsplash.webp", layout: "offset-up" },
    { id: "04", index: "№ 04", title: "Cinematic Horizon", subtitle: "Widescreen Drape", src: "/pictures/BlackModels/pexels-media-11551370.webp", layout: "wide-panorama" },
    { id: "pause-1", isPause: true, quote: "“Fashion is not an ornament; it is the tension between volume and void.”", meta: "VP / ATELIER PRINCIPLE", coords: "06°30'N 03°24'E" },
    { id: "05", index: "№ 05", title: "Imperial Collar", subtitle: "High Neckline Architecture", src: "/pictures/BlackModels/pexels-media-13434107.webp", layout: "standard" },
    { id: "06", index: "№ 06", title: "Tactile Contrast", subtitle: "Shearling & Leather", src: "/pictures/BlackModels/pexels-media-13548964.webp", layout: "focus-square" },
    { id: "07", index: "№ 07", title: "Monolithic Stature", subtitle: "Monumental Form", src: "/pictures/BlackModels/pexels-media-25311494.webp", layout: "tall-monolith" },
    { id: "08", index: "№ 08", title: "Kinetic Duality", subtitle: "Movement in Wool", src: "/pictures/BlackModels/pexels-media-2562497.webp", layout: "offset-down" },
    { id: "09", index: "№ 09", title: "Nocturne Presence", subtitle: "Deep Shadow Profile", src: "/pictures/BlackModels/pexels-media-31407391.webp", layout: "wide-panorama" },
    { id: "10", index: "№ 10", title: "The Gilded Stare", subtitle: "Piercing Minimalist Cut", src: "/pictures/BlackModels/pexels-media-33204975.webp", layout: "standard" },
    { id: "pause-2", isPause: true, quote: "“Not always in the suit. Where presence ends, persona begins.”", meta: "ACT I // MANIFESTO", coords: "MAISON VP 2026" },
    { id: "11", index: "№ 11", title: "Avant-Garde Veil", subtitle: "Fabric Deconstruction", src: "/pictures/BlackModels/pexels-media-34938822.webp", layout: "tall-monolith" },
    { id: "12", index: "№ 12", title: "Architectural Lapel", subtitle: "Double-Breasted Crest", src: "/pictures/BlackModels/pexels-media-34938833.webp", layout: "focus-square" },
    { id: "13", index: "№ 13", title: "Sovereign Strut", subtitle: "Cinematic Pan", src: "/pictures/BlackModels/pexels-media-34938839.webp", layout: "wide-panorama" },
    { id: "14", index: "№ 14", title: "Sculpted Gaze", subtitle: "Chiaroscuro Light", src: "/pictures/BlackModels/pexels-media-36291319.webp", layout: "offset-up" },
    { id: "15", index: "№ 15", title: "Raw Fiber Form", subtitle: "Heavy Weight Drape", src: "/pictures/BlackModels/pexels-media-36445249.webp", layout: "standard" },
    { id: "16", index: "№ 16", title: "The Modern Sovereign", subtitle: "Flawless Silhouette", src: "/pictures/BlackModels/pexels-media-36514633.webp", layout: "offset-down" },
    { id: "17", index: "№ 17", title: "Asymmetrical Coat", subtitle: "Sculpted Wool", src: "/pictures/BlackModels/pexels-media-36547359.webp", layout: "wide-panorama" },
    { id: "18", index: "№ 18", title: "Archival Horizon", subtitle: "Runway Zenith", src: "/pictures/BlackModels/shimo-yann-wZuClEnlBhs-unsplash.webp", layout: "tall-monolith" },
  ];

  // Flush Section State Management
  const flushStates = [
    {
      img: "/pictures/Flush_section/alexi-romano-CCx6Fz_CmOI-unsplash.webp",
      h2: "THE SUPREME STATE",
      p: "In the Vantage world, 'Flush' isn't just about abundance; it's about the precision of volume and the architecture of presence. When fashion is flush, it occupies space with an intentional weight, creating a silhouette that is both grounded and ethereal.",
    },
    {
      img: "/pictures/Flush_section/anh-q-tran-bNNtwg_2AUE-unsplash.webp",
      h2: "ANCIENT GRACE",
      p: "This captures a royalty defined by immaculate preservation and traditional purity. The spotless white ao dai offers a seamless, elongated silhouette that is both powerful and delicate.",
    },
    {
      img: "/pictures/Flush_section/laura-chouette-SYlkSg5Njfs-unsplash.webp",
      h2: "DENSITY OF STYLE",
      p: "A study in saturation. Here, color and texture are stacked with calculated intensity. It is not excess, but the absolute fulfillment of a vision where every thread contributes to a monumental fashion statement.",
    },
    {
      img: "/pictures/Flush_section/michael-kyule-g-qdii0n-Sk-unsplash.webp",
      h2: "MONUMENTAL PRESENCE",
      p: "Beyond the garment lies the identity. The final evolution of 'Flush' is the transformation of the wearer into a walking monument of contemporary elegance, unyielding and perfectly composed.",
    },
    {
      img: "/pictures/Flush_section/leoni-fleming-xKb0eYfN_D4-unsplash.webp",
      h2: "THE REIGN OF OPULENCE",
      p: "This look commands with a flush of texture and an unconventional regal confidence. The avalanche of ivory tulle collides with sleek, futuristic sheerness.",
    },
    {
      img: "/pictures/Flush_section/mohsen-karimi-_SsyDr6RnRg-unsplash.webp",
      h2: "WHISPERED WEALTH",
      p: "A sophisticated, highly refined take on 'flush' that uses pattern instead of piled fabric. The crisp pinstripe suit is the classic uniform of tradition and authority.",
    },
    {
      img: "/pictures/Flush_section/ospan-ali-nyrSsBzhZ4Y-unsplash.webp",
      h2: "MATRIARCHAL ORDER",
      p: "The deep black coat with its high, ruffled collar and pearlescent buttons channels historic nobility, but the structured tailoring feels contemporary.",
    },
    {
      img: "/pictures/Flush_section/reza-delkhosh-1h4SHm3SZ0c-unsplash.webp",
      h2: "INHERITED ELEGANCE",
      p: "This aesthetic is rooted in the ease of true wealth—royalty in its most relaxed, abundant form. The heavy texture of the oversized beige shearling coat creates a literal flush of fabric.",
    },
  ];

  const [flushIndex, setFlushIndex] = useState(0);
  const [flushTransitioning, setFlushTransitioning] = useState(false);

  const handleNextFlush = () => {
    if (flushTransitioning) return;
    setFlushTransitioning(true);
    setTimeout(() => {
      setFlushIndex((prev) => (prev + 1) % flushStates.length);
      setFlushTransitioning(false);
    }, 200);
  };

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
          />
        </div>
        <div className="hero-content">
          <h1 className="vantage-text">VANTAGE</h1>
          <span className="collection-text">Collection</span>
        </div>
        <div className="year-text">2026</div>
      </section>

      {/* =========================================================================
         ACT I: FASHION IS BOLD (Cinematic Ryoku-Style Slit Aperture & Abstract Grid)
         ========================================================================= */}
      <section className="bold-fashion-section" id="bold-section" aria-label="Fashion is BOLD Archive">
        <div className="bold-fashion-content">
          {/* Top Metadata Navigation */}
          <div className="bold-meta-bar">
            <div className="bold-meta-badge">
              <span className="bold-meta-dot">✦</span>
              <span>LOOKBOOK 01 // ACT I</span>
            </div>
            <div className="bold-meta-subtitle">THE AVANT-GARDE APERTURE</div>
          </div>

          {/* The Ryoku-Style Cinematic Slit Aperture Stage */}
          <div className="bold-aperture-stage">
            {/* Upper Typographic Slice */}
            <div className="bold-typo-slice bold-typo-top" aria-hidden="true">
              <span className="bold-massive-text">BOLD</span>
            </div>

            {/* The Horizontal Letterbox Slit Window with Gliding Series of Images */}
            <div
              className="bold-slit-window"
              onClick={() => setIsExpanded((prev) => !prev)}
              role="button"
              tabIndex={0}
              title="Click to deconstruct archive into abstract grid"
              aria-expanded={isExpanded}
            >
              <div className="bold-slit-track">
                {/* Loop sequence twice for smooth endless horizontal drift */}
                {[...slitImages, ...slitImages].map((img, idx) => (
                  <div key={idx} className="bold-slit-item">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="bold-slit-overlay" aria-hidden="true" />
                    <span className="bold-slit-tag">{img.tag}</span>
                  </div>
                ))}
              </div>

              {/* Floating Expand CTA Pill */}
              <div className="bold-slit-cta">
                <span className="cta-icon">✦</span>
                <span className="cta-text">
                  {isExpanded ? "COLLAPSE APERTURE" : "CLICK TO DECONSTRUCT ARCHIVE"}
                </span>
                <span className="cta-counter">24 LOOKS</span>
              </div>
            </div>

            {/* Lower Typographic Slice */}
            <div className="bold-typo-slice bold-typo-bottom" aria-hidden="true">
              <span className="bold-massive-text">BOLD</span>
            </div>

            {/* Editorial Manifesto (Bottom Right matching reference styling) */}
            <div className="bold-editorial-manifesto">
              <p className="manifesto-line">NOT ALWAYS IN THE SUIT.</p>
              <p className="manifesto-line">FASHION IS DIVERSE.</p>
              <p className="manifesto-line highlight">FASHION IS BOLD.</p>
            </div>
          </div>

          {/* =====================================================================
             THE ASYMMETRICAL ABSTRACT GRID (REVEALED ON CLICK)
             ===================================================================== */}
          {isExpanded && (
            <div className="bold-abstract-section" id="abstract-grid-view">
              {/* Sticky Architectural Toolbar */}
              <div className="bold-abstract-toolbar">
                <div className="toolbar-left">
                  <span className="toolbar-tag">DECONSTRUCTED ATELIER ARCHIVE</span>
                  <span className="toolbar-count">24 CURATED SILHOUETTES</span>
                </div>
                <button
                  type="button"
                  className="toolbar-collapse-btn"
                  onClick={() => setIsExpanded(false)}
                  aria-label="Collapse to aperture"
                >
                  <span>✕</span>
                  <span>COLLAPSE TO APERTURE</span>
                </button>
              </div>

              {/* The Abstract Asymmetrical Masonry Grid */}
              <div className="bold-abstract-grid">
                {abstractArchive.map((item) => {
                  if (item.isPause) {
                    return (
                      <article key={item.id} className="abstract-card graphic-pause">
                        <div className="pause-meta-header">
                          <span>{item.meta}</span>
                          <span>✦</span>
                        </div>
                        <blockquote className="pause-quote">{item.quote}</blockquote>
                        <div className="pause-footer-coords">{item.coords}</div>
                      </article>
                    );
                  }

                  return (
                    <article
                      key={item.id}
                      className={`abstract-card ${item.layout || "standard"}`}
                      onClick={() =>
                        setActiveLightbox({
                          src: item.src!,
                          title: item.title!,
                          index: item.index!,
                          subtitle: item.subtitle,
                        })
                      }
                      role="button"
                      tabIndex={0}
                      title={`Inspect ${item.title}`}
                    >
                      <img src={item.src!} alt={item.title!} loading="lazy" />
                      <div className="abstract-card-info">
                        <div>
                          <span className="abstract-card-index">{item.index}</span>
                          <h3 className="abstract-card-title">{item.title}</h3>
                        </div>
                        <span className="abstract-zoom-hint">FOCUS ↗</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* Fullscreen Lightbox Focus Modal */}
          {activeLightbox && (
            <div
              className="bold-lightbox-backdrop"
              onClick={() => setActiveLightbox(null)}
              role="dialog"
              aria-modal="true"
            >
              <div
                className="bold-lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="bold-lightbox-close"
                  onClick={() => setActiveLightbox(null)}
                  aria-label="Close Focus View"
                >
                  ✕ CLOSE
                </button>
                <img src={activeLightbox.src} alt={activeLightbox.title} />
                <div className="bold-lightbox-caption">
                  <p>{activeLightbox.index} &bull; {activeLightbox.subtitle}</p>
                  <h4>{activeLightbox.title}</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
         ACT II: FASHION IS FLUSH
         ========================================================================= */}
      <section className="section-5 container-fade" id="flush">
        <div className="flush-header-section">
          <h1 className="flush-main-title">
            Fashion is <br />
            <span className="kings-cross">Flush</span>
          </h1>
        </div>

        <div className="flush-content-section">
          <div className="section-5-bg"></div>
          <div className="flush-container">
            <div className="flush-text-side">
              <div
                className="flush-content-area"
                id="flush-text-content"
                style={{
                  opacity: flushTransitioning ? 0 : 1,
                  transform: flushTransitioning ? "translateY(15px)" : "translateY(0)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
              >
                <h2 id="flush-heading">{flushStates[flushIndex].h2}</h2>
                <p id="flush-description">{flushStates[flushIndex].p}</p>
              </div>
            </div>

            <div className="flush-image-side">
              <div className="flush-image-wrapper">
                <button
                  className="change-img-btn"
                  id="change-flush-img"
                  data-hint="Click to change phase"
                  onClick={handleNextFlush}
                >
                  NEXT PHASE ({flushIndex + 1}/{flushStates.length})
                </button>
                <img
                  src={flushStates[flushIndex].img}
                  alt={flushStates[flushIndex].h2}
                  className="flush-image"
                  style={{
                    opacity: flushTransitioning ? 0.3 : 1,
                    transform: flushTransitioning ? "scale(0.98)" : "scale(1)",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
  );
}
