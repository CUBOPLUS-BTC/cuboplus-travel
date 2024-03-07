const setElements = (content) => {
    document.getElementById("video-title").innerHTML = content.header;
    document.getElementById("video-legend").innerHTML = content.legend;
    document.getElementById("video-rights").innerHTML = content.documentary[0];
    document.getElementById("video-role").innerHTML = content.documentary[1];
    document.getElementById("timeline-title").innerHTML = content.timeline;
    document.getElementById("timeline-description").innerHTML = content.description;
    document.getElementById("timeline1").innerHTML = content.content[0];
    document.getElementById("timeline2").innerHTML = content.content[1];
    document.getElementById("timeline3").innerHTML = content.content[2];
    document.getElementById("timeline4").innerHTML = content.content[3];
    document.getElementById("timeline5").innerHTML = content.content[4];
    document.getElementById("timeline6").innerHTML = content.content[5];
    document.getElementById("timeline7").innerHTML = content.content[6];
    document.getElementById("timeline8").innerHTML = content.content[7];
    document.getElementById("timeline9").innerHTML = content.content[8];
    document.getElementById("timeline10").innerHTML = content.content[9];
    document.getElementById("timeline11").innerHTML = content.content[10];
    document.getElementById("timeline12").innerHTML = content.content[11];
    document.getElementById("timeline13").innerHTML = content.content[12];
    document.getElementById("timeline14").innerHTML = content.content[13];
    document.getElementById("timeline15").innerHTML = content.content[14];
    document.getElementById("timeline16").innerHTML = content.content[15];
    document.getElementById("timeline17").innerHTML = content.content[16];
    document.getElementById("timeline18").innerHTML = content.content[17];
    document.getElementById("timeline19").innerHTML = content.content[18];
    document.getElementById("timeline20").innerHTML = content.content[19];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("cubo2023", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("cubo2023", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("cubo2023", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("cubo2023", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("cubo2023", "en", (content) => {
        setElements(content);
    });
});