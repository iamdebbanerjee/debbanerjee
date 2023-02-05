const getContainer = document.querySelector('.container');
const getCircle = document.querySelector('.circle');
const showMenu = document.getElementById('menu-open');
const hideMenu = document.getElementById('menu-close');

showMenu.addEventListener('click', openMenu);
hideMenu.addEventListener('click', closeMenu);

function openMenu() {
    getContainer.classList.add('menu-active');
    getCircle.classList.add('menu-active');
}

function closeMenu() {
    getContainer.classList.remove('menu-active');
    getCircle.classList.remove('menu-active');
}
