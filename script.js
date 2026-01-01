// --- Typing Animation Logic ---
var typed = new Typed('#typing-text', {
    strings: [
        'SEEKING INTERNSHIP SUMMER 2026',
        'SEEKING INTERNSHIP FALL 2026',
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    cursorChar: '▮' 
});

var typed_about = new Typed('#typing-text-about', {
    strings: [
        'ASIC PHYSICAL DESIGN',
        'SOC DESIGN AND VERIFICATION', 
        'DESIGN FOR TEST', 
        'GPU &amp; CPU ARCHITECTURE',
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    cursorChar: '▮' 
});

// --- PDF Slider Logic ---
let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll(".cert-slide");
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove("active");
    slides[currentSlide].style.opacity = 0;

    currentSlide = (currentSlide + n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    setTimeout(() => {
        slides[currentSlide].style.opacity = 1;
    }, 10);
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".cert-slide");
    if (slides.length > 0) {
        slides[0].classList.add("active");
        slides[0].style.opacity = 1;
    }
});