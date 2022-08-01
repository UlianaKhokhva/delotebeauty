const navigataionBar = document.querySelector('.nav-burger');
const navigationToggle = document.querySelector('.burger-menu input');
navigationToggle.addEventListener('click', function (event) {
    navigataionBar.classList.toggle('active')
});