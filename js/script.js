const buttonToggleMenu = document.querySelector(".toggle-menu");
const scrollToSection = document.querySelectorAll("li");

function toggleMenu() {
    const menu = document.querySelector(".nav-menu")
    const nav = document.querySelector('.nav')
    nav.classList.toggle('active-nav')
    menu.classList.toggle("active-menu")
    buttonToggleMenu.classList.toggle("button-active")
}


buttonToggleMenu.addEventListener("click", toggleMenu)
scrollToSection.forEach(section => section.addEventListener("click", toggleMenu))