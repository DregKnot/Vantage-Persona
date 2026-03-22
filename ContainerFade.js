/**
 * ContainerFade.js
 * Implements intersection observer to fade in containers as they enter the viewport.
 */
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".container-fade");

    const observerOptions = {
        threshold: 0.10, // Start animation when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset from the bottom of the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Stop observing once it's visible to ensure the animation only runs once per load
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});