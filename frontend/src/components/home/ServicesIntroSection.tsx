"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ScrollStack, { ScrollStackItem } from "@/components/common/ScrollStack";
import Shuffle from "@/components/common/Shuffle";

const DomeGallery = dynamic(() => import("@/components/common/DomeGallery"), {
  ssr: false,
  loading: () => <div className="dome-gallery-placeholder" />
});

const UPRIGHT_LOOKS = [
  {
    id: "aiony-signature",
    image: "/pictures/Cooperate/aiony-haust-IXYxqP4zejo-unsplash.webp",
    alt: "Distinguished senior gentleman portrait in tailored charcoal attire",
    badge: "Signature Portrait",
  },
  {
    id: "soybreno-editorial",
    image: "/pictures/Cooperate/soybreno-GxeyyeCXCV0-unsplash.webp",
    alt: "High-fashion editorial sitting with structured silhouette",
    badge: "Editorial Haute",
  },
];

const STRIP_LOOKS = [
  {
    id: "emmanuel-studio",
    image: "/pictures/Cooperate/emmanuel-black-HJR96zgmsw0-unsplash.webp",
    alt: "Striking editorial studio portrait with dramatic lighting",
    title: "Studio Sitting",
  },
  {
    id: "joao-atmosphere",
    image: "/pictures/Cooperate/joao-vitor-duarte-pbHk4grW63Q-unsplash.webp",
    alt: "Atmospheric modern portrait capture",
    title: "Couples & Mood",
  },
  {
    id: "jonas-executive",
    image: "/pictures/Cooperate/jonas-jaeken-7KZ98Z3e2Yc-unsplash-2.webp",
    alt: "Refined sartorial sitting with executive poise",
    title: "Executive Poise",
  },
  {
    id: "adrien-bespoke",
    image: "/pictures/Cooperate/adrien-king-x4ie12OLMkY-unsplash.webp",
    alt: "Tailored bespoke character portrait",
    title: "Character Sittings",
  },
  {
    id: "krisjanis-contemporary",
    image: "/pictures/Cooperate/krisjanis-kazaks-tfi1wYPy8bg-unsplash.webp",
    alt: "Contemporary fashion and portrait sitting",
    title: "Contemporary Look",
  },
  {
    id: "mohamad-formal",
    image: "/pictures/Cooperate/mohamad-khosravi-Yz2rv8CQXiQ-unsplash.webp",
    alt: "Refined sartorial formal session",
    title: "Formal Heritage",
  },
  {
    id: "pexels-artistic",
    image: "/pictures/Cooperate/pexels-media-3651597.webp",
    alt: "Artistic studio sitting with tactile styling",
    title: "Fine Art Studio",
  },
  {
    id: "ben-casual-luxury",
    image: "/pictures/Casual/ben-iwara-zTyWqWYHC-Y-unsplash.webp",
    alt: "Casual luxury sartorial portrait capture",
    title: "Casual Luxury",
  },
];

const RAW_CHILDREN_IMAGES = [
  {
    file: "pexels-aliyu-jooney-2151008543-32729774.webp",
    alt: "Young boy in vibrant green and gold embroidered traditional ceremonial attire",
    title: "Heritage Ceremonial Look",
  },
  {
    file: "pexels-dacostashotit-39421687.webp",
    alt: "Young girl styled in rich celebratory cultural clothing with headwrap",
    title: "Cultural Celebration",
  },
  {
    file: "pexels-alokkd1-36909925.webp",
    alt: "Child in vibrant festival attire with festive jewelry and celebratory poise",
    title: "Festive Traditions",
  },
  {
    file: "pexels-boko-shots-812604874-29668580.webp",
    alt: "Candid portrait of smiling child with natural bright expression",
    title: "Candid Radiance",
  },
  {
    file: "pexels-borishamer-40288436.webp",
    alt: "Solo child portrait in timeless warm knitwear for an everyday outing",
    title: "Everyday Outing",
  },
  {
    file: "pexels-bymuratisikofficial-32143367.webp",
    alt: "Refined portrait sitting showcasing tailored childrenswear",
    title: "Tailored Studio Sitting",
  },
  {
    file: "pexels-bymuratisikofficial-37491252.webp",
    alt: "Young girl in celebratory formal occasion dress with floral detailing",
    title: "Occasion & Birthday",
  },
  {
    file: "pexels-detty-images-2148597567-37968219.webp",
    alt: "Expressive solo child studio portrait capture",
    title: "Natural Expression",
  },
  {
    file: "pexels-kema-30993384.webp",
    alt: "Young child wearing traditional cultural regalia honoring ancestral roots",
    title: "Roots & Heritage",
  },
  {
    file: "pexels-hina-mohsin-872030042-19664810.webp",
    alt: "Child dressed for family celebration in intricate formal attire",
    title: "Family Celebration",
  },
  {
    file: "pexels-eren-ozdal-195343026-19696051.webp",
    alt: "Relaxed outdoor child outfit in natural sunlight",
    title: "Relaxed Everyday",
  },
  {
    file: "pexels-koolshooters-7330405.webp",
    alt: "Siblings sharing a natural joyful family celebration moment",
    title: "Sibling Moment",
  },
  {
    file: "pexels-livelovelife-and-travel-916292093-19940078.webp",
    alt: "Young girl in ornate traditional festive clothing",
    title: "Festive Attire",
  },
  {
    file: "pexels-mirzagraphy-28808420.webp",
    alt: "Child in majestic traditional ceremonial garments",
    title: "Ceremonial Poise",
  },
  {
    file: "pexels-ron-lach-9511985.webp",
    alt: "Playful candid child styling look for everyday adventures",
    title: "Everyday Outing",
  },
  {
    file: "pexels-yassinebk213-11720502.webp",
    alt: "Young boy in polished suit and bow tie for a formal event",
    title: "Formal Event Look",
  },
  {
    file: "pexels-spencphoto-35980455.webp",
    alt: "Child in cultural heritage attire with handwoven details",
    title: "Cultural Heritage",
  },
];

// Provide fast lightweight thumbnails for the 3D rotating tiles,
// preserving full-resolution assets for when user enlarges the image.
const CHILDREN_IMAGES = RAW_CHILDREN_IMAGES.map((img) => ({
  src: `/pictures/clothing_section/thumbs/${img.file}`,
  fullSrc: `/pictures/clothing_section/${img.file}`,
  alt: img.alt,
  title: img.title,
}));

export default function ServicesIntroSection() {
  const [isGridMode, setIsGridMode] = useState(false);
  const [selectedGridImg, setSelectedGridImg] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const domeTriggerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRenderDome, setShouldRenderDome] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsGridMode(true);
    }
  }, []);

  useEffect(() => {
    if (shouldRenderDome) return;
    const el = domeTriggerRef.current || sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRenderDome(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRenderDome(true);
          observer.disconnect();
        }
      },
      { rootMargin: "450px 0px" } // Preload 450px before Card 3 reaches view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldRenderDome]);

  return (
    <section
      ref={sectionRef}
      className="services-intro-section"
      id="services-intro"
      aria-label="Personal Styling, Photography, and Children's Services"
    >
      <div className="services-intro-container">
        {/* =========================================================================
           SCROLL STACK: Card 1 (Personal Styling), Card 2 (Photography), Card 3 (Children)
           ========================================================================= */}
        <ScrollStack
          className="services-scroll-stack"
          useWindowScroll={true}
          itemDistance={100}
          itemStackDistance={28}
          stackPosition="10%"
          itemScale={0.035}
          baseScale={0.93}
          dimAmount={0.25}
          holdDistance={260}
          smoothScroll={false}
        >
          {/* =====================================================================
             CARD 1: PERSONAL STYLING
             Collage in 4 parts with the 1st being the biggest
             ===================================================================== */}
          <ScrollStackItem itemClassName="vp-service-card vp-styling-card">
            <div className="services-styling-block">
              {/* Copy Column (Desktop Left ~38%) */}
              <div className="services-styling-copy">
                <div className="services-intro-label-wrap">
                  <span className="services-label-accent" aria-hidden="true" />
                  <span className="services-intro-label">
                    PERSONAL STYLING &amp; PHOTOGRAPHY
                  </span>
                </div>

                <h2 className="services-styling-headline">
                  For wherever life takes you.
                </h2>

                <p className="services-styling-lead">
                  An ordinary day can deserve a great outfit, too. We bring
                  together clothing and accessories around your personality,
                  your plans, and how you want to feel—from everyday dressing and
                  professional settings to celebrations that call for something
                  special.
                </p>

                <p className="services-styling-support">
                  Know what you like? Let’s build on it. Still discovering your
                  style? We’ll help you find your direction.
                </p>

                <div className="services-action-wrapper">
                  <Link
                    href="/appointment"
                    className="services-action-btn primary-styling-btn"
                    aria-label="Explore Personal Styling appointments and sessions"
                  >
                    <span className="btn-text">Explore Personal Styling</span>
                    <span className="btn-icon" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              {/* 4-Image Editorial Collage (1st is the biggest) */}
              <div
                className="services-styling-collage-4"
                aria-label="Editorial 4-Piece Styling Collage"
              >
                {/* 1st & Biggest Photograph */}
                <div className="collage-card-4 card-1-biggest">
                  <div className="collage-image-frame">
                    <img
                      src="/pictures/Cooperate/khalid-boutchich-IG89ai-3Fc8-unsplash.webp"
                      alt="Complete refined outfit in everyday and professional setting"
                      className="collage-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="collage-card-overlay">
                    <span className="collage-badge">
                      <span className="badge-bullet" aria-hidden="true" />
                      Everyday &amp; Work
                    </span>
                  </div>
                </div>

                {/* 2nd Photograph: Occasion Look */}
                <div className="collage-card-4 card-2-occasion">
                  <div className="collage-image-frame">
                    <img
                      src="/pictures/clothing_section/pexels-mahdibafande-11673061.webp"
                      alt="Occasion look styled for evening dinner or celebratory gathering"
                      className="collage-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="collage-card-overlay">
                    <span className="collage-badge">
                      <span className="badge-bullet" aria-hidden="true" />
                      Occasions &amp; Dinners
                    </span>
                  </div>
                </div>

                {/* 3rd Photograph: Fitting & Wardrobe Selection */}
                <div className="collage-card-4 card-3-fitting">
                  <div className="collage-image-frame">
                    <img
                      src="/pictures/clothing_section/pexels-addy-bronzzz-264850064-14564831.webp"
                      alt="Tailoring fitting and tactile garment selection with curated accessories"
                      className="collage-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="collage-card-overlay">
                    <span className="collage-badge">
                      <span className="badge-bullet" aria-hidden="true" />
                      Fitting &amp; Coordination
                    </span>
                  </div>
                </div>

                {/* 4th Photograph: Contemporary Tailoring */}
                <div className="collage-card-4 card-4-tailoring">
                  <div className="collage-image-frame">
                    <img
                      src="/pictures/clothing_section/pexels-begum-bodur-49915278-34188117.webp"
                      alt="Contemporary styling silhouette and wardrobe alignment"
                      className="collage-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="collage-card-overlay">
                    <span className="collage-badge">
                      <span className="badge-bullet" aria-hidden="true" />
                      Curated Wardrobe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* =====================================================================
             CARD 2: PHOTOGRAPHY
             - Shuffle component for typography
             - Backwards L collage with rounded edges
             ===================================================================== */}
          <ScrollStackItem itemClassName="vp-service-card vp-photo-card">
            <div className="services-photography-block-l">
              {/* TOP ROW: Left Copy with Shuffle / Right Upright Arm of Backwards L */}
              <div className="photo-top-row">
                <div className="services-photo-copy-l">
                  <div className="services-intro-label-wrap">
                    <span className="services-label-accent" aria-hidden="true" />
                    <span className="services-intro-label">STUDIO &amp; LOCATION</span>
                  </div>

                  <Shuffle
                    text="Something you’d like to capture?"
                    tag="h3"
                    effect="slide"
                    shuffleDirection="right"
                    duration={0.38}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.025}
                    threshold={0.12}
                    triggerOnce={true}
                    triggerOnHover={true}
                    color="#D6C097"
                    accentColor="#D4AF37"
                    className="services-photo-heading-shuffle"
                  />

                  <p className="services-photo-lead">
                    We also offer photoshoots for individuals, couples, and
                    families. Book a session on its own, or include styling if
                    you’d like us to help with your look.
                  </p>

                  <div className="services-action-wrapper photo-action-wrapper">
                    <Link
                      href="/gallery"
                      className="services-action-btn secondary-photo-btn"
                      aria-label="Explore Vantage Persona Photoshoots gallery"
                    >
                      <span className="btn-text">Explore Photoshoots</span>
                      <span className="btn-icon" aria-hidden="true">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Backwards-L Upright Arm: 2 Featured Portraits (Top-Right) */}
                <div className="photo-l-upright-group">
                  {UPRIGHT_LOOKS.map((item) => (
                    <div key={item.id} className="photo-l-upright-card">
                      <div className="photo-card-frame">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="photo-img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="photo-l-badge">
                        <span className="badge-bullet" aria-hidden="true" />
                        {item.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM ROW: Horizontal Base of Backwards L (8 Cards Wide) */}
              <div
                className="photo-l-bottom-strip"
                aria-label="Photography Portfolio Looks"
              >
                {STRIP_LOOKS.map((look) => (
                  <div key={look.id} className="photo-strip-card">
                    <div className="photo-card-frame">
                      <img
                        src={look.image}
                        alt={look.alt}
                        className="photo-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="strip-card-title">{look.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          {/* =====================================================================
             CARD 3: CHILDREN'S STYLING & PHOTOGRAPHY
             - Full-card panoramic 3D Dome Gallery
             - Writeup placed outside/above the dome canvas for perfect mobile responsiveness
             - Obsidian Black #000000 Atmosphere matching the 3D dome geometry
             ===================================================================== */}
          <ScrollStackItem itemClassName="vp-service-card vp-children-card">
            {/* Top Writeup Header & Controls: Placed outside the dome canvas */}
            <div className="children-card-top-writeup">
              <div className="children-floating-header">
                <div className="children-floating-title-block">
                  <div className="children-label-wrap">
                    <span className="children-label-accent" aria-hidden="true" />
                    <span className="children-intro-label">
                      CHILDREN’S STYLING &amp; PHOTOGRAPHY
                    </span>
                  </div>
                  <h2 className="children-headline">
                    Little personalities.<br />
                    Beautiful memories.
                  </h2>
                </div>

                <div className="children-floating-para-block">
                  <p className="children-lead-text">
                    For the birthday, the family outing, the special occasion—or a
                    celebration of their roots. We bring together looks that reflect
                    your child’s personality, from relaxed everyday outfits to
                    occasion wear and cultural clothing that honours their
                    heritage.
                  </p>
                </div>
              </div>

              {/* Gallery Controls Bar */}
              <div className="children-floating-controls">
                <div className="gallery-instruction-pill">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  <span>Drag to explore. Tap a photograph to view.</span>
                </div>

                <button
                  type="button"
                  className="view-grid-toggle-btn"
                  onClick={() => setIsGridMode(!isGridMode)}
                  aria-pressed={isGridMode}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {isGridMode ? (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="m4.93 4.93 4.24 4.24" />
                        <path d="m14.83 9.17 4.24-4.24" />
                        <path d="m14.83 14.83 4.24 4.24" />
                        <path d="m9.17 14.83-4.24 4.24" />
                      </>
                    ) : (
                      <>
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                      </>
                    )}
                  </svg>
                  <span>{isGridMode ? "View in 3D dome" : "View as grid"}</span>
                </button>
              </div>
            </div>

            {/* Dedicated 3D Dome Stage: Completely unobstructed by text */}
            <div ref={domeTriggerRef} className="children-card-dome-stage">
              {!isGridMode ? (
                <div
                  className="children-dome-full-canvas"
                  aria-hidden={isGridMode}
                  suppressHydrationWarning
                >
                  {isMounted && shouldRenderDome ? (
                    <DomeGallery
                      images={CHILDREN_IMAGES}
                      overlayBlurColor="#000000"
                      grayscale={false}
                      fit={0.96}
                      segments={26}
                      minRadius={850}
                      maxRadius={1350}
                      zoomDistance={330}
                      imageBorderRadius="30px"
                    />
                  ) : (
                    <div className="dome-gallery-placeholder" />
                  )}
                </div>
              ) : (
                /* Grid Fallback Mode */
                <div className="children-grid-full-canvas">
                  <div className="children-grid-view">
                    {CHILDREN_IMAGES.map((img, idx) => (
                      <div
                        key={idx}
                        className="children-grid-card"
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedGridImg(img.fullSrc || img.src)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setSelectedGridImg(img.fullSrc || img.src);
                          }
                        }}
                        aria-label={`View ${img.title || "children photograph"}`}
                      >
                        <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                        <span className="children-grid-title">{img.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Glass Footer with Supporting Copy & Both Actions */}
            <div className="children-floating-footer">
              <div className="children-support-col">
                <p className="children-support-text">
                  Just want beautiful photographs of your child? You’re welcome
                  here, too. Book a photoshoot on its own, choose styling for an
                  occasion, or bring both together. Come just for them, or make
                  it a family moment.
                </p>
              </div>

              <div className="children-actions-col">
                <Link
                  href="/appointment?service=children-photoshoot"
                  className="children-action-btn primary-children-btn"
                  aria-label="Book a Children's Photoshoot"
                >
                  <span className="btn-text">Book a Children’s Photoshoot</span>
                  <span className="btn-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/appointment?service=children-styling"
                  className="children-action-btn secondary-children-btn"
                  aria-label="Explore Children's Styling"
                >
                  <span className="btn-text">Explore Children’s Styling</span>
                  <span className="btn-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Grid Lightbox Modal */}
            {selectedGridImg && (
              <div
                className="children-lightbox-modal"
                role="dialog"
                aria-modal="true"
                onClick={() => setSelectedGridImg(null)}
              >
                <div
                  className="children-lightbox-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className="children-lightbox-close"
                    onClick={() => setSelectedGridImg(null)}
                    aria-label="Close enlarged photograph"
                  >
                    ✕
                  </button>
                  <img src={selectedGridImg} alt="Enlarged children portrait" />
                </div>
              </div>
            )}
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
}
