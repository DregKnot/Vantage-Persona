"use client";

import React, { useState } from "react";

interface BoardMember {
  id: string;
  name: string;
  role: string;
  department: "direction" | "styling" | "lens" | "beauty";
  departmentLabel: string;
  orderNumber: string;
  img: string;
}

export default function BoardSection() {
  const [activeDept, setActiveDept] = useState<string>("all");

  const members: BoardMember[] = [
    // 1. Creative Direction & Executive Leadership
    {
      id: "samuel-olawale",
      name: "SAMUEL OLAWALE",
      role: "CREATIVE DIRECTOR",
      department: "direction",
      departmentLabel: "CREATIVE DIRECTION",
      orderNumber: "01",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.05.23 PM.webp",
    },
    {
      id: "oluwaseun-daniel-ariyibi",
      name: "OLUWASEUN DANIEL ARIYIBI",
      role: "MARKETING DIRECTOR",
      department: "direction",
      departmentLabel: "DIRECTION & STRATEGY",
      orderNumber: "02",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 4.24.07 PM.webp",
    },
    {
      id: "precious-omokehinde",
      name: "PRECIOUS OMOKEHINDE",
      role: "CLIENT RELATIONS MANAGER",
      department: "direction",
      departmentLabel: "PRIVATE CLIENTELE",
      orderNumber: "03",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 3.08.50 PM.webp",
    },
    {
      id: "babalola-favour",
      name: "BABALOLA FAVOUR",
      role: "STUDIO MANAGER",
      department: "direction",
      departmentLabel: "STUDIO OPERATIONS",
      orderNumber: "04",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 4.41.28 PM.webp",
    },

    // 2. Styling & Wardrobe Atelier
    {
      id: "goodness-iruomachi-anozie",
      name: "GOODNESS IRUOMACHI ANOZIE",
      role: "LEAD FASHION STYLIST",
      department: "styling",
      departmentLabel: "ATELIER STYLING",
      orderNumber: "05",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 3.14.50 PM.webp",
    },
    {
      id: "folorunsho-deborah",
      name: "FOLORUNSHO DEBORAH",
      role: "ASSISTANT FASHION STYLIST",
      department: "styling",
      departmentLabel: "ATELIER STYLING",
      orderNumber: "06",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 5.59.15 PM.webp",
    },

    // 3. Lens, Photography & Cinematography
    {
      id: "donald-somtochukwu-chinagorom",
      name: "DONALD SOMTOCHUKWU CHINAGOROM",
      role: "LEAD PHOTOGRAPHER",
      department: "lens",
      departmentLabel: "LENS & ARCHIVE",
      orderNumber: "07",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 4.59.17 PM.webp",
    },
    {
      id: "ohaerisim-chinonso-simeon",
      name: "OHAERISIM CHINONSO SIMEON",
      role: "ASSISTANT PHOTOGRAPHER",
      department: "lens",
      departmentLabel: "LENS & ARCHIVE",
      orderNumber: "08",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.14.20 PM.webp",
    },
    {
      id: "lawrence-eyo",
      name: "LAWRENCE EYO",
      role: "LEAD VIDEOGRAPHER",
      department: "lens",
      departmentLabel: "CINEMATOGRAPHY",
      orderNumber: "09",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.01.08 PM.webp",
    },
    {
      id: "obasi-frances",
      name: "OBASI FRANCES",
      role: "ASSISTANT VIDEOGRAPHER",
      department: "lens",
      departmentLabel: "CINEMATOGRAPHY",
      orderNumber: "10",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.02.17 PM.webp",
    },
    {
      id: "olatunde-adewale",
      name: "OLATUNDE ADEWALE",
      role: "ASSISTANT VIDEOGRAPHER",
      department: "lens",
      departmentLabel: "CINEMATOGRAPHY",
      orderNumber: "11",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 1.31.39 AM.webp",
    },

    // 4. Haute Beauté & Grooming Architecture
    {
      id: "queen-orinya-unogwu",
      name: "QUEEN ORINYA UNOGWU",
      role: "LEAD MAKEUP ARTIST",
      department: "beauty",
      departmentLabel: "HAUTE BEAUTÉ",
      orderNumber: "12",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 1.54.04 PM.webp",
    },
    {
      id: "eunice-elisha",
      name: "EUNICE ELISHA",
      role: "HAIR STYLIST",
      department: "beauty",
      departmentLabel: "HAIR ARCHITECTURE",
      orderNumber: "13",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 1.03.15 AM.webp",
    },
  ];

  const filterTabs = [
    { key: "all", label: "ALL DISCIPLINES", count: "13" },
    { key: "direction", label: "CREATIVE DIRECTION & STUDIO", count: "04" },
    { key: "styling", label: "ATELIER STYLING", count: "02" },
    { key: "lens", label: "LENS & CINEMA", count: "05" },
    { key: "beauty", label: "HAUTE BEAUTÉ", count: "02" },
  ];

  const filteredMembers =
    activeDept === "all"
      ? members
      : members.filter((m) => m.department === activeDept);

  // Multiply items to guarantee infinite seamless marquee loop
  const loopMultiplier = filteredMembers.length < 5 ? 4 : 2;
  const marqueeItems = Array(loopMultiplier).fill(filteredMembers).flat();

  return (
    <section className="board-section container-fade" id="board-section" aria-labelledby="board-heading">
      <div className="board-header">
        <div className="board-badge-row">
          <span className="board-tag">MAISON ATELIER</span>
          <span className="board-counter">13 SOVEREIGN ARTISANS</span>
        </div>

        <h2 id="board-heading" className="board-headline">
          The Board of Trustees
        </h2>

        <p className="board-submanifesto">
          Architects of vision, silhouette, and light. The collective intellect engineering the sovereign presence of Vantage Persona.
        </p>

        {/* Interactive Discipline Filter Pills */}
        <div className="board-filter-nav" role="tablist" aria-label="Filter board by discipline">
          {filterTabs.map((tab) => {
            const isActive = activeDept === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`board-filter-pill${isActive ? " active" : ""}`}
                onClick={() => setActiveDept(tab.key)}
              >
                <span>{tab.label}</span>
                <span className="board-filter-count">{tab.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="board-marquee-wrapper" title="Hover to inspect artisan dossier">
        <div
          className="board-track"
          style={{
            animationDuration: `${Math.max(32, marqueeItems.length * 3.2)}s`,
          }}
        >
          {marqueeItems.map((member, idx) => (
            <article key={`${member.id}-${idx}`} className="board-card">
              {/* Dossier Header Tag */}
              <div className="board-card-dossier">
                <span className="dossier-id">{`VP / ATELIER № ${member.orderNumber}`}</span>
                <span className="dossier-star">✦</span>
              </div>

              {/* Portrait Container with Grayscale Transition */}
              <div className="board-portrait-wrapper">
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                />
                <div className="board-portrait-overlay" aria-hidden="true" />
                <span className="board-card-dept-tag">{member.departmentLabel}</span>
              </div>

              {/* Artisan Typographic Details */}
              <div className="board-info">
                <h3 className="board-name">{member.name}</h3>
                <p className="board-role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
