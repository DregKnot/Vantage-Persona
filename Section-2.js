document.addEventListener('DOMContentLoaded', () => {

    // ===== WORD ROLLER SETUP =====
    const box = document.querySelector('.Royals');
    const track = document.getElementById('wordTrack');

    // ===== CARD IMAGE GROUPS =====
    const cardGroups = [
        document.querySelectorAll('.card-suits-2 .card-images img'),
        document.querySelectorAll('.card-tops-2 .card-images img'),
        document.querySelectorAll('.card-bottoms-2 .card-images img'),
        document.querySelectorAll('.card-accessories-2 .card-images img'),
        document.querySelectorAll('.card-outerwear-2 .card-images img'),
        document.querySelectorAll('.card-footwear-2 .card-images img'),
        document.querySelectorAll('.card-timepieces-2 .card-images img'),
        document.querySelectorAll('.card-fragrance-2 .card-images img'),
    ];

    let current = 0;

    // Set all cards to show first image initially
    cardGroups.forEach(imgs => {
        imgs.forEach((img, i) => {
            img.style.opacity = i === 0 ? '1' : '0';
            img.style.transition = 'opacity 0.6s ease';
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.zIndex = i === 0 ? '2' : '1';
        });
    });

    function showImage(imgs, index) {
        const target = index % imgs.length;
        imgs.forEach((img, i) => {
            img.style.opacity = i === target ? '1' : '0';
            img.style.zIndex = i === target ? '2' : '1';
        });
    }

    if (box && track) {
        const words = track.querySelectorAll('.word');
        const getWordHeight = () => words[0]?.offsetHeight || 0;

        // Make sure the viewport is exactly one word tall.
        box.style.height = `${getWordHeight()}px`;
        track.style.transform = 'translateY(0px)';

        box.addEventListener('click', () => {
            current = (current + 1) % words.length;

            // Roll word up
            const wordHeight = getWordHeight();
            track.style.transform = `translateY(-${current * wordHeight}px)`;
            

            // Swap all card images
            cardGroups.forEach(imgs => showImage(imgs, current));

            // Alive box animation
            box.classList.remove('clicked');
            void box.offsetWidth;
            box.classList.add('clicked');
        });

        window.addEventListener('resize', () => {
            const wordHeight = getWordHeight();
            box.style.height = `${wordHeight}px`;
            track.style.transform = `translateY(-${current * wordHeight}px)`;
        });
    }
});