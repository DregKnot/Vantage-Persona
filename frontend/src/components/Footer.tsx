import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer container-fade">
      <div className="footer-lower">
        <h1 className="footer-brand-huge">VANTAGE PERSONA</h1>
        <nav className="footer-nav">
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/gallery" className="footer-link">
            Gallery
          </Link>
          <Link href="/lookbook" className="footer-link">
            Look Book
          </Link>
          <Link href="/events" className="footer-link">
            Events
          </Link>
          <Link href="/appointment" className="footer-link">
            Appointments
          </Link>
        </nav>
      </div>
    </footer>
  );
}
