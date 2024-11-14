const setElements = (content) => {
    Object.keys(content).forEach(id => {
        const element = document.getElementById(id);
        try {
            element.innerHTML = content[id];
        } catch (e) {

        }
    })
}

const $video = document.getElementById("youtube-video");

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage("index", localStorage.getItem("language-tourism"), setElements);

    if (localStorage.getItem("language-tourism") == "jp") {
        $video.classList.remove("hidden");
    }
});

jpButton[0].addEventListener("click", () => {
    changeLanguage("index", "jp", setElements);
    $video.classList.remove("hidden");
});

jpButton[1].addEventListener("click", () => {
    changeLanguage("index", "jp", setElements);
    $video.classList.remove("hidden");
});

enButton[0].addEventListener("click", () => {
    changeLanguage("index", "en", setElements);
    $video.classList.add("hidden");
});

enButton[1].addEventListener("click", () => {
    changeLanguage("index", "en", setElements);
    $video.classList.add("hidden");
});