"use client";

import React, { useState } from "react";

interface CollectionCardProps {
  className: string;
  title: React.ReactNode;
  details?: string;
  images: { src: string; alt: string; className: string }[];
}

function CollectionCard({ className, title, details, images }: CollectionCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleClick = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <article
      className={`collection-card ${className}`}
      data-hint="Click to change look"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-images">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={img.className}
            style={{
              opacity: idx === currentIdx ? 1 : 0,
              zIndex: idx === currentIdx ? 2 : 1,
              transition: "opacity 0.4s ease",
            }}
          />
        ))}
      </div>
      <h3 className="card-heading">{title}</h3>
      {details && <p className="card-details">{details}</p>}
    </article>
  );
}

export default function ClothingSection() {
  const suitsImages = [
    { src: "/pictures/Cooperate/aiony-haust-IXYxqP4zejo-unsplash.webp", alt: "Senior man in a black suit", className: "img-primary" },
    { src: "/pictures/Cooperate/adrien-king-x4ie12OLMkY-unsplash.webp", alt: "Alternative suit view", className: "img-secondary" },
    { src: "/pictures/Cooperate/ben-iwara-jHzZp4wYRbk-unsplash.webp", alt: "Alternative suit view", className: "img-secondary" },
    { src: "/pictures/Cooperate/catherine-zhuang-uHkiIbhOxlk-unsplash.webp", alt: "Alternative suit view", className: "img-secondary" },
    { src: "/pictures/Cooperate/christian-agbede-3qrNYbRg5CM-unsplash.webp", alt: "Alternative suit view", className: "img-secondary" },
  ];

  const topsImages = [
    { src: "/pictures/Vantage-Experiment/mohamad-khosravi-owjsLTY-iNY-unsplash-top.webp", alt: "Man in a white button-down shirt", className: "img-primary" },
    { src: "/pictures/Casual/robin-gislain-gessy-q8KogP5WLBQ-unsplash.webp", alt: "Alternative shirt view", className: "img-secondary" },
    { src: "/pictures/Cooperate/dilip-poddar-M2aVniOd0i4-unsplash.webp", alt: "Third shirt view", className: "img-tertiary" },
    { src: "/pictures/Vantage-Experiment/pexels-josue-velasquez-282193995-16859373.webp", alt: "Fourth shirt view", className: "img-tertiary" },
    { src: "/pictures/Casual/apostolos-vamvouras-1z6Pmr-MGic-unsplash.webp", alt: "Fifth shirt view", className: "img-tertiary" },
  ];

  const bottomsImages = [
    { src: "/pictures/Vantage-Experiment/mohamad-khosravi-owjsLTY-iNY-unsplash-bottom.webp", alt: "Close-up of formal trousers and shoes", className: "img-primary" },
    { src: "/pictures/Casual/pexels-fars-woldai-19680890-7052768.webp", alt: "Alternative bottoms view", className: "img-secondary" },
    { src: "/pictures/Casual/pexels-jonathanborba-19456438.webp", alt: "Alternative bottoms view", className: "img-secondary" },
    { src: "/pictures/Casual/pexels-moises-ribeiro-121009898-11030839.webp", alt: "Alternative bottoms view", className: "img-secondary" },
    { src: "/pictures/Casual/pexels-kindelmedia-7298436.webp", alt: "Alternative bottoms view", className: "img-secondary" },
  ];

  return (
    <section className="clothing-section container-fade" data-auto-hint="Explore our formal, casual, and seasonal collections">
      <div className="clothing-collection">
        <CollectionCard
          className="card-suits"
          title={<>Suits &amp;<br />Formal Wear</>}
          images={suitsImages}
        />

        <CollectionCard
          className="card-tops"
          title="Tops"
          details="Shirts (formal & casual) | Polo Shirts | Knitted Sweaters"
          images={topsImages}
        />

        <CollectionCard
          className="card-bottoms"
          title="Bottoms"
          details="Trousers (formal & casual) | Chinos | Shorts"
          images={bottomsImages}
        />

        <div className="collection-info">
          <p>
            Each piece in our collection reflects the perfect balance of modern
            elegance and timeless style. Our carefully crafted suits, shirts,
            and trousers are designed to enhance your natural confidence, while
            providing the ultimate in comfort and fit. Explore our full range of
            clothing, where every item is a step towards elevating your everyday
            style.
          </p>
        </div>
      </div>
    </section>
  );
}
