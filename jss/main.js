// Splash screen fade-out

window.addEventListener("load", function () {
    const splash = document.getElementById("splash-screen");

    setTimeout(function () {
        splash.classList.add("fade-out");
    }, 1500);
});

// Scroll - Events

const scrollContainer = document.querySelector(".events-grid");
const scrollLeftBtn = document.querySelector(".scroll-arrow-left");
const scrollRightBtn = document.querySelector(".scroll-arrow-right");

scrollLeftBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: -340, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: 340, behavior: "smooth" });
});


//Scroll - Books

const booksContainer = document.querySelector(".books-grid");
const booksScrollLeftBtn = document.querySelector(".books-scroll-left");
const booksScrollRightBtn = document.querySelector(".books-scroll-right");

booksScrollLeftBtn.addEventListener("click", function () {
    booksContainer.scrollBy({ left: -250, behavior: "smooth" });
});

booksScrollRightBtn.addEventListener("click", function () {
    booksContainer.scrollBy({ left: 250, behavior: "smooth" });
});


// Scroll - Sermons

const sermonsContainer = document.querySelector(".sermons-grid");
const sermonsScrollLeftBtn = document.querySelector(".sermons-scroll-left");
const sermonsScrollRightBtn = document.querySelector(".sermons-scroll-right");

sermonsScrollLeftBtn.addEventListener("click", function () {
    sermonsContainer.scrollBy({ left: -340, behavior: "smooth" });
});

sermonsScrollRightBtn.addEventListener("click", function () {
    sermonsContainer.scrollBy({ left: 340, behavior: "smooth" });
});

const sermonCards = document.querySelectorAll(".sermon-card");

sermonCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const videoId = card.getAttribute("data-video-id");
        const thumbnail = card.querySelector(".sermon-thumbnail");

        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
        iframe.setAttribute("allow", "autoplay; encrypted-media");
        iframe.setAttribute("allowfullscreen", "");

        thumbnail.replaceWith(iframe);
    });
});