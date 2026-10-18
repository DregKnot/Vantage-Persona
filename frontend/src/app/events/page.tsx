"use client";

import React, { useState } from "react";
import "@/styles/events.css";

interface EventItem {
  id: string;
  month: string;
  day: string;
  date: string;
  price: string;
  name: string;
  location: string;
  venue: string;
  thumb: string;
  category: "fashion" | "motorsport" | "culture";
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"LIST" | "GRID">("LIST");

  const events: EventItem[] = [
    {
      id: "1",
      month: "APRIL",
      day: "Friday",
      date: "Apr 10, 2026",
      price: "AED 250+",
      name: "Vantage Gala Live",
      location: "Dubai",
      venue: "At Al Habtoor Polo Resort/Club",
      thumb: "/pictures/Party/eyitayo-adekoya-oJmQ4oFtvbM-unsplash.webp",
      category: "fashion",
    },
    {
      id: "2",
      month: "APRIL",
      day: "Saturday",
      date: "Apr 18, 2026",
      price: "FREE",
      name: "Groove on the Grass",
      location: "Dubai",
      venue: "At Emirates Golf Club",
      thumb: "/pictures/Party/joren-aranas-nmuyqgSOpEE-unsplash.webp",
      category: "culture",
    },
    {
      id: "3",
      month: "APRIL",
      day: "Friday - Sunday",
      date: "Apr 24 – Apr 26",
      price: "AED 250+",
      name: "Julius Baer Gold Cup",
      location: "Downtown Dubai",
      venue: "At Al Habtoor Polo Resort/Club",
      thumb: "/pictures/Rides/talia-zsJZhl-dZMU-unsplash.webp",
      category: "motorsport",
    },
    {
      id: "4",
      month: "MAY",
      day: "Friday",
      date: "May 15, 2026",
      price: "AED 210+",
      name: "UAE Hydro Series",
      location: "Dubai",
      venue: "At Al Habtoor Polo Resort/Club",
      thumb: "/pictures/Rides/dustin-bowdige-1EXroB7f6bw-unsplash.webp",
      category: "motorsport",
    },
  ];

  const filteredEvents =
    selectedCategory === "ALL"
      ? events
      : events.filter((e) => e.category === selectedCategory.toLowerCase());

  return (
    <main className="events-main">
      {/* Hero Section */}
      <section className="events-hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/pictures/Party/karsten-winegeart-UicC_FIozPc-unsplash.webp')",
          }}
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Groove on<br />the Grass
          </h1>
          <div className="hero-meta">
            <div className="meta-date">
              <strong>Saturday</strong><br />
              April 18, 2026
            </div>
            <div className="meta-location">
              <strong>Emirates Golf Club</strong><br />
              Dubai <sup>UAE</sup>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="events-filter-bar container-fade">
        <div className="filter-group left">
          <span className="label">EVENTS IN</span>
          <select className="glass-select">
            <option>2026</option>
            <option>2027</option>
          </select>
        </div>

        <div className="filter-group center">
          <div className="filter-item">
            <span className="label">CATEGORIES</span>
            <select
              className="glass-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="ALL">SHOW ALL</option>
              <option value="FASHION">FASHION</option>
              <option value="MOTORSPORT">MOTORSPORT</option>
              <option value="CULTURE">CULTURE</option>
            </select>
          </div>
        </div>

        <div className="filter-group right">
          <span className="label">VIEW</span>
          <div className="view-toggles">
            <button
              className={`toggle-btn ${viewMode === "LIST" ? "active" : ""}`}
              onClick={() => setViewMode("LIST")}
            >
              LIST
            </button>
            <button
              className={`toggle-btn ${viewMode === "GRID" ? "active" : ""}`}
              onClick={() => setViewMode("GRID")}
            >
              GRID
            </button>
          </div>
        </div>
      </section>

      {/* Events List Container */}
      <section className="events-list-section">
        <div className="month-group container-fade">
          <h2 className="month-title">UPCOMING CURATIONS</h2>

          <div className="event-rows-container">
            {filteredEvents.map((evt) => (
              <article key={evt.id} className="event-row" data-hint="Exclusive event access">
                <div className="row-col col-date">
                  <span className="day">{evt.day}</span>
                  <span className="date">{evt.date}</span>
                  <span className="price">{evt.price}</span>
                </div>
                <div className="row-col col-thumb">
                  <div className="thumb-wrapper">
                    <img src={evt.thumb} alt={evt.name} />
                  </div>
                </div>
                <div className="row-col col-details">
                  <h3 className="event-name">{evt.name}</h3>
                  <h4 className="event-location">
                    {evt.location} <sup>UAE</sup>
                  </h4>
                  <p className="event-venue">{evt.venue}</p>
                </div>
                <div className="row-col col-action">
                  <a href="/appointment" className="view-btn">
                    ➜
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Breakout Feature: Formula 1 */}
        <div
          className="event-breakout"
          style={{
            backgroundImage: "url('/pictures/Rides/redcharlie-vQVWIsIBafA-unsplash.webp')",
          }}
        >
          <div className="breakout-overlay"></div>
          <div className="breakout-content">
            <div className="breakout-date">
              <span className="date-range">May 1 – May 3</span>
              <span className="price">AED 310+</span>
            </div>
            <div className="breakout-details">
              <h2 className="breakout-title">
                Formula 1 Grand Prix<br />Abu Dhabi <sup>UAE</sup>
              </h2>
              <p className="breakout-venue">Yas Marina Circuit</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
