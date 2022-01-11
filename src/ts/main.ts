function addListeners(): void {
    const lightSwitch = document.getElementById("light-switch");
    lightSwitch.addEventListener("click", toggleLightSwitch);
}

function toggleLightSwitch(): void {
    const lightSwitch = document.getElementById("light-switch");
    if (lightSwitch.getAttribute("src") == "images/on.png") {
        lightSwitch.setAttribute("src", "images/off.png")
        setDarkMode();
    }
    else {
        lightSwitch.setAttribute("src", "images/on.png")
        setLightMode();
    }
}

function setDarkMode(): void {
    const body: HTMLElement = document.querySelector("body");
    const cards: Array<HTMLElement> = Array.from(document.querySelectorAll(".project-card"));
    body.style.backgroundColor = "rgb(30, 30, 30)";
    body.style.color = "white";
    cards.forEach(card => {
        card.style.backgroundColor = "rgb(50, 50, 50)";
        card.querySelector("a").style.backgroundColor = "rgb(35, 35, 35)";
    });
}

function setLightMode(): void {
    const body: HTMLElement = document.querySelector("body");
    const cards: Array<HTMLElement> = Array.from(document.querySelectorAll(".project-card"));
    body.style.backgroundColor = "rgb(238, 253, 255)";
    body.style.color = "black";
    cards.forEach(card => {
        card.style.backgroundColor = "white";
        card.querySelector("a").style.backgroundColor = "white";
    });
}

addListeners();
