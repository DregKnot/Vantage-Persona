"use client";

import React, { useEffect, useState, useRef } from "react";

export default function HintSystem() {
  const [hintText, setHintText] = useState("Double Click to Interact");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Find hover target with data-hint
      const target = (e.target as HTMLElement)?.closest("[data-hint]");
      if (target) {
        const text = target.getAttribute("data-hint");
        if (text) {
          setHintText(text);
          setVisible(true);
        }
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Lerp loop
    const loop = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.15;

      const el = document.getElementById("vantage-cursor-hint");
      if (el) {
        el.style.transform = `translate3d(${currentPos.current.x + 15}px, ${
          currentPos.current.y + 15
        }px, 0)`;
      }
      animFrame.current = requestAnimationFrame(loop);
    };

    if (!isMobile) {
      animFrame.current = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      id="vantage-cursor-hint"
      className="vantage-cursor-hint"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        transition: "opacity 0.2s ease",
      }}
    >
      <span className="hint-dot"></span>
      <span className="hint-text">{hintText}</span>
    </div>
  );
}
