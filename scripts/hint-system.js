/**
 * Vantage Persona - Interaction Hint System
 * 
 * Provides a bespoke cursor follower on desktop and 
 * subtle interaction badges on mobile/tablet.
 */

class VantageNavigator {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.hintElement = null;
        this.textElement = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.active = false;
        this.hintTimeout = null;
        
        this.init();
    }

    init() {
        // Create the cursor follower (Desktop)
        if (!this.isMobile) {
            this.createDesktopHint();
            this.bindDesktopEvents();
            this.animate(); // Start the lerp loop
        } else {
            this.bindMobileEvents();
        }
        
        // Auto-trigger for specific sections (like Section 2)
        this.bindSectionObservers();

        // Listen for window resize to handle orientation changes
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 768;
        });
    }

    createDesktopHint() {
        const hint = document.createElement('div');
        hint.className = 'vantage-cursor-hint';
        hint.innerHTML = `
            <span class="hint-dot"></span>
            <span class="hint-text" id="vantage-hint-text">Double Click to Interact</span>
        `;
        document.body.appendChild(hint);
        this.hintElement = hint;
        this.textElement = document.getElementById('vantage-hint-text');
    }

    bindDesktopEvents() {
        // Track mouse position
        window.addEventListener('mousemove', (e) => {
            this.targetX = e.clientX;
            this.targetY = e.clientY;
        });

        // Delegate hover events for data-hint elements
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('[data-hint]');
            if (target) {
                // If the target is NOT Section 2 (which is auto-triggered), show on hover
                if (!target.classList.contains('clothing-section-2')) {
                    const hintText = target.getAttribute('data-hint');
                    this.showHint(hintText);
                }
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest('[data-hint]');
            if (target) {
                this.hideHint();
            }
        });
    }

    bindMobileEvents() {
        // Mobile hints already handle disappearance via showMobileBadge
        const observerOptions = { threshold: 0.5 };
        const hintObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.showMobileBadge(entry.target);
                    hintObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-hint]').forEach(el => hintObserver.observe(el));
    }

    bindSectionObservers() {
        if (this.isMobile) return; 

        const observerOptions = { threshold: 0.3 };
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const hintText = entry.target.getAttribute('data-auto-hint') || entry.target.getAttribute('data-hint');
                    if (hintText) {
                        this.showHint(hintText, 4000);
                        // Optional: unobserve if we only want one-shot auto prompts
                        // sectionObserver.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Detect any element tagged for auto-hinting
        document.querySelectorAll('[data-auto-hint]').forEach(el => {
            sectionObserver.observe(el);
        });
    }


    showHint(text, duration = null) {
        if (!this.hintElement || !text) return;
        
        // Clear any existing disappearance timer
        if (this.hintTimeout) clearTimeout(this.hintTimeout);
        
        this.textElement.innerText = text;
        this.hintElement.classList.add('active');
        this.active = true;

        // If duration provided (Ephemeral Hint), set timer to hide
        if (duration) {
            this.hintTimeout = setTimeout(() => {
                this.hideHint();
            }, duration);
        }
    }

    hideHint() {
        if (!this.hintElement) return;
        this.hintElement.classList.remove('active');
        this.active = false;
        if (this.hintTimeout) clearTimeout(this.hintTimeout);
    }

    showMobileBadge(target) {
        const text = target.getAttribute('data-hint');
        if (!text) return;

        const badge = document.createElement('div');
        badge.className = 'mobile-hint-badge';
        badge.innerHTML = `
            <span class="hint-dot"></span>
            <span class="hint-text">${text}</span>
        `;
        
        if (getComputedStyle(target).position === 'static') {
            target.style.position = 'relative';
        }
        
        target.appendChild(badge);
        setTimeout(() => badge.classList.add('visible'), 50);
        
        setTimeout(() => {
            badge.classList.remove('visible');
            setTimeout(() => badge.remove(), 600);
        }, 4000);
    }

    animate() {
        const lerp = (start, end, factor) => start + (end - start) * factor;
        this.mouseX = lerp(this.mouseX, this.targetX, 0.15);
        this.mouseY = lerp(this.mouseY, this.targetY, 0.15);
        
        if (this.hintElement) {
            this.hintElement.style.left = `${this.mouseX}px`;
            this.hintElement.style.top = `${this.mouseY}px`;
        }
        requestAnimationFrame(() => this.animate());
    
    }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.vantageNavigator = new VantageNavigator();
});
