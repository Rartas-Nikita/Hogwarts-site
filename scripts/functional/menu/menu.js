import {} from "./menu-active-item.js"

// Mobile menu
const mobileMenu = document.querySelector('.mobile-menu')
const menuLink = document.querySelectorAll('.menu__link')
const logoMobile = document.querySelector('.logo-mobile')

const openMenu = () => {
    mobileMenu.style.visibility = 'inherit';
    mobileMenu.style.opacity = 1;
}

const closeMenu = () => {
    mobileMenu.style.visibility = 'hidden';
    mobileMenu.style.opacity = 0;
}

export const checkMenu = () => {
    if (mobileMenu.style.visibility == 'hidden') {
        openMenu();
    } else {
        closeMenu();
    }
}

menuLink.forEach(link => {
    link.addEventListener('click', closeMenu);
})

logoMobile.addEventListener('click', checkMenu);
mobileMenu.addEventListener('click', closeMenu);
// END

