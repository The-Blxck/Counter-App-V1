let tilte = document.getElementById("title");
console.log(tilte); // 2nd part of DOM grabbing

tilte.textContent = "Clicker App Maximus"; // 3rd part of DOM manipulation
// This is how you, show score, Update counters, displays results, and build interfaces.

let count = 0;

let countDisplay = document.getElementById("count");
let button = document.getElementById("incrementBtn");

button.addEventListener("click", function() {
    count = count + 1;
    countDisplay.textContent = count;
    button.textContent = "Keep going!";
});