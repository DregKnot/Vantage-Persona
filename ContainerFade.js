/**
 * ContainerFade.js
 * 
 * Manages interactive image cycling functionality for collection cards.
 * Allows users to click on cards with multiple images to rotate through them,
 * with automatic reset to the first image after 4.5 seconds of inactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select all collection cards from the HTML
    const cards = document.querySelectorAll('.collection-card');

    /**
     * Retrieves all images from within a card's image container
     * @param {HTMLElement} card - The collection card element
     * @returns {Array} Array of image elements found in the card
     */
    const getImages = (card) => {
        const imageContainer = card.querySelector('.card-images');
        return imageContainer ? Array.from(imageContainer.querySelectorAll('img')) : [];
    };

    /**
     * Updates which image is visible in a card based on the provided index
     * All images are hidden first, then the selected image is shown
     * @param {HTMLElement} card - The collection card element
     * @param {number} imageIndex - The index of the image to display
     */
    const updateCardView = (card, imageIndex) => {
        const images = getImages(card);
        if (images.length === 0) return;

        // Hide all images by setting opacity to 0 and disabling pointer events
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.pointerEvents = 'none';
        });

        // Show the selected image at the specified index
        if (images[imageIndex]) {
            images[imageIndex].style.opacity = '1';
            images[imageIndex].style.pointerEvents = 'auto';
        }
    };

    /**
     * Handles click events on cards with multiple images
     * Cycles to the next image and sets a 4.5-second auto-reset timer
     * @param {Event} event - The click event object
     */
    const handleCardClick = (event) => {
        const clickedCard = event.currentTarget;
        const images = getImages(clickedCard);
        
        // Exit early if card has only one or no images
        if (images.length <= 1) return;

        // Get the current image index from the card's data attribute (defaults to 0)
        let currentIndex = parseInt(clickedCard.getAttribute('data-view')) || 0;

        // Clear any existing auto-reset timeout to prevent overlapping timers
        if (clickedCard.resetTimeout) {
            clearTimeout(clickedCard.resetTimeout);
        }

        // Cycle to the next image (wraps around to 0 when reaching the end)
        currentIndex = (currentIndex + 1) % images.length;
        clickedCard.setAttribute('data-view', currentIndex);
        
        // Update the displayed image
        updateCardView(clickedCard, currentIndex);

        /**
         * Auto-reset functionality:
         * After 4.5 seconds of no clicks, the card returns to showing the first image
         * This ensures a clean state for carousel-like behavior
         */
        clickedCard.resetTimeout = setTimeout(() => {
            clickedCard.setAttribute('data-view', '0');
            updateCardView(clickedCard, 0);
        }, 4500);
    };

    /**
     * Initialize all collection cards when the DOM is ready
     * Sets up click handlers, applies styling, and prepares images for cycling
     */
    cards.forEach((card) => {
        const images = getImages(card);
        
        // Initialize card's data attribute to track the current image index
        card.setAttribute('data-view', '0');
        
        // Only set up interactive features if the card has multiple images
        if (images.length > 1) {
            // Attach click listener to enable image cycling
            card.addEventListener('click', handleCardClick);
            
            // Apply styles to each image for smooth transitions and proper display
            images.forEach((img, index) => {
                // Smooth fade transition when switching images (0.5s duration)
                img.style.transition = 'opacity 0.5s ease';
                
                // Set initial opacity: first image visible, others hidden
                img.style.opacity = index === 0 ? '1' : '0';
                
                // Absolute positioning allows images to be stacked and overlaid
                img.style.position = 'absolute';
                img.style.width = '100%';
                img.style.height = '100%';
                
                // Maintains aspect ratio while filling the container
                img.style.objectFit = 'cover';
            });
            
            // Change cursor to pointer to indicate the card is clickable
            card.style.cursor = 'pointer';
        }
    });
});