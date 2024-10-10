let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');
let slideInterval = setInterval(nextSlide, 6000);

showSlide(currentSlide);

function showSlide(n) {
    slider.style.transform = `translateX(-${n * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 6000);
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 6000);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        currentSlide = index;
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, 6000);
    });
});
