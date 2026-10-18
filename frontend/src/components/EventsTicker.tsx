import React from "react";
import Link from "next/link";

export default function EventsTicker() {
  const events = [
    { title: "Vantage Gala Live — Apr 10", href: "/events" },
    { title: "Groove on the Grass — Apr 18", href: "/events" },
    { title: "Julius Baer Gold Cup — Apr 24-26", href: "/events" },
    { title: "Formula 1 Grand Prix Abu Dhabi — May 1-3", href: "/events" },
    { title: "UAE Hydro Series — May 15", href: "/events" },
  ];

  // Repeat for continuous marquee
  const tickerItems = [...events, ...events];

  return (
    <div className="events-ticker">
      <div className="ticker-track">
        {tickerItems.map((evt, idx) => (
          <Link key={idx} href={evt.href} className="ticker-item">
            <span className="ticker-dot"></span>
            {evt.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
