const body = document.querySelector("body");
let darkThemeState = false;
const toggleElement = document.querySelector("#toggle");
const toggleContainerElement = document.querySelector("#toggle-container");

toggleContainerElement.addEventListener("click", toggleTheme);

function toggleTheme() {
    if (!darkThemeState) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        toggleElement.classList.add("toggle--active");
        darkThemeState = true;
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        toggleElement.classList.remove("toggle--active");
        darkThemeState = false;
    }
}
