const btn = document.querySelector('.p-header__menu-button');
const nav = document.querySelector('.p-menu');
btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
});

// const btn = document.querySelector('.p-menu__close-button');
// const nav = document.querySelector('.p-menu');
// btn.addEventListener('click', () => {
//     nav.classList.toggle('open-menu');
// });