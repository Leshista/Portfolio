const burger = document.querySelector('.burger');
const burgerStripes = document.querySelectorAll('.burger__stripes');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
    // burgerStripes.forEach((e, i, a) => {});
    burgerMenu.classList.toggle('hidden');
});
