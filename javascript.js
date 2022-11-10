let player = {
    playerName: "New Player",
    chips: 0
}

let cardsArray = [];
let sumOfCards = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

function getRandomCard() {
    let randomCard = (Math.floor(Math.random() * 13)) + 1
    if (randomCard === 1) {
        return 11;
    } else if (randomCard >= 10) {
        return 10;
    } else {
        return randomCard
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    isAlive = true;
    cardsArray = [firstCard, secondCard];
    sumOfCards = cardsArray[0] + cardsArray[1];
    player.playerName = prompt("What is your name?");
    player.chips = prompt("How much money are you bringing to the table?");
    playerEl.textContent = "Player: " + player.playerName + ", $" + player.chips;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sumOfCards;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cardsArray.length; i++) {
        cardsEl.textContent += cardsArray[i] + " ";
    }
    if (sumOfCards < 21) {
        message = "Do you want to draw a new card?";
    } else if (sumOfCards === 21) {
        message = "You win!";
        hasBlackJack = true;
        isAlive = false;
    } else {
        message = "You lose.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive) {
        let card = getRandomCard();
        sumOfCards += card;
        cardsArray.push(card);
        renderGame();
    } 
}




