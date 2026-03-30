document.addEventListener('DOMContentLoaded', () => {

    // ===== WORD ROLLER SETUP =====
    const box = document.querySelector('.Royals');
    const track = document.getElementById('wordTrack');

    // ===== MASTER CONTAINERS =====
    const containers = document.querySelectorAll('.word-container');
    let current = 0;

    if (box && track && containers.length > 0) {
        const words = track.querySelectorAll('.word');
        const getWordHeight = () => words[0]?.offsetHeight || 0;

        // Make sure the viewport is exactly one word tall and fits the first word.
        box.style.height = `${getWordHeight()}px`;
        box.style.width = `${words[0].offsetWidth}px`;
        track.style.transform = 'translateY(0px)';

        box.addEventListener('click', () => {
            current = (current + 1) % words.length;

            // Roll word up
            const wordHeight = getWordHeight();
            track.style.transform = `translateY(-${current * wordHeight}px)`;
            
            // Automatically grow or shrink the red box to snugly fit the new word
            box.style.width = `${words[current].offsetWidth}px`;
            
            // Swap containers
            containers.forEach((container, index) => {
                if (index === current) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });

            // Alive box animation
            box.classList.remove('clicked');
            void box.offsetWidth;
            box.classList.add('clicked');
        });

        window.addEventListener('resize', () => {
            const wordHeight = getWordHeight();
            box.style.height = `${wordHeight}px`;
            box.style.width = `${words[current].offsetWidth}px`;
            track.style.transform = `translateY(-${current * wordHeight}px)`;
        });
    }
});