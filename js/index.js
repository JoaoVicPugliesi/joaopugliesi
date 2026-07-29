import appearence_animations from "./useCases/appearence_animations.js";
import fetch_languages_data from "./useCases/fetch_languages_data.js";
import load_language_object from "./useCases/load_language_object.js";
import open_cards from "./useCases/open_cards.js";
import open_languages_list from "./useCases/open_languages_list.js";
import render_languages from "./useCases/render_languages.js";
import select_language from "./useCases/select_language.js";

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetch_languages_data();
    load_language_object(data);
    open_cards();
    appearence_animations();
    open_languages_list();
    await render_languages(data);
    select_language(data);
});