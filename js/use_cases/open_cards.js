const info_cards_arrows = document.querySelectorAll(".info-cards-arrow");
const owners = ["about", "experience", "contact"];

function open_cards() {
  info_cards_arrows.forEach((arrow) => {
    arrow.classList.remove("opened");
    arrow.addEventListener("click", (e) => {
      e.preventDefault();

      const owner = e.currentTarget.getAttribute("owner-i");
      const card = document.querySelector(`.info-${owner}-card`);
      const content = document.querySelector(`.info-${owner}-card-content`);

      if (!card || !content) return;

      const isOpen = card.classList.contains("opened");

      owners.forEach((o) => {
        document.querySelector(`.info-${o}-card`)?.classList.remove("opened");
        document
          .querySelector(`.info-${o}-card-content`)
          ?.classList.remove("visible");
      });

      if (!isOpen) {
        card.classList.add("opened");
        content.classList.add("visible");
      }
    });
  });
}

export default open_cards;
