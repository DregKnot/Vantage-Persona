document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // Custom Tooltip / Info Popups for "How Styled?"
    const infoIcons = document.querySelectorAll('.info-icon');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const tooltip = icon.querySelector('.tooltip-text');
            const isVisible = tooltip.classList.contains('show');
            
            // Hide all other tooltips
            document.querySelectorAll('.tooltip-text').forEach(t => t.classList.remove('show'));
            
            if (!isVisible) {
                tooltip.classList.add('show');
            }
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.tooltip-text').forEach(t => t.classList.remove('show'));
    });

    // Mission/Vision Tab Switching
    const tabContainer = document.getElementById('mission-tabs');
    const missionContent = document.getElementById('content-mission');
    const visionContent = document.getElementById('content-vision');

    if (tabContainer) {
        const tabs = tabContainer.querySelectorAll('.mission-pill');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                // Update tab styling
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Toggle content blocks
                if (target === 'mission') {
                    visionContent.classList.remove('active');
                    setTimeout(() => {
                        missionContent.classList.add('active');
                    }, 50);
                } else {
                    missionContent.classList.remove('active');
                    setTimeout(() => {
                        visionContent.classList.add('active');
                    }, 50);
                }
            });
        });
    }
});
