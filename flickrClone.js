const images = [
    "https://live.staticflickr.com/65535/50390069077_ebac113a44_b.jpg", "https://live.staticflickr.com/65535/50508946826_6ff4242f5d_b.jpg", "https://live.staticflickr.com/65535/50371215583_a999493e98_b.jpg", "https://live.staticflickr.com/65535/49368797831_d40e1acded_b.jpg", "https://live.staticflickr.com/65535/50605807088_b17ca54fcb_b.jpg", "https://live.staticflickr.com/65535/50553575881_1eafb9694e_b.jpg"
]
let change = document.querySelector(".background");

let i = 0;

setInterval(function () {
    change.style.backgroundImage = "url(" + images[i] + ")";
    i = i + 1;
    if (i == images.length) {
        i = 0;
    }
}, 5000);

