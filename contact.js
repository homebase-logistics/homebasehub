const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting Homebase Hub Logistics!');
    window.location.href = 'index.html';
});


