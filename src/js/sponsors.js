const setElements = (content) => {
    document.getElementById("sponsors-title").innerHTML = content.titles[0];
    document.getElementById("sponsors-legend").innerHTML = content.descriptions[0];
    document.getElementById("sponsors-office").innerHTML = content.descriptions[1];
    document.getElementById("sponsors-fulgur").innerHTML = content.descriptions[2];
    document.getElementById("alliances-title").innerHTML = content.titles[1];
    document.getElementById("alliances-legend").innerHTML = content.descriptions[3];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("sponsors", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("sponsors", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("sponsors", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("sponsors", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("sponsors", "en", (content) => {
        setElements(content);
    });
});