const nav - links = document.querySelector(.nav - links);
const openMenu = document.querySelector(.openMenu);
const closeMenu = document.querySelector(.closeMenu);


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', show);

function show() {
    nav - links.style.display = 'flex';
    nav - links.style.top = '0';
}

function close() {
    nav - links.style.top = '-100%';

}