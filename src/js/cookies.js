const modalEl = document.getElementById("cookies-modal");
modalEl.style.display = "none";

function closeModal() {
    modalEl.style.display = "none";
}


document.addEventListener("DOMContentLoaded", (e) => {

    const cookiesAgreed = localStorage.getItem("cookies-agreed");
    if (cookiesAgreed == null) {
        modalEl.style.display = "flex";
        return;
    }
});

document.getElementById("accept-cookies").addEventListener("click", (e) => {
    localStorage.setItem("cookies-agreed", true);
    window.clarity('consent');
    closeModal();
})

document.getElementById("decline-cookies").addEventListener("click", (e) => {
    localStorage.setItem("cookies-agreed", false);
    window.clarity('consent', false);
    closeModal();
})