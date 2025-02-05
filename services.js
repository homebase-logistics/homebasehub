const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
