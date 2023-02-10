const menuHumburger = document.querySelector(".menubtn");
const menuLinks = document.querySelector(".menulinks");

menuHumburger.addEventListener("click", (e) => {
    menuLinks.classList.toggle("open");
});