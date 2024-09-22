document.addEventListener("DOMContentLoaded", function() {
    let lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    lazyVideos.forEach(function(video) {
        let sources = video.querySelectorAll('source');
        sources.forEach(function(source) {
            source.src = source.getAttribute('data-src');
        });
        video.load();
    });

    const lazyImages = document.querySelectorAll("img.lazy");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;          
          img.src = img.dataset.src;          
          img.classList.remove("lazy");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver support
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add("loaded");
    });
  }
});