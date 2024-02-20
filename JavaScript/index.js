//Inputs:
let options = ["rock", "paper", "scissors"]

//Function for the computer random selection
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)]
}
    //Variable for the save the function
    let computerSelection = getComputerChoice()

//Battle
function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase()

    if (playerSelectionLowerCase === computerSelection) {
        console.log("tie .-.")
    } else if (playerSelectionLowerCase === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors")
    } else if (playerSelectionLowerCase === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beats Paper")
    } else if (playerSelectionLowerCase === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats Rock")
    } else {
        alert(`You lose... ${playerSelectionLowerCase} beats ${computerSelection}`)
    }
}

function playerSelection() {
    let playerSelect = prompt(`These is your functions ${options}`)
    return playerSelect
}

function playGame() {
    let iteration = 0
    while (iteration < 5) {
        let userChoice = playerSelection()
        let computerChoice = getComputerChoice()
        playRound(userChoice, computerChoice)
        iteration++
    }
}

//Variable for the election user
// let playerSelection = prompt(`These is your functions ${options}`)


playGame()