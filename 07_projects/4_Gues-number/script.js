const randomNumber = parseInt(Math.round(Math.random() * 100 + 1));

const submitBtn = document.querySelector("#submitBtn");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowerHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`);
    } else if (guess < 1) {
        alert(`Please enter a number more than 1`);
    } else if (guess > 100) {
        alert(`Please enter a number less than 100`);
    } else {
        prevGuess.push(guess);
        // console.log(prevGuess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {}
function displayGuess() {}
function displayMessage() {}
function endGame(params) {}
function newGame(params) {}
