/**
 * Gallery/flush-section.js
 * Handles the synchronized image and text cycling for Section 5 (Fashion is Flush).
 */
document.addEventListener("DOMContentLoaded", () => {
    const states = [
        {
            img: "../pictures/Flush_section/alexi-romano-CCx6Fz_CmOI-unsplash.jpg",
            h2: "THE SUPREME STATE",
            p: "In the Vantage world, 'Flush' isn't just about abundance; it's about the precision of volume and the architecture of presence. When fashion is flush, it occupies space with a intentional weight, creating a silhouette that is both grounded and ethereal."
        },
        {
            img: "../pictures/Flush_section/anh-q-tran-bNNtwg_2AUE-unsplash.jpg",
            h2: "ANCIENT GRACE",
            p: "This captures a royalty defined by immaculate preservation and traditional purity. The spotless white ao dai offers a seamless, elongated silhouette that is both powerful and incredibly delicate. Against the massive, dark wood gates, the subject feels preserved, an icon of timeless poise. The red lip adds the essential 'flush' of life, commanding authority and suggesting a lineage that spans centuries"
        },
        {
            img: "../pictures/Flush_section/laura-chouette-SYlkSg5Njfs-unsplash.jpg",
            h2: "DENSITY OF STYLE",
            p: "A study in saturation. Here, color and texture are stacked with calculated intensity. It is not excess, but the absolute fulfillment of a vision where every thread contributes to a monumental fashion statement."
        },
        {
            img: "../pictures/Flush_section/michael-kyule-g-qdii0n-Sk-unsplash.jpg",
            h2: "MONUMENTAL PRESENCE",
            p: "Beyond the garment lies the identity. The final evolution of 'Flush' is the transformation of the wearer into a walking monument of contemporary elegance, unyielding and perfectly composed."
        },
        {
            img: "../pictures/Flush_section/leoni-fleming-xKb0eYfN_D4-unsplash.jpg",
            h2: "THE REIGN OF OPULENCE",
            p: "This look commands with a flush of texture and an unconventional regal confidence. The avalanche of ivory tulle—representing abundance and excess—collides with a sleek, futuristic sheerness. Anchored by that dramatic berry lip, it is royalty not by bloodline, but by presence."
        },
        {
            img: "../pictures/Flush_section/mohsen-karimi-_SsyDr6RnRg-unsplash.jpg",
            h2: "WHISPERED WEALTH",
            p: "A sophisticated, highly refined take on 'flush' that uses pattern instead of piled fabric. The crisp pinstripe suit is the classic uniform of tradition and authority. The sheer abundance lies in the precise, intricate vertical pattern. This look is 'royal' through its absolute purity and impeccably tailored structure, a quiet form of dominance that doesn't need to shout to establish its value"
        },
        {
            img: "../pictures/Flush_section/ospan-ali-nyrSsBzhZ4Y-unsplash.jpg",
            h2: "MATRIARCHAL ORDER",
            p: "The deep black coat with its high, ruffled collar and pearlescent buttons channels historic nobility, but the structured tailoring feels contemporary. The massive, veiled hat adds a layer of unbiddable authority and mystery. The flush aesthetic comes through in the overwhelming presence of dark texture, creating a look that is both protected and fiercely dominant"
        },
        {
            img: "../pictures/Flush_section/premium_photo-1681969375837-c6263b888726.avif",
            h2: "ANCHORED IN AFFLUENCE",
            p: "This is the 'flush' aesthetic at its most literal—a wealth of textures layered with expert precision. The heavy, plush drape of the faux-fur coat provides a royal volume that contrasts beautifully with the intricate lace bodice and the sleek, liquid-like sheen of the leather skirt. By pairing animal print heels with classic black and brown tones, the look signals a sovereign who is comfortable with both tradition and a hint of predator-like confidence"
        },
        {
            img: "../pictures/Flush_section/premium_photo-1682125605366-a8ceb2358382.avif",
            h2: "UNAPOLOGETIC POWER",
            p: "Royalty often commands a presence before a single word is spoken. This image captures that with high-contrast, avant-garde flair. The bold red wig and lip anchor the look with fiery dominance, while the oversized yellow sunglasses provide a modern, gilded crown. The flush is palpable in the deep, matte reds and vibrant golds, representing a sovereign energy that is both striking and sophisticated."
        },
        {
            img: "../pictures/Flush_section/premium_photo-1711300141654-378935d38f66.avif",
            h2: "SANCTIFIED LOVE",
            p: "Beyond the garment lies the identity. The final evolution of 'Flush' is the transformation of the wearer into a walking monument of contemporary elegance, unyielding and perfectly composed."
        },
        {
            img: "../pictures/Flush_section/premium_photo-1728657018272-e4e29c7bcb1a.avif",
            h2: "GILDED ARCHITECTURE",
            p: "A royalty that is private, ceremonial, and deeply traditional. The monochrome white suits create an immaculate, unified presence. The woman's veil and the small bouquet add elements of sacred ceremony. The aesthetic of 'flush' is achieved through the clean lines and purity of the shared, cohesive look. This is royalty expressed not through power, but through sanctity and private celebration in a timeless urban setting."
        },
        {
            img: "../pictures/Flush_section/reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg",
            h2: "INHERITED ELEGANCE",
            p: "This aesthetic is rooted in the ease of true wealth—royalty in its most relaxed, abundant form. The heavy texture of the oversized beige shearling coat creates a literal flush of fabric, promising warmth and comfort on a grand scale. The cream separates are the picture of refined reserve, while the bold, oversized logo tote acts as a modern family crest, signaling heritage and access."
        }
    ];

    let currentIndex = 0;
    const btn = document.getElementById('change-flush-img');
    const displayImg = document.getElementById('flush-display-img');
    const heading = document.getElementById('flush-heading');
    const description = document.getElementById('flush-description');
    const textArea = document.getElementById('flush-text-content');

    if (!btn || !displayImg) return;

    // Instead of swapping src (which costs rendering milliseconds), we pre-generate fully painted DOM layers
    const imgContainer = displayImg.parentElement;
    displayImg.remove(); // Safely toss out the placeholder element

    const imgLayers = states.map((state, i) => {
        const img = document.createElement('img');
        img.src = state.img;
        img.className = 'flush-image';
        img.style.position = 'absolute';
        img.style.inset = '0';
        img.style.zIndex = '1';
        // Initialize state (first one is visible, rest are hidden)
        img.style.opacity = i === 0 ? '1' : '0';
        img.style.transform = i === 0 ? 'scale(1)' : 'scale(0.97)';
        // Force the browser to aggressively decode them by appending them immediately
        imgContainer.appendChild(img);
        return img;
    });

    let isTransitioning = false;

    btn.addEventListener('click', () => {
        if (isTransitioning) return; // Lock the animation
        isTransitioning = true;

        const oldIndex = currentIndex;
        currentIndex = (currentIndex + 1) % states.length;
        const state = states[currentIndex];

        // 1. Immediately drop the old content
        imgLayers[oldIndex].style.opacity = '0';
        imgLayers[oldIndex].style.transform = 'scale(0.97)';
        
        textArea.style.opacity = '0';
        textArea.style.transform = 'translateY(15px)';
        textArea.style.transition = 'opacity 0.15s ease-out, transform 0.15s ease-out';

        // 2. Wait barely a heartbeat, then instantly flick the new content up
        setTimeout(() => {
            heading.textContent = state.h2;
            description.textContent = state.p;

            // Trigger the new text reveal
            textArea.style.opacity = '1';
            textArea.style.transform = 'translateY(0)';
            
            // Trigger the new image layer directly from GPU memory (0 render decode lag)
            imgLayers[currentIndex].style.opacity = '1';
            imgLayers[currentIndex].style.transform = 'scale(1)';
            
            // Free the lock
            setTimeout(() => { isTransitioning = false; }, 150);
        }, 150);
    });
});
