const closer = document.querySelector('.header-language-closer');
const options = document.querySelector('.header-languages');

function close_languages_list () {
    closer.addEventListener('click', () => {
        options.classList.remove('opened');
    });
}

export default close_languages_list;