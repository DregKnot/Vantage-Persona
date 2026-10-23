"use client";

import React, { useEffect, useRef, useState } from "react";

interface AutonomousSpiralChamberProps {
  id?: string;
  meta?: string;
  coords?: string;
  streamImages: string[];
  streamSpeed?: string;
}

/**
 * Autonomous Spiral Kinetic Chamber (3D Helical Fashion Vortex)
 * - Optimized with micro-thumbnails (/pictures/BlackModels/micro/)
 * - Single image layer per card, smooth GPU compositing
 * - Pauses 3D animation when scrolled off-screen
 * - Zero scroll listener layout thrashing
 */
export default function AutonomousSpiralChamber({
  id = "spiral-void",
  meta = "ARCHIVE SPIRAL // 02",
  coords = "FIBONACCI // LATENT",
  streamImages = [],
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

  const getMicro = (path: string) => {
    if (path.includes("/pictures/BlackModels/") && !path.includes("/micro/")) {
      return path.replace("/pictures/BlackModels/", "/pictures/BlackModels/micro/");
    }
    return path;
  };

  // Mathematical Helical Geometry:
  // 16 cards = 2 full 360-deg spiral turns (8 cards per turn, stepAngle = 45deg)
  const totalCards = 16;
  const stepAngle = 45;
  const stepY = 65;
  const radius = 118;

  const cards = Array.from({ length: totalCards }, (_, i) => {
    const rawSrc = streamImages[i % streamImages.length];
    const imgSrc = getMicro(rawSrc);
    const angle = i * stepAngle;
    const y = (i - 3) * stepY;
    return { id: i, src: imgSrc, angle, y };
  });

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
                  transform: `rotateY(${card.angle}deg) translateZ(${radius}px) translateY(${card.y}px) rotateX(-5deg)`,
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
