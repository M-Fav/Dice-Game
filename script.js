
let newGame = document.getElementById("newGame");
let diceRoll = document.getElementById("rollButton");
let hold = document.getElementById("holdButton");
let scoreP1 = document.getElementById("scoreP1");
let scoreP2 = document.getElementById("scoreP2");
let currentScoreP1 = document.getElementById("currentScoreP1");
let currentScoreP2 = document.getElementById("currentScoreP2");
let displayPlayer1 = document.getElementById("displayP1");
let displayPlayer2 = document.getElementById("displayP2");
let borderActiveP1 = document.getElementById("playerName1");
let borderActiveP2 = document.getElementById("playerName2");
let diceFace = document.querySelector(".dice");
let zero = 0;
let updateCurrentScore = zero;
let globalScoreP1 = zero;
let globalScoreP2 = zero;
let player = 1;
let player1;
let player2;


//Bouton New Gme : Méthode edition des noms, initialisation d'une nouvelle partie.
newGame.addEventListener("click", function() {
    resetScores();
    player1 = prompt("Entrez le nom du joueur 1");
    player2 = prompt("Entrez le nom du joueur 2");

    document.getElementById("playerName1").innerHTML = player1;
    document.getElementById("playerName2").innerHTML = player2;
    console.log(`Vous avez démarré une nouvelle partie avec les joueurs : ${player1} et ${player2} !`);
});

//Bouton Roll : Méthode lancé de dé durant le round.
diceRoll.addEventListener("click", function() {
    let numberDice = Math.floor(Math.random() * 6) + 1;
    showDice(numberDice);

    //Activation du bouton hold au premier lancé du joueur.
    if(updateCurrentScore === zero) {
        hold.disabled = false;
    }

    /**
     * Verification du résultat du lancé de dé.
     * Si le lancé est égal a 1, le joueur a perdu son round et changement de joueur.
     * Sinon incrémentation du score courant du joueur en cours.
     */
    if(numberDice !== 1) {
        updateCurrentScore += numberDice ;
        document.getElementById("currentScoreP" + player).innerHTML = updateCurrentScore;   
    } else {
        updateCurrentScore = zero;
        document.getElementById("currentScoreP" + player).innerHTML = updateCurrentScore;
        switchPlayer(player);
    }
});

//Bouton Hold : Méthode blocage du score du round afin d'encaisser les points.
hold.addEventListener("click", function() {
    //Ajout du round score au score global du joueur en cours.
    if(player == 1) {
       globalScoreP1 += updateCurrentScore;
       document.getElementById("scoreP" + player).innerHTML = globalScoreP1; 
    } else {
       globalScoreP2 += updateCurrentScore;
       document.getElementById("scoreP" + player).innerHTML = globalScoreP2;  
    }
    
    //Reset du score courant du joueur en cours.
    updateCurrentScore = zero;
    document.getElementById("currentScoreP" + player).innerHTML = zero;

    //Si le score du joueur en cours est supérieur ou égal a 100, c'est gagné.
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

//Fonction Reset des scores
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

/**
 * Fonction changement de joueur 
 * Changement Background color pour player actif et encadré du nom du joueur actif.
 */
function switchPlayer(nbPlayer) {
    if(player === 1) {
        displayPlayer1.classList.remove("activePlayer");
        displayPlayer2.classList.add("activePlayer");
        borderActiveP1.classList.remove("activePlayerName");
        borderActiveP2.classList.add("activePlayerName");
        player = 2;
    } else {
        displayPlayer1.classList.add("activePlayer");
        displayPlayer2.classList.remove("activePlayer");
        borderActiveP1.classList.add("activePlayerName");
        borderActiveP2.classList.remove("activePlayerName");
        player = 1;
    }
    hold.disabled = true;
}
