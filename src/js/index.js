let intervalId;

const typeEffect = (words) => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    intervalId = setInterval(() => {
        const dynamicText = document.getElementById("heros");
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        dynamicText.textContent = currentChar;
        dynamicText.classList.add("stop-blinking");

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            dynamicText.classList.remove("stop-blinking");
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        }
    }, 100);
};

const stopTypeEffect = () => {
    clearInterval(intervalId);
};

const setTestimonials = (testimonials) => {
    let html = "";

    testimonials.map((u) => {
        html += `<div
        class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <p class="text-gray-600 dark:text-gray-300"><span class="font-serif">"</span>${u.content}
                <span class="font-serif">"</span></p>
        <div class="flex items-center gap-3 text-left">
            <img class="h-16 w-16 rounded-full" src="${u.img}"
                alt="user avatar" width="200" height="200" loading="lazy" />
            <div>
                <h3 class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">${u.name}
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">${u.role}</span>
            </div>
        </div>
    </div>`
    });

    document.getElementById("testimonials").innerHTML = html;
}

const setMentions = (mentions) => {
    
}

const setElements = async (content) => {
    console.log(content);
    stopTypeEffect();
    typeEffect(content.typingList);
    document.getElementById("header1").innerHTML = content.header;
    document.getElementById("header2").innerHTML = content.headerdes;
    document.getElementById("thanks").innerHTML = content.thanks;
    document.getElementById("phases-header").innerHTML = content.process;
    document.getElementById("phases-description").innerHTML = content.processdes;
    document.getElementById("phases-button-apply").innerHTML = content.phases[0];
    document.getElementById("phases-button-learn").innerHTML = content.phases[1];
    document.getElementById("phases-button-contribute").innerHTML = content.phases[2];
    document.getElementById("phases-apply-title").innerHTML = content.apply[0];
    document.getElementById("phases-apply-description").innerHTML = content.apply[1];
    document.getElementById("phases-apply-subtitle1").innerHTML = content.apply[2];
    document.getElementById("phases-apply-description1").innerHTML = content.apply[3];
    document.getElementById("phases-apply-subtitle2").innerHTML = content.apply[4];
    document.getElementById("phases-apply-description2").innerHTML = content.apply[5];
    document.getElementById("phases-learn-title").innerHTML = content.learn[0];
    document.getElementById("phases-learn-description").innerHTML = content.learn[1];
    document.getElementById("phases-learn-subtitle1").innerHTML = content.learn[2];
    document.getElementById("phases-learn-description1").innerHTML = content.learn[3];
    document.getElementById("phases-learn-subtitle2").innerHTML = content.learn[4];
    document.getElementById("phases-learn-description2").innerHTML = content.learn[5];
    document.getElementById("phases-contribute-title").innerHTML = content.contribute[0];
    document.getElementById("phases-contribute-description").innerHTML = content.contribute[1];
    document.getElementById("phases-contribute-subtitle1").innerHTML = content.contribute[2];
    document.getElementById("phases-contribute-description1").innerHTML = content.contribute[3];
    document.getElementById("phases-contribute-subtitle2").innerHTML = content.contribute[4];
    document.getElementById("phases-contribute-description2").innerHTML = content.contribute[5];
    document.getElementById("testimonials-title").innerHTML = content.students[0];
    document.getElementById("testimonials-legend").innerHTML = content.students[1];
    document.getElementById("mission-title").innerHTML = content.mission[0];
    //document.getElementById("mission").innerHTML = content.mission[1];

    setTestimonials(content.testimonials);
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("index", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("index", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("index", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("index", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("index", "en", (content) => {
        setElements(content);
    });
});