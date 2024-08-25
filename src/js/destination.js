function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function loadDestination() {
    try {
        const destinationId = getQueryParam('id');

        const language = localStorage.getItem('language') || 'en';

        //if not destination selected
        if (!destinationId) {
            document.getElementById('page-content').innerHTML = `
                <div class="text-center text-red-500 mt-10">
                    <h1 class="text-2xl font-bold">DESTINATION NOT FOUND</h1>
                    <p>Please select a valid destination.</p>
                </div>
            `;
            return;
        }
        const jsonUrl = `https://raw.githubusercontent.com/CUBOPLUS-BTC/tourism-portal-data/main/destinations/${destinationId}/${language}.json`;
        const response = await fetch(jsonUrl);
        const data = await response.json();
        document.getElementById('destinationname').textContent = "Welcome to " + data.title;
        document.getElementById('description').textContent = data.legend;
        document.getElementById('communityname').textContent = data.community.title;
        document.getElementById('communitydesc').textContent = data.community.legend;
        document.getElementById('community-slogan').textContent = data.legend;
        const imageurl = `https://raw.githubusercontent.com/CUBOPLUS-BTC/tourism-portal-data/main/assets/destinations/${data.id}.webp`;
        document.getElementById('community-image').innerHTML = 
        `<img src="${imageurl}" class="w-full h-auto rounded-xl object-cover" alt="">`;
        document.getElementById('hero-image').innerHTML = `
            <img src="${imageurl}" class="w-full h-auto rounded-xl object-cover" alt="">
        `;

        document.getElementById('image-container').innerHTML = `<img src="${imageurl}" alt="" class="w-32 h-32 md:w-48 md:h-48 object-cover">`;

        document.getElementById('destination-map').innerHTML = `
            <iframe 
                src="${data.map_url}" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                class="absolute inset-0"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        `;

        const leadersContainer = document.getElementById('leadersContainer');
        leadersContainer.innerHTML = ''; 

        data.community.leaders.forEach(leader => {
            const leaderDiv = document.createElement('div');
            leaderDiv.className = "mb-8 md:mb-0";
            leaderDiv.innerHTML = `
                <img src="https://raw.githubusercontent.com/CUBOPLUS-BTC/tourism-portal-data/main/assets/communities/${data.community.id}/leaders/${leader.id}.webp" class="mx-auto rounded-xl w-64 h-64 object-cover max-w-full mb-4" alt="">
                <h3 class="text-xl font-semibold">${leader.name}</h3>
                <p class="text-gray-700 dark:text-gray-300">${leader.role}</p>
            `;
            leadersContainer.appendChild(leaderDiv);
        });

function loadAllSlides() {
    const mainSliderContainer = document.getElementById('main-slider-container');

    // Generate slider places
    data.places.forEach(category => {
        createSliderSection(category, mainSliderContainer);
    });

    // Generate slider activities
    data.activities.forEach(category => {
        createSliderSection(category, mainSliderContainer);
    });
}

function createSliderSection(category, mainSliderContainer) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = "mb-8";
    const title = document.createElement('h2');
    title.className = "text-2xl font-semibold mb-4";
    title.textContent = category.title;

    // Create Slider container
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = "relative";

    const sliderOverflow = document.createElement('div');
    sliderOverflow.className = "overflow-hidden";

    const sliderContainer = document.createElement('div');
    sliderContainer.id = `${category.id}-slider`;
    sliderContainer.className = "flex transition-transform duration-300 ease-in-out";

    sliderOverflow.appendChild(sliderContainer);
    sliderWrapper.appendChild(sliderOverflow);

    // Buttons creation
    const prevButton = document.createElement('button');
    prevButton.id = `prev-${category.id}`;
    prevButton.className = "absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700";
    prevButton.innerHTML = "&#10094;"; 

    const nextButton = document.createElement('button');
    nextButton.id = `next-${category.id}`;
    nextButton.className = "absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700";
    nextButton.innerHTML = "&#10095;"; 

    sliderWrapper.appendChild(prevButton);
    sliderWrapper.appendChild(nextButton);
    sectionDiv.appendChild(title);
    sectionDiv.appendChild(sliderWrapper);
    mainSliderContainer.appendChild(sectionDiv);

    loadSlide(category, sliderContainer);
}

function loadSlide(category, sliderContainer) {
    sliderContainer.innerHTML = '';

    category.places.forEach(place => {
        const slideDiv = document.createElement('div');
        slideDiv.className = "min-w-[calc(100%/3)] p-2";

        slideDiv.innerHTML = `
            <div class="bg-cover bg-center h-64 rounded-lg shadow-lg" style="background-image: url('${imageurl}');">
                <div class="flex flex-col justify-end h-full p-4 bg-black bg-opacity-50 rounded-lg">
                    <h3 class="text-white text-lg font-semibold">${place.title}</h3>
                    <a href="${place.url}" target="_blank" class="mt-2 bg-blue-600 text-white py-2 px-4 rounded text-sm mx-auto block text-center">
                        See More
                    </a>
                </div>
            </div>
        `;

        sliderContainer.appendChild(slideDiv);
    });
}

loadAllSlides();
 

    } catch (error) {
        document.section.innerHTML = `
                <div class="text-center text-red-500 mt-10">
                    <h1 class="text-2xl font-bold">Error: ID Not Found</h1>
                    <p>Please provide a valid destination ID to view the details.</p>
                </div>
            `;
    }
}

loadDestination();

//Funcionality slider arrows
/*
    const slider = document.getElementById('slider');
    const itemWidth = slider.children[0].offsetWidth;
    let currentIndex = 0;

    document.getElementById('next').addEventListener('click', () => {
    const itemsVisible = Math.floor(slider.parentElement.offsetWidth / itemWidth);
    const totalItems = slider.children.length;
    if (currentIndex < totalItems - itemsVisible) {
        currentIndex++;
        slider.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    } else {
        currentIndex = 0;
        slider.style.transform = `translateX(0)`;
    }
    });

    document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    } else {
        const itemsVisible = Math.floor(slider.parentElement.offsetWidth / itemWidth);
        currentIndex = slider.children.length - itemsVisible;
        slider.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
    });
*/