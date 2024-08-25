const urlParams = new URLSearchParams(window.location.search);
const destinationId = urlParams.get("id");
const language = localStorage.getItem("language") || "en";
const DESTINATION_URL =
  TOURISM_DATA_URL + `destinations/${destinationId}/en.json`;
const pageElement = document.getElementById("page-content");

async function loadDestination(data) {
  if (!destinationId) {
    pageElement.innerHTML = `
                <div class="text-center text-red-500 mt-10">
                    <h1 class="text-2xl font-bold">DESTINATION NOT FOUND</h1>
                    <p>Please select a valid destination.</p>
                </div>
            `;
    return;
  }
  document.getElementById("destinationname").textContent =
    "Welcome to " + data.title;
  document.getElementById("description").textContent = data.legend;
  document.getElementById("destination-map").innerHTML = `
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
  document.getElementById("hero-image").innerHTML = `
                                                        <img src="${
                                                          TOURISM_ASSETS +
                                                          `/destinations/${data.id}.webp`
                                                        }" class="w-full h-auto rounded-xl object-cover" alt="">
                                                    `;
}

const renderCommunity = (community) => {
    console.log(community)
  document.getElementById("communityname").textContent = community.title;
  document.getElementById("communitydesc").textContent = community.legend;
  document.getElementById("community-slogan").textContent = community.slogan;
  document.getElementById("community-image").innerHTML = `<img src="${
    TOURISM_ASSETS + `/communities/${community.id}/thumbnail.webp`
  }" class="w-full h-auto rounded-xl object-cover" alt="">`;

  let social = "";
  if (community.social.website) {
    social += `<a href="${community.social.website}" target="_blank"><img class="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-100" src="../img/tourism/icons/website.svg" alt="website"></a>`
  }
  if (community.social.twitter) {
    social += `<a href="${community.social.twitter}" target="_blank"><img class="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-100" src="../img/tourism/icons/twitter.svg" alt="twitter"></a>`
  }
  if (community.social.instagram) {
    social += `<a href="${community.social.instagram}" target="_blank"><img class="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-100" src="../img/tourism/icons/ig.svg" alt="instagram"></a>`
  }
  if (community.social.facebook) {
    social += `<a href="${community.social.facebook}" target="_blank"><img class="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-100" src="../img/tourism/icons/fb.svg" alt="facebook"></a>`
  }

  document.getElementById("social-media").innerHTML = social;

  document.getElementById("community-logo").src =
    TOURISM_ASSETS + `/communities/${community.id}/logo.webp`;
  document.getElementById("community-logo-white").src =
    TOURISM_ASSETS + `/communities/${community.id}/logo_white.webp`;

  const leadersContainer = document.getElementById("leadersContainer");

  community.leaders.forEach((leader) => {
    const leaderDiv = document.createElement("div");
    leaderDiv.className = "mb-8 md:mb-0";
    leaderDiv.innerHTML = `
                    <img src="${TOURISM_ASSETS + `communities/${community.id}/leaders/${leader.id}.webp`}" class="mx-auto rounded-xl w-64 h-64 object-cover max-w-full mb-4" alt="">
                    <h3 class="text-xl font-semibold">${leader.name}</h3>
                    <p class="text-gray-700 dark:text-gray-300">${leader.role}</p>
                `;
    leadersContainer.appendChild(leaderDiv);
  });
};

function loadSlide(category, sliderContainer) {
  sliderContainer.innerHTML = "";

  category.places.forEach((place) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList = "min-w-[calc(100%/3)] p-2";

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

function createSliderSection(category, mainSliderContainer) {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList = "mb-8";
  const title = document.createElement("h2");
  title.classList = "text-2xl font-semibold mb-4";
  title.textContent = category.title;

  // Create Slider container
  const sliderWrapper = document.createElement("div");
  sliderWrapper.classList = "relative";

  const sliderOverflow = document.createElement("div");
  sliderOverflow.classList = "overflow-hidden";

  const sliderContainer = document.createElement("div");
  sliderContainer.id = `${category.id}-slider`;
  sliderContainer.classList =
    "flex transition-transform duration-300 ease-in-out";

  sliderOverflow.appendChild(sliderContainer);
  sliderWrapper.appendChild(sliderOverflow);

  // Buttons creation
  const prevButton = document.createElement("button");
  prevButton.id = `prev-${category.id}`;
  prevButton.classList =
    "absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700";
  prevButton.innerHTML = "&#10094;";

  const nextButton = document.createElement("button");
  nextButton.id = `next-${category.id}`;
  nextButton.classList =
    "absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700";
  nextButton.innerHTML = "&#10095;";

  sliderWrapper.appendChild(prevButton);
  sliderWrapper.appendChild(nextButton);
  sectionDiv.appendChild(title);
  sectionDiv.appendChild(sliderWrapper);
  mainSliderContainer.appendChild(sectionDiv);

  loadSlide(category, sliderContainer);
}

function loadAllSlides(data) {
  const mainSliderContainer = document.getElementById("main-slider-container");

  let html = "";

    data.places.map((section) => {
        html += `<section class="w-full max-w-6xl mx-auto pt-12 md:pt-24">
                    <h2 class="text-2xl font-semibold mb-4">${section.title}</h2>
                    <div class="relative carousel-container">
                        <div id="slider"
                            class="flex gap-2 transition-transform duration-300 ease-in-out h-48 lg:h-96 flex-nowrap overflow-hidden">
                            ${section.places.map((place) => {
                                return `<div class="relative w-1/2 md:w-[33%] flex-shrink-0">
                                            <img src="${TOURISM_ASSETS + `categories/${section.id}/${place.id}.webp`}" class="h-full w-full object-cover rounded-lg" alt="${place.title}">
                                            <div
                                                class="absolute bottom-0 w-full bg-black/60 p-2 lg:p-7 z-20 text-start rounded-b-lg flex flex-col items-center gap-1 md:gap-2">
                                                <h3 class="text-white text-lg md:text-2xl text-center font-semibold">${place.title}</h3>
                                                <a href="${place.url}" target="_blank"
                                                    class="rounded-lg text-xs font-semibold text-white w-full md:w-1/2 bg-blue-500 p-2 text-center self-center">Visit</a>
                                            </div>
                                        </div>`;
                            })}
                        </div>
                        <button id="prev"
                            class="absolute z-30 top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700">
                            &#10094;
                        </button>
                        <button id="next"
                            class="absolute z-30 top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700">
                            &#10095;
                        </button>
                    </div>
                </section>`;
    })

    data.activities.map((section) => {
        html += `<section class="w-full max-w-6xl mx-auto pt-12 md:pt-24">
                    <h2 class="text-2xl font-semibold mb-4">${section.title}</h2>
                    <div class="relative carousel-container">
                        <div id="slider"
                            class="flex gap-2 transition-transform duration-300 ease-in-out h-48 lg:h-96 flex-nowrap overflow-hidden">
                            ${section.places.map((place) => {
                                return `<div class="relative w-1/2 md:w-[33%] flex-shrink-0">
                                            <img src="${TOURISM_ASSETS + `categories/${section.id}/${place.id}.webp`}" class="h-full w-full object-cover rounded-lg" alt="${place.title}">
                                            <div
                                                class="absolute bottom-0 w-full bg-black/60 p-2 lg:p-7 z-20 text-start rounded-b-lg flex flex-col items-center gap-1 md:gap-2">
                                                <h3 class="text-white text-lg md:text-2xl text-center font-semibold">Restaurante</h3>
                                                <a href="${place.url}" target="_blank"
                                                    class="rounded-lg text-xs font-semibold text-white w-full md:w-1/2 bg-blue-500 p-2 text-center self-center">Visit</a>
                                            </div>
                                        </div>`;
                            })}
                        </div>
                        <button id="prev"
                            class="absolute z-30 top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700">
                            &#10094;
                        </button>
                        <button id="next"
                            class="absolute z-30 top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700">
                            &#10095;
                        </button>
                    </div>
                </section>`;
    })

    mainSliderContainer.innerHTML = html;

}

document.addEventListener("DOMContentLoaded", async (e) => {
  const response = await fetch(DESTINATION_URL);
  const data = await response.json();

  loadDestination(data);

  if (data.community) {
    renderCommunity(data.community)
  } else {
    document.getElementById("community-section").classList = "hidden";
  }

  loadAllSlides(data);

  
  document.querySelectorAll(".carousel-container").forEach((carouselContainer) => {
    const slider = carouselContainer.querySelector("#slider");
    const itemWidth = slider.children[0].offsetWidth;
    let currentIndex = 0;

    const nextButton = carouselContainer.querySelector("#next");
    const prevButton = carouselContainer.querySelector("#prev");

    nextButton.addEventListener("click", () => {
      const itemsVisible = Math.floor(
        slider.parentElement.offsetWidth / itemWidth
      );
      const totalItems = slider.children.length;

      if (currentIndex < totalItems - itemsVisible) {
        currentIndex++;
        slider.scrollLeft += itemWidth;
      } else {
        currentIndex = 0;
        slider.scrollLeft = 0;
      }
    });

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        slider.scrollLeft -= itemWidth;
      } else {
        currentIndex = slider.children.length - itemsVisible;
        slider.scrollLeft = itemWidth * currentIndex;
      }
    });
  });
});