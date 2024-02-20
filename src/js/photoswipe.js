import PhotoSwipeLightbox from "../js/lib/photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "../js/lib/photoswipe/dist/photoswipe.esm.js";
const lightbox = new PhotoSwipeLightbox({
    gallery: '#images',
    children: 'a',
    pswpModule: () => PhotoSwipe
});
lightbox.init();