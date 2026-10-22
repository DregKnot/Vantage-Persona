"use client";

import React, { useEffect, useRef } from "react";

interface AutonomousVoidChamberProps {
  id: string;
  meta?: string;
  coords?: string;
  streamImages: string[];
  streamSpeed?: string;
}

/**
 * Autonomous Void Kinetic Chamber
 * - Zero React re-renders during scroll: uses passive direct DOM class toggles
 * - Dual-layer GPU compositing: transitions opacity instead of heavy CSS filters
 * - 120 FPS buttery smooth vertical marquee stream
 * - Strictly non-interactive ("Bold obeys no rule")
 */
export default function AutonomousVoidChamber({
  id,
  meta = "ARCHIVE VOID",
  coords = "LATENT NOISE",
  streamImages = [],
  streamSpeed = "24s",
}: AutonomousVoidChamberProps) {
  const chamberRef = useRef<HTMLDivElement>(null);
  const statusTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;
    let isScrollingActive = false;

    // Passive scroll listener: zero main-thread blocking, direct GPU class toggle
    const handleScroll = () => {
      if (!isScrollingActive) {
        isScrollingActive = true;
        if (chamberRef.current) {
          chamberRef.current.classList.add("is-scrolling");
        }
        if (statusTextRef.current) {
          statusTextRef.current.textContent = "CHROMATIC BLOOM";
        }
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      // Graceful cool-down after 450ms idle
      scrollTimeout = setTimeout(() => {
        isScrollingActive = false;
        if (chamberRef.current) {
          chamberRef.current.classList.remove("is-scrolling");
        }
        if (statusTextRef.current) {
          statusTextRef.current.textContent = "AUTONOMOUS";
        }
      }, 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Seamless 3x loop array ensures there is NEVER an empty gap at any point in the cycle
  const loopImages = [...streamImages, ...streamImages, ...streamImages];

  return (
    <article key={id} className="abstract-card noise-void" aria-hidden="true">
      {/* Inner Hardware-Accelerated Kinetic Chamber */}
      <div ref={chamberRef} className="void-kinetic-chamber">
        <div className="void-stream-col">
          <div
            className="void-stream-track"
            style={{ animationDuration: streamSpeed }}
          >
            {loopImages.map((imgSrc, imgIdx) => (
              <div key={imgIdx} className="void-stream-thumb">
                {/* 1. Base Layer: Monochrome & 35mm Raw Texture */}
                <img
                  src={imgSrc}
                  alt="Archival Monochrome Stream"
                  className="void-thumb-base"
                  loading="lazy"
                  decoding="async"
                />
                {/* 2. Color Layer: Pure GPU Opacity transition (Zero Reflow/Repaint) */}
                <img
                  src={imgSrc}
                  alt="Archival Chromatic Stream"
                  className="void-thumb-color"
                  loading="lazy"
                  decoding="async"
                />
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
            <span ref={statusTextRef}>AUTONOMOUS</span>
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
