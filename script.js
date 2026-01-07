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

// --- PDF Slider Logic ---
let current = 0;

// Attached to window so the HTML 'onclick' can find it
window.moveSlide = (step) => {
    const slides = document.querySelectorAll('.cert-slide');
    
    // 1. Hide the current slide
    slides[current].classList.remove('active');

    // 2. Calculate the next index (circular logic)
    current = (current + step + slides.length) % slides.length;

    // 3. Show the new slide
    slides[current].classList.add('active');
};

function toggleDetails(button) {
    const card = button.closest('.project-card');
    card.classList.toggle('expanded');
    
    // Change button text based on state
    if (card.classList.contains('expanded')) {
        button.innerText = 'View Less';
    } else {
        button.innerText = 'View More';
    }
}


function toggleDetails_w(button) {
    const card = button.closest('.work-card');
    card.classList.toggle('expanded');
    
    // Change button text based on state
    if (card.classList.contains('expanded')) {
        button.innerText = 'View Less';
    } else {
        button.innerText = 'View More';
    }

}
