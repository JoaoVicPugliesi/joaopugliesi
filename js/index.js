import appearence_animations from "./useCases/appearence_animations.js";
import open_cards from "./useCases/open_cards.js";
import open_languages_list from "./useCases/open_languages_list.js";

document.addEventListener('DOMContentLoaded', () => {
    open_cards();
    appearence_animations();
    open_languages_list();
});