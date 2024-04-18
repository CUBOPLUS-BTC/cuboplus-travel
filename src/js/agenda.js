const events = [
      {
        "title": "Applications Open",
        "location": "Online",
        "start": new Date("Thu Feb 29 2024 09:00:00 GMT-0600 (hora estándar central)"),
        "timeStart": "8:00 AM",
        "end": new Date("Thu Feb 29 2024 12:00:00 GMT-0600 (hora estándar central)"),
        "timeEnd": "11:59 PM",
        "type": "Organization",
        "eventUrl": "https://www.twitter.com"
    }
]

const setElements = (content) => {
  document.getElementById("text").innerHTML = content[0];
  document.getElementById("org").innerHTML = content[1];
  document.getElementById("event").innerHTML = content[2];
  document.getElementById("class").innerHTML = content[3];
  document.getElementById("meetup").innerHTML = content[4];
}

esButton[0].addEventListener("click", (e) => {
  changeLanguage("agenda", "es", (content) => {
    setElements(content);
  });
});

esButton[1].addEventListener("click", (e) => {
  changeLanguage("agenda", "es", (content) => {
    setElements(content);
  });
});

enButton[0].addEventListener("click", (e) => {
  changeLanguage("agenda", "en", (content) => {
    setElements(content);
  });
});

enButton[1].addEventListener("click", (e) => {
  changeLanguage("agenda", "en", (content) => {
    setElements(content);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    changeLanguage("agenda", localStorage.getItem("language") || "en", (content) => {
      setElements(content);
    })

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: window.innerWidth <= 640 ? "listMonth" : "dayGridMonth",
        events: function (info, successCallback, failureCallback) {
          fetch(URL + "events")
            .then(function (response) {
              return response.json();
            }).then(function (data) {
              let events = data.data.map((event) => {
                return {
                  uuid: event.uuid,
                  title: event.title,
                  location: event.location,
                  start: new Date (event.start),
                  end: new Date (event.end),
                  timeStart: event.timeStart,
                  timeEnd: event.timeEnd,
                  type: event.type
                }
              })
              successCallback(events);
              
            }).catch(function (error) {
              failureCallback(error);
            }) ;
        },
        eventContent: function (info) {
            const props = info.event._def.extendedProps;
            let color = "";
            if (props.type === "organization") color = "bg-sky-700 dark:bg-blue-700";
            if (props.type === "class") color = "bg-amber-600 dark:bg-orange-700";
            if (props.type === "meetup") color = "bg-red-600 dark:bg-red-700";
            if (props.type === "event") color = "bg-cyan-600 dark:bg-cyan-700";
            return {
                html: `
                          <a href="eventinfo.html?uuid=${props.uuid}" class="block w-full rounded text-white ${color}">
                              <p class="text-white mb-2 ml-1 overflow-hidden">${info.event._def.title}</p>
                              <p class=" text-white mb-2 flex items-center overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                            </svg>
                            ${props.timeStart} - ${props.timeEnd}</p>
                              <p class="text-white mb-2 flex items-center overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                            </svg>
                            ${props.location}</p>
                          </a>
                        `
            }
      }
    });
    calendar.render();
  });