
const setElements = (content) => {
    document.getElementById("faq-title").innerHTML = content.title;
    document.getElementById("faq-legend").innerHTML = content.description;
    content.questions.forEach((question, index) => {
        document.getElementById(`question-${index}`).innerHTML = question;
        document.getElementById(`answer-${index}`).innerHTML = content.answers[index];
    })
}

document.addEventListener("DOMContentLoaded", function () {
    changeLanguage("faq", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});

esButton[0].addEventListener("click", (e) => {
    changeLanguage("faq", "es", (content) => {
    setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("faq", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("faq", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("faq", "en", (content) => {
        setElements(content);
    });
});