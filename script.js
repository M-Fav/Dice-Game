
let newGame = document.getElementById("newGame");
let diceRoll = document.getElementById("rollButton");
let hold = document.getElementById("holdButton");
let diceFace = document.querySelector(".dice");
let scoreP1 = document.getElementById("scoreP1");
let scoreP2 = document.getElementById("scoreP2");
let currentScoreP1 = document.getElementById("currentScoreP1");
let currentScoreP2 = document.getElementById("currentScoreP2");
let zero = 0;
let updateCurrentScore = zero;
let globalScoreP1 = zero;


//Méthode edition des noms, initialisation partie
newGame.addEventListener("click", function() {
    resetScores();
    let player1 = prompt("Entrez le nom du joueur 1");
    let player2 = prompt("Entrez le nom du joueur 2");

    document.getElementById("playerName1").innerHTML = player1;
    document.getElementById("playerName2").innerHTML = player2;
    console.log(`Vous avez démarré une nouvelle partie avec les joueurs : ${player1} et ${player2} !`);
});

diceRoll.addEventListener("click", function() {
    var numberDice = Math.floor(Math.random() * 6) + 1;
    showDice(numberDice);
    updateCurrentScore += numberDice ;
    currentScoreP1.innerHTML = updateCurrentScore;
});

hold.addEventListener("click", function() {
    globalScoreP1 += updateCurrentScore;
    scoreP1.innerHTML = globalScoreP1;
    updateCurrentScore = zero;
    currentScoreP1.innerHTML = zero;
});

//reset des scores
function resetScores() {
    scoreP1.innerHTML = zero;
    scoreP2.innerHTML = zero;
    currentScoreP1.innerHTML = zero;
    currentScoreP2.innerHTML = zero;
}

//Affiche les bonnes faces de dé
function showDice(dice) {
    diceFace.src = 'img/face-' + dice + '.png';
}

