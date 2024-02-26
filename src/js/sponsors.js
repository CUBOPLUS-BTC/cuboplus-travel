const setElements = (content) => {
    // document.getElementById("contributors-title2").innerHTML = content.titles[1];
    document.getElementById("contributors-title").innerHTML = content.titles[0];
    document.getElementById("contributors-legend").innerHTML = content.descriptions[0];
    document.getElementById("contributors-office").innerHTML = content.descriptions[1];
    document.getElementById("contributors-fulgur").innerHTML = content.descriptions[2];
    document.getElementById("alliances-title").innerHTML = content.titles[1];
    document.getElementById("alliances-legend").innerHTML = content.descriptions[3];
    document.getElementById("testimonials-contributor1").innerHTML = content.testimonialContributor[0];
    document.getElementById("testimonials-contributor2").innerHTML = content.testimonialContributor[1];
    document.getElementById("testimonials-contributor3").innerHTML = content.testimonialContributor[2];
    document.getElementById("testimonials-contributor4").innerHTML = content.testimonialContributor[3];
    document.getElementById("testimonials-contributor5").innerHTML = content.testimonialContributor[4];
    document.getElementById("testimonials-contributor6").innerHTML = content.testimonialContributor[5];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("contributors", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("contributors", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("contributors", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("contributors", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("contributors", "en", (content) => {
        setElements(content);
    });
});