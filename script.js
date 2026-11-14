
const button = document.getElementById("exploreBtn");

button.addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});
const heading = document.getElementById("mainHeading");

heading.textContent = "Welcome! Thanks for visiting.";
heading.style.setProperty("color", "cyan", "important");
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function() {
    heading.style.color = "hotpink";
});
const extraText = document.getElementById("extraText");
const readMoreBtn = document.getElementById("readMoreBtn");

readMoreBtn.addEventListener("click", function() {

    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        readMoreBtn.textContent = "Show Less";
    } else {
        extraText.style.display = "none";
        readMoreBtn.textContent = "Show More";
    }

});
const topBtn = document.getElementById("backToTop");

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function updateClock() {
    const now = new Date();

    document.getElementById("liveClock").textContent =
        now.toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);
const typingText = document.getElementById("typingText");

const message = "Hello, I'm Teja. Welcome to my Portfolio!";

let index = 0;

function typeEffect() {
    if (index < message.length) {
        typingText.textContent += message.charAt(index);
        index++;

        setTimeout(typeEffect, 100);
    }
}

typeEffect();