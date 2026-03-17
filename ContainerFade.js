document.addEventListener('DOMContentLoaded', () => {
    // Select all collection cards
    const cards = document.querySelectorAll('.collection-card');

    // Function to get all images in a card
    const getImages = (card) => {
        const imageContainer = card.querySelector('.card-images');
        return imageContainer ? Array.from(imageContainer.querySelectorAll('img')) : [];
    };

    // Function to update card view
    const updateCardView = (card, imageIndex) => {
        const images = getImages(card);
        if (images.length === 0) return;

        // Hide all images
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.pointerEvents = 'none';
        });

        // Show the selected image
        if (images[imageIndex]) {
            images[imageIndex].style.opacity = '1';
            images[imageIndex].style.pointerEvents = 'auto';
        }
    };

    // Function to handle card click
    const handleCardClick = (event) => {
        const clickedCard = event.currentTarget;
        const images = getImages(clickedCard);
        
        if (images.length <= 1) return; // Don't handle single image cards

        // Get current index or initialize to 0
        let currentIndex = parseInt(clickedCard.getAttribute('data-view')) || 0;

        // Clear any existing auto-reset timeout
        if (clickedCard.resetTimeout) {
            clearTimeout(clickedCard.resetTimeout);
        }

        // Cycle to next image
        currentIndex = (currentIndex + 1) % images.length;
        clickedCard.setAttribute('data-view', currentIndex);
        
        // Update display
        updateCardView(clickedCard, currentIndex);

        // Auto-reset to first image after 4.5 seconds
        clickedCard.resetTimeout = setTimeout(() => {
            clickedCard.setAttribute('data-view', '0');
            updateCardView(clickedCard, 0);
        }, 4500);
    };

    // Initialize all cards
    cards.forEach((card) => {
        const images = getImages(card);
        
        // Initialize data attributes
        card.setAttribute('data-view', '0');
        
        // Add click listener only if card has multiple images
        if (images.length > 1) {
            card.addEventListener('click', handleCardClick);
            
            // Make images have initial display styles
            images.forEach((img, index) => {
                img.style.transition = 'opacity 0.5s ease';
                img.style.opacity = index === 0 ? '1' : '0';
                img.style.position = 'absolute';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
            });
            
            // Add cursor pointer to indicate clickability
            card.style.cursor = 'pointer';
        }
    });
});