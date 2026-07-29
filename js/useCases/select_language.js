import load_language_object from "./load_language_object.js";

function select_language(data) {
  const options = document.querySelectorAll(".header-languages-option");
  options.forEach((i) => {
    i.addEventListener('click', () => {
        const id = i.getAttribute('data-id');
        localStorage.setItem('selected_language', id);
        load_language_object(data);
    });
  });
}

export default select_language;