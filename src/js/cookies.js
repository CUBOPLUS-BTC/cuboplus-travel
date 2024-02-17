const modalEl = document.getElementById("cookies-modal");

const options = {
    placement: 'bottom-left',
    backdrop: 'static',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: false
};

const instanceOptions = {
    id: 'cookies-modal',
};

const modal = new Modal(modalEl, options, instanceOptions);

document.addEventListener("DOMContentLoaded", (e) => {
    console.log(document.cookie);
    if ( localStorage.getItem("cookies-agreed") == undefined ) {
        modal.show();
        return;
    }
});

document.getElementById("accept-cookies").addEventListener("click", (e) => {
    localStorage.setItem("cookies-agreed", true);
    window.clarity('consent');
})

document.getElementById("decline-cookies").addEventListener("click", (e) => {
    localStorage.setItem("cookies-agreed", false);
    window.clarity('consent', false);
})