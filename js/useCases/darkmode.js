const body = document.querySelector(".body");
const dark_mode_btn = document.querySelector(".header-dark-mode");

function updateIcon(mode) {
    dark_mode_btn.innerHTML =
        mode === "dark"
            ? '<i class="fa-solid fa-lightbulb"></i>'
            : '<i class="fa-regular fa-lightbulb"></i>';
}

function applyTheme() {
    const mode = localStorage.getItem("lightbulb-mode");

    body.classList.toggle("dark", mode === "dark");
    updateIcon(mode);
}

function initializeTheme() {
    if (!localStorage.getItem("lightbulb-mode")) {
        localStorage.setItem("lightbulb-mode", "light");
    }

    applyTheme();
}

function darkmode_onclick() {
    dark_mode_btn.addEventListener("click", () => {
        const current = localStorage.getItem("lightbulb-mode");

        const next = current === "light" ? "dark" : "light";

        localStorage.setItem("lightbulb-mode", next);

        applyTheme();
    });
}

export { initializeTheme, darkmode_onclick };