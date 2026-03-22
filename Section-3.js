/**
 * Section 3 — click a card to fade to the next image (images defined in HTML only).
 */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".section-3-card");

  cards.forEach((card) => {
    const media = card.querySelector(".section-3-card__media");
    if (!media) return;

    const imgs = Array.from(media.querySelectorAll("img"));
    if (imgs.length <= 1) return;

    let current = 0;

    function show(index) {
      imgs.forEach((img, i) => {
        const active = i === index;
        img.style.opacity = active ? "1" : "0";
        img.style.zIndex = active ? "2" : "1";
      });
    }

    show(0);

    card.addEventListener("click", () => {
      current = (current + 1) % imgs.length;
      show(current);
    });
  });
});
