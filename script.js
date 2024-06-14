const arrowSign = document.querySelectorAll(".dropdown_arrow_sign");
const arrowText = document.querySelectorAll(".dropdown_category");
const productContent = document.querySelector(
    ".header_dropdown_product_content"
);
const companyContent = document.querySelector(
    ".header_dropdown_company_content"
);
const connectContent = document.querySelector(
    ".header_dropdown_connect_content"
);

arrowText[0].addEventListener("click", () => {
    productContent.classList.toggle("active");
    arrowSign[0].classList.toggle("rotate");
});

arrowSign[0].addEventListener("click", () => {
    productContent.classList.toggle("active");
    arrowSign[0].classList.toggle("rotate");
});

arrowText[1].addEventListener("click", () => {
    companyContent.classList.toggle("active");
    arrowSign[1].classList.toggle("rotate");
});

arrowSign[1].addEventListener("click", () => {
    companyContent.classList.toggle("active");
    arrowSign[1].classList.toggle("rotate");
});

arrowText[2].addEventListener("click", () => {
    connectContent.classList.toggle("active");
    arrowSign[2].classList.toggle("rotate");
});

arrowSign[2].addEventListener("click", () => {
    connectContent.classList.toggle("active");
    arrowSign[2].classList.toggle("rotate");
});

document.addEventListener("click", (e) => {
    if (!arrowText[0].contains(e.target) && !arrowSign[0].contains(e.target)) {
        productContent.classList.remove("active");
        arrowSign[0].classList.remove("rotate");
    }

    if (!arrowText[1].contains(e.target) && !arrowSign[1].contains(e.target)) {
        companyContent.classList.remove("active");
        arrowSign[1].classList.remove("rotate");
    }

    if (!arrowText[2].contains(e.target) && !arrowSign[2].contains(e.target)) {
        connectContent.classList.remove("active");
        arrowSign[2].classList.remove("rotate");
    }
});
