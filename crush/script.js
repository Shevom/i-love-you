function moveRandomEl(elm) {
    elm.style.position = "absolute"; // Fixed typo: "absoulute" to "absolute"
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%"; // Corrected concatenation
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // Corrected concatenation
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});


  