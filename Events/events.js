/**
 * Hardware-accelerated Parallax Engine
 * Uses requestAnimationFrame and css matrix transforms (translateY) 
 * instead of 'background-attachment: fixed' to prevent scroll lag on high-res monitors.
 */
document.addEventListener('DOMContentLoaded', () => {
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    let ticking = false;

    function applyParallax() {
        parallaxBgs.forEach(bg => {
            const container = bg.closest('.parallax-container');
            if (container) {
                const rect = container.getBoundingClientRect();
                
                // Only perform matrix calculations if the element is currently visible in the viewport
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    
                    // To perfectly mimic 'background-attachment: fixed' without the lag,
                    // we shift the background element in the exact opposite direction (-rect.top)
                    // relative to its scrolling container. This glues the image to the 0,0 
                    // coordinate of the viewport.
                    const yPos = -rect.top;
                    
                    // 'translate3d' forces the browser to use the GPU (Hardware Acceleration)
                    bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
        });
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(applyParallax);
            ticking = true;
        }
    }

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Trigger initially to set positions on load
    applyParallax();
});
