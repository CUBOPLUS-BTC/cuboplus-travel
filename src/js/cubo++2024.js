const setElements = (content) => {
    document.getElementById("title").innerHTML = content.header;
    document.getElementById("legend").innerHTML = content.legend;
    document.getElementById("ask").innerHTML = content.form;
    document.getElementById("description").innerHTML = content.description;
    document.getElementById("thanks").innerHTML = content.alliances;
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("cubo++2024", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("cubo++2024", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("cubo++2024", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("cubo++2024", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("cubo++2024", "en", (content) => {
        setElements(content);
    });
});