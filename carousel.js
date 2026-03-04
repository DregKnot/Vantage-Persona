/**
 * carousel.js
 * Handles the background image transitions for the Vantage Persona Hero section.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all slides within the carousel container
    const slides = document.querySelectorAll('.carousel-slide');
    
    // 2. Safety Check: Only run the script if slides actually exist on the page
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 10000; // Time in milliseconds (5 seconds)

        /**
         * Function to transition to the next slide
         */
        function nextSlide() {
            // Remove the 'active' class from the current slide (triggers CSS fade out)
            slides[currentSlide].classList.remove('active');

            // Calculate the index of the next slide (loops back to 0 at the end)
            currentSlide = (currentSlide + 1) % slides.length;

            // Add the 'active' class to the new slide (triggers CSS fade in)
            slides[currentSlide].classList.add('active');
        }
        // 3. Start the automatic timer
        setInterval(nextSlide, slideInterval);
    } else {
        console.warn("Carousel Error: No elements with class '.carousel-slide' were found.");
    }
});