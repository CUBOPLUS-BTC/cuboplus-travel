const setElements = (content) => {
    document.getElementById("error-title").innerHTML = content[0];
    document.getElementById("error-legend").innerHTML = content[1];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("403", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("403", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("403", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("403", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("403", "en", (content) => {
        setElements(content);
    });
});