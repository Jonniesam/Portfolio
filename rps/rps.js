let playerScore = 0;
let cpuScore = 0;
const userScoreSpan= document.getElementById("userScore");
const cpuScoreSpan = document.getElementById("cpuScore");
const resultsMessage = document.getElementById("resultsMessage")
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


rock_div.addEventListener('click', function () {
    playRound("rock");

});

paper_div.addEventListener('click', function () {
    playRound("paper");
});

scissors_div.addEventListener('click', function () {
    playRound("scissors");
});



//CPU randomly genterates a number 0-2 which corresponds to a choice of rock/paper/or scissors
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);  
    if(cpuChoice === 0) {
        return ('rock');
    } else if(cpuChoice === 1) {
        return ('paper');
    } else {
        return ('scissors');
    } 
};


// Compares users selection vs computer selection
function playRound(getPlayerChoice) {
let computerSelection = getComputerChoice();
const body = document.body;
const div = document.createElement('p');
    // When the user wins
    if(getPlayerChoice === 'rock' && computerSelection === 'scissors' || getPlayerChoice === 'scissors' && computerSelection === 'paper' || getPlayerChoice === 'paper' && computerSelection === 'rock') {
        function win() {
            playerScore++;
            userScoreSpan.textContent = `${playerScore}`;
            resultsMessage.textContent =`User Wins! ${getPlayerChoice} beats ${computerSelection}!`;
        };
        return win();
        
    //if it's a tie game
    } else if(getPlayerChoice === computerSelection) { 
        function draw() {
            resultsMessage.textContent ='Tie game!';
        };
        return draw();
    //when the computer wins
    } else {
        function lose() {
            cpuScore++;
            cpuScoreSpan.textContent = `${cpuScore}`;
            resultsMessage.textContent =`Computer Wins! ${computerSelection} beats ${getPlayerChoice}!`;
        };
        return lose();

    }
};