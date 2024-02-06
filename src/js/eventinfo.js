const params = new URLSearchParams(window.location.search);
const uuid = params.get("uuid");

const fillEvent = (data) => {
  
    document.getElementById("meetup-title").innerText = data.title;
    document.getElementById("meetup-desc").innerText = data.description;
    document.getElementById("meetup-img").src = URL + "img/events/" + data.fileName;
    document.getElementById("meetup-hour").innerText = data.timeStart + " - " + data.timeEnd;
    document.getElementById("meetup-date").innerText = data.start === data.end ? data.start : data.start + " - " + data.end;
    document.getElementById("meetup-place").innerText = data.location;
    document.getElementById("meetup-type").innerText = data.type;
    if (!data.eventUrl) document.getElementById("meetup-url").style.display = "none";
    document.getElementById("meetup-url").href = data.eventUrl;
}

const setElements = (content) => {
    document.getElementById("text").innerHTML = content[0];
    document.getElementById("date").innerHTML = content[1];
    document.getElementById("hour").innerHTML = content[2];
    document.getElementById("location").innerHTML = content[3];
    document.getElementById("type").innerHTML = content[4];
}

document.addEventListener("DOMContentLoaded", async (e) => {
    changeLanguage("eventinfo", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
      });
    
      const response = await fetch(URL + "events/" + uuid);
      const result = await response.json();
      
      if (!result.status) {
        document.getElementById("event-info").innerHTML = `<p class="font-bold text-2xl dark:text-white">${result.error}</p>`;
        
        return;
      }

      fillEvent(result.data);
});

esButton[0].addEventListener("click", (e) => {
    changeLanguage("eventinfo", "es", (content) => {
        setElements(content);
    });
  });
  
  esButton[1].addEventListener("click", (e) => {
    changeLanguage("eventinfo", "es", (content) => {
        setElements(content);
    });
  });
  
  enButton[0].addEventListener("click", (e) => {
    changeLanguage("eventinfo", "en", (content) => {
        setElements(content);
    });
  });
  
  enButton[1].addEventListener("click", (e) => {
    changeLanguage("eventinfo", "en", (content) => {
        setElements(content);
    });
  });
  