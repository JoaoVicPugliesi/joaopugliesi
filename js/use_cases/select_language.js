import play_disco from "../sound_effects/play_disco.js";
import load_language_object from "./load_language_object.js";

function select_language(data) {
  const options = document.querySelectorAll(".header-languages-option");
  const vinil = document.querySelector('.header-vinil-holder');
  options.forEach((i) => {
    i.addEventListener('click', () => {
        const id = i.getAttribute('data-id');
        localStorage.setItem('selected_language', id);
        load_language_object(data);
        const song = document.querySelector('.song');
        const src = `audios/songs/${id}.mp3`;
        song.src = src;
        song.pause();
        song.currentTime = 0;
        vinil.classList.remove('played');
    });
  });
}

export default select_language;