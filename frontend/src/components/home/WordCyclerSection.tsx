"use client";

import React, { useState } from "react";
import AccordionGallery, { AccordionGalleryItem } from "@/components/common/AccordionGallery";

interface StyleExpressionCategory {
  word: string;
  index: string;
  items: AccordionGalleryItem[];
}

const CATEGORIES: StyleExpressionCategory[] = [
  {
    word: "UNDERSTATED",
    index: "01",
    items: [
      {
        image: "/pictures/Casual/black-scorpion-music-TSaDoFDc8JE-unsplash.webp",
        label: "Quiet Confidence",
        alt: "Quiet confidence through clean cut overcoat and minimal styling",
      },
      {
        image: "/pictures/Casual/grzegorz-rakowski-v2o96HtsBSw-unsplash.webp",
        label: "Clean Silhouette",
        alt: "Understated tailored silhouette in refined neutral palette",
      },
      {
        image: "/pictures/Casual/pexels-jeff-denlea-721292-3014197.webp",
        label: "Restrained Poise",
        alt: "Restrained personal dressing with classic overcoat poise",
      },
      {
        image: "/pictures/clothing_section/pexels-begum-bodur-49915278-34188117.webp",
        label: "Thoughtful Proportions",
        alt: "Thoughtfully proportioned everyday luxury styling",
      },
      {
        image: "/pictures/clothing_section/pexels-mokajou-19272496.webp",
        label: "Subtle Detailing",
        alt: "Subtle accessory detailing with polished sartorial execution",
      },
    ],
  },
  {
    word: "EXPRESSIVE",
    index: "02",
    items: [
      {
        image: "/pictures/Party/eyitayo-adekoya-oJmQ4oFtvbM-unsplash.webp",
        label: "Evening Haute",
        alt: "Occasion evening haute couture and celebration ensemble",
      },
      {
        image: "/pictures/clothing_section/pexels-ardit-mbrati-216809103-17559250.jpg",
        label: "Striking Silhouette",
        alt: "Striking expressive silhouette with confident presence",
      },
      {
        image: "/pictures/clothing_section/pexels-omotayo-samuel-329103165-30492647.jpg",
        label: "Bold Focus",
        alt: "Expressive color and silhouette combination with bold focus",
      },
      {
        image: "/pictures/clothing_section/pexels-rajeshverma-13057843.jpg",
        label: "Statement Details",
        alt: "Distinctive statement accessories and artistic expression",
      },
      {
        image: "/pictures/clothing_section/pexels-toniimal-28751173.jpg",
        label: "Dynamic Energy",
        alt: "Bold statement styling with dynamic contemporary energy",
      },
    ],
  },
  {
    word: "ROOTED",
    index: "03",
    items: [
      {
        image: "/pictures/clothing_section/pexels-aumgraphy-40195836.webp",
        label: "Ancestral Heritage",
        alt: "Majestic rooted heritage look with handwoven ceremonial detailing",
      },
      {
        image: "/pictures/clothing_section/pexels-micson-photography-2162627516-40312770.webp",
        label: "Generational Celebration",
        alt: "Generational cultural celebration attire across expressions",
      },
      {
        image: "/pictures/clothing_section/pexels-alvin-ulul-381010943-37823029.webp",
        label: "Textile Craft",
        alt: "Authentic cultural attire honoring ancestral textile heritage",
      },
      {
        image: "/pictures/clothing_section/pexels-anusree-gs-44418848-38521719.webp",
        label: "Ceremonial Regalia",
        alt: "Intricate ceremonial garments celebrating traditional artistry",
      },
      {
        image: "/pictures/clothing_section/pexels-moncho_shot-2159035535-36119865.webp",
        label: "Identifiable Roots",
        alt: "Rich cultural attire with identifiable traditional craftsmanship",
      },
    ],
  },
  {
    word: "REIMAGINED",
    index: "04",
    items: [
      {
        image: "/pictures/clothing_section/Aso-Oke Reimagined in Modern Tailoring.png",
        label: "Modern Aso-Oke",
        alt: "Aso-Oke reimagined in modern tailoring and structural silhouette",
      },
      {
        image: "/pictures/clothing_section/pexels-cottonbro-10667859.jpg",
        label: "Deconstructed Editorial",
        alt: "Deconstructed tailoring editorial with inventive layered cut",
      },
      {
        image: "/pictures/clothing_section/pexels-dejiprince-28845389.jpg",
        label: "Sculptural Form",
        alt: "Sculptural silhouette interpreting classic garments anew",
      },
      {
        image: "/pictures/clothing_section/pexels-blackben-33635584.jpg",
        label: "Experimental Layering",
        alt: "Experimental layering with unexpected proportions and volume",
      },
    ],
  },
];

export default function WordCyclerSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleSelectCategory = (targetIndex: number) => {
    if (targetIndex === currentIdx) return;
    setCurrentIdx(targetIndex);
  };

  const activeCategory = CATEGORIES[currentIdx];

  return (
    <section className="clothing-section-2 container-fade" id="expression-section">
      <div className="clothing-collection-2 cycler-accordion-layout">
        <div className="left-heading cycler-accordion-header">
          {/* Section Label & Counter */}
          <div className="cycler-badge-row">
            <span className="cycler-tag">YOUR STYLE, YOUR EXPRESSION</span>
            <span className="cycler-counter">
              <strong>{activeCategory.index}</strong> / 04
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="elegance-heading">
            There’s more than one way to look like you.
          </h2>

          {/* Introductory Paragraph */}
          <p className="cycler-intro-lead">
            Quiet confidence. A bold entrance. A connection to your roots. Or something familiar seen differently. Your style can hold all of these. We bring together clothing and accessories around your personality, your plans, and how you want to express yourself.
          </p>

          {/* Selectable Category Words (UNDERSTATED · EXPRESSIVE · ROOTED · REIMAGINED) */}
          <div className="cycler-category-selector" role="tablist" aria-label="Style Expressions">
            {CATEGORIES.map((c, idx) => {
              const isActive = currentIdx === idx;
              return (
                <React.Fragment key={c.word}>
                  {idx > 0 && <span className="cat-separator" aria-hidden="true">·</span>}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`cat-word-btn${isActive ? " active" : ""}`}
                    onClick={() => handleSelectCategory(idx)}
                  >
                    {c.word}
                  </button>
                </React.Fragment>
              );
            })}
          </div>

          {/* Interactive Chapter Pills for touch/mobile convenience */}
          <div className="cycler-pill-nav">
            {CATEGORIES.map((c, idx) => (
              <button
                key={c.word}
                type="button"
                className={`cycler-pill-item${currentIdx === idx ? " active" : ""}`}
                onClick={() => handleSelectCategory(idx)}
                aria-label={`Select ${c.word}`}
              >
                <span className="pill-num">{c.index}</span>
                <span className="pill-name">{c.word}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Integrated React Bits AccordionGallery for the active category */}
        <div className="cycler-accordion-stage">
          <AccordionGallery
            items={activeCategory.items}
            defaultIndex={activeCategory.items.length > 2 ? 2 : 1}
            expandRatio={0.34}
            trigger="click"
            accentColor="#D4AF37"
            overlayColor="#0D0A08"
            textColor="#FBF4E6"
            height={680}
            radius={20}
            gap={12}
            tilt={5}
          />
        </div>
      </div>
    </section>
  );
}
