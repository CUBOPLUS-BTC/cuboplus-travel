const modalEl = document.getElementById("cookies-modal");
modalEl.style.display = "none";

function closeModal() {
    modalEl.style.display = "none";
}

const setCookiesElements = (content) => {
    document.getElementById("cookies-text").innerHTML = content[0];
    document.getElementById("accept-cookies").innerHTML = content[1];
    document.getElementById("decline-cookies").innerHTML = content[2];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("cookiesmodal", localStorage.getItem("language") || "en", (content) => {
        setCookiesElements(content);
    });

    const cookiesAgreed = localStorage.getItem("cookies-agreed");
    if (cookiesAgreed == null) {
        modalEl.style.display = "flex";
        return;
    }
});
esButton[0].addEventListener("click", (e) => {
    changeLanguage("cookiesmodal", "es", (content) => {
        setCookiesElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("cookiesmodal", "es", (content) => {
        setCookiesElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("cookiesmodal", "en", (content) => {
        setCookiesElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("cookiesmodal", "en", (content) => {
        setCookiesElements(content);
    });
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