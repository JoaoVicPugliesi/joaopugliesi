const info_about_card = document.querySelector('.info-about-card');
const info_experience_card = document.querySelector('.info-experience-card');
const info_contact_card = document.querySelector('.info-contact-card');
const content = document.querySelector(`.info-about-card-content`);

function appearence_animations () {
    info_about_card.classList.add('appearence');
    info_experience_card.classList.add('appearence');
    info_contact_card.classList.add('appearence');
    info_about_card.classList.add('opened');
    setTimeout(() => {
        content.classList.add('visible');
    }, 500)
}

export default appearence_animations;