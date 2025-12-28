function toggleMenu() {
    const menu = document.querySelector('.menu');
menu.classList.toggle('active');
}
let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function callNumber(phoneNumber) {
        window.location.href = 'tel:' + phoneNumber;
    }