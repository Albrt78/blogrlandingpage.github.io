const arrowSign = document.querySelectorAll(".dropdown_arrow_sign");
const arrowText = document.querySelectorAll(".dropdown_category");
const content = document.querySelectorAll(".content");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const closeMenu = document.querySelector(".close_menu");
const mainMenu = document.querySelector(".header_nav_wrapper");
const links = document.querySelectorAll(".nav_link");
const menu = [hamburgerMenu, closeMenu];

for (let i = 0; i < arrowText.length; i++) {
    arrowText[i].addEventListener("click", () => {
        content[i].classList.add("active");
        arrowSign[i].classList.toggle("rotate");
    });

    arrowSign[i].addEventListener("click", () => {
        content[i].classList.add("active");
        arrowSign[i].classList.toggle("rotate");
    });

    window.addEventListener("click", (e) => {
        if (
            !arrowText[i].contains(e.target) &&
            !arrowSign[i].contains(e.target)
        ) {
            content[i].classList.remove("active");
            arrowSign[i].classList.remove("rotate");
        } else {
            content[i].classList.add("active");
            arrowSign[i].classList.add("rotate");
        }
    });
}

menu.forEach((els) => {
    els.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        closeMenu.classList.toggle("active");
    });
});

hamburgerMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("show_menu");
});

closeMenu.addEventListener("click", () => {
    mainMenu.classList.remove("show_menu");
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
        e.preventDefault();
    });
}
