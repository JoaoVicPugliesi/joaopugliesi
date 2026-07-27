const opener = document.querySelector('.header-language-opener');
const options = document.querySelector('.header-languages');

function open_languages_list() {
  opener.addEventListener('click', (e) => {
    console.log(opener);
    e.preventDefault();
    options.classList.add('opened')
  });
}

export default open_languages_list;