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


noButton.addEventListener("mouseenter", () => {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const margin = 30;

    const maxX = (screenWidth - buttonWidth) / 2 - margin;
    const maxY = (screenHeight - buttonHeight) / 2 - margin;

    const randomX = (Math.random() * 2 - 1) * maxX;
    const randomY = (Math.random() * 2 - 1) * maxY;

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

});