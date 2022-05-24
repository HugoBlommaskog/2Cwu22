let currentPage = null;
let navBarActive = true;

// Byter till att visa sida 0 (Om mig)
switchPage(0);
// Skapa input listeners
createInputListeners();

// Säger av navigationsbaren inte ska vara aktiv (utdragen) i början
setNavBarActive(false);

function createInputListeners() {
    let navigationButtons = document.querySelectorAll("nav .button-display .button");
    navigationButtons.forEach(button => button.addEventListener("click", onNavButtonClick));
}

// Kallas när en knapp trycks, tar fram knappens index och byter till motsvarande sida
function onNavButtonClick() {
    const index = parseInt(this.id.slice(-1));
    switchPage(index);
}

function onMenuToggle() {
    setNavBarActive(!navBarActive);
}

// Visar den valda sidan och döljer resten med display: none
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

// Sätter markören till den tryckta knappens position
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

// Sätter navigationsbaren till antingen aktiv (utdragen) eller inte aktiv (ihoptryckt)
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

// Returnar huruvida CSS media queries kommer tolka sidan som desktop eller inte
function isDesktop() {
    return (window.innerWidth > 600);
}