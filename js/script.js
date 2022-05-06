let currentPage = null;
let navBarActive = true;

switchPage(0);
createInputListeners();

setNavBarActive(false);

function createInputListeners() {
    let navigationButtons = document.querySelectorAll("nav .button-display .button");
    navigationButtons.forEach(button => button.addEventListener("click", onNavButtonClick));
}

function onNavButtonClick() {
    const index = parseInt(this.id.slice(-1));
    switchPage(index);
}

function onMenuToggle() {
    setNavBarActive(!navBarActive);
}

function switchPage(index) {
    currentPage = index;
    
    let pages = document.querySelectorAll("main");
    pages.forEach(page => page.style.display = "none");

    let displayedPage = document.getElementById("page" + index);
    displayedPage.style.display = "flex";

    let menuToggleButton = document.querySelector("header > .menu-toggle");
    menuToggleButton.addEventListener("click", onMenuToggle);

    if (!isDesktop()) {
        setNavBarActive(false);
    }

    selectButton(index);
}

function selectButton(index) {
    // Deselect all buttons
    let buttons = document.querySelectorAll("nav .button-display .button");
    buttons.forEach(button => button.classList.remove("selected"));

    // Select the pressed button by index
    let selectedButton = document.getElementById("nav-button-" + index);
    selectedButton.classList.add("selected");

    // Place the button highlight on the pressed button
    let buttonHighlight = document.querySelector("#button-highlight");
    let height = selectedButton.offsetHeight + "px";
    let marginTop = (selectedButton.offsetHeight * currentPage) + "px";
    buttonHighlight.style.height = height;
    buttonHighlight.style.marginTop = marginTop;
}

function setNavBarActive(active) {
    navBarActive = active;

    let navigationBar = document.querySelector("nav");
    let menuToggleButton = document.querySelector("header > .menu-toggle");

    if(active) {
        navigationBar.classList.add("active");
        menuToggleButton.classList.add("active");

        console.log("Making nav active");
    } else {
        navigationBar.classList.remove("active");
        menuToggleButton.classList.remove("active");

        console.log("Making nav NOT active");
    }
}

function isDesktop() {
    return (window.innerWidth > 600);
}

console.log(document.querySelector("nav"));
console.log(document.querySelector("main#page0"));