"use client";

import React, { useState } from "react";
import AutonomousVoidChamber from "./AutonomousVoidChamber";
import AutonomousSpiralChamber from "./AutonomousSpiralChamber";

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
  layout?: "tall-monolith" | "wide-panorama" | "compact-tile" | "standard" | "focus-square";
  isNoiseVoid?: boolean;
  isSpiralVoid?: boolean;
  isPause?: boolean;
  quote?: string;
  meta?: string;
  coords?: string;
  streamImages?: string[];
  streamSpeed?: string;
}

// Optimization helper: returns the lightweight 720px thumbnail (95% less VRAM)
const getThumb = (path?: string) => {
  if (!path) return "";
  if (path.includes("/pictures/BlackModels/") && !path.includes("/thumbs/")) {
    return path.replace("/pictures/BlackModels/", "/pictures/BlackModels/thumbs/");
  }
  return path;
};

// Micro-thumbnail helper for kinetic streams (320px)
const getMicro = (path: string) => {
  if (!path) return "";
  if (path.includes("/pictures/BlackModels/") && !path.includes("/micro/")) {
    return path.replace("/pictures/BlackModels/", "/pictures/BlackModels/micro/");
  }
  return path;
};

export default function BoldSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState<{
    src: string;
    title: string;
    index: string;
    subtitle?: string;
  } | null>(null);

  // The 8 Headliners in the Slit Slideshow (using ultra-retina thumbnails)
  const slitImages: SlitImage[] = [
    { src: "/pictures/BlackModels/thumbs/pexels-media-11434885.webp", alt: "Gaze of Intent", tag: "LOOK 01 // GAZE" },
    { src: "/pictures/BlackModels/thumbs/chuxie-daniels-Q_OZvYusj0w-unsplash.webp", alt: "Sovereign Angle", tag: "LOOK 02 // ANGLE" },
    { src: "/pictures/BlackModels/thumbs/apex-360-ioRBT9swcK8-unsplash.webp", alt: "Sculpted Profile", tag: "LOOK 03 // SCULPT" },
    { src: "/pictures/BlackModels/thumbs/divine-effiong-9oQrjjRU0mA-unsplash.webp", alt: "Avant-Garde Drape", tag: "LOOK 04 // DRAPE" },
    { src: "/pictures/BlackModels/thumbs/eze-joseph-0Rkv32PDGjI-unsplash.webp", alt: "Monochrome Majesty", tag: "LOOK 05 // CROWN" },
    { src: "/pictures/BlackModels/thumbs/pexels-media-13646260.webp", alt: "Piercing Focus", tag: "LOOK 06 // SILHOUETTE" },
    { src: "/pictures/BlackModels/thumbs/pexels-media-28453251.webp", alt: "Raw Texture", tag: "LOOK 07 // TEXTURE" },
    { src: "/pictures/BlackModels/thumbs/shimo-yann-OgqnGYsyug8-unsplash.webp", alt: "Runway Presence", tag: "LOOK 08 // PRESENCE" },
  ];

  // High-Density Curated Archive:
  // - Fewer giant monoliths (only 2 tall and 2 wide anchors)
  // - High proportion of compact tiles and standard portrait cards
  // - Packed with grid-auto-flow: dense for ZERO empty spaces
  const abstractArchive: AbstractItem[] = [
    // 1. OPENER ACT
    { id: "01", index: "№ 01", title: "Gaze of Intent", subtitle: "Avant-Garde Monolith", src: "/pictures/BlackModels/pexels-media-11434885.webp", layout: "tall-monolith" },
    { id: "02", index: "№ 02", title: "Sovereign Angle", subtitle: "Chiseled Profile", src: "/pictures/BlackModels/chuxie-daniels-Q_OZvYusj0w-unsplash.webp", layout: "compact-tile" },
    { id: "03", index: "№ 03", title: "Sculpted Bone", subtitle: "High Neckline Architecture", src: "/pictures/BlackModels/apex-360-ioRBT9swcK8-unsplash.webp", layout: "standard" },
    { id: "04", index: "№ 04", title: "Avant-Garde Drape", subtitle: "Cinematic Horizontal Cut", src: "/pictures/BlackModels/divine-effiong-9oQrjjRU0mA-unsplash.webp", layout: "wide-panorama" },

    // Autonomous Void Kinetic Chamber 01 (Vertical Filmstrip Stream)
    {
      id: "noise-1",
      isNoiseVoid: true,
      meta: "ARCHIVE VOID // 01",
      coords: "06°30'N 03°24'E",
      streamSpeed: "30s",
    },

    { id: "05", index: "№ 05", title: "Monochrome Majesty", subtitle: "Sovereign Crown", src: "/pictures/BlackModels/eze-joseph-0Rkv32PDGjI-unsplash.webp", layout: "standard" },
    { id: "06", index: "№ 06", title: "Piercing Focus", subtitle: "Minimalist Geometry", src: "/pictures/BlackModels/pexels-media-13646260.webp", layout: "compact-tile" },
    { id: "07", index: "№ 07", title: "Raw Texture", subtitle: "Tactile Grain", src: "/pictures/BlackModels/pexels-media-28453251.webp", layout: "standard" },
    { id: "08", index: "№ 08", title: "Runway Presence", subtitle: "Kinetic Velocity", src: "/pictures/BlackModels/shimo-yann-OgqnGYsyug8-unsplash.webp", layout: "compact-tile" },

    // Graphic Typographic Pause
    { id: "pause-1", isPause: true, quote: "“Fashion is not an ornament; it is the tension between volume and void.”", meta: "VP / ATELIER PRINCIPLE", coords: "MAISON VP 2026" },

    // 2. THE DENSE ATELIER ARCHIVE
    { id: "09", index: "№ 09", title: "Sculpted Obsidian", subtitle: "Structured Woolen Cut", src: "/pictures/BlackModels/apex-360-9UX-VAXPD4s-unsplash.webp", layout: "standard" },
    { id: "10", index: "№ 10", title: "Angular Tension", subtitle: "Deconstructed Lapel", src: "/pictures/BlackModels/chuxie-daniels-nM-075GyuF0-unsplash.webp", layout: "standard" },
    { id: "11", index: "№ 11", title: "Raw Velvet Silhouette", subtitle: "Monochrome Deep Shadow", src: "/pictures/BlackModels/divine-effiong-k3Srj786qtk-unsplash.webp", layout: "compact-tile" },
    { id: "12", index: "№ 12", title: "Cinematic Horizon", subtitle: "Widescreen Drape", src: "/pictures/BlackModels/pexels-media-11551370.webp", layout: "standard" },

    // Autonomous Spiral Kinetic Chamber 02 (3D Helical Fashion Vortex)
    {
      id: "noise-2",
      isSpiralVoid: true,
      meta: "ARCHIVE SPIRAL // 02",
      coords: "FIBONACCI // LATENT",
      streamSpeed: "22s",
    },

    { id: "13", index: "№ 13", title: "Imperial Collar", subtitle: "High Neckline Architecture", src: "/pictures/BlackModels/pexels-media-13434107.webp", layout: "standard" },
    { id: "14", index: "№ 14", title: "Tactile Contrast", subtitle: "Shearling & Heavy Wool", src: "/pictures/BlackModels/pexels-media-13548964.webp", layout: "compact-tile" },
    { id: "15", index: "№ 15", title: "Monolithic Stature", subtitle: "Monumental Form", src: "/pictures/BlackModels/pexels-media-25311494.webp", layout: "wide-panorama" },
    { id: "16", index: "№ 16", title: "Kinetic Duality", subtitle: "Movement in Wool", src: "/pictures/BlackModels/pexels-media-2562497.webp", layout: "standard" },
    { id: "17", index: "№ 17", title: "Nocturne Presence", subtitle: "Deep Shadow Profile", src: "/pictures/BlackModels/pexels-media-31407391.webp", layout: "standard" },

    // Graphic Typographic Pause 2
    { id: "pause-2", isPause: true, quote: "“Not always in the suit. Where presence ends, persona begins.”", meta: "ACT I // MANIFESTO", coords: "VANTAGE PERSONA" },

    { id: "18", index: "№ 18", title: "The Gilded Stare", subtitle: "Piercing Minimalist Cut", src: "/pictures/BlackModels/pexels-media-33204975.webp", layout: "compact-tile" },
    { id: "19", index: "№ 19", title: "Avant-Garde Veil", subtitle: "Fabric Deconstruction", src: "/pictures/BlackModels/pexels-media-34938822.webp", layout: "standard" },
    { id: "20", index: "№ 20", title: "Architectural Lapel", subtitle: "Double-Breasted Crest", src: "/pictures/BlackModels/pexels-media-34938833.webp", layout: "compact-tile" },
    { id: "21", index: "№ 21", title: "Sovereign Strut", subtitle: "Cinematic Pan", src: "/pictures/BlackModels/pexels-media-34938839.webp", layout: "standard" },
    { id: "22", index: "№ 22", title: "Sculpted Gaze", subtitle: "Chiaroscuro Light", src: "/pictures/BlackModels/pexels-media-36291319.webp", layout: "compact-tile" },
    { id: "23", index: "№ 23", title: "Raw Fiber Form", subtitle: "Heavy Weight Drape", src: "/pictures/BlackModels/pexels-media-36445249.webp", layout: "standard" },
    { id: "24", index: "№ 24", title: "Archival Horizon", subtitle: "Runway Zenith", src: "/pictures/BlackModels/shimo-yann-wZuClEnlBhs-unsplash.webp", layout: "standard" },

    // 3. ACT CLIMAX
    { id: "25", index: "№ 25", title: "Onyx Regalia", subtitle: "Sartorial Monolith", src: "/pictures/BlackModels/pexels-ahmad-sulaiman-2155400972-37914751.webp", layout: "tall-monolith" },
    { id: "26", index: "№ 26", title: "Structured Solitude", subtitle: "Chiseled Architecture", src: "/pictures/BlackModels/pexels-bello-olamide-38387724-9982957.webp", layout: "standard" },
    { id: "27", index: "№ 27", title: "Imperial Stride", subtitle: "Widescreen Motion", src: "/pictures/BlackModels/pexels-billy-gax-3816579-18201051.webp", layout: "compact-tile" },
    { id: "28", index: "№ 28", title: "Couture Profile", subtitle: "Minimalist Focus", src: "/pictures/BlackModels/pexels-bobography-2148946691-34356236.webp", layout: "compact-tile" },
    { id: "29", index: "№ 29", title: "Geometric Drape", subtitle: "Textured Heavy Wool", src: "/pictures/BlackModels/pexels-breston-kenya-477564-3299173.webp", layout: "standard" },
    { id: "30", index: "№ 30", title: "Vanguard Stance", subtitle: "Deconstructed Peak Lapel", src: "/pictures/BlackModels/pexels-builtbyking-12008360.webp", layout: "compact-tile" },
    { id: "31", index: "№ 31", title: "Nocturnal Gaze", subtitle: "Deep Shadow Obsidian", src: "/pictures/BlackModels/pexels-charles-isaac-1055596880-20455883.webp", layout: "standard" },
    { id: "32", index: "№ 32", title: "Architectural Linen", subtitle: "Cinematic Horizontal Horizon", src: "/pictures/BlackModels/pexels-cottonbro-10678801.webp", layout: "standard" },
    { id: "33", index: "№ 33", title: "Monochrome Crown", subtitle: "Geometric High Neck", src: "/pictures/BlackModels/pexels-criticalimagery-13295646.webp", layout: "compact-tile" },
    { id: "34", index: "№ 34", title: "Chiaroscuro Silhouette", subtitle: "Sculpted Tactile Form", src: "/pictures/BlackModels/pexels-darkshadephotos-17657143.webp", layout: "compact-tile" },
    { id: "35", index: "№ 35", title: "Sculpted Majesty", subtitle: "Runway Monument", src: "/pictures/BlackModels/pexels-evans-akanyijuka-2175774-33659780.webp", layout: "standard" },
  ];

  return (
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

        {/* THE UNIFIED SLICED BOLD ARCHITECTURE */}
        <div className={`bold-split-container${isExpanded ? " expanded" : " collapsed"}`}>
          {/* 1. TOP HALF OF THE SINGLE EXAGGERATED WORD BOLD */}
          <div className="bold-half-slice bold-slice-top" aria-hidden="true">
            <div className="bold-word-inner">
              <span>BOLD</span>
            </div>
          </div>

          {/* 2. THE IN-BETWEEN AREA (SLIT SLIDESHOW OR THE FULL ABSTRACT GRID) */}
          <div className="bold-inbetween-area">
            {!isExpanded ? (
              /* COLLAPSED: SLIT LETTERBOX WINDOW WITH GLIDING SLIDESHOW */
              <div
                className="bold-slit-window"
                onClick={() => setIsExpanded(true)}
                role="button"
                tabIndex={0}
                title="Click to deconstruct archive into abstract grid"
                aria-expanded="false"
              >
                <div className="bold-slit-track">
                  {[...slitImages, ...slitImages].map((img, idx) => (
                    <div key={idx} className="bold-slit-item">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="bold-slit-overlay" aria-hidden="true" />
                      <span className="bold-slit-tag">{img.tag}</span>
                    </div>
                  ))}
                </div>

                {/* Floating Expand CTA Pill */}
                <div className="bold-slit-cta">
                  <span className="cta-icon">✦</span>
                  <span className="cta-text">CLICK TO DECONSTRUCT ARCHIVE</span>
                  <span className="cta-counter">35 LOOKS</span>
                </div>
              </div>
            ) : (
              /* EXPANDED: THE WHOLE ABSTRACT ASYMMETRICAL GRID LIVES RIGHT HERE INSIDE! */
              <div className="bold-inside-grid-wrapper" id="abstract-grid-view">
                {/* Sticky Architectural Toolbar */}
                <div className="bold-inside-toolbar">
                  <div className="toolbar-left">
                    <span className="toolbar-tag">DECONSTRUCTED ATELIER ARCHIVE</span>
                    <span className="toolbar-count">35 LOOKS &bull; VOID SPACES</span>
                  </div>
                  <button
                    type="button"
                    className="toolbar-collapse-btn"
                    onClick={() => setIsExpanded(false)}
                    aria-label="Collapse aperture"
                  >
                    <span>✕</span>
                    <span>COLLAPSE APERTURE</span>
                  </button>
                </div>

                {/* The Abstract Asymmetrical Masonry Grid */}
                <div className="bold-abstract-grid">
                  {abstractArchive.map((item) => {
                    // Autonomous Spiral Kinetic Chamber (3D Helical Vortex)
                    if (item.isSpiralVoid) {
                      return (
                        <AutonomousSpiralChamber
                          key={item.id}
                          id={item.id}
                          meta={item.meta}
                          coords={item.coords}
                          streamSpeed={item.streamSpeed}
                        />
                      );
                    }

                    // Autonomous Void Kinetic Chamber (Vertical Filmstrip Stream)
                    if (item.isNoiseVoid) {
                      return (
                        <AutonomousVoidChamber
                          key={item.id}
                          id={item.id}
                          meta={item.meta}
                          coords={item.coords}
                          streamSpeed={item.streamSpeed}
                        />
                      );
                    }

                    // Typographic Pause Card
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

                    // Photo Card (loads 720px thumbnail for 97% less VRAM, opens full-res in Lightbox)
                    return (
                      <article
                        key={item.id}
                        className={`abstract-card ${item.layout || "standard"}`}
                        onClick={() =>
                          setActiveLightbox({
                            src: item.src!, // pristine full-resolution asset
                            title: item.title!,
                            index: item.index!,
                            subtitle: item.subtitle,
                          })
                        }
                        role="button"
                        tabIndex={0}
                        title={`Inspect ${item.title}`}
                      >
                        <img
                          src={getThumb(item.src!)}
                          alt={item.title!}
                          loading="lazy"
                          decoding="async"
                        />
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

                {/* Bottom Close Bar */}
                <div className="bold-inside-bottom-bar">
                  <button
                    type="button"
                    className="toolbar-collapse-btn"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span>✕</span>
                    <span>COLLAPSE TO APERTURE</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. BOTTOM HALF OF THE SINGLE EXAGGERATED WORD BOLD */}
          <div className="bold-half-slice bold-slice-bottom" aria-hidden="true">
            <div className="bold-word-inner">
              <span>BOLD</span>
            </div>
          </div>
        </div>

        {/* Editorial Manifesto at Bottom Right */}
        <div className="bold-editorial-manifesto">
          <p className="manifesto-line">NOT ALWAYS IN THE SUIT.</p>
          <p className="manifesto-line">FASHION IS DIVERSE.</p>
          <p className="manifesto-line highlight">FASHION IS BOLD.</p>
        </div>

        {/* Fullscreen Lightbox Focus Modal (Full-Resolution Viewing) */}
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
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                loading="eager"
              />
              <div className="bold-lightbox-caption">
                <p>{activeLightbox.index} &bull; {activeLightbox.subtitle}</p>
                <h4>{activeLightbox.title}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
