"use client";

import React, { useState } from "react";

interface AccessCardProps {
  className: string;
  eyebrow: string;
  title: string;
  sub: string;
  images: string[];
}

function AccessCard({ className, eyebrow, title, sub, images }: AccessCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleClick = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <article
      className={`section-3-card ${className}`}
      data-hint="Click to explore alternate looks"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title="Click to rotate through looks"
    >
      <div className="section-3-card__media">
        {/* Floating perspective counter */}
        <div className="section-3-card__badge">
          <span>LOOK {String(currentIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          <span className="badge-arrow">✦</span>
        </div>

        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${title} - Look ${idx + 1}`}
            style={{
              opacity: idx === currentIdx ? 1 : 0,
              zIndex: idx === currentIdx ? 2 : 1,
            }}
          />
        ))}
      </div>

      <div className="section-3-card__text">
        <p className="section-3-card__eyebrow">{eyebrow}</p>
        <h3 className="section-3-card__title">{title}</h3>
        <p className="section-3-card__sub">{sub}</p>

        {/* Visual progress pips */}
        <div className="section-3-card__dots" aria-hidden="true">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`section-3-card__dot${idx === currentIdx ? " active" : ""}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function AccessoriesSection() {
  const watches = [
    "/pictures/Jewelries/Watches/nikola-gladovic-IdbFOMaGZAU-unsplash.webp",
    "/pictures/Jewelries/Watches/pexels-media-9267840.webp",
    "/pictures/Jewelries/Watches/puru-raj-B6z8FAfi7zY-unsplash.webp",
    "/pictures/Jewelries/Watches/jonathan-simcoe-G3J5_Q-pIbY-unsplash.webp",
    "/pictures/Jewelries/Watches/yash-parashar-LWPPpkn6NEQ-unsplash.webp",
    "/pictures/Jewelries/Watches/sanju-pandita-BzugKLNYCYc-unsplash.webp",
  ];

  const bags = [
    "/pictures/Bags/pexels-media-4830930.webp",
    "/pictures/Bags/kate-laine-FdrYxVSbq2s-unsplash.webp",
    "/pictures/Bags/pexels-media-18458794.webp",
    "/pictures/Bags/pexels-media-7735614.webp",
    "/pictures/Bags/pexels-media-27174565.webp",
    "/pictures/Bags/pexels-media-27174571.webp",
  ];

  const rings = [
    "/pictures/Jewelries/pexels-media-5737277.webp",
    "/pictures/Jewelries/nick-karvounis-8WODX7nO2JE-unsplash.webp",
    "/pictures/Jewelries/sergey-sokolov-STPlLm5N9U4-unsplash.webp",
    "/pictures/Jewelries/sabrianna-q_sPpAv0MXE-unsplash.webp",
    "/pictures/Jewelries/sabrianna-Y_bxfTa_iUA-unsplash.webp",
    "/pictures/Jewelries/sabrianna-kuko1hX_kXw-unsplash.webp",
  ];

  const gloves = [
    "/pictures/Assesories/Gloves/bec5be3f-dea9-49b8-8454-ad7ca62433b1.webp",
    "/pictures/Assesories/Gloves/omar-al-ghosson-5fnmt6S7y4o-unsplash.webp",
    "/pictures/Assesories/Gloves/adrian-valverde-HLQmjhnxeN8-unsplash.webp",
    "/pictures/Assesories/Gloves/ricardas-brogys-hnCId8kirF0-unsplash.webp",
    "/pictures/Assesories/Gloves/joshua-reddekopp-cNe8GsQR-OQ-unsplash (1).webp",
    "/pictures/Assesories/Gloves/tengyart-72zuMWWQAoI-unsplash.webp",
  ];

  const bracelets = [
    "/pictures/Jewelries/pexels-media-7541806.webp",
    "/pictures/Jewelries/pexels-media-32039109.webp",
    "/pictures/Jewelries/aydin-ghadakchi-lamor-1BBlGVr2_Yw-unsplash.webp",
    "/pictures/Jewelries/valentina-schick-QVggAMsY8DM-unsplash.webp",
    "/pictures/Jewelries/nexaro-studio-FxxeBquV8CQ-unsplash.webp",
    "/pictures/Jewelries/nexaro-studio-dd-ob8uFxb8-unsplash.webp",
  ];

  const eyewear = [
    "/pictures/Assesories/Headwear&Eyewear/hameen-reynolds-uRjR7_nI50A-unsplash.webp",
    "/pictures/Assesories/Headwear&Eyewear/henry-tuchez-2Io6GBfPwE4-unsplash.webp",
    "/pictures/Assesories/Headwear&Eyewear/lera-kogan-HuxdBocLN94-unsplash.webp",
    "/pictures/Assesories/Headwear&Eyewear/premium_photo-1695844419044-784199146b56-processed(lightpdf.com).webp",
    "/pictures/Assesories/Headwear&Eyewear/zeelool-glasses-PnA5IDu0LZg-unsplash.webp",
    "/pictures/Assesories/Headwear&Eyewear/lensabl-LEtgz-OS5uU-unsplash.webp",
  ];

  return (
    <section className="section-3 container-fade" id="section-3" aria-labelledby="section-3-heading">
      <div className="section-3-inner">
        <header className="section-3-header">
          <div className="section-3-badge-row">
            <span className="section-3-tag">VAULT &amp; ORNAMENTATION</span>
            <span className="section-3-counter">06 CURATED DISCIPLINES</span>
          </div>
          <h2 id="section-3-heading" className="section-3-heading">
            An ensemble is conceived in fabric, but immortalized in detail. Where horology, sculpted metals, and leathercraft define the sovereign silhouette.
          </h2>
        </header>

        <div className="section-3-grid">
          <AccessCard
            className="section-3-card--tall section-3-card--jewelry"
            eyebrow="Horology &amp; Calibers"
            title="Precision Timepieces"
            sub="Automatic movements, sapphire crystals &amp; chronographs"
            images={watches}
          />

          <AccessCard
            className="section-3-card--tall section-3-card--accessory"
            eyebrow="Haute Leathercraft"
            title="Architectural Bags"
            sub="Full-grain calfskin, structured silhouettes &amp; weekender carry"
            images={bags}
          />

          <AccessCard
            className="section-3-card--wide section-3-card--jewelry"
            eyebrow="Precious Metals"
            title="Signet &amp; Band Rings"
            sub="Hand-cast sterling, sovereign crests &amp; sculpted gold"
            images={rings}
          />

          <AccessCard
            className="section-3-card--accessory"
            eyebrow="Sartorial Leather"
            title="Nappa Leather Gloves"
            sub="Hand-stitched seams, cashmere lining &amp; bespoke driving cuts"
            images={gloves}
          />

          <AccessCard
            className="section-3-card--wide section-3-card--jewelry"
            eyebrow="Fine Jewelry"
            title="Bracelets &amp; Chains"
            sub="Cuban links, raw textured silver &amp; minimalist chokers"
            images={bracelets}
          />

          <AccessCard
            className="section-3-card--full section-3-card--accessory"
            eyebrow="Bespoke Optics &amp; Crowns"
            title="Headwear &amp; Sculpted Eyewear"
            sub="Hand-finished Italian acetate, UV lenses &amp; structured brimwear"
            images={eyewear}
          />
        </div>
      </div>
    </section>
  );
}
