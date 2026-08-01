const opener = document.querySelector('.header-language-opener');
const options = document.querySelector('.header-languages-options');

function open_languages_list() {
  opener.addEventListener('click', (e) => {
    console.log(opener);
    e.preventDefault();
    if(options.classList.contains('opened')) {
      options.classList.remove('opened');
      opener.classList.remove('toggled');
      return;
    }
    options.classList.add('opened')
    opener.classList.add('toggled');
  });
}

export default open_languages_list;