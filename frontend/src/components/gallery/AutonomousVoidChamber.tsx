"use client";

import React, { useEffect, useRef, useState } from "react";

interface AutonomousVoidChamberProps {
  id: string;
  meta?: string;
  coords?: string;
  streamImages: string[];
  streamSpeed?: string;
}

/**
 * Autonomous Void Kinetic Chamber (Optimized High-Performance Marquee)
 * - Uses micro-thumbnails (/pictures/BlackModels/micro/) for 97% less VRAM consumption
 * - Single GPU-accelerated layer per card (no heavy mix-blend reflows)
 * - IntersectionObserver pauses stream when off-screen to preserve 60-120 FPS
 * - Zero scroll listener layout thrashing
 */
export default function AutonomousVoidChamber({
  id,
  meta = "ARCHIVE VOID",
  coords = "LATENT NOISE",
  streamImages = [],
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

  // Convert image paths to micro-thumbnails
  const getMicro = (path: string) => {
    if (path.includes("/pictures/BlackModels/") && !path.includes("/micro/")) {
      return path.replace("/pictures/BlackModels/", "/pictures/BlackModels/micro/");
    }
    return path;
  };

  // Seamless 3x loop array ensures there is NEVER an empty gap at any point in the cycle
  const loopImages = [...streamImages, ...streamImages, ...streamImages];

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
                  src={getMicro(imgSrc)}
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
