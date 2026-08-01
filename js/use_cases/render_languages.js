const options = document.querySelector('.header-languages-options');

async function render_languages(resp) {
    if(!resp) return;
    options.innerHTML = '';
    const resp_len = resp.length;
    const selected_language = localStorage.getItem('selected_language');
    for(let i = 0; i < resp_len; i++) {
        const language = resp[i];
        const is_selected = selected_language == language.id;
        options.innerHTML += `
        <div class="header-languages-option ${is_selected ?? 'selected'}" data-id="${language.id}">
            <img src="images/country-flags/${language.id}.svg" alt="" draggable="false">
        </div>
        `
    }
}

export default render_languages;