
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
let globalScoreP2 = zero;
let player = 1;
let player1;
let player2;


//Méthode edition des noms, initialisation partie
newGame.addEventListener("click", function() {
    resetScores();
    player1 = prompt("Entrez le nom du joueur 1");
    player2 = prompt("Entrez le nom du joueur 2");

    document.getElementById("playerName1").innerHTML = player1;
    document.getElementById("playerName2").innerHTML = player2;
    console.log(`Vous avez démarré une nouvelle partie avec les joueurs : ${player1} et ${player2} !`);
});

diceRoll.addEventListener("click", function() {
    let numberDice = Math.floor(Math.random() * 6) + 1;
    showDice(numberDice);

    if(numberDice !== 1) {
        updateCurrentScore += numberDice ;
        document.getElementById("currentScoreP" + player).innerHTML = updateCurrentScore;   
    } else {
        updateCurrentScore = zero;
        document.getElementById("currentScoreP" + player).innerHTML = updateCurrentScore;
        switchPlayer(player);
    }
});

hold.addEventListener("click", function() {
    if(player == 1) {
       globalScoreP1 += updateCurrentScore;
       document.getElementById("scoreP" + player).innerHTML = globalScoreP1; 
    } else {
       globalScoreP2 += updateCurrentScore;
       document.getElementById("scoreP" + player).innerHTML = globalScoreP2;  
    }
    
    updateCurrentScore = zero;
    document.getElementById("currentScoreP" + player).innerHTML = zero;
    
    if(player == 1){
        if(globalScoreP1 >= 100){
            alert(`${player1} a gagné !!!!`);
        } else {
            switchPlayer(player);
        }
    } else {
       if(globalScoreP2 >= 100){
            alert(`${player2} a gagné !!!!`);
        } else {
            switchPlayer(player);
        }
    }
    
});

//reset des scores
function resetScores() {
    scoreP1.innerHTML = zero;
    scoreP2.innerHTML = zero;
    currentScoreP1.innerHTML = zero;
    currentScoreP2.innerHTML = zero;
    updateCurrentScore = zero;
    globalScoreP1 = zero;
    globalScoreP2 = zero;
    player = 1;
}

//Affiche les bonnes faces de dé
function showDice(dice) {
    diceFace.src = 'img/face-' + dice + '.png';
}

function switchPlayer(nbPlayer) {
    if(player == 1) {
        player = 2;
    } else {
        player = 1;
    }
}
