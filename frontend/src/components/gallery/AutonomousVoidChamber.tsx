"use client";

import React, { useEffect, useRef, useState } from "react";

// Directly self-contained micro-thumbnail stream (zero runtime string replacement, zero prop drilling)
const DEFAULT_VOID_IMAGES = [
  "/pictures/BlackModels/micro/pexels-harrun-muhammad-116282236-36741714.webp",
  "/pictures/BlackModels/micro/pexels-jeferson-gomes-24831766-15332906.webp",
  "/pictures/BlackModels/micro/pexels-jeferson-gomes-24831766-6895526.webp",
  "/pictures/BlackModels/micro/pexels-jyron-barclay-2151526792-33423949.webp",
  "/pictures/BlackModels/micro/pexels-khalifa-yahaya-650488521-36029414.webp",
  "/pictures/BlackModels/micro/pexels-lucretius-mooka-2554524-9016422.webp",
  "/pictures/BlackModels/micro/pexels-media-36514633.webp",
  "/pictures/BlackModels/micro/pexels-media-36547359.webp",
  "/pictures/BlackModels/micro/pexels-media-4081801.webp",
  "/pictures/BlackModels/micro/pexels-media-6151574.webp",
  "/pictures/BlackModels/micro/pexels-media-6334911.webp",
  "/pictures/BlackModels/micro/pexels-media-11434885.webp",
];

// Pre-doubled static loop: evaluated once at module load, zero runtime allocation
const STATIC_VOID_LOOP = [...DEFAULT_VOID_IMAGES, ...DEFAULT_VOID_IMAGES];

interface AutonomousVoidChamberProps {
  id: string;
  meta?: string;
  coords?: string;
  streamImages?: string[];
  streamSpeed?: string;
}

/**
 * Autonomous Void Kinetic Chamber (Self-Contained High-Performance Stream)
 * - Self-contained micro-thumbnails: zero runtime regex or string replaces
 * - Single GPU-accelerated layer per card
 * - IntersectionObserver pauses stream when off-screen to preserve 60-120 FPS
 */
export default function AutonomousVoidChamber({
  id,
  meta = "ARCHIVE VOID",
  coords = "LATENT NOISE",
  streamImages,
  streamSpeed = "24s",
}: AutonomousVoidChamberProps) {
  const chamberRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Pause animation when scrolled off-screen to guarantee 0% background GPU overhead
  useEffect(() => {
    const el = chamberRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const loopImages = streamImages && streamImages.length > 0
    ? [...streamImages, ...streamImages]
    : STATIC_VOID_LOOP;

  return (
    <article key={id} className="abstract-card noise-void" aria-hidden="true">
      {/* Inner Hardware-Accelerated Kinetic Chamber */}
      <div ref={chamberRef} className="void-kinetic-chamber">
        <div className="void-stream-col">
          <div
            className="void-stream-track"
            style={{
              animationDuration: streamSpeed,
              animationPlayState: isVisible ? "running" : "paused",
            }}
          >
            {loopImages.map((imgSrc, imgIdx) => (
              <div key={imgIdx} className="void-stream-thumb">
                <img
                  src={imgSrc}
                  alt="Archival Stream"
                  className="void-thumb-base"
                  loading="lazy"
                  decoding="async"
                />
                <div className="void-thumb-overlay" />
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Radial Golden Aura */}
        <div className="void-hue-aurora" />

        {/* Dense 35mm Analogue Film Grain Layer */}
        <div className="void-grain-layer" />
      </div>

      {/* Editorial Vignette & Boundary Frame */}
      <div className="void-boundary-frame">
        <div className="void-header">
          <span className="void-id">{meta}</span>
          <span className="void-live-pulse">
            <span>✦</span>
            <span>AUTONOMOUS</span>
          </span>
        </div>
        <div className="void-footer">
          <span className="void-rule-stamp">BOLD OBEYS NO RULE</span>
          <span className="void-coords">{coords}</span>
        </div>
      </div>
    </article>
  );
}
