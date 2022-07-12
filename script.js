let playerScore = 0;
let oppScore = 0;
const playerScoreDisplay = document.getElementById('player-score');
const oppScoreDisplay = document.getElementById("opp-score");

document.getElementById("rock-button").addEventListener("click", function () {
    document.getElementById("player-weapon").innerText = "rock".toLocaleUpperCase();
    document.getElementById("player-weapon-image").setAttribute("src", "./images/rock.jpg");
    playRound();
});
document.getElementById("paper-button").addEventListener("click", function () {
    document.getElementById("player-weapon").innerText = "paper".toLocaleUpperCase();
    document.getElementById("player-weapon-image").setAttribute("src", "./images/paper.jpg");
    playRound();
});
document.getElementById("scissors-button").addEventListener("click", function () {
    document.getElementById("player-weapon").innerText = "scissors".toUpperCase();
    document.getElementById("player-weapon-image").setAttribute("src", "./images/scissors.jpg");
    playRound();
});

function updateGame() {
    let oppWeapon = randomWeapon();
    document.getElementById("opp-weapon").innerText = oppWeapon.toUpperCase();
    document.getElementById("opp-weapon-image").src = `./images/${oppWeapon.toString()}.jpg`;
}
function randomWeapon() {
    const weapons = ["rock", "paper", "scissors"];
    let oppWeapon = weapons[getRndInteger(0, 3)];
    return oppWeapon;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function resetScores() {
    oppScore = 0;
    playerScore = 0;
    oppScoreDisplay.innerText = oppScore;
    playerScoreDisplay.innerText = playerScore;
}
function updateScore() {
    playerScoreDisplay.innerText = playerScore;
    oppScoreDisplay.innerText = oppScore;
}
function checkScores(){
    let winnerName;
    if (playerScore >= 5){
        winnerName = "player";
        //document.getElementsById("end").setAttribute("display", "")
        endGame();
    }
    else if (oppScore >= 5) {
        winnerName = "computer";
        document.getElementById('end-game-text').innerText = 'Computer wins. Play again?';
        endGame();
    }
    return;
}
function endGame(){
    document.getElementById('end-game-text').innerText = "You win! Play again?";
    document.getElementById('end').style.display = "block";
}
function playRound() {
    updateGame();
    let playerWeapon = document.getElementById("player-weapon").innerText.toString();
    let oppWeapon = document.getElementById("opp-weapon").innerText.toString();

    switch (playerWeapon.toLocaleLowerCase()) {
        case "rock":
            if (oppWeapon.toLowerCase() === "paper") {
                oppScore++;
            }
            else if (oppWeapon.toLocaleLowerCase() === playerWeapon.toLocaleLowerCase()) {
            }
            else {
                playerScore++;
            }
            break;
        case "paper":
            if (oppWeapon.toLocaleLowerCase() === "scissors") {
                oppScore++;
                break;
            }
            else if (oppWeapon.toLocaleLowerCase() === playerWeapon.toLocaleLowerCase()) {
                break;
            }
            else {
                playerScore++;
                break;
            }
        case "scissors":
            if (oppWeapon.toLocaleLowerCase() === "rock") {
                oppScore++;
                break;
            }
            else if (oppWeapon.toLocaleLowerCase() === playerWeapon.toLocaleLowerCase()) {
                break;
            }
            else {
                playerScore++;
                break;
            }
    }
    updateScore();
    checkScores();
}

function backgroundFlash(winner, loser) {

}