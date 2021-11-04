// Menu mobile script
const mobileMenu = document.querySelector('.mobile__menu-fadein');
const mobileMenuClosed = document.querySelector('.mobile__menu-fadein-closed');
const mobileMenuOpen = document.querySelector('.heading__menu-mobile');

function openMenu () {
    mobileMenu.classList.add('open');
}

function closedMenu () {
    mobileMenu.classList.remove('open');
}

mobileMenuOpen.addEventListener('click', openMenu);
mobileMenuClosed.addEventListener('click', closedMenu);