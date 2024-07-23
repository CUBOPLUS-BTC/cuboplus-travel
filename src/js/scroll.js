const scrollContainer = document.querySelector('.scroll-container');

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.scrollBehavior = 'auto';
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Auto scroll feature
function autoScroll() {
    if (isDown) return; // stop auto-scroll if user is interacting
    scrollContainer.scrollLeft += 1;
    requestAnimationFrame(autoScroll);
}

document.addEventListener("DOMContentLoaded", (e) => {
    
autoScroll(); // Initiate auto-scroll

});