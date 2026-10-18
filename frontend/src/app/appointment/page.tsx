"use client";

import React, { useState } from "react";
import "@/styles/appointment.css";

export default function AppointmentPage() {
  // Mission / Vision Tabs
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  // Booking Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [styling, setStyling] = useState("head-feet");
  const [submitted, setSubmitted] = useState(false);

  // Active Tooltip
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What should I bring to my first consultation?",
      a: "Just yourself and an open mind. If you have specific inspiration or a garment you'd like to match, feel free to bring it along.",
    },
    {
      q: "How long does a bespoke tailoring session take?",
      a: "Initial consultations usually take 45–60 minutes. The full crafting process typically requires 3–5 fittings over several weeks.",
    },
    {
      q: "What does 'Fashionista' styling include?",
      a: "This is our VIP tier. It includes full personal styling, event logistics coordination, a luxury vehicle assignment, and an envoy/entourage to accompany your arrival.",
    },
    {
      q: "Can I reschedule my appointment?",
      a: "Yes, you can reschedule via the confirmation email you receive, provided it's at least 24 hours in advance.",
    },
  ];

  const testimonials = [
    {
      msg: "Vantage didn’t just change my wardrobe; they completely transformed how I carry myself. The 'Fashionista' package made my gala entrance unforgettable.",
      author: "Marcus S.",
      city: "New York, NY",
    },
    {
      msg: "The detail and precision in the tailoring are unmatched. I went with the 'head down to the car' styling and the visual coordination was mind-blowing.",
      author: "Elena R.",
      city: "London, UK",
    },
    {
      msg: "Truly an editorial execution. I felt like I stepped out of a high-end fashion magazine. The team is professional, visionary, and exact.",
      author: "Julian V.",
      city: "Los Angeles, CA",
    },
    {
      msg: "I have never experienced tailoring like this. They engineered an identity for me that translated perfectly across boardrooms and casual lounges alike.",
      author: "David L.",
      city: "Chicago, IL",
    },
    {
      msg: "The Cyberpunk tech-fits are out of this world. Functional, breathable, and unapologetically futuristic. Best aesthetic investment I've made.",
      author: "Ava T.",
      city: "Tokyo, JP",
    },
  ];

  return (
    <main className="appointment-page-container">
      {/* Hero Section */}
      <section className="appointment-hero">
        <div className="hero-content">
          <span className="eyebrow">• SARTORIAL EXCELLENCE</span>
          <h1 className="hero-headline">
            Where Architecture <br />
            Meets <span className="highlight">Haute Couture</span>
          </h1>
          <p className="hero-description">
            Experience our private consultation suite. From custom garment engineering to full event aesthetic orchestration, our master stylists define your presence.
          </p>
          <a href="#appointment-booking-form" className="hero-btn">
            Reserve Your Session <span className="arrow-circle">↘</span>
          </a>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="vantage-mission-section">
        <div className="mission-container">
          <div className="mission-top-bar">
            <span className="brand-label">• Vantage Persona</span>
            <div className="mission-pills" id="mission-tabs">
              <span
                className={`mission-pill ${activeTab === "mission" ? "active" : ""}`}
                onClick={() => setActiveTab("mission")}
                style={{ cursor: "pointer" }}
              >
                • Our Mission
              </span>
              <span
                className={`mission-pill ${activeTab === "vision" ? "active" : ""}`}
                onClick={() => setActiveTab("vision")}
                style={{ cursor: "pointer" }}
              >
                Our Vision
              </span>
            </div>
          </div>

          <div className="mission-main-grid">
            <div className="mission-image-side">
              <img src="/pictures/Cooperate/Elegant.webp" alt="Vantage Tailoring Excellence" />
            </div>
            <div className="mission-text-side">
              {activeTab === "mission" ? (
                <div className="mission-content-block active" id="content-mission">
                  <h2 className="mission-headline">
                    Dedicated to Engineering Your <span className="italic">Identity</span>, Style, and Presence Through Personalized, Bespoke Sartorial Systems.
                  </h2>
                  <p className="mission-subtext">
                    Our master tailors blend architectural precision and sartorial craft to help you achieve perfect alignment in every look. Your Trusted Guide to Sophisticated Presence.
                  </p>
                </div>
              ) : (
                <div className="mission-content-block active" id="content-vision">
                  <h2 className="mission-headline">
                    Fashion is the Architecture of <span className="italic">Existence</span>.
                  </h2>
                  <p className="mission-subtext">
                    Our vision is to style the world by revealing that fashion exists in everything—both living and inanimate. We believe that style is the fundamental pulse of reality, a universal language spoken by every form, shadow, and soul.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mission-bottom-footer">
            <div className="mission-stats">
              <div className="stat-unit">
                <span className="stat-number">3K+</span>
                <span className="stat-label">Bespoke Suits <br /> Transformed</span>
              </div>
              <div className="stat-unit">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Private <br /> Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="vantage-solutions-section">
        <div className="solutions-grid-container">
          <div className="solutions-text-block">
            <span className="features-eyebrow">• Why choose Us</span>
            <h2 className="solutions-headline">Personalized Sartorial Solutions for Every Persona</h2>
            <p className="solutions-description">
              We combine traditional craftsmanship and modern functional design to help you achieve a wardrobe that reflects your inner authority and personal evolution.
            </p>
            <div className="features-list">
              <div className="feature-item"><span className="feature-dot">•</span> Legacy</div>
              <div className="feature-item"><span className="feature-dot">•</span> Precision</div>
              <div className="feature-item"><span className="feature-dot">•</span> Utility</div>
            </div>
          </div>

          <div className="solutions-card-tall">
            <div className="card-image-bg">
              <img src="/pictures/Cooperate/christian-agbede-3qrNYbRg5CM-unsplash.webp" alt="Master Tailoring" />
            </div>
            <div className="card-overlay-top">
              <h3>Master-guided sartorial programs for long-term stylistic authority.</h3>
            </div>
            <div className="card-overlay-bottom">
              <div className="overlay-pills">
                <span className="overlay-pill">Legacy</span>
                <span className="overlay-pill">Craft</span>
                <span className="overlay-pill">Precision</span>
              </div>
            </div>
          </div>

          <div className="solutions-card-split">
            <div className="card-top-text">
              <h3>Personalized style coaching for inner confidence and outer impact.</h3>
            </div>
            <div className="card-center-image">
              <img src="/pictures/Cooperate/tran-nhu-tuan-r9guXsa0EOY-unsplash.webp" alt="Style Consultation" />
            </div>
            <div className="card-bottom-content">
              <div className="card-brand-icon">
                <img src="/pictures/Vantage personsa logo.svg" alt="Vantage Icon" />
              </div>
              <div className="overlay-pills">
                <span className="overlay-pill">Identity</span>
                <span className="overlay-pill">Presence</span>
                <span className="overlay-pill">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="appointment-booking-form" className="booking-form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Create Appointment</h2>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <h3 style={{ fontFamily: "var(--font-jura)", fontSize: "1.8rem", color: "#fff", marginBottom: "15px" }}>
                Session Request Confirmed
              </h3>
              <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: "1.6", maxWidth: "500px", margin: "0 auto" }}>
                Thank you, <strong>{fullName}</strong>. Your consultation request for <strong>{date || "your preferred date"}</strong> at <strong>{time}</strong> has been registered. Our concierge team will reach out via <strong>{email}</strong>.
              </p>
              <button
                type="button"
                className="btn-create"
                onClick={() => setSubmitted(false)}
                style={{ marginTop: "25px", marginInline: "auto" }}
              >
                Book Another Consultation
              </button>
            </div>
          ) : (
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Email for confirmation"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Schedule Time</label>
                  <select value={time} onChange={(e) => setTime(e.target.value)}>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>How Styled?</label>
                <div className="styling-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="styling"
                      value="head-feet"
                      checked={styling === "head-feet"}
                      onChange={() => setStyling("head-feet")}
                    />
                    <span>
                      My head down to my feet{" "}
                      <span
                        className="info-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTooltip(activeTooltip === "head-feet" ? null : "head-feet");
                        }}
                      >
                        ⓘ
                        <span className={`tooltip-text ${activeTooltip === "head-feet" ? "show" : ""}`}>
                          Full body tailoring from headwear to footwear.
                        </span>
                      </span>
                    </span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="styling"
                      value="head-event"
                      checked={styling === "head-event"}
                      onChange={() => setStyling("head-event")}
                    />
                    <span>
                      My head down to the event{" "}
                      <span
                        className="info-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTooltip(activeTooltip === "head-event" ? null : "head-event");
                        }}
                      >
                        ⓘ
                        <span className={`tooltip-text ${activeTooltip === "head-event" ? "show" : ""}`}>
                          Total event coordination for a seamless arrival.
                        </span>
                      </span>
                    </span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="styling"
                      value="head-car"
                      checked={styling === "head-car"}
                      onChange={() => setStyling("head-car")}
                    />
                    <span>
                      My head down to the car{" "}
                      <span
                        className="info-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTooltip(activeTooltip === "head-car" ? null : "head-car");
                        }}
                      >
                        ⓘ
                        <span className={`tooltip-text ${activeTooltip === "head-car" ? "show" : ""}`}>
                          Automotive styling matching your look to your drive.
                        </span>
                      </span>
                    </span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="styling"
                      value="fashionista"
                      checked={styling === "fashionista"}
                      onChange={() => setStyling("fashionista")}
                    />
                    <span>
                      Fashionista (style me and the event, what I&apos;ll drive, envoy following, VIP){" "}
                      <span
                        className="info-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTooltip(activeTooltip === "fashionista" ? null : "fashionista");
                        }}
                      >
                        ⓘ
                        <span className={`tooltip-text ${activeTooltip === "fashionista" ? "show" : ""}`}>
                          The ultimate Vantage package including transit, VIP status, and entourage styling.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-create">
                  Reserve Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="appointment-faq-section">
        <div className="faq-container">
          <h2 className="faq-headline">Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? "active" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="faq-question">
                  {faq.q} <span className="icon">{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <h2 className="testimonial-headline">What Our Customers Say</h2>
          <div className="marquee-wrapper">
            <div className="testimonial-track">
              {[...testimonials, ...testimonials].map((t, idx) => (
                <div key={idx} className="testimonial-card">
                  <div className="rating">★★★★★</div>
                  <p className="message">&quot;{t.msg}&quot;</p>
                  <div className="customer-info">
                    <span className="name">{t.author}</span>
                    <span className="location">{t.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
