window.addEventListener("load", function () {
    const splash = document.getElementById("splash-screen");

    setTimeout(function () {
        splash.classList.add("fade-out");
    }, 1500);
});

const booksContainer = document.querySelector(".books-grid");
const booksScrollLeftBtn = document.querySelector(".books-scroll-left");
const booksScrollRightBtn = document.querySelector(".books-scroll-right");

booksScrollLeftBtn.addEventListener("click", function () {
    booksContainer.scrollBy({ left: -250, behavior: "smooth" });
});

booksScrollRightBtn.addEventListener("click", function () {
    booksContainer.scrollBy({ left: 250, behavior: "smooth" });
});