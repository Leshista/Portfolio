const burger = document.querySelector('.burger');
const burgerStripes = document.querySelectorAll('.burger__stripe');
const burgerMenu = document.querySelector('.burger-menu');
const burgerItems = document.querySelectorAll('.nav__item_burger');

burger.addEventListener('click', () => {
    burgerStripes.forEach((e) => {
        e.classList.toggle('stripe-active');
    });
    burgerMenu.classList.toggle('hidden');
});

burgerItems.forEach((e) => {
    e.addEventListener('click', () => {
        burgerMenu.classList.toggle('hidden');
    });
});
