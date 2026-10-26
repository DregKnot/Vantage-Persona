"use client";

import React, { useState } from "react";
import Link from "next/link";

type TabKey = "architecture" | "procurement" | "ceremonial";

interface AtelierTab {
  id: TabKey;
  number: string;
  label: string;
  sublabel: string;
  quote: string;
  narrative: string[];
  pillars: string[];
  maisons?: string[];
  callout?: {
    badge: string;
    text: string;
  };
}

const ATELIER_TABS: AtelierTab[] = [
  {
    id: "architecture",
    number: "01",
    label: "SARTORIAL ARCHITECTURE",
    sublabel: "Bespoke Silhouette & Identity Engineering",
    quote: "“Fashion is fleeting; sovereign presence is absolute. We sculpt proportions that command every room before a single word is spoken.”",
    narrative: [
      "Founded in 2024, Vantage Persona emerged from the convergence of architectural volume, classical British tailoring, and contemporary silhouette engineering. We recognized that in an era of mass-market luxury and superficial style, true distinction lies in the calculated architecture of presence.",
      "Our master artisans do not simply alter cloth; we analyze your posture, shoulder stride, and social arena to sculpt bespoke garments with anatomical drape. Every stitch, canvas layer, and lapel angle is engineered as personal armor of quiet authority."
    ],
    pillars: [
      "Anatomical Proportion & Silhouette Sculpting",
      "Full-Canvas Bespoke Architectural Tailoring",
      "Private One-on-One Atelier Fittings & Posture Alignment"
    ],
    callout: {
      badge: "ATELIER PRINCIPLE",
      text: "Every silhouette is tailored 01-of-01 to the individual's anatomical presence."
    }
  },
  {
    id: "procurement",
    number: "02",
    label: "TURNKEY MAISON SOURCING",
    sublabel: "Direct Paris & Milan Runway Acquisition",
    quote: "“If you desire the fit, the entire fit is yours. We procure the unobtainable from the world’s most prestigious luxury houses at a single acquisition price.”",
    narrative: [
      "Every bespoke look, editorial ensemble, and curated fit presented by Vantage Persona is available for private acquisition. When our clients fall in love with an ensemble, they acquire the complete fit turnkey — fully sourced, custom-tailored, and delivered directly to their wardrobe.",
      "We operate an exclusive luxury procurement network across Paris, Milan, and London to acquire authenticated runway, seasonal, and archival pieces directly from legendary fashion houses — including Hermès, Prada, Gucci, Louis Vuitton, Saint Laurent, and Bottega Veneta."
    ],
    pillars: [
      "100% Guaranteed Maison Provenance & Authentication",
      "Complete Head-to-Toe Turnkey Fit Acquisition at a Set Price",
      "Direct Access to Archival, Runway & Sold-Out Seasonal Editions"
    ],
    maisons: [
      "HERMÈS",
      "PRADA",
      "GUCCI",
      "LOUIS VUITTON",
      "SAINT LAURENT",
      "BOTTEGA VENETA",
      "BALENCIAGA"
    ],
    callout: {
      badge: "MAISON CONCIERGE",
      text: "Turnkey luxury procurement: From runway sourcing to custom fitting, you own the complete ensemble."
    }
  },
  {
    id: "ceremonial",
    number: "03",
    label: "CEREMONIAL & ARRIVAL DIRECTION",
    sublabel: "Monumental Milestones & Red-Carpet Stature",
    quote: "“We do not dress you for the occasion — we make you the occasion.”",
    narrative: [
      "Monumental moments demand an uncompromising aesthetic statement. From high-stakes international galas and red-carpet premieres to bespoke matrimonial ceremonies, Vantage Persona directs your complete aesthetic narrative.",
      "We orchestrate the harmonious dialogue between structural tailoring, horological calibers, sculpted fine metals, handcrafted leathercraft, and the cadence of your arrival. You do not merely attend; your presence becomes the benchmark of the evening."
    ],
    pillars: [
      "Bespoke Matrimonial & Black-Tie Ceremonial Direction",
      "Horology, Precious Metals & Fine Accessory Harmonization",
      "Monumental Arrival Stature & Spatial Presence Choreography"
    ],
    callout: {
      badge: "CEREMONIAL DISCIPLINE",
      text: "Complete visual narrative orchestration for life’s most decisive milestones."
    }
  }
];

export default function VisionSection() {
  const [activeTabId, setActiveTabId] = useState<TabKey>("architecture");

  const currentTab = ATELIER_TABS.find((t) => t.id === activeTabId) || ATELIER_TABS[0];

  return (
    <section className="section-4 container-fade" id="vision" aria-labelledby="vision-heading">
      {/* Background Watermark Script */}
      <div className="section-4-bg-text" aria-hidden="true">
        VANTAGE PERSONA
      </div>

      <div className="section-4-inner">
        {/* Section Masthead */}
        <header className="section-4-header">
          <div className="section-4-badge-row">
            <span className="section-4-pill">VP / ATELIER MANIFESTO</span>
            <span className="section-4-year">EST. 2024 • PARIS &amp; MILAN SOURCING</span>
          </div>

          <h2 id="vision-heading" className="section-4-main-title">
            WE DO NOT MERELY DRESS THE BODY.
            <span className="section-4-title-accent">
              WE ENGINEER SOVEREIGN PRESENCE &amp; PROCURE SARTORIAL EXCELLENCE.
            </span>
          </h2>

          <p className="section-4-lead-manifesto">
            Founded in <strong>2024</strong>, Vantage Persona operates as an elite sartorial laboratory and private luxury procurement house. We bridge the gap between architectural bespoke tailoring and turnkey acquisitions from the world’s most prestigious Maisons.
          </p>
        </header>

        {/* Main Content Grid: Visual Column (Left) + Editorial Content (Right) */}
        <div className="section-4-grid">
          {/* Left Column: Dual Editorial Visual Frames */}
          <div className="section-4-images">
            {/* Visual Frame 1: Classical Sartorial Architecture */}
            <article className="vision-img-container vision-frame-classic">
              <img
                src="/pictures/B/W/ruslan-bardash-rgqlqcy9M9s-unsplash.webp"
                alt="Classical Sartorial Elegance and Tailoring Architecture"
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
              />
              <div className="vision-img-overlay" aria-hidden="true" />
              <div className="img-label">
                <span className="label-prefix">/ 01</span>
                <span className="label-text">SARTORIAL ARCHITECTURE</span>
              </div>
              <div className="img-tag-top">VP // BESPOKE CANVAS</div>
            </article>

            {/* Visual Frame 2: Contemporary Maison Sourcing & Styling */}
            <article className="vision-img-container vision-frame-futuristic">
              <img
                src="/pictures/BlackModels/premium_photo-1770306559390-3c27d350c08e-processed(lightpdf.com).webp"
                alt="Contemporary Luxury Maison Sourcing and Silhouette Engineering"
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
              />
              <div className="vision-img-overlay" aria-hidden="true" />
              <div className="img-label">
                <span className="label-prefix">/ 02</span>
                <span className="label-text">MAISON PROCUREMENT</span>
              </div>
              <div className="img-tag-top">PARIS • MILAN RUNWAY</div>
            </article>
          </div>

          {/* Right Column: Interactive Atelier Tabs & Deep Editorial Narrative */}
          <div className="section-4-content">
            {/* Tab Navigation Buttons */}
            <div className="vision-tab-nav" role="tablist" aria-label="Atelier Core Pillars">
              {ATELIER_TABS.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`tab-btn-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`tab-panel-${tab.id}`}
                    className={`vision-tab-btn ${isActive ? "active" : ""}`}
                    onClick={() => setActiveTabId(tab.id)}
                  >
                    <span className="tab-btn-number">{tab.number}</span>
                    <span className="tab-btn-label">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Panel */}
            <div
              key={currentTab.id}
              id={`tab-panel-${currentTab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-btn-${currentTab.id}`}
              className="vision-tab-panel"
            >
              <div className="vision-panel-meta">
                <span className="panel-sublabel">{currentTab.sublabel}</span>
              </div>

              {/* Quote Block */}
              <blockquote className="vision-quote-box">
                <p className="vision-quote-text">{currentTab.quote}</p>
              </blockquote>

              {/* Editorial Narrative */}
              <div className="vision-narrative-group">
                {currentTab.narrative.map((paragraph, idx) => (
                  <p key={idx} className="vision-p">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Sourced Maisons Marquee Pill Row (Shows on Maison Procurement Tab) */}
              {currentTab.maisons && (
                <div className="vision-maisons-section">
                  <div className="maisons-header">
                    <span className="maisons-eyebrow">AUTHENTIC LUXURY HOUSES PROCURED</span>
                    <span className="maisons-sub">DIRECT RUNWAY &amp; ARCHIVAL ACCESS</span>
                  </div>
                  <div className="maisons-pill-grid">
                    {currentTab.maisons.map((brand) => (
                      <span key={brand} className="maison-brand-pill">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Pillars Bullet Points */}
              <div className="vision-pillars-box">
                <h4 className="pillars-heading">THE ATELIER STANDARD:</h4>
                <ul className="pillars-list">
                  {currentTab.pillars.map((pillar, idx) => (
                    <li key={idx} className="pillar-item">
                      <span className="pillar-bullet" aria-hidden="true">✦</span>
                      <span className="pillar-text">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Callout Badge Box */}
              {currentTab.callout && (
                <div className="vision-callout-card">
                  <span className="callout-badge">{currentTab.callout.badge}</span>
                  <span className="callout-text">{currentTab.callout.text}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="vision-action-row">
                <Link href="#contact" className="vision-primary-btn">
                  <span>COMMISSION AN ATELIER CONSULTATION</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
                <Link href="#clothing-section" className="vision-secondary-btn">
                  <span>EXPLORE SOURCING ARCHIVE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Provenance Stat Counters Bar (Est. 2024) */}
        <div className="section-4-stats-bar">
          <div className="stat-card">
            <span className="stat-number">2024</span>
            <span className="stat-label">YEAR FOUNDED</span>
            <span className="stat-desc">Bespoke Atelier Established</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">MAISON PROVENANCE</span>
            <span className="stat-desc">Authenticated Paris &amp; Milan Sourcing</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">TURNKEY</span>
            <span className="stat-label">ACQUIRE THE FIT</span>
            <span className="stat-desc">Complete Ensembles at a Single Price</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">01-OF-01</span>
            <span className="stat-label">SOVEREIGN SILHOUETTE</span>
            <span className="stat-desc">Tailored to Anatomical Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
