const setElements = (content) => {
    document.getElementById("title").innerHTML = content.header;
    document.getElementById("legend").innerHTML = content.legend;
    document.getElementById("ask").innerHTML = content.form;
    document.getElementById("question1").innerHTML = content.questions[0];
    document.getElementById("question2").innerHTML = content.questions[1];
    document.getElementById("advantages-1").innerHTML = content.advantages[0];
    document.getElementById("advantages-2").innerHTML = content.advantages[1];
    document.getElementById("advantages-3").innerHTML = content.advantages[2];
    document.getElementById("call").innerHTML = content.callAction[0];
    document.getElementById("action").innerHTML = content.callAction[1];
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