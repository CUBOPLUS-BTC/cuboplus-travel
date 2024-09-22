const departments = document.querySelectorAll("#map-container svg path");
const img = document.querySelector(".dept-container img");
const titleDept = document.querySelector(".dept-container h2");
const departmentsList = [
  {
    id: "ahuachapan",
    title: "Ahuachapán",
  },
  {
    id: "cabanas",
    title: "Cabañas",
  },
  {
    id: "chalatenango",
    title: "Chalatenango",
  },
  {
    id: "cuscatlan",
    title: "Cuscatlán",
  },
  {
    id: "lalibertad",
    title: "La Libertad",
  },
  {
    id: "morazan",
    title: "Morazán",
  },
  {
    id: "lapaz",
    title: "La Paz",
  },
  {
    id: "santaana",
    title: "Santa Ana",
  },
  {
    id: "sanmiguel",
    title: "San Miguel",
  },
  {
    id: "sonsonate",
    title: "Sonsonate",
  },
  {
    id: "sansalvador",
    title: "San Salvador",
  },
  {
    id: "sanvicente",
    title: "San Vicente",
  },
  {
    id: "launion",
    title: "La Union",
  },
  {
    id: "usulutan",
    title: "Usulután",
  },
];

document.addEventListener("DOMContentLoaded", async (e) => {
  const { recurringEvents, events, communities, destinations, onboard } = await fetchData();
  const allEvents = [...recurringEvents, ...events];

  renderCalendar(allEvents);
  renderCommunities(communities);
  renderDestinations(destinations);
  renderOnboard(onboard);
});

const fetchData = async () => {
    const request = await fetch(TOURISM_DATA_URL + `destinations/en.json`);
    const response = await request.json();
    return response;
};

const renderCommunities = (communities) => {
    const element = document.getElementById("communities");
    let html = "";
    communities.map((community) => {
        html += `
                <a href="destination.html?id=${community.destination}" class="card relative w-full md:w-[48%]">
                    <img src="${TOURISM_ASSETS + `communities/${community.id}/thumbnail.webp`}" class="w-full object-cover rounded-lg" alt="Bitcoin Berlin">
                    <div class="absolute bottom-0 w-full bg-black/40 p-7 z-20 text-start rounded-b-lg">
                        <p class="text-gray-300">${community.location}</p>
                        <h3 class="text-white text-2xl">${community.name}</h3>
                    </div>
                </a>
        `;
    });

    element.innerHTML = html;
}

const renderDestinations = (destinations) => {
    const element = document.getElementById("tourist-places");
    let html = "";

    destinations.map((destination) => {
        html += `<div class="bg-white shadow-xl shadow-blue-500/40 dark:shadow-blue-900/40 dark:bg-slate-900 border-gray-300 border-2 rounded-xl dark:border-slate-700 p-4 md:p-8 flex flex-col md:flex-row items-center gap-7 md:gap-12 lg:gap-14">
                    <img src="${TOURISM_ASSETS + `destinations/${destination.id}.webp`}" class="rounded-2xl w-full object-cover h-64 md:w-1/2 flex-shrink-0" alt="${destination.title}">
                    <div class="flex flex-col dark:text-white gap-8 w-full md:w-1/2">
                        <h2 class="text-2xl text-neutral-700 dark:text-white text-center font-semibold">
                            ${destination.title}
                        </h2>
                        <p class="text-xs md:text-sm text-start">
                            ${destination.legend}
                        </p>
                        <a href="destination.html?id=${destination.id}" class="rounded-lg font-semibold text-white w-1/2 self-end bg-blue-500 p-4 text-center button">See more</a>
                    </div>
                </div>`
    });

    element.innerHTML = html;
}

const renderOnboard = (onboard) => {
    const element = document.getElementById("onboard");
    let html = "";

    onboard.map((section) => {
        html += `
                <div class="faq-item bg-white shadow-xl rounded-xl flex flex-col p-8 w-full gap-4 cursor-pointer">
                    <div class="flex items-center justify-between w-full">
                        <p class="text-xl text-neutral-700 font-semibold">${section.title}</p>
                        <div class="faq-icon rounded-full p-4 bg-white shadow-xl text-center transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-900 transition-all duration-300 ease-in-out" viewBox="0 0 11 20" fill="none">
                                <path d="M1.37793 18.2695L9.5972 10.0129L1.37793 1.75635" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-500 flex flex-wrap items-center gap-2 lg:gap-6">
                        ${section.places.map((place) => {
                            return `<a href="${place.url}" target="_blank" class="w-[48%] h-64 md:w-[30%] md:h-[30%] lg:w-[20%] lg:h-[20%] aspect-square flex flex-col rounded-xl border-4 border-transparent hover:border-gray-300"><img src="${TOURISM_ASSETS + `categories/${section.id}/${place.id}.webp`}" class="w-full h-48 object-cover rounded-lg" alt="Logo"><p class="text-sm h-14">${place.title}</p></a>`;
                        }).join('')}
                    </div>
                </div>
        `;
    })

    
    element.innerHTML = html;

    document.querySelectorAll(".faq-item").forEach((item) => {
        item.addEventListener("click", () => {
          const content = item.querySelector(".faq-content");
          const icon = item.querySelector(".faq-icon svg");
          const iconContainer = item.querySelector(".faq-icon");
      
          if (content.style.maxHeight) {
            // Close the current item
            content.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";
            icon.style.color = "#1e3a8a"; // Reset color to original
            iconContainer.style.backgroundColor = "#ffffff"; // Reset background to original
          } else {
            // Close all other items
            document
              .querySelectorAll(".faq-content")
              .forEach((el) => (el.style.maxHeight = null));
            document.querySelectorAll(".faq-icon svg").forEach((el) => {
              el.style.transform = "rotate(0deg)";
              el.style.color = "#1e3a8a"; // Reset color to original
            });
            document
              .querySelectorAll(".faq-icon")
              .forEach((el) => (el.style.backgroundColor = "#ffffff")); // Reset background to original
      
            // Open the clicked item
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = "rotate(90deg)";
            icon.style.color = "#ffffff"; // Change color to white
            iconContainer.style.backgroundColor = "#1e3a8a"; // Change background to blue
          }
        });
      });
}

const renderCalendar = (events) => {
    const calendarEl = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
          left: "title",
          center: "",
          right: "prev,next"
        },
        height: 514,
        initialView: window.innerWidth <= 640 ? "listMonth" : "dayGridMonth",
        displayEventTime: false,
        events: events,
    
        eventContent: function (info) {
          const props = info.event._def.extendedProps;
          const hour = `${info.event._instance.range.start.getHours()}:${
            info.event._instance.range.start.getMinutes()
              ? info.event._instance.range.start.getMinutes()
              : "00"
          } - ${info.event._instance.range.end.getHours()}:${
            info.event._instance.range.end.getMinutes()
              ? info.event._instance.range.end.getMinutes()
              : "00"
          }`;
          return {
            html: `
                                      <a href="${props.link}" target="_blank" class="flex flex-col gap-2 w-full border-t-2 border-b-2 border-slate-700 dark:text-white h-auto">
                                          <p class="overflow-hidden">${info.event._def.title}</p>
                                          <div class="flex items-center overflow-hidden gap-2">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                              </svg>
                                              <p class="w-full">${hour}</p>
                                          </div>
                                          <div class="flex items-center lg:flex-wrap overflow-hidden gap-2">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                              </svg>
                                              <p class="w-full">${props.location}</p>
                                          </div>
                                      </a>
                                  `,
          };
        },
      });
      calendar.render();
}

const changeDept = (pathDept) => {
  departments.forEach((path) => {
    path.classList = "hover:text-blue-400 hover:cursor-pointer";
  });

  pathDept.classList = "text-blue-500";

  img.classList.add("fade-out");

  setTimeout(() => {
    titleDept.innerHTML =
      departmentsList.find((dept) => dept.id == pathDept.id)?.title ||
      "Department";
    img.src = `img/tourism/destinations/${pathDept.id}.webp`;
    img.alt =
      departmentsList.find((dept) => dept.id == pathDept.id)?.title ||
      "Department title";

    // Shows new image
    img.classList.remove("fade-out");
  }, 200); // It's the same as the one in CSS
};

departments.forEach((pathDept) => {
  pathDept.addEventListener("click", () => {
    changeDept(pathDept);
  });
});

const setElements = (content) => {
  
  Object.keys(content).forEach(id => {
      const element = document.getElementById(id);
      element.innerHTML = content[id];
  })
}

const paths = document.querySelectorAll('#map-container svg path');

document.addEventListener("DOMContentLoaded", () => {
  let isDark = document.documentElement.classList.contains('dark');
  let color = "";
  isDark ? color = "#fff" : color = "#193D99";

  paths.forEach((path) => {
    path.setAttribute("stroke", color);
  })
  
  changeLanguage("travel", localStorage.getItem("language-tourism"), setElements);
});

const switchers = document.querySelectorAll(".switcher");

switchers[0].addEventListener("click", () => {
  let isDark = !document.documentElement.classList.contains('dark');
  let color = "";
  isDark ? color = "#fff" : color = "#193D99";

  paths.forEach((path) => {
    path.setAttribute("stroke", color);
  })
})

switchers[1].addEventListener("click", () => {
  let isDark = !document.documentElement.classList.contains('dark');
  let color = "";
  isDark ? color = "#fff" : color = "#193D99";

  paths.forEach((path) => {
    path.setAttribute("stroke", color);
  })
})

jpButton[0].addEventListener("click", () => {
  changeLanguage("travel", "jp", setElements);
});

jpButton[1].addEventListener("click", () => {
  changeLanguage("travel", "jp", setElements);
});

enButton[0].addEventListener("click", () => {
  changeLanguage("travel", "en", setElements);
});

enButton[1].addEventListener("click", () => {
  changeLanguage("travel", "en", setElements);
});