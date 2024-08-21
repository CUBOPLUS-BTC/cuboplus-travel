
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-tourism');
    if (window.scrollY > 400) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
