/**
 * Section 1 — Click a card to cycle through its images.
 */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".clothing-section .collection-card");

  cards.forEach((card) => {
    const imagesContainer = card.querySelector(".card-images");
    if (!imagesContainer) return;

    const imgs = Array.from(imagesContainer.querySelectorAll("img"));
    if (imgs.length <= 1) return;

    let current = 0;

    function show(index) {
        imgs.forEach((img, i) => {
            const active = i === index;
            img.style.opacity = active ? "1" : "0";
            img.style.zIndex = active ? "2" : "1";
        });
    }

    // Ensure first image is shown initially (though CSS should handle this)
    show(0);

    card.addEventListener("click", () => {
      current = (current + 1) % imgs.length;
      show(current);
    });
  });
});
