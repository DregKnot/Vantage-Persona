"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "LookBook", href: "/lookbook" },
    { name: "Events", href: "/events" },
    { name: "Appointments", href: "/appointment" },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Nav Overlay */}
      <div
        className={`mobile-nav-menu ${isOpen ? "open" : ""}`}
        id="mobileNavMenu"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/appointment"
          className="mobile-nav-cta"
          onClick={() => setIsOpen(false)}
        >
          Book Now ↗
        </Link>
      </div>

      {/* Floating Header */}
      <header className="vantage-nav-container">
        <nav className="vantage-nav">
          <div className="nav-logo">
            <Link
              href="/"
              aria-label="Vantage Persona Home"
              suppressHydrationWarning
            >
              <img
                src="/Vantage-Persona-Brand-Kit/Vantage-Persona-Stacked-No-Tagline-Transparent.svg"
                alt="Vantage Persona"
                suppressHydrationWarning
              />
            </Link>
          </div>

          <div className="nav-pills">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-item ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            className={`nav-hamburger ${isOpen ? "open" : ""}`}
            id="navHamburger"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav-actions">
            <Link href="/appointment" className="nav-cta">
              Book Now <span className="arrow-circle">↗</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
