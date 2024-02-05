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


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: window.innerWidth <= 640 ? "listMonth" : "dayGridMonth",
        events: events,
        eventContent: function (info) {
            const props = info.event._def.extendedProps;
            let color = "";
            if (props.type === "Organization") color = "bg-blue-300 dark:bg-blue-700";
            if (props.type === "Class") color = "bg-orange-300 dark:bg-orange-700";
            console.log(window.innerWidth)
            console.log(info);
            return {
                html: `
                          <a href="${props.eventUrl}" target="_blank" class="block w-full rounded ${color}">
                              <p class="mb-2">${info.event._def.title}</p>
                              <p class="mb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                            </svg>
                            ${props.timeStart} - ${props.timeEnd}</p>
                              <p class="mb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
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