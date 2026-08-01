const header_name = document.querySelector('.header-name');
const header_p = document.querySelector('.header-p');
const active_language_flag = document.querySelector('.header-language-opener img');
const card_1_header = document.querySelector('.info-about-card-header');
const card_2_header = document.querySelector('.info-experience-card-header');
const card_3_header = document.querySelector('.info-contact-card-header');
const card_1_paragraph = document.querySelector('.info-about-card-content-p');
const card_2_paragraph = document.querySelector('.info-experience-card-content-p');
const main_header_name = document.querySelector('.main-bio-header h3');
const main_header_p = document.querySelector('.main-bio-header p');

function load_language_object (data) {
    console.log(data);
    const active_language = localStorage.getItem('selected_language');
    const object = data.find((i) => i.id == active_language);
    console.log(active_language);
    console.log(object);

    if(!object) return;
    const { 
        id, 
        headers, 
        paragraphs, 
        cards_headers, 
        cards_content 
    } = object;
    card_1_header.innerHTML = '';
    card_2_header.innerHTML = '';
    card_3_header.innerHTML = '';
    header_name.textContent = headers[0];
    header_p.textContent = paragraphs[0];
    main_header_name.textContent = headers[1];
    main_header_p.textContent = paragraphs[1];
    active_language_flag.src = `images/country-flags/${id}.svg`;
    cards_headers[0].forEach((i) => {
        card_1_header.innerHTML += `
            <h3>${i}</h3>
        `
    })
    cards_headers[1].forEach((i) => {
        card_2_header.innerHTML += `
            <h3>${i}</h3>
        `
    })
    cards_headers[2].forEach((i) => {
        card_3_header.innerHTML += `
            <h3>${i}</h3>
        `
    })
    card_1_paragraph.textContent = cards_content[0];
    card_2_paragraph.textContent = cards_content[1];
}

export default load_language_object;