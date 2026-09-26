const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const startScreen = document.getElementById("startScreen");
const flowerScreen = document.getElementById("flowerScreen");


yesButton.addEventListener("click", () => {

    startScreen.classList.add("hide");

    setTimeout(() => {
        flowerScreen.classList.add("show");
    }, 500);

});


noButton.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

});