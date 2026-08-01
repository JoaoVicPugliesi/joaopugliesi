function click_effect () {
    const click_audio = document.querySelector('.click-audio');
    document.addEventListener('click', (e) => {
        if(click_audio) {
            click_audio.currentTime = 0;
            click_audio.play().catch(() => {});
        }
    })
}

export default click_effect;