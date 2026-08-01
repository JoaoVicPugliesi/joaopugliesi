
function play_disco () {
    console.log('clicked');
    const song = document.querySelector('.song');
    const vinil = document.querySelector('.header-vinil-holder');
    const selected_language = localStorage.getItem('selected_language');
    console.log(selected_language);
    if(!selected_language) return;
    const src = `audios/songs/${selected_language}.mp3`;
    song.src = src;
    vinil.addEventListener('click', (e) => {

        if(vinil.classList.contains('played')) {
            song.pause();
            song.currentTime = 0;
            vinil.classList.remove('played');
            return;
        }
        song.currentTime = 0;
        song.play().catch(() => {});
        vinil.classList.add('played');
    });
}

export default play_disco;