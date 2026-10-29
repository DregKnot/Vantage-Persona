'use client';

import React, { useEffect, useState, useRef } from 'react';
import './AccordionGallery.css';

export interface AccordionGalleryItem {
  image: string;
  label?: string;
  link?: string;
  alt?: string;
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number | string;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  tilt?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

export default function AccordionGallery({
  items,
  defaultIndex = 2,
  accentColor = '#D4AF37',
  overlayColor = '#0D0A08',
  textColor = '#FBF4E6',
  height = 680,
  gap = 12,
  radius = 20,
  expandRatio = 0.34,
  tilt = 5,
  trigger = 'click',
  showLabels = true,
  className = ''
}: AccordionGalleryProps) {
  const count = items.length;
  const [isMobile, setIsMobile] = useState(false);

  // Active state: -1 means all panels closed/balanced
  const [active, setActive] = useState<number>(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return -1; // Mobile starts with compact accordions
    }
    return Math.min(Math.max(defaultIndex, -1), Math.max(0, count - 1));
  });

  // Smooth cross-fade on category switch (prevents unmount/flash)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevItemsRef = useRef(items);

  useEffect(() => {
    if (prevItemsRef.current !== items) {
      prevItemsRef.current = items;
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 220);
      return () => clearTimeout(timer);
    }
  }, [items]);

  // Track mobile breakpoint
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sync active index when items change
  useEffect(() => {
    const isMob = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMob) {
      setActive(-1);
    } else {
      setActive(prev => Math.min(Math.max(defaultIndex, -1), Math.max(0, items.length - 1)));
    }
  }, [items, defaultIndex]);

  // Click toggle handler: clicking open panel closes it (-1), clicking closed panel opens it
  const handleClick = (i: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActive(prev => (prev === i ? -1 : i));
  };

  const handleEnter = (i: number) => {
    if (trigger === 'hover' && !isMobile) {
      setActive(i);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActive(prev => (prev === i ? -1 : i));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    } else if (e.key === 'Escape' && active !== -1) {
      e.preventDefault();
      setActive(-1);
    }
  };

  // JS-injected flex and transform computation (runs on GPU compositor with 0 reflow lag)
  const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
  const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
  const isNoneActive = active === -1;

  const getPanelStyle = (i: number) => {
    const isActive = active !== -1 && i === active;
    if (isMobile) {
      return {
        height: isActive ? 'clamp(480px, 75vh, 640px)' : '72px',
        borderRadius: `${radius}px`,
      };
    }

    const flexGrow = isNoneActive ? 1 : isActive ? grow : 1;
    const rotateY = isNoneActive ? 0 : isActive ? 0 : i < active ? tilt : -tilt;

    return {
      flexGrow,
      transform: `perspective(1200px) rotateY(${rotateY}deg)`,
      borderRadius: `${radius}px`,
    };
  };

  return (
    <div
      className={`accordion-gallery${isMobile ? ' accordion-gallery--mobile' : ''}${className ? ` ${className}` : ''}`}
      style={{
        ['--ag-accent' as string]: accentColor,
        ['--ag-overlay' as string]: overlayColor,
        ['--ag-text' as string]: textColor,
        ['--ag-gap' as string]: `${gap}px`,
        ['--ag-radius' as string]: `${radius}px`,
        height: isMobile
          ? 'auto'
          : typeof height === 'number'
          ? `${height}px`
          : height,
      }}
      role="list"
      aria-label="Style Expressions Gallery"
    >
      {items.map((item, i) => {
        const isActive = active !== -1 && i === active;
        const panelStyle = getPanelStyle(i);

        const content = (
          <>
            <span className="ag-panel__frame">
              <span
                className="ag-panel__media"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transition: 'opacity 0.22s ease-in-out',
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.label || ''}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </span>
              <span
                className="ag-panel__overlay"
                style={{
                  opacity: isActive ? 0 : isNoneActive ? 0.15 : 0.42,
                }}
                aria-hidden="true"
              />
            </span>

            {showLabels && (
              <span
                className="ag-panel__label"
                style={{
                  opacity: isActive ? 1 : isNoneActive ? 0.85 : 0,
                  transform:
                    isActive || isNoneActive
                      ? 'translateX(0)'
                      : 'translateX(-12px)',
                }}
                aria-hidden="true"
              >
                <span className="ag-panel__bar" />
                <span className="ag-panel__text">{item.label}</span>
                {isMobile && (
                  <span className="ag-panel__mobile-badge">
                    {isActive ? '✕ Close' : '+ View Look'}
                  </span>
                )}
              </span>
            )}
          </>
        );

        const commonProps = {
          className: `ag-panel${isActive ? ' ag-panel--active' : ''}`,
          style: panelStyle,
          onClick: (e: React.MouseEvent) => handleClick(i, e),
          onMouseEnter: () => handleEnter(i),
          onFocus: () => {
            if (!isMobile) setActive(i);
          },
          onKeyDown: (e: React.KeyboardEvent) => handleKeyDown(i, e),
          role: 'listitem' as const,
          tabIndex: 0,
          'aria-current': isActive ? ('true' as const) : undefined,
          'aria-label': item.label,
        };

        return item.link ? (
          <a key={item.image} href={item.link} {...commonProps}>
            {content}
          </a>
        ) : (
          <div key={item.image} {...commonProps}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
