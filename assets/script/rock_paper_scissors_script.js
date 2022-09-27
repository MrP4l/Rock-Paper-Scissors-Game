let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    const answer = array[Math.floor(Math.random() * array.length)];
    return answer
}

function playRound(playerSelection, computerSelection) {
    document.getElementById("the_winner").innerHTML = "";
    var computerSelection = getComputerChoice()
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        document.getElementById("result").innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        document.getElementById("result").innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        document.getElementById("result").innerHTML = "It's a Tie!";
    }
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        document.getElementById("result").innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        document.getElementById("result").innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        document.getElementById("result").innerHTML = "It's a Tie!";
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        document.getElementById("result").innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        document.getElementById("result").innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        document.getElementById("result").innerHTML = "It's a Tie!";
    }

    document.getElementById("player_score").innerHTML = "Your score: " + playerScore;
    document.getElementById("computer_score").innerHTML = "Computer score: " + computerScore;

    if (playerScore == 5) {
        document.getElementById("the_winner").innerHTML = "Congratulation! You Won the game!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        document.getElementById("the_winner").innerHTML = "I'm sorry, You Lost the game!";
        playerScore = 0;
        computerScore = 0;
    }  
     
}


function game() {
    for (let i = 0; i < 5; i++) {
        var choice = window.prompt("Rock, Paper or Scissors?");
        choice = choice.toLowerCase();
        const first_char = choice.charAt(0).toUpperCase();
        choice = first_char + choice.slice(1);
        switch (choice) {
            case "Rock":
                var playerSelection = "Rock";
                break;
            case "Paper":
                var playerSelection = "Paper";
                break;
            case "Scissors":
                var playerSelection = "Scissors";
                break;
            default:
                var playerSelection = "";
        }

        console.log(playRound(playerSelection, getComputerChoice));
        console.log("Your score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }

    if (playerScore > computerScore) {
        return "Congratulation! You Won the game!"
    } else if (computerScore > playerScore) {
        return "I'm sorry, You Lost the game!"
    } else {
        return "It's a Tie!"
    }
}

document.getElementById('rock').addEventListener('click', function () {
    (playRound('Rock', getComputerChoice));
});

document.getElementById('paper').addEventListener('click', function () {
    (playRound('Paper', getComputerChoice));
});

document.getElementById('scissors').addEventListener('click', function () {
    (playRound('Scissors', getComputerChoice));
});






