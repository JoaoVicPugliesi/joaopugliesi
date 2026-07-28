import appearence_animations from "./useCases/appearence_animations.js";
import open_cards from "./useCases/open_cards.js";
import open_languages_list from "./useCases/open_languages_list.js";
import render_languages from "./useCases/render_languages.js";

document.addEventListener('DOMContentLoaded', async () => {
    open_cards();
    appearence_animations();
    open_languages_list();
    await render_languages();
});