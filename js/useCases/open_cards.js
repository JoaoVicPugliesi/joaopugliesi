const info_cards_arrows = document.querySelectorAll('.info-cards-arrow');
const owners = ['about', 'experience', 'contact'];

function open_cards() {
    info_cards_arrows.forEach((arrow) => {
        arrow.classList.remove('opened');
        arrow.addEventListener('click', (e) => {
            console.log('clicked');
            e.preventDefault();
            const owner = e.currentTarget.getAttribute('owner-i'); 
            const card = document.querySelector(`.info-${owner}-card`);
            const content = document.querySelector(`.info-${owner}-card-content`);
            if(!card || !content) return; 
            owners.forEach((o) => {
                const i_card = `.info-${o}-card`
                const i_card_content = `.info-${o}-card-content` 
                document.querySelector(i_card).classList.remove('opened');
                document.querySelector(i_card_content).classList.remove('visible');
            });
            const is_open = card.classList.contains('opened');
            if (!is_open) {
                card.classList.add('opened');
                content.classList.add('visible');
            }
        });
    })
}

export default open_cards;