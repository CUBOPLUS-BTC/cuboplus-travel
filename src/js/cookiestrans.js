const setElements = (content) => {
    document.getElementById("cookies-title1").innerHTML = content.titles[0];
    document.getElementById("cookies-title2").innerHTML = content.titles[1];
    document.getElementById("cookies-title3").innerHTML = content.titles[2];
    document.getElementById("cookies-title4").innerHTML = content.titles[3];
    document.getElementById("cookies-title5").innerHTML = content.titles[4];
    document.getElementById("cookies-title6").innerHTML = content.titles[5];
    document.getElementById("cookies-desc1").innerHTML = content.descriptions[0];
    document.getElementById("cookies-desc2").innerHTML = content.descriptions[1];
    document.getElementById("cookies-desc3").innerHTML = content.descriptions[2];
    document.getElementById("cookies-desc4").innerHTML = content.descriptions[3];
    document.getElementById("cookies-desc5").innerHTML = content.descriptions[4];
    document.getElementById("cookies-desc6").innerHTML = content.descriptions[5];
    document.getElementById("cookies-desc7").innerHTML = content.descriptions[6];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("cookies", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("cookies", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("cookies", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("cookies", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("cookies", "en", (content) => {
        setElements(content);
    });
});