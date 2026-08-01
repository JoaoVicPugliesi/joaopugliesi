import click_effect from "./sound_effects/click_effect.js";
import play_disco from "./sound_effects/play_disco.js";
import appearence_animations from "./use_cases/appearence_animations.js";
import { initializeTheme, darkmode_onclick } from "./use_cases/darkmode.js";
import fetch_languages_data from "./use_cases/fetch_languages_data.js";
import load_language_object from "./use_cases/load_language_object.js";
import open_cards from "./use_cases/open_cards.js";
import open_languages_list from "./use_cases/open_languages_list.js";
import render_languages from "./use_cases/render_languages.js";
import select_language from "./use_cases/select_language.js";

document.addEventListener('DOMContentLoaded', async () => {
    const selected_language = localStorage.getItem('selected_language');
    if(selected_language == undefined) {
        localStorage.setItem('selected_language', 'br');
    };
    initializeTheme();
    const data = await fetch_languages_data();
    load_language_object(data);
    open_cards();
    appearence_animations();
    open_languages_list();
    await render_languages(data);
    select_language(data);
    darkmode_onclick();
    click_effect();
    play_disco();
});