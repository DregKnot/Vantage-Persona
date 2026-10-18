import React from "react";

interface BoardMember {
  name: string;
  role: string;
  img: string;
}

export default function BoardSection() {
  const members: BoardMember[] = [
    {
      name: "QUEEN ORINYA UNOGWU",
      role: "LEAD MAKEUP ARTIST",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 1.54.04 PM.webp",
    },
    {
      name: "GOODNESS IRUOMACHI ANOZIE",
      role: "LEAD FASHION STYLIST",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 3.14.50 PM.webp",
    },
    {
      name: "FOLORUNSHO DEBORAH",
      role: "ASSISTANT FASHION STYLIST",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 5.59.15 PM.webp",
    },
    {
      name: "LAWRENCE EYO",
      role: "LEAD VIDEOGRAPHER",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.01.08 PM.webp",
    },
    {
      name: "OBASI FRANCES",
      role: "ASSISTANT VIDEOGRAPHER",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.02.17 PM.webp",
    },
    {
      name: "SAMUEL OLAWALE",
      role: "CREATIVE DIRECTOR",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.05.23 PM.webp",
    },
    {
      name: "OHAERISIM CHINONSO SIMEON",
      role: "ASSISTANT PHOTOGRAPHER",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 6.14.20 PM.webp",
    },
    {
      name: "EUNICE ELISHA",
      role: "HAIR STYLIST",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 1.03.15 AM.webp",
    },
    {
      name: "OLATUNDE ADEWALE",
      role: "ASSISTANT VIDEOGRAPHER",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 1.31.39 AM.webp",
    },
    {
      name: "PRECIOUS OMOKEHINDE",
      role: "CLIENT RELATIONS MANAGER",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 3.08.50 PM.webp",
    },
    {
      name: "OLUWASEUN DANIEL ARIYIBI",
      role: "MARKETING DIRECTOR",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 4.24.07 PM.webp",
    },
    {
      name: "DONALD SOMTOCHUKWU CHINAGOROM",
      role: "LEAD PHOTOGRAPHER",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-29 at 4.59.17 PM.webp",
    },
    {
      name: "BABALOLA FAVOUR",
      role: "STUDIO MANAGER",
      img: "/pictures/Board of Trustee/WhatsApp Image 2026-03-30 at 4.41.28 PM.webp",
    },
  ];

  return (
    <section className="board-section">
      <div className="board-header">
        <h2 className="board-headline">The Board</h2>
        <h3 className="board-subheadline">Architects of Vision</h3>
      </div>

      <div className="board-marquee-wrapper">
        <div className="board-track">
          {/* Render twice for continuous loop */}
          {[...members, ...members].map((member, idx) => (
            <div key={idx} className="board-card">
              <div className="board-portrait-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="board-info">
                <h4 className="board-name">{member.name}</h4>
                <p className="board-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
