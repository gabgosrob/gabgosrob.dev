const THEME_KEY = "theme"
enum Themes {
    light = "light",
    dark = "dark"
}

function setInitialTheme(): void {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme == null) {
        localStorage.setItem(THEME_KEY, Themes.light);
        setLightTheme();
    }
    else if (theme == Themes.light) {
        setLightTheme();
    }
    else {
        setDarkTheme();
    }
}

function setDarkTheme(): void {
    localStorage.setItem(THEME_KEY, Themes.dark);
    const lightSwitch = document.getElementById("light-switch");
    const body: HTMLElement = document.querySelector("body");
    const cards: Array<HTMLElement> = Array.from(document.querySelectorAll(".project-card"));
    
    lightSwitch.setAttribute("src", "images/off.png");
    body.style.backgroundColor = "rgb(30, 30, 30)";
    body.style.color = "white";
    cards.forEach(card => {
        card.style.backgroundColor = "rgb(50, 50, 50)";
        card.style.borderColor = "rgba(255, 255, 255, 0.2)";
        card.querySelector("a").style.backgroundColor = "rgb(35, 35, 35)";
    });
}

function setLightTheme(): void {
    localStorage.setItem(THEME_KEY, Themes.light);
    const lightSwitch = document.getElementById("light-switch");
    const body: HTMLElement = document.querySelector("body");
    const cards: Array<HTMLElement> = Array.from(document.querySelectorAll(".project-card"));
    
    lightSwitch.setAttribute("src", "images/on.png");
    body.style.backgroundColor = "white";
    body.style.color = "black";
    cards.forEach(card => {
        card.style.backgroundColor = "white";
        card.style.borderColor = "rgba(0,0,0,0.3)";
        card.querySelector("a").style.backgroundColor = "white";
    });
}

function addListeners(): void {
    const lightSwitch = document.getElementById("light-switch");
    lightSwitch.addEventListener("click", toggleTheme);
}

function toggleTheme(): void {
    const lightSwitch = document.getElementById("light-switch");
    if (localStorage.getItem(THEME_KEY) == Themes.dark) {
        setLightTheme();
    }
    else {
        setDarkTheme();
    }
}

setInitialTheme();
addListeners();
