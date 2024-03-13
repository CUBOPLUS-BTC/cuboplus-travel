const setElements = (content) => {
    document.getElementById("title").innerHTML = content.header;
    document.getElementById("legend").innerHTML = content.legend;
    document.getElementById("videoElement").src = content.media;
    document.getElementById("title1").innerHTML = content.titles[0];
    document.getElementById("title2").innerHTML = content.titles[1];
    document.getElementById("title3").innerHTML = content.titles[2];
    document.getElementById("title4").innerHTML = content.titles[3];
    document.getElementById("title5").innerHTML = content.titles[4];
    document.getElementById("title6").innerHTML = content.titles[5];
    document.getElementById("title7").innerHTML = content.titles[6];
    document.getElementById("title8").innerHTML = content.titles[7];
    document.getElementById("title9").innerHTML = content.titles[8];
    document.getElementById("title10").innerHTML = content.titles[9];
    document.getElementById("title11").innerHTML = content.titles[10];
    document.getElementById("title12").innerHTML = content.titles[11];
    document.getElementById("description1").innerHTML = content.descriptions[0];
    document.getElementById("description2").innerHTML = content.descriptions[1];
    document.getElementById("description3").innerHTML = content.descriptions[2];
    document.getElementById("description4").innerHTML = content.descriptions[3];
    document.getElementById("description5").innerHTML = content.descriptions[4];
    document.getElementById("description6").innerHTML = content.descriptions[5];
    document.getElementById("description7").innerHTML = content.descriptions[6];
    document.getElementById("description8").innerHTML = content.descriptions[7];
    document.getElementById("description9").innerHTML = content.descriptions[8];
    document.getElementById("description10").innerHTML = content.descriptions[9];
    document.getElementById("description11").innerHTML = content.descriptions[10];
    document.getElementById("description12").innerHTML = content.descriptions[11];
    document.getElementById("description13").innerHTML = content.descriptions[12];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("cubo2024", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("cubo2024", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("cubo2024", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("cubo2024", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("cubo2024", "en", (content) => {
        setElements(content);
    });
});