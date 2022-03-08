let currentPage = null;
let navBarActive = true;

switchPage(0);
createInputListeners();

function createInputListeners() {
    let navigationButtons = document.querySelectorAll("nav .button-display .button");
    navigationButtons.forEach(button => button.addEventListener("click", onNavButtonClick));
}

function onNavButtonClick() {
    switchPage(parseInt(this.id.slice(-1)));
}

function onMenuToggle() {
    navBarActive = !navBarActive;
    setNavBarActive(navBarActive);
}

function switchPage(index) {
    console.log("Switched page");
    console.log(navBarActive);
    currentPage = index;
    
    let pages = document.querySelectorAll("main");
    pages.forEach(page => page.style.display = "none");

    let displayedPage = document.getElementById("page" + index);
    displayedPage.style.display = "grid";

    let menuToggleButton = document.querySelector("header > .menu-toggle");
    menuToggleButton.addEventListener("click", onMenuToggle);

    setNavBarActive(navBarActive);
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
    console.log("Setting nav bar activity to " + active);
    let navigationBar = document.querySelector("nav");
    let menuToggleButton = document.querySelector("header > .menu-toggle");

    if(active) {
        navigationBar.classList.add("active");
        menuToggleButton.classList.add("active");
    } else {
        navigationBar.classList.remove("active");
        menuToggleButton.classList.remove("active");
    }
}