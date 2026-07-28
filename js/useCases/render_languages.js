import fetch_languages_data from "./fetch_languages_data.js";

const options = document.querySelector('.header-languages-options');

async function render_languages() {
    const resp = await fetch_languages_data();
    if(!resp) return;
    options.innerHTML = '';
    const resp_len = resp.length;
    for(let i = 0; i < resp_len; i++) {
        const language = resp[i];
        options.innerHTML += `
        <div class="header-languages-option">
            <img src="images/country-flags/${language.id}.svg" alt="">
        </div>
        `
    }
}

export default render_languages;