"use client";

import React, { useState } from "react";
import Link from "next/link";
import { lookbookData, LookbookCategory } from "@/data/lookbookData";
import "@/styles/lookbook.css";

export default function LookBookPage() {
  const categories = Object.keys(lookbookData);
  const [activeCategory, setActiveCategory] = useState<string>("Work of art");

  // Modal zoom state
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const currentData: LookbookCategory = lookbookData[activeCategory] || lookbookData["Work of art"];

  const openZoom = (src: string) => {
    setZoomedImage(src);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <main className={`lookbook-main-container theme-${activeCategory.replace(/ /g, "_")}`}>
      {/* Categories Selector Bar */}
      <section className="lookbook-categories-section">
        <div className="categories-wrapper">
          {categories.map((cat) => {
            const data = lookbookData[cat];
            const firstImg = data.images[0] || "";
            const bgUrl = `/pictures/LookBook/${cat}/${firstImg}`;

            return (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                data-hint="Select Collection"
                onClick={() => setActiveCategory(cat)}
                style={{
                  // @ts-expect-error custom CSS variable
                  "--bg-url": `url('${bgUrl}')`,
                }}
              >
                <span className="btn-text">{cat.replace(/_/g, " ")}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Display Section */}
      <section className="lookbook-display-section" id="lookbook-display" data-auto-hint="Double tap items to zoom">
        <div className="lookbook-category-intro" id="category-intro">
          {currentData.paragraph && <p className="intro-paragraph">{currentData.paragraph}</p>}
          {currentData.h3 && <h3 className="intro-subheading">{currentData.h3}</h3>}
          {currentData.h2 && (
            <h2
              className="intro-heading"
              dangerouslySetInnerHTML={{ __html: currentData.h2 }}
            />
          )}
          {currentData.h4 && <h4 className="intro-heading-small">{currentData.h4}</h4>}
        </div>

        <div className="display-glass-container" id="display-container">
          {/* TRACK VIEW */}
          {currentData.type === "track" && (
            <div className="lookbook-track">
              {currentData.images.map((img) => {
                const src = `/pictures/LookBook/${activeCategory}/${img}`;
                return (
                  <div
                    key={img}
                    className="track-item"
                    data-hint="Double click to inspect"
                    onDoubleClick={() => openZoom(src)}
                    onClick={() => openZoom(src)}
                  >
                    <img src={src} alt={activeCategory} loading="lazy" />
                  </div>
                );
              })}
            </div>
          )}

          {/* CINEMATIC VIEW */}
          {currentData.type === "cinematic" && (
            <div className="cinematic-grid">
              {currentData.video && (
                <div
                  className="grid-item item-center"
                  data-hint="Cinematic Centerpiece"
                  onClick={() => openZoom(`/pictures/LookBook/${activeCategory}/${currentData.video}`)}
                >
                  <img
                    src={`/pictures/LookBook/${activeCategory}/${currentData.video}`}
                    alt="Centerpiece"
                    loading="lazy"
                  />
                </div>
              )}
              {currentData.images.map((img) => {
                const src = `/pictures/LookBook/${activeCategory}/${img}`;
                return (
                  <div
                    key={img}
                    className="grid-item"
                    data-hint="Double click to inspect"
                    onDoubleClick={() => openZoom(src)}
                    onClick={() => openZoom(src)}
                  >
                    <img src={src} alt={activeCategory} loading="lazy" />
                  </div>
                );
              })}
            </div>
          )}

          {/* GRID VIEW */}
          {currentData.type === "grid" && (
            <div className="lookbook-grid">
              {currentData.images.map((img) => {
                const src = `/pictures/LookBook/${activeCategory}/${img}`;
                return (
                  <div
                    key={img}
                    className="lookbook-grid-item"
                    data-hint="Double click to inspect"
                    onDoubleClick={() => openZoom(src)}
                    onClick={() => openZoom(src)}
                  >
                    <img src={src} alt={activeCategory} loading="lazy" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Detail Zoom Modal */}
      {zoomedImage && (
        <div className="image-zoom-overlay active" id="zoom-overlay" onClick={closeZoom}>
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <div className="zoom-image-panel">
              <img src={zoomedImage} alt="Elevated View" id="zoomed-image" />
            </div>

            <div className="zoom-info-panel" id="zoom-info-panel">
              <p className="zoom-collection-label">Collection</p>
              <h2 className="zoom-collection-name">{activeCategory.replace(/_/g, " ")}</h2>
              <p className="zoom-description">
                {currentData.popup?.description || currentData.paragraph || "A curated visual experience from Vantage Persona."}
              </p>

              {currentData.popup ? (
                <div className="zoom-pricing">
                  <p className="zoom-price-label">{currentData.popup.label} — Starting from</p>
                  <p className="zoom-price-usd">
                    {currentData.popup.priceUSD}
                    {currentData.popup.priceSuffix}
                  </p>
                  <p className="zoom-price-ngn">
                    {currentData.popup.priceNGN}
                    {currentData.popup.priceSuffix}
                  </p>
                </div>
              ) : (
                <p className="zoom-showcase-label">✦ Showcase Only ✦</p>
              )}

              <Link href="/appointment" className="zoom-cta-btn">
                Book a Consultation →
              </Link>
            </div>
          </div>
          <button className="close-zoom" onClick={closeZoom} aria-label="Close">
            ✕
          </button>
        </div>
      )}
    </main>
  );
}
