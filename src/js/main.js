var THEME_KEY = "theme";
var Themes;
(function (Themes) {
    Themes["light"] = "light";
    Themes["dark"] = "dark";
})(Themes || (Themes = {}));
function setInitialTheme() {
    var theme = localStorage.getItem(THEME_KEY);
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
function setDarkTheme() {
    localStorage.setItem(THEME_KEY, Themes.dark);
    var lightSwitch = document.getElementById("light-switch");
    var body = document.querySelector("body");
    var cards = Array.from(document.querySelectorAll(".project-card"));
    lightSwitch.setAttribute("src", "images/off.png");
    body.style.backgroundColor = "rgb(30, 30, 30)";
    body.style.color = "white";
    cards.forEach(function (card) {
        card.style.backgroundColor = "rgb(50, 50, 50)";
        card.querySelector("a").style.backgroundColor = "rgb(35, 35, 35)";
    });
}
function setLightTheme() {
    localStorage.setItem(THEME_KEY, Themes.light);
    var lightSwitch = document.getElementById("light-switch");
    var body = document.querySelector("body");
    var cards = Array.from(document.querySelectorAll(".project-card"));
    lightSwitch.setAttribute("src", "images/on.png");
    body.style.backgroundColor = "rgb(238, 253, 255)";
    body.style.color = "black";
    cards.forEach(function (card) {
        card.style.backgroundColor = "white";
        card.querySelector("a").style.backgroundColor = "white";
    });
}
function addListeners() {
    var lightSwitch = document.getElementById("light-switch");
    lightSwitch.addEventListener("click", toggleTheme);
}
function toggleTheme() {
    var lightSwitch = document.getElementById("light-switch");
    if (localStorage.getItem(THEME_KEY) == Themes.dark) {
        setLightTheme();
    }
    else {
        setDarkTheme();
    }
}
setInitialTheme();
addListeners();
