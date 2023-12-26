const setElements = (content) => {
    document.getElementById("title").innerHTML = content[0];
    document.getElementById("legend").innerHTML = content[1];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("maintenance", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("maintenance", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("maintenance", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("maintenance", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("maintenance", "en", (content) => {
        setElements(content);
    });
});