/**
 * Global Navbar Logic
 * Handles hamburger menu toggle and mobile overlay.
 */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileNavMenu');
    const body = document.body;

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            
            // Prevent scrolling when menu is open
            if (mobileMenu.classList.contains('open')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
                body.style.overflowY = 'auto'; // Force restore vertical scroll
            }
        });

        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.style.overflow = '';
                body.style.overflowY = 'auto';
            });
        });

        // Close menu on backdrop click
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.style.overflow = '';
                body.style.overflowY = 'auto';
            }
        });
    }
});
