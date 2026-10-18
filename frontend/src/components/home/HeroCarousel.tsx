"use client";

import React, { useState, useEffect } from "react";

export default function HeroCarousel() {
  const slides = [
    "/pictures/Hero1.webp",
    "/pictures/Hero2.webp",
    "/pictures/Hero3.webp",
    "/pictures/cosmin-ursea-O03Eif76O4Y-unsplash.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-carousel-container">
      <div className="carousel-background">
        {slides.map((src, idx) => (
          <div
            key={src}
            className={`carousel-slide ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content-overlay">
        <span className="sub-text left">SUMMER / AUTUMN</span>
        <h1 className="main-title">
          VAN<span className="hollow">TA</span>GE <br />
          P<span className="hollow">ER</span>SONA <br />
        </h1>
        <span className="sub-text right">2026 COLLECTION</span>
      </div>
    </div>
  );
}
