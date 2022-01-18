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
    var links = document.getElementById("links");
    var hamburgerBars = Array.from(document.querySelectorAll("#hamburger .bar"));
    lightSwitch.setAttribute("src", "images/off.png");
    body.style.backgroundColor = "rgb(30, 30, 30)";
    body.style.color = "white";
    cards.forEach(function (card) {
        card.style.backgroundColor = "rgb(50, 50, 50)";
        card.style.borderColor = "rgba(255, 255, 255, 0.2)";
        card.querySelector("a").style.backgroundColor = "rgb(35, 35, 35)";
    });
    links.style.backgroundColor = "rgb(30, 30, 30)";
    links.style.borderColor = "rgba(255, 255, 255, 0.2)";
    hamburgerBars.forEach(function (bar) {
        bar.style.backgroundColor = "white";
    });
}
function setLightTheme() {
    localStorage.setItem(THEME_KEY, Themes.light);
    var lightSwitch = document.getElementById("light-switch");
    var body = document.querySelector("body");
    var cards = Array.from(document.querySelectorAll(".project-card"));
    var links = document.getElementById("links");
    var hamburgerBars = Array.from(document.querySelectorAll("#hamburger .bar"));
    lightSwitch.setAttribute("src", "images/on.png");
    body.style.backgroundColor = "white";
    body.style.color = "black";
    cards.forEach(function (card) {
        card.style.backgroundColor = "white";
        card.style.borderColor = "rgba(0,0,0,0.3)";
        card.querySelector("a").style.backgroundColor = "white";
    });
    links.style.backgroundColor = "white";
    links.style.borderColor = "rgba(0, 0, 0, 0.2)";
    hamburgerBars.forEach(function (bar) {
        bar.style.backgroundColor = "black";
    });
}
function toggleDropDownMenu() {
    var dropDownMenu = document.getElementById("links");
    var currentDisplayMode = dropDownMenu.style.display;
    if (currentDisplayMode == "flex") {
        dropDownMenu.style.display = "none";
    }
    else {
        dropDownMenu.style.display = "flex";
    }
}
function addListeners() {
    var lightSwitch = document.getElementById("light-switch");
    var hamburger = document.getElementById("hamburger");
    lightSwitch.addEventListener("click", toggleTheme);
    hamburger.addEventListener("click", toggleDropDownMenu);
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
