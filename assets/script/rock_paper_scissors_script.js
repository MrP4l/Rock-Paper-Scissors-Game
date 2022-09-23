var playerScore = 0
var computerScore = 0

function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    const answer = array[Math.floor(Math.random() * array.length)];
    return answer
}

function playRound(playerSelection, computerSelection) {
    var computerSelection = getComputerChoice()
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        var result = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        var result = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        var result = "It's a Tie!";
    }
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        var result = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        var result = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        var result = "It's a Tie!";
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        var result = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        var result = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        var result = "It's a Tie!";
    }
    return result;

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

console.log(game());