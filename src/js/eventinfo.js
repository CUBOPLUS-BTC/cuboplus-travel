import PhotoSwipeLightbox from "../js/lib/photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "../js/lib/photoswipe/dist/photoswipe.esm.js";
const params = new URLSearchParams(window.location.search);
const uuid = params.get("uuid");

// Function to generate the image gallery
const generateGallery = async (files) => {
  let html = "";

  if (files.length === 0) {
    return;
  }

  // Function to load images asynchronously and get their dimensions
  const loadImage = (urlFile) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ url: urlFile, width: img.width, height: img.height });
      };
      img.onerror = (error) => reject(error);
      img.src = urlFile;
    });
  };

  // Load all images and get their dimensions
  const imagesData = await Promise.all(files.map(file => loadImage(URL + "img/events/" + file)));
  
  html = `<div id="images"
                class="overflow-hidden shadow-xl bg-slate-800 max-w-md mx-auto grid-rows-2 pswp-gallery pswp-gallery--single-column">`;

  // Build HTML with images and their dimensions
  imagesData.forEach((data, index) => {
    const { url, width, height } = data;
    if (index === 0 ) {
      html += `
      <a href="${url}" 
        data-pswp-width="${width}" 
        data-pswp-height="${height}"
        target="_blank">
            <img src="${url}" alt="event" class="object-scale-down">
      </a>
      <div class="h-24 gap-0 grid grid-flow-col auto-cols-max">`;
                return;
    }

    html += `<a href="${url}"
               data-pswp-width="${width}" 
               data-pswp-height="${height}"
               target="_blank">
               <img src="${url}" class="h-24 w-24 object-cover" alt="" />
             </a>`;
    
  });

  html += "</div></div>";

  // Add the generated HTML to the images container
  document.getElementById("root").innerHTML = html;
  
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#images',
    children: 'a',
    pswpModule: () => PhotoSwipe
  });
  lightbox.init();
}

const fillEvent = (data) => {
  
    document.getElementById("meetup-title").innerText = data.title;
    document.getElementById("meetup-desc").innerText = data.description;
    document.getElementById("meetup-hour").innerText = data.timeStart + " - " + data.timeEnd;
    document.getElementById("meetup-date").innerText = data.start === data.end ? data.start : data.start + " - " + data.end;
    document.getElementById("meetup-place").innerText = data.location;
    document.getElementById("meetup-type").innerText = data.type;
    if (!data.eventUrl) document.getElementById("meetup-url").style.display = "none";
    document.getElementById("meetup-url").href = data.eventUrl;
}

const setElements = (content) => {
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
      generateGallery(result.data.files);
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
  