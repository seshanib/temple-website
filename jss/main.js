window.addEventListener("load", function () {
    const splash = document.getElementById("splash-screen");

    setTimeout(function () {
        splash.classList.add("fade-out");
    }, 1500);
});