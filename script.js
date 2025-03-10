let attempts = 0;
let randomNum = Math.floor(Math.random() * 100) + 1;

const guess = document.getElementById("guess");

const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById(attempts);
submit.addEventListener("click", checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;
    if (userValue === randomNum) {
        hint.textContent = "congratulations,you guessed correct";

    } else if (userValue < randomNum) {
        hint.textContent = "too low,try again";
    } else {
        hint.textContent = "too high ,try again";
    }



}