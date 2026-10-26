"use client";

import React, { useEffect, useRef, useState } from "react";

// Directly self-contained micro-thumbnail stream for the 3D vortex
const DEFAULT_SPIRAL_IMAGES = [
  "/pictures/BlackModels/micro/pexels-marvellous-adu-2148798496-36506383.webp",
  "/pictures/BlackModels/micro/pexels-marvellous-adu-2148798496-36506389.webp",
  "/pictures/BlackModels/micro/pexels-nemmy-media-694031137-20145326.webp",
  "/pictures/BlackModels/micro/pexels-paul-uchechukwu-246994638-39821505.webp",
  "/pictures/BlackModels/micro/pexels-rance-d-grapher-1266939520-35066794.webp",
  "/pictures/BlackModels/micro/pexels-twinkles_photos-414046518-35808804.webp",
  "/pictures/BlackModels/micro/pexels-media-7410486.webp",
  "/pictures/BlackModels/micro/pexels-media-7410489.webp",
];

// Precomputed mathematical helical coordinates (Computed once at module load, zero runtime allocation)
const TOTAL_SPIRAL_CARDS = 16;
const STEP_ANGLE = 45;
const STEP_Y = 65;
const SPIRAL_RADIUS = 118;

const STATIC_SPIRAL_CARDS = Array.from({ length: TOTAL_SPIRAL_CARDS }, (_, i) => {
  const src = DEFAULT_SPIRAL_IMAGES[i % DEFAULT_SPIRAL_IMAGES.length];
  const angle = i * STEP_ANGLE;
  const y = (i - 3) * STEP_Y;
  return { id: i, src, angle, y };
});

interface AutonomousSpiralChamberProps {
  id?: string;
  meta?: string;
  coords?: string;
  streamImages?: string[];
  streamSpeed?: string;
}

/**
 * Autonomous Spiral Kinetic Chamber (Self-Contained 3D Helical Vortex)
 * - Self-contained precomputed 3D coordinates: zero per-render trigonometric math
 * - Direct micro-thumbnails (/pictures/BlackModels/micro/): zero runtime string replacement
 * - Single image layer per card, smooth GPU compositing
 * - Pauses 3D animation when scrolled off-screen
 */
export default function AutonomousSpiralChamber({
  id = "spiral-void",
  meta = "ARCHIVE SPIRAL // 02",
  coords = "FIBONACCI // LATENT",
  streamImages,
  streamSpeed = "22s",
}: AutonomousSpiralChamberProps) {
  const chamberRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

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

  const cards = streamImages && streamImages.length > 0
    ? Array.from({ length: TOTAL_SPIRAL_CARDS }, (_, i) => {
        const src = streamImages[i % streamImages.length];
        const angle = i * STEP_ANGLE;
        const y = (i - 3) * STEP_Y;
        return { id: i, src, angle, y };
      })
    : STATIC_SPIRAL_CARDS;

  return (
    <article key={id} className="abstract-card noise-void spiral-chamber-card" aria-hidden="true">
      {/* 3D Perspective Chamber */}
      <div ref={chamberRef} className="void-kinetic-chamber spiral-viewport">
        {/* Ambient Spiral Aurora Glow */}
        <div className="void-hue-aurora" />

        {/* 3D Helical Vortex Stage */}
        <div className="spiral-stage">
          <div
            className="spiral-helix-track"
            style={{
              animationDuration: streamSpeed,
              animationPlayState: isVisible ? "running" : "paused",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="spiral-thumb-card"
                style={{
                  transform: `rotateY(${card.angle}deg) translateZ(${SPIRAL_RADIUS}px) translateY(${card.y}px) rotateX(-5deg)`,
                }}
              >
                <img
                  src={card.src}
                  alt="Archival Spiral Stream"
                  className="void-thumb-base"
                  loading="lazy"
                  decoding="async"
                />
                <div className="void-thumb-overlay" />
              </div>
            ))}
          </div>
        </div>

        {/* Dense 35mm Analogue Film Grain Layer */}
        <div className="void-grain-layer" />

        {/* Subtle Decorative Golden Fibonacci Spiral Watermark */}
        <div className="spiral-fibonacci-watermark" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path
              d="M50 50 A 5 5 0 0 1 55 50 A 10 10 0 0 1 45 50 A 20 20 0 0 1 65 50 A 35 35 0 0 1 30 50 A 55 55 0 0 1 85 50"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              opacity="0.3"
            />
          </svg>
        </div>
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
          <span className="void-rule-stamp">SPIRAL // OBEYS NO RULE</span>
          <span className="void-coords">{coords}</span>
        </div>
      </div>
    </article>
  );
}
