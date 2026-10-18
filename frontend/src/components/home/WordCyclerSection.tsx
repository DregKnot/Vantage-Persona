"use client";

import React, { useState, useRef, useEffect } from "react";

export default function WordCyclerSection() {
  const words = ["CLOTHES", "MOMENTS", "RIDES", "ARCHITECTURE", "FUTURE"];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [boxDimensions, setBoxDimensions] = useState<{ width?: number; height?: number }>({});
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = wordRefs.current[currentIdx];
    if (el) {
      setBoxDimensions({
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    }
  }, [currentIdx]);

  const handleNextWord = () => {
    setCurrentIdx((prev) => (prev + 1) % words.length);
  };

  return (
    <section className="clothing-section-2 container-fade" data-auto-hint="Click the word to change views">
      <section className="clothing-collection-2">
        <div className="left-heading">
          <h1 className="elegance-heading">
            Fashion is style and style has always been the confidence and way to convey an idea. this means fashion is in{" "}
            <span
              className="Royals clicked"
              id="royalsBox"
              onClick={handleNextWord}
              style={{
                width: boxDimensions.width ? `${boxDimensions.width}px` : "auto",
                height: boxDimensions.height ? `${boxDimensions.height}px` : "auto",
                cursor: "pointer",
              }}
            >
              <span
                className="word-track"
                id="wordTrack"
                style={{
                  transform: boxDimensions.height
                    ? `translateY(-${currentIdx * boxDimensions.height}px)`
                    : "none",
                  transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              >
                {words.map((w, idx) => (
                  <span
                    key={w}
                    ref={(el) => {
                      wordRefs.current[idx] = el;
                    }}
                    className="word"
                  >
                    {w}
                  </span>
                ))}
              </span>
            </span>{" "}
            Yet is this its Zenith?
          </h1>
        </div>

        <div className="word-containers-area">
          {/* 1. CLOTHES */}
          <article className={`word-container ${currentIdx === 0 ? "active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper">
                <img src="/pictures/Casual/gus-tu-njana-O5IvDLsZAcE-unsplash.webp" alt="Clothes Top" />
              </div>
              <div className="left-img-wrapper">
                <img src="/pictures/Casual/shalom-ejiofor-t_prchAm4ag-unsplash.webp" alt="Clothes Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large">
                <img src="/pictures/Casual/black-scorpion-music-TSaDoFDc8JE-unsplash.webp" alt="Clothes" />
              </div>
              <div className="word-img medium">
                <img src="/pictures/Casual/pexels-kristina-kozlova-110223342-14495271.webp" alt="Clothes" />
              </div>
              <div className="word-img small">
                <img src="/pictures/Cooperate/clay-banks-_3Sud4WPPYE-unsplash.webp" alt="Clothes" />
              </div>
            </div>
          </article>

          {/* 2. MOMENTS */}
          <article className={`word-container ${currentIdx === 1 ? "active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper">
                <img src="/pictures/Moments/drew-dizzy-graham-PVyhz0wmHdo-unsplash.webp" alt="Moments Top" />
              </div>
              <div className="left-img-wrapper">
                <img src="/pictures/Moments/hassan-kibwana-9FtRopVGmWQ-unsplash.webp" alt="Moments Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large">
                <img src="/pictures/Moments/jayson-hinrichsen-h4w53bI7pI8-unsplash.webp" alt="Moments" />
              </div>
              <div className="word-img medium">
                <img src="/pictures/Moments/houcine-ncib-U8M8MX2x7Ug-unsplash.webp" alt="Moments" />
              </div>
              <div className="word-img small">
                <img src="/pictures/Party/karsten-winegeart-UicC_FIozPc-unsplash.webp" alt="Moments" />
              </div>
            </div>
          </article>

          {/* 3. RIDES */}
          <article className={`word-container ${currentIdx === 2 ? "active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper">
                <img src="/pictures/Rides/victor-furtuna-0mchrVHAYzg-unsplash.webp" alt="Rides Top" />
              </div>
              <div className="left-img-wrapper">
                <img src="/pictures/Rides/adrian-newell-jWM41o-TMAw-unsplash.webp" alt="Rides Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large">
                <img src="/pictures/Rides/elianna-gill-8bAPKqt6C7A-unsplash.webp" alt="Rides" />
              </div>
              <div className="word-img medium">
                <img src="/pictures/Rides/talia-zsJZhl-dZMU-unsplash.webp" alt="Rides" />
              </div>
              <div className="word-img small">
                <img src="/pictures/Rides/stefano-tanasi-FNlF0676UMU-unsplash.webp" alt="Rides" />
              </div>
            </div>
          </article>

          {/* 4. ARCHITECTURE */}
          <article className={`word-container ${currentIdx === 3 ? "active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper">
                <img src="/pictures/Architecture/luke-van-zyl-koH7IVuwRLw-unsplash.webp" alt="Architecture Top" />
              </div>
              <div className="left-img-wrapper">
                <img src="/pictures/Architecture/ricardo-gomez-angel-opFPVxMRpP8-unsplash.webp" alt="Architecture Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large">
                <img src="/pictures/Architecture/rashed-moslem-cexfB8toXfc-unsplash.webp" alt="Architecture" />
              </div>
              <div className="word-img medium">
                <img src="/pictures/Architecture/sam-hFrRNecJWjY-unsplash.webp" alt="Architecture" />
              </div>
              <div className="word-img small">
                <img src="/pictures/Architecture/tofan-teodor-6_PsZvYqfdQ-unsplash.webp" alt="Architecture" />
              </div>
            </div>
          </article>

          {/* 5. FUTURE */}
          <article className={`word-container ${currentIdx === 4 ? "active" : ""}`}>
            <div className="left-images">
              <div className="left-img-wrapper">
                <img src="/pictures/Future/shubham-dhage-O1rxducLjN0-unsplash.webp" alt="Future Top" />
              </div>
              <div className="left-img-wrapper">
                <img src="/pictures/Future/steve-johnson-wj_LPlw2Rns-unsplash.webp" alt="Future Bottom" />
              </div>
            </div>
            <div className="word-masonry">
              <div className="word-img large">
                <img src="/pictures/Future/xu-haiwei-_3KdlCgHAn0-unsplash.webp" alt="Future" />
              </div>
              <div className="word-img medium">
                <img src="/pictures/Future/daniel-lincoln-kbBcocXzFD8-unsplash.webp" alt="Future" />
              </div>
              <div className="word-img small">
                <img src="/pictures/Future/shubham-dhage-TeAev-gzja0-unsplash.webp" alt="Future" />
              </div>
            </div>
            <div className="future-closing-row">
              <p>
                Fashion is in everything, what we can see and what we can't, which is why fashion is not about the clothes or the event, it's about the emotion, the moment, the attention to detail, the style of creation. Fashion is in everything.
              </p>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}
