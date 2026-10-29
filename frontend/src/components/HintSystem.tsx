"use client";

import React, { useEffect, useState, useRef } from "react";

export default function HintSystem() {
  const [hintText, setHintText] = useState("Double Click to Interact");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const elRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number | null>(null);
  const visibleRef = useRef(false);
  const isRunningRef = useRef(false);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const startLoop = () => {
      if (isRunningRef.current) return;
      isRunningRef.current = true;
      runLoop();
    };

    const runLoop = () => {
      const dx = mousePos.current.x - currentPos.current.x;
      const dy = mousePos.current.y - currentPos.current.y;
      currentPos.current.x += dx * 0.2;
      currentPos.current.y += dy * 0.2;

      if (elRef.current) {
        elRef.current.style.transform = `translate3d(${currentPos.current.x + 15}px, ${
          currentPos.current.y + 15
        }px, 0)`;
      }

      // If settled and invisible, pause RAF to save CPU/battery
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2 && !visibleRef.current) {
        isRunningRef.current = false;
        animFrame.current = null;
        return;
      }

      animFrame.current = requestAnimationFrame(runLoop);
    };

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

      startLoop();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      isRunningRef.current = false;
    };
  }, []);

  // Prevent SSR hydration mismatch: only render on client after mount
  if (!mounted || isMobile) return null;

  return (
    <div
      ref={elRef}
      id="vantage-cursor-hint"
      className={`vantage-cursor-hint ${visible ? "active" : ""}`.trim()}
    >
      <span className="hint-dot"></span>
      <span className="hint-text">{hintText}</span>
    </div>
  );
}
