// Show/Hide the button based on scroll position
const backToTopButton = document.getElementById('backToTop');
        
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopButton.classList.add('scrolled');
    } else {
        backToTopButton.classList.remove('scrolled');
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});