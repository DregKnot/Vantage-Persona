"use client";

import React, { useState } from "react";

export default function VisionSection() {
  const [isStage2, setIsStage2] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleStage = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIsStage2((prev) => !prev);
      setAnimating(false);
    }, 200);
  };

  return (
    <section className="section-4 container-fade" id="vision">
      <div className="section-4-bg-text">VANTAGE PERSONA</div>

      <div className="section-4-inner">
        <div className="section-4-grid">
          {/* Fusion Visuals */}
          <div className="section-4-images">
            <div className="vision-img-container glass-effect">
              <img
                src="/pictures/B/W/ruslan-bardash-rgqlqcy9M9s-unsplash.webp"
                alt="Classic Sartorial Elegance"
                className="vision-img-1"
              />
              <div className="img-label">/ CLASSIC</div>
            </div>
            <div className="vision-img-container glass-effect">
              <img
                src="/pictures/BlackModels/premium_photo-1770306559390-3c27d350c08e-processed(lightpdf.com).webp"
                alt="Modern Functional Utility"
                className="vision-img-2"
              />
              <div className="img-label">/ FUTURISTIC</div>
            </div>
          </div>

          {/* Content & Toggle */}
          <div className="section-4-content">
            <h2 className="section-4-main-title">
              WEARING VANTAGE PERSONA IS ABOUT MORE THAN JUST CLOTHING AND ACCESSORIES.
            </h2>

            <div
              className={`vision-interactive-area ${isStage2 ? "stage-2" : "stage-1"} ${
                animating ? "animating" : ""
              }`}
              id="visionInteractions"
              data-hint="Click to flip perspective"
              onClick={toggleStage}
              style={{ cursor: "pointer" }}
            >
              <div className="interactive-heading-wrapper">
                <h3 className="interactive-heading" id="interactiveHeading">
                  {isStage2 ? "/ WHY CHOOSE US?" : "/ SO WHY DOES THIS MATTER?"}
                </h3>
              </div>

              <div className="vision-article" id="visionArticle">
                {!isStage2 ? (
                  <>
                    <p className="vision-p highlight">
                      Fashion has long been closely bounded by clothes and what you put on. But a new vision is rising, calling out fashion around you. That vision is Vantage Persona.
                    </p>
                    <p className="vision-p indent">
                      The vision of Vantage Persona is rooted in the concept of the &quot;Morphing Silhouette,&quot; a digital bridge between classic sartorial elegance and modern functional utility. The agency does not simply style clothes; it engineers identities, proving that a single individual can seamlessly transition from a high-stakes, traditional celebrity gala to the gritty, high-performance world of technical &quot;tech-fit&quot; apparel.
                    </p>
                    <p className="vision-p history">
                      Founded in 2024, Vantage Persona emerged from the intersection of architectural design and bespoke tailoring. We recognized that in an era of digital twins and physical presence, the human form requires a wardrobe that is as dynamic as our digital identities.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="vision-p highlight">
                      We don&apos;t style you for the occasion, nor prepare you to look good for that party—we make you the occasion.
                    </p>
                    <p className="vision-p indent">
                      Your outfit is not just there to make you look good, but to make others feel what you feel. You need to ball for that party? We make you the vibe bringer.
                    </p>
                    <p className="vision-p">
                      She said yes? Let&apos;s style the happy smiles into every fit and accessory you put on.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
