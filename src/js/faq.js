const expand = (id) => {
    const element = document.getElementById(id);
    element.style.maxHeight = element.style.maxHeight ? null : '120px';

    // Cerrar todas las demás secciones
    document.querySelectorAll('.faq-answer').forEach((otherElement) => {
        if (otherElement.id !== id) {
            otherElement.style.maxHeight = null;
        }
    });
};

const setQuestions = (content) => {
    let html = "";
    let i = 0;

    content.questions.map((question) => {
        html += `<div>
                    <dl class="faq mx-auto max-w-2xl">
                        <dt class="text-lg">
                            <button type="button" onClick=expand("faq-${i}") class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-${i}" data-active="false">
                                <span class="font-medium text-gray-900 dark:text-white">${question}</span>
                                <span class="ml-6 flex h-7 items-center">
                                    <svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </dt>
                        <dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-${i}">
                            <p class="pb-6 text-base text-gray-600 dark:text-gray-400">${content.answers[i]}</p>
                        </dd>
                    </dl>
                </div>`
        i++;
    });


    document.getElementById("faq-questions").innerHTML = html;
}

const setElements = (content) => {
    document.getElementById("faq-title").innerHTML = content.title;
    document.getElementById("faq-legend").innerHTML = content.description;

    setQuestions(content);
}

document.addEventListener("DOMContentLoaded", (e) => {
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