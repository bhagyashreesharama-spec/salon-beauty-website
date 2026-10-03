/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("open");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("open");
}


/* =========================
   BOOKING MODAL
========================= */

const bookingModal = document.getElementById("bookingModal");

function openBooking() {
    bookingModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeBooking() {
    bookingModal.classList.remove("active");
    document.body.style.overflow = "";
}

bookingModal.addEventListener("click", function(event) {

    if (event.target === bookingModal) {
        closeBooking();
    }

});


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (!name || !service || !date) {
        showToast("Please fill in the required details.");
        return;
    }

    closeBooking();

    showToast(
        "Thank you " + name + "! Your appointment request has been received."
    );

    bookingForm.reset();

});


/* =========================
   SERVICE CLICK
========================= */

function showService(service) {

    showToast(
        service + " services selected. Choose an appointment time to continue."
    );

    setTimeout(() => {
        openBooking();
    }, 700);

}


/* =========================
   TESTIMONIAL SLIDER
========================= */

const reviews = [

    {
        text: "I walked in wanting a simple change and walked out feeling like the best version of myself. The entire experience was calm, thoughtful and beautiful.",
        name: "Naina S."
    },

    {
        text: "The team actually listened to what I wanted instead of pushing a trend. My haircut turned out exactly how I imagined it.",
        name: "Aarushi M."
    },

    {
        text: "Velora feels different from every salon I've visited. Beautiful space, lovely people and genuinely amazing service.",
        name: "Simran K."
    }

];

let currentReview = 0;

function updateReview() {

    document.getElementById("reviewText").textContent =
        reviews[currentReview].text;

    document.getElementById("reviewName").textContent =
        reviews[currentReview].name;

    const dots = document.querySelectorAll(".review-dots span");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentReview
        );

    });

}

function nextReview() {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    updateReview();

}

function prevReview() {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    updateReview();

}

function setReview(index) {

    currentReview = index;

    updateReview();

}


/* =========================
   GALLERY
========================= */

function openGallery(element) {

    const image = element.style.backgroundImage;

    document.getElementById("galleryPreview").style.backgroundImage = image;

    document.getElementById("galleryModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeGallery() {

    document.getElementById("galleryModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}

document
    .getElementById("galleryModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeGallery();
        }

    });


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");
    const text = document.getElementById("toastText");

    text.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);

document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.05)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeBooking();
        closeGallery();
        closeMenu();

    }

});
