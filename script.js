/*
* commencer par un seul player
* gestion score instantané et global du player
*/

let newGame = document.getElementById("newGame");
let diceRoll = document.getElementById("rollButton");
let hold = document.getElementById("holdButton");
let diceFace = document.querySelector(".dice");
let scoreP1 = document.getElementById("scoreP1");
let scoreP2 = document.getElementById("scoreP2");
let currentScoreP1 = document.getElementById("currentScoreP1");
let currentScoreP2 = document.getElementById("currentScoreP2");
let zero = 0;

//Méthode edition noms, initialisation partie
newGame.addEventListener("click", function() {
    resetScores();
    let player1 = prompt("Entrez le nom du joueur 1");
    let player2 = prompt("Entrez le nom du joueur 2");

    document.getElementById("playerName1").innerHTML = player1;
    document.getElementById("playerName2").innerHTML = player2;
});

function resetScores() {
    scoreP1.innerHTML = zero;
    scoreP2.innerHTML = zero;
    currentScoreP1.innerHTML = zero;
    currentScoreP2.innerHTML = zero;
}


