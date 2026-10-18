"use client";

import React, { useState, useEffect } from "react";
import "@/styles/gallery.css";

export default function GalleryPage() {
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

  // BlackModels grid
  const blackModels = [
    "apex-360-9UX-VAXPD4s-unsplash.webp",
    "apex-360-ioRBT9swcK8-unsplash.webp",
    "chuxie-daniels-Q_OZvYusj0w-unsplash.webp",
    "chuxie-daniels-nM-075GyuF0-unsplash.webp",
    "divine-effiong-9oQrjjRU0mA-unsplash.webp",
    "divine-effiong-k3Srj786qtk-unsplash.webp",
    "eze-joseph-0Rkv32PDGjI-unsplash.webp",
    "pexels-media-11434885.webp",
    "pexels-media-11551370.webp",
    "pexels-media-13434107.webp",
    "pexels-media-13548964.webp",
    "pexels-media-13646260.webp",
    "pexels-media-25311494.webp",
    "pexels-media-2562497.webp",
    "pexels-media-28453251.webp",
    "pexels-media-31407391.webp",
    "pexels-media-33204975.webp",
    "pexels-media-34938822.webp",
    "pexels-media-34938833.webp",
    "pexels-media-34938839.webp",
    "shimo-yann-OgqnGYsyug8-unsplash.webp",
    "shimo-yann-wZuClEnlBhs-unsplash.webp",
  ];

  return (
    <main className="gallery-page-container">
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

      {/* Bold Fashion Section */}
      <section className="bold-fashion-section" data-auto-hint="Double click images to explore in detail">
        <div className="grainy-overlay"></div>
        <div className="bold-fashion-content">
          <header className="fashion-header">
            many say fashion is sophisticated and almost always elegant and they are right but fashion is not always in the suit, fashion is diverse, fashion is wild
          </header>

          <div className="fashion-bold-title">
            Fashion is <br />
            <span className="bold-text">BOLD</span>
          </div>

          <div className="masonry-grid">
            {blackModels.map((m, idx) => (
              <div key={m} className="masonry-item" data-hint="Double tap to zoom">
                <img src={`/pictures/BlackModels/${m}`} alt={`Model ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion is Flush Section */}
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

      {/* Pinned Wedding Section */}
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
                          background: idx === weddingIdx ? "#2eaadc" : "rgba(255,255,255,0.1)",
                          color: "#fff",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontFamily: "var(--font-plus-jakarta)",
                          fontSize: "0.85rem",
                          letterSpacing: "0.05em",
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
