'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

export interface DomeGalleryImage {
  src: string;
  fullSrc?: string;
  alt?: string;
  title?: string;
}

export interface DomeGalleryProps {
  images?: (string | DomeGalleryImage)[];
  fit?: number;
  minRadius?: number;
  maxRadius?: number;
  overlayBlurColor?: string;
  maxVerticalRotationDeg?: number;
  dragSensitivity?: number;
  segments?: number;
  rowAngleStep?: number;
  dragDampening?: number;
  imageBorderRadius?: string;
  grayscale?: boolean;
  zoomDistance?: number;
}

const DEFAULTS = {
  segments: 26,
  rowAngleStep: 14.5,
  maxVerticalRotationDeg: 22,
  dragSensitivity: 14,
  dragDampening: 0.75,
  minRadius: 850,
  maxRadius: 1350,
  zoomDistance: 330,
  imageBorderRadius: '30px'
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};

interface DomeItem {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
  title?: string;
  col: number;
  y: number;
  theta: number;
  phi: number;
  transform: string;
}

// 5-Tier Spherical Dome Geometry: Staggered brick pattern mapped onto a 3D sphere
function buildItems(
  pool: (string | DomeGalleryImage)[],
  seg: number,
  radius: number,
  rowAngleStep: number
): DomeItem[] {
  if (pool.length === 0) return [];

  const normalized: DomeGalleryImage[] = pool.map(item => {
    if (typeof item === 'string') {
      return { src: item, fullSrc: item, alt: '' };
    }
    return {
      src: item.src || '',
      fullSrc: item.fullSrc || item.src || '',
      alt: item.alt || '',
      title: item.title
    };
  });

  // 5 rows: center equator (0), mid rows (+/-1), outer top & bottom (+/-2)
  // Even columns have 5 rows: [-2, -1, 0, 1, 2]
  // Odd columns have 4 staggered rows: [-1.5, -0.5, 0.5, 1.5]
  const evenYs = [-2, -1, 0, 1, 2];
  const oddYs = [-1.5, -0.5, 0.5, 1.5];

  const coords: { col: number; y: number; theta: number; phi: number }[] = [];
  for (let c = 0; c < seg; c++) {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    const theta = (360 / seg) * c - 180;
    for (const y of ys) {
      // Tilts top rows down toward center, bottom rows up toward center
      const phi = y * -rowAngleStep;
      coords.push({ col: c, y, theta, phi });
    }
  }

  // Interleave images so adjacent tiles display different looks
  const totalSlots = coords.length;
  const usedImages: DomeGalleryImage[] = Array.from(
    { length: totalSlots },
    (_, i) => normalized[i % normalized.length]
  );

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => {
    const img = usedImages[i];
    // Pre-calculate exact 3D transform matrix in JavaScript:
    // No cascading CSS calc() on 100+ items. Hardware-accelerated solid 60/120fps.
    const transform = `rotateY(${c.theta.toFixed(2)}deg) rotateX(${c.phi.toFixed(2)}deg) translateZ(${radius}px)`;
    return {
      id: `${c.col}-${c.y}-${i}`,
      src: img.src,
      fullSrc: img.fullSrc || img.src,
      alt: img.alt || 'Children styling portrait',
      title: img.title,
      col: c.col,
      y: c.y,
      theta: c.theta,
      phi: c.phi,
      transform
    };
  });
}

export default function DomeGallery({
  images = [],
  fit = 0.95,
  minRadius = DEFAULTS.minRadius,
  maxRadius = DEFAULTS.maxRadius,
  overlayBlurColor = '#000000',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  segments = DEFAULTS.segments,
  rowAngleStep = DEFAULTS.rowAngleStep,
  dragDampening = DEFAULTS.dragDampening,
  imageBorderRadius = DEFAULTS.imageBorderRadius,
  grayscale = false,
  zoomDistance = DEFAULTS.zoomDistance
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const sphereRef = useRef<HTMLDivElement | null>(null);

  const [radius, setRadius] = useState<number>(1150);
  const radiusRef = useRef<number>(1150);
  radiusRef.current = radius;

  const [selectedItem, setSelectedItem] = useState<DomeItem | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const lastDragEndAt = useRef(0);

  // Pre-calculate all item 3D coordinates in JS
  const items = useMemo(() => {
    return buildItems(images, segments, radius, rowAngleStep);
  }, [images, segments, radius, rowAngleStep]);

  const applyTransform = useCallback((xDeg: number, yDeg: number, r: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(${zoomDistance}px - ${r}px)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  }, [zoomDistance]);

  // Responsive radius & tile dimensions calculation in JS
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      if (cr.width <= 0 || cr.height <= 0) return;
      const w = cr.width;
      const h = cr.height;

      // Base dimension scaling
      const baseDim = Math.min(w * 1.05, h * 1.55);
      const calculatedRadius = Math.round(clamp(baseDim * fit, minRadius, maxRadius));
      setRadius(calculatedRadius);

      // Landscape squircle sizing matching reference screenshot (~1.38:1 aspect ratio)
      const tileW = Math.round(clamp(w * 0.165, 175, 240));
      const tileH = Math.round(tileW / 1.38);

      root.style.setProperty('--tile-width', `${tileW}px`);
      root.style.setProperty('--tile-height', `${tileH}px`);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--overlay-color', overlayBlurColor);

      applyTransform(rotationRef.current.x, rotationRef.current.y, calculatedRadius);
    });

    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, minRadius, maxRadius, overlayBlurColor, imageBorderRadius, applyTransform]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y, radiusRef.current);
  }, [applyTransform]);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 85;
      let vY = clamp(vy, -MAX_V, MAX_V) * 85;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.75, 0, 1);
      const frictionMul = 0.94 + 0.052 * d;
      const stopThreshold = 0.015;
      const maxFrames = Math.round(120 + 260 * d);

      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }

        const nextX = clamp(
          rotationRef.current.x - vY / 190,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 190);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY, radiusRef.current);

        inertiaRAF.current = requestAnimationFrame(step);
      };

      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia, applyTransform]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (selectedItem) return;
        stopInertia();
        const evt = event as PointerEvent | MouseEvent;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
        if (selectedItem || !draggingRef.current || !startPosRef.current) return;
        const evt = event as PointerEvent | MouseEvent;
        const dx = evt.clientX - startPosRef.current.x;
        const dy = evt.clientY - startPosRef.current.y;

        if (!movedRef.current && dx * dx + dy * dy > 16) {
          movedRef.current = true;
        }

        const nextX = clamp(
          startRotRef.current.x - dy / (dragSensitivity * 2.8),
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(startRotRef.current.y + dx / dragSensitivity);

        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY, radiusRef.current);
        }

        if (last) {
          draggingRef.current = false;
          let [vMagX, vMagY] = velocity;
          const [dirX, dirY] = direction;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;

          if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = clamp((mx / dragSensitivity) * 0.025, -1.3, 1.3);
            vy = clamp((my / dragSensitivity) * 0.025, -1.3, 1.3);
          }

          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) {
            startInertia(vx, vy);
          }

          if (movedRef.current) {
            lastDragEndAt.current = performance.now();
          }
          movedRef.current = false;
        }
      }
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  const onItemClick = useCallback((it: DomeItem) => {
    if (draggingRef.current) return;
    if (movedRef.current) return;
    if (performance.now() - lastDragEndAt.current < 100) return;
    setSelectedItem(it);
  }, []);

  // Modal Escape key & scroll lock
  useEffect(() => {
    if (!selectedItem) return;
    document.body.classList.add('dg-scroll-lock');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('dg-scroll-lock');
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedItem]);

  useEffect(() => {
    return () => {
      stopInertia();
      document.body.classList.remove('dg-scroll-lock');
    };
  }, [stopInertia]);

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={{
        ['--overlay-color' as any]: overlayBlurColor,
        ['--tile-radius' as any]: imageBorderRadius,
        ['--image-filter' as any]: grayscale ? 'grayscale(1)' : 'none'
      }}
    >
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it) => (
              <div
                key={it.id}
                className="dg-item"
                style={{ transform: it.transform }}
                onClick={() => onItemClick(it)}
              >
                <div
                  className="dg-item-inner"
                  role="button"
                  tabIndex={0}
                  aria-label={it.alt}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onItemClick(it);
                    }
                  }}
                >
                  <img
                    src={it.src}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    alt={it.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fisheye Vignette & Spherical Edge Gradients (Matching screenshot) */}
        <div className="overlay" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        {/* Singular View Lightbox Modal */}
        {selectedItem && (
          <div
            className="dg-lightbox-overlay"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedItem(null)}
          >
            <div className="dg-lightbox-backdrop" />
            <div
              className="dg-lightbox-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="dg-lightbox-close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close enlarged view"
              >
                ✕
              </button>
              <div className="dg-lightbox-media">
                <img
                  src={selectedItem.fullSrc || selectedItem.src}
                  alt={selectedItem.alt}
                  className="dg-lightbox-image"
                />
              </div>
              {selectedItem.title && (
                <div className="dg-lightbox-footer">
                  <h3 className="dg-lightbox-title">{selectedItem.title}</h3>
                  {selectedItem.alt && (
                    <p className="dg-lightbox-caption">{selectedItem.alt}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
