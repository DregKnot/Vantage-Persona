"use client";

import React, { useState, useRef } from "react";

export default function WordCyclerSection() {
  const categories = [
    { word: "CLOTHES", sub: "Tactile Precision & Bespoke Woolen Cut", index: "01" },
    { word: "MOMENTS", sub: "The Unspoken Gravity of Sovereign Arrival", index: "02" },
    { word: "RIDES", sub: "Kinetic Velocity & Aerodynamic Alignment", index: "03" },
    { word: "ARCHITECTURE", sub: "Brutalist Monoliths, Fluid Silhouettes", index: "04" },
    { word: "THE UNSEEN", sub: "Transcending the Physical Wardrobe", index: "05" },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [isPulsing, setIsPulsing] = useState(false);

  // Fast-switch throttling & queuing refs
  const isSwitchingRef = useRef(false);
  const queuedTargetRef = useRef<number | null>(null);
  const switchCooldownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Safe Word Cycle Handler:
   * Provides instantaneous visual response, prevents animation collisions,
   * throttles hyper-rapid clicks, and buffers intended destinations.
   */
  const handleWordCycle = (targetIndex?: number) => {
    const nextIdx =
      typeof targetIndex === "number"
        ? targetIndex
        : (currentIdx + 1) % categories.length;

    // Ignore clicking the current active chapter
    if (nextIdx === currentIdx) return;

    // Fast-switching protection: buffer latest target if a transition is in-flight
    if (isSwitchingRef.current) {
      queuedTargetRef.current = nextIdx;
      return;
    }

    // Execute switch immediately
    isSwitchingRef.current = true;
    setPrevIdx(currentIdx);
    setCurrentIdx(nextIdx);
    setIsPulsing(true);

    setTimeout(() => {
      setIsPulsing(false);
    }, 400);

    if (switchCooldownTimeoutRef.current) {
      clearTimeout(switchCooldownTimeoutRef.current);
    }

    // Release lock once stagger cascade has commenced cleanly
    switchCooldownTimeoutRef.current = setTimeout(() => {
      isSwitchingRef.current = false;
      // If user queued a target during cooldown, transition smoothly to it
      if (queuedTargetRef.current !== null && queuedTargetRef.current !== nextIdx) {
        const buffered = queuedTargetRef.current;
        queuedTargetRef.current = null;
        handleWordCycle(buffered);
      } else {
        queuedTargetRef.current = null;
      }
    }, 450);
  };

  return (
    <section className="clothing-section-2 container-fade" data-auto-hint="Click the word or pills to explore our manifesto">
      <section className={`clothing-collection-2${currentIdx === 4 ? " has-closing-quote" : ""}`}>
        <div className="left-heading">
          {/* Editorial Counter & Tag */}
          <div className="cycler-badge-row">
            <span className="cycler-tag">ARCHITECTURAL MANIFESTO</span>
            <span className="cycler-counter">
              <strong>{categories[currentIdx].index}</strong> / 05
            </span>
          </div>

          <h2 className="elegance-heading">
            Style is not an ornament; it is the geometry of presence. We architect identity through the prism of{" "}
            <span
              className={`Royals${isPulsing ? " pulsing" : ""}`}
              id="royalsBox"
              onClick={() => handleWordCycle()}
              role="button"
              tabIndex={0}
              title="Click to cycle next chapter"
            >
              <span className="cycler-word-viewport">
                {categories.map((c, idx) => {
                  const isActive = currentIdx === idx;
                  const isPrev = prevIdx === idx;
                  return (
                    <span
                      key={c.word}
                      className={`cycler-word-item ${
                        isActive ? "active" : isPrev ? "exiting" : "hidden"
                      }`}
                    >
                      {c.word}
                    </span>
                  );
                })}
              </span>
              <span className="cycler-chevron">▾</span>
            </span>
            . <br />
            <span className="manifesto-zenith">Where presence ends, persona begins.</span>
          </h2>

          {/* Sub-narrative Dynamic Tag */}
          <div className="cycler-sub-caption">
            <span className="gold-accent-dot">✦</span>
            <span className="sub-caption-text">{categories[currentIdx].sub}</span>
          </div>

          {/* Interactive Chapter Pills */}
          <div className="cycler-pill-nav">
            {categories.map((c, idx) => (
              <button
                key={c.word}
                type="button"
                className={`cycler-pill-item${currentIdx === idx ? " active" : ""}`}
                onClick={() => handleWordCycle(idx)}
                aria-label={`Jump to ${c.word}`}
              >
                <span className="pill-num">{c.index}</span>
                <span className="pill-name">{c.word}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={`word-containers-area${currentIdx === 4 ? " has-closing-quote" : ""}`}>
          {/* 1. CLOTHES */}
          <article className={`word-container${currentIdx === 0 ? " active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper stagger-img stagger-1">
                <img src="/pictures/Casual/gus-tu-njana-O5IvDLsZAcE-unsplash.webp" alt="Clothes Top" />
              </div>
              <div className="left-img-wrapper stagger-img stagger-4">
                <img src="/pictures/Casual/shalom-ejiofor-t_prchAm4ag-unsplash.webp" alt="Clothes Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large stagger-img stagger-2">
                <img src="/pictures/Casual/black-scorpion-music-TSaDoFDc8JE-unsplash.webp" alt="Clothes Feature" />
              </div>
              <div className="word-img medium stagger-img stagger-3">
                <img src="/pictures/Casual/pexels-kristina-kozlova-110223342-14495271.webp" alt="Clothes Cut" />
              </div>
              <div className="word-img small stagger-img stagger-5">
                <img src="/pictures/Cooperate/clay-banks-_3Sud4WPPYE-unsplash.webp" alt="Clothes Accent" />
              </div>
            </div>
          </article>

          {/* 2. MOMENTS */}
          <article className={`word-container${currentIdx === 1 ? " active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper stagger-img stagger-1">
                <img src="/pictures/Moments/drew-dizzy-graham-PVyhz0wmHdo-unsplash.webp" alt="Moments Top" />
              </div>
              <div className="left-img-wrapper stagger-img stagger-4">
                <img src="/pictures/Moments/hassan-kibwana-9FtRopVGmWQ-unsplash.webp" alt="Moments Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large stagger-img stagger-2">
                <img src="/pictures/Moments/jayson-hinrichsen-h4w53bI7pI8-unsplash.webp" alt="Moments Feature" />
              </div>
              <div className="word-img medium stagger-img stagger-3">
                <img src="/pictures/Moments/houcine-ncib-U8M8MX2x7Ug-unsplash.webp" alt="Moments Cut" />
              </div>
              <div className="word-img small stagger-img stagger-5">
                <img src="/pictures/Party/karsten-winegeart-UicC_FIozPc-unsplash.webp" alt="Moments Accent" />
              </div>
            </div>
          </article>

          {/* 3. RIDES */}
          <article className={`word-container${currentIdx === 2 ? " active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper stagger-img stagger-1">
                <img src="/pictures/Rides/victor-furtuna-0mchrVHAYzg-unsplash.webp" alt="Rides Top" />
              </div>
              <div className="left-img-wrapper stagger-img stagger-4">
                <img src="/pictures/Rides/adrian-newell-jWM41o-TMAw-unsplash.webp" alt="Rides Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large stagger-img stagger-2">
                <img src="/pictures/Rides/elianna-gill-8bAPKqt6C7A-unsplash.webp" alt="Rides Feature" />
              </div>
              <div className="word-img medium stagger-img stagger-3">
                <img src="/pictures/Rides/talia-zsJZhl-dZMU-unsplash.webp" alt="Rides Cut" />
              </div>
              <div className="word-img small stagger-img stagger-5">
                <img src="/pictures/Rides/stefano-tanasi-FNlF0676UMU-unsplash.webp" alt="Rides Accent" />
              </div>
            </div>
          </article>

          {/* 4. ARCHITECTURE */}
          <article className={`word-container${currentIdx === 3 ? " active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper stagger-img stagger-1">
                <img src="/pictures/Architecture/luke-van-zyl-koH7IVuwRLw-unsplash.webp" alt="Architecture Top" />
              </div>
              <div className="left-img-wrapper stagger-img stagger-4">
                <img src="/pictures/Architecture/ricardo-gomez-angel-opFPVxMRpP8-unsplash.webp" alt="Architecture Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large stagger-img stagger-2">
                <img src="/pictures/Architecture/rashed-moslem-cexfB8toXfc-unsplash.webp" alt="Architecture Feature" />
              </div>
              <div className="word-img medium stagger-img stagger-3">
                <img src="/pictures/Architecture/sam-hFrRNecJWjY-unsplash.webp" alt="Architecture Cut" />
              </div>
              <div className="word-img small stagger-img stagger-5">
                <img src="/pictures/Architecture/tofan-teodor-6_PsZvYqfdQ-unsplash.webp" alt="Architecture Accent" />
              </div>
            </div>
          </article>

          {/* 5. FUTURE */}
          <article className={`word-container${currentIdx === 4 ? " active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper stagger-img stagger-1">
                <img src="/pictures/Future/shubham-dhage-O1rxducLjN0-unsplash.webp" alt="Future Top" />
              </div>
              <div className="left-img-wrapper stagger-img stagger-4">
                <img src="/pictures/Future/steve-johnson-wj_LPlw2Rns-unsplash.webp" alt="Future Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large stagger-img stagger-2">
                <img src="/pictures/Future/xu-haiwei-_3KdlCgHAn0-unsplash.webp" alt="Future Feature" />
              </div>
              <div className="word-img medium stagger-img stagger-3">
                <img src="/pictures/Future/daniel-lincoln-kbBcocXzFD8-unsplash.webp" alt="Future Cut" />
              </div>
              <div className="word-img small stagger-img stagger-5">
                <img src="/pictures/Future/shubham-dhage-TeAev-gzja0-unsplash.webp" alt="Future Accent" />
              </div>
            </div>
            <div className="future-closing-row">
              <p className="future-closing-quote">
                &ldquo;True couture does not ask to be noticed. It simply occupies space with undeniable intention.&rdquo;
              </p>
              <span className="closing-attribution">&mdash; THE VANTAGE CANON</span>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}
