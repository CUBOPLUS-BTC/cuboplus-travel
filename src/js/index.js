let intervalId;

//function for typing effect
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
    }, 150);
};

const stopTypeEffect = () => {
    clearInterval(intervalId);
};

/*
const setTestimonials = (testimonials) => {
    let html = "";

    testimonials.map((u) => {
        html += `<div class="swiper-slide">
                    <div class="cart">
                        <div
                            class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                            <p id="testimonials-student1" class="text-gray-600 dark:text-gray-300"><span
                                    class="font-serif wrap">"</span><span class="font-serif">"</span></p>
                            <div class="flex items-center gap-3 text-left">
                                <img class="h-16 w-16 rounded-full"
                                    src="${u.img}" alt="user avatar"
                                    width="200" height="200" loading="lazy" />
                                <div>
                                    <h3
                                        class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">
                                        ${u.name}
                                    </h3>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">${u.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    });

    //document.getElementById("testimonials").innerHTML = html;
}
*/

const setMentions = (mentions) => {
    html = "";

    mentions.map((m) => {
        html += `<ul class="space-y-8">
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-orange-700 to-orange-600 dark:from-blue-600 dark:to-cyan-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a target="_blank" href="${m.href}"
                                class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-white dark:bg-slate-800 ring-1 dark:ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><img src="${m.img}"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="">
                                        <div>
                                            <h3 class="text-lg font-semibold  text-blue-800 dark:text-white flex items-center"><i
                                                    class="fa-brands fa-twitter"><svg xmlns="http://www.w3.org/2000/svg" class="mr-1" fill="currentColor" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></i> ${m.name}</h3>
                                            <p class="text-gray-500 text-md">${m.handle}</p>
                                            <p class="text-gray-500 text-md mt-2">${m.role}</p>
                                        </div>
                                    </div>
                                    <p
                                        class="leading-normal  text-gray-900 dark:text-gray-300 text-md h-16 overflow-hidden">
                                        ${m.content}
                                    </p>

                                    <figure class="max-w-lg">
                                        <img class="h-60 max-w-full rounded-lg overflow-hidden"
                                            src="${m.picture}" alt="image description">
                                    </figure>

                                </div>
                            </a>
                        </div>
                    </li>
                </ul>`;
    });

    document.getElementById("mentions").innerHTML = html;

}

const setElements = async (content) => {
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
    document.getElementById("testimonials-student1").innerHTML = content.testimonial[0];
    document.getElementById("testimonials-student2").innerHTML = content.testimonial[1];
    document.getElementById("testimonials-student3").innerHTML = content.testimonial[2];
    document.getElementById("testimonials-student4").innerHTML = content.testimonial[3];
    document.getElementById("testimonials-student5").innerHTML = content.testimonial[4];
    document.getElementById("testimonials-student6").innerHTML = content.testimonial[5];
    document.getElementById("mission-title").innerHTML = content.mission[0];
    document.getElementById("mission").innerHTML = content.mission[1];
    document.getElementById("cookies-text").innerHTML = content.cookiesmodal[0];
    document.getElementById("accept-cookies").innerHTML = content.cookiesmodal[1];
    document.getElementById("decline-cookies").innerHTML = content.cookiesmodal[2];
    document.getElementById("mentions-badge").innerHTML = content.mentionstitles[0];
    document.getElementById("mentions-title").innerHTML = content.mentionstitles[1];
    document.getElementById("mentions-legend").innerHTML = content.mentionstitles[2];
    document.getElementById("contact-title").innerHTML = content.contact[0];
    document.getElementById("contact-description").innerHTML = content.contact[1];

    setMentions(content.mentions);
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