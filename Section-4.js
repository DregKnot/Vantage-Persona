/**
 * Section 4 — Vantage Persona Vision
 * Handles double-tap/double-click to swap between "Why does this matter?" and "Why choose us?"
 */
document.addEventListener("DOMContentLoaded", () => {
    const interactionArea = document.getElementById("visionInteractions");
    const heading = document.getElementById("interactiveHeading");
    const article = document.getElementById("visionArticle");

    if (!interactionArea || !heading || !article) return;

    let isStage2 = false;

    const content = {
        stage1: {
            heading: "/ SO WHY DOES THIS MATTER?",
            paragraphs: [
                {
                    text: 'Fashion has long been closely bounded by clothes and what you put on. But a new vision is rising, calling out fashion around you. That vision is Vantage Persona.',
                    class: 'highlight'
                },
                {
                    text: 'The vision of Vantage Persona is rooted in the concept of the "Morphing Silhouette," a digital bridge between classic sartorial elegance and modern functional utility. The agency does not simply style clothes; it engineers identities, proving that a single individual can seamlessly transition from a high-stakes, traditional celebrity gala to the gritty, high-performance world of technical "tech-fit" apparel.',
                    class: 'indent'
                },
                {
                    text: 'Founded in 2024, Vantage Persona emerged from the intersection of architectural design and bespoke tailoring. We recognized that in an era of digital twins and physical presence, the human form requires a wardrobe that is as dynamic as our digital identities.',
                    class: 'history'
                }
            ]
        },
        stage2: {
            heading: "/ WHY CHOOSE US?",
            paragraphs: [
                {
                    text: "We don't style you for the occasion, nor prepare you to look good for that party—we make you the occasion.",
                    class: 'highlight'
                },
                {
                    text: "Your outfit is not just there to make you look good, but to make others feel what you feel. You need to ball for that party? We make you the vibe bringer.",
                    class: 'indent'
                },
                {
                    text: "She said yes? Let's style the happy smiles into every fit and accessory you put on.",
                    class: ''
                }
            ]
        }
    };

    function updateContent() {
        // Start animation
        interactionArea.classList.add("animating");

        setTimeout(() => {
            const data = isStage2 ? content.stage2 : content.stage1;
            
            // Update heading
            heading.textContent = data.heading;
            
            // Update paragraphs
            article.innerHTML = "";
            data.paragraphs.forEach(p => {
                const para = document.createElement("p");
                para.className = `vision-p ${p.class}`;
                para.textContent = p.text;
                article.appendChild(para);
            });

            // End animation
            interactionArea.classList.remove("animating");
            
            // Toggle stage for next interaction
            interactionArea.classList.toggle("stage-1", !isStage2);
            interactionArea.classList.toggle("stage-2", isStage2);
        }, 600); // Matches the CSS transition duration
    }

    // Double click for desktop
    heading.addEventListener("dblclick", () => {
        isStage2 = !isStage2;
        updateContent();
    });

    // Simple double tap detection for touch devices
    let lastTap = 0;
    heading.addEventListener("touchstart", (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 500 && tapLength > 0) {
            isStage2 = !isStage2;
            updateContent();
            e.preventDefault();
        }
        lastTap = currentTime;
    });
});
