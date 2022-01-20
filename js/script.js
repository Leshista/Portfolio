const burger = document.querySelector('.burger');
const burgerStripes = document.querySelectorAll('.burger__stripe');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
    burgerStripes.forEach((e, i, a) => {
        e.classList.toggle('stripe-active');
    });
    burgerMenu.classList.toggle('hidden');
});
