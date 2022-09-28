const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHambur = document.querySelector('.menuHambur');
const mobileMenu = document.querySelector('.mobile-menu');

menuHambur.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}