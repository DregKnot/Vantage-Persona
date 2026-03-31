/**
 * Gallery/wedding-parallax.js
 * Handles the pinned-scroll scrubbing updates via Intersection Observer triggers.
 */
document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".wedding-trigger");
    const imgTrack = document.getElementById("wedding-img-track");
    const bgTrack = document.getElementById("wedding-bg-track");
    const textSlides = document.querySelectorAll(".wedding-text-slide");
    const bgNumber = document.getElementById("wedding-number");

    if (!triggers.length || !imgTrack || !bgTrack) return;

    // Skip parallax logic on mobile/tablet
    if (window.innerWidth < 1024) return;

    // Trigger exactly when the invisible trigger containers cross the dead center of the screen
    const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px", 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stateIndex = parseInt(entry.target.getAttribute("data-state"));
                
                // Translate the Image Track and Background Track synchronously for a continuous scroll feel
                const translateY = -(stateIndex * 100) + "vh";
                imgTrack.style.transform = `translateY(${translateY})`;
                bgTrack.style.transform = `translateY(${translateY})`;

                // Update text container crossfades
                textSlides.forEach((slide, idx) => {
                    if (idx === stateIndex) {
                        slide.classList.add("active-text");
                        
                        // Fade out the massive background number to update it cleanly
                        bgNumber.style.opacity = '0';
                        setTimeout(() => {
                            bgNumber.textContent = slide.getAttribute("data-index");
                            bgNumber.style.opacity = '0.04';
                        }, 500); // Wait until midway through transition
                    } else {
                        slide.classList.remove("active-text");
                    }
                });
            }
        });
    }, observerOptions);

    triggers.forEach(t => observer.observe(t));
});
