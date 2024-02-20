//Inputs disponibles:
let options = ["rock", "paper", "scissors"]
let selectionUser = prompt(`Your options are these ${options}`)

//Election for the User
function choiceUser() {
    if (selectionUser == options[0]) {
        return alert(`You are selection ${options[0]}`)
    } else if (selectionUser == options[1]) {
        return alert(`You are selection ${options[1]}`)
    } else if (selectionUser == options[2]) {
        return alert(`You are selection ${options[2]}`)
    } else {
        return alert("Please, you are need selection one valides option")
    }
}
choiceUser()

//Election for the Computer
    //Variable for the random number
let randomNumberComputer = Math.floor(Math.random() * options.length)
function showChoiceComputer() {
    let selectionComputer

    if (randomNumberComputer === 0) {
        selectionComputer = `The computer selection ${options[0]}`
    } else if (randomNumberComputer === 1) {
        selectionComputer = `The computer selection ${options[1]}`
    } else if (randomNumberComputer === 2) {
        selectionComputer = `The computer selection ${options[2]}`
    }

    return alert(selectionComputer)
}
showChoiceComputer()

// Battle
function battleUserComputer() {
    if ((selectionUser === "rock" && randomNumberComputer === 0) ||
        (selectionUser === "paper" && randomNumberComputer === 1) ||
        (selectionUser === "scissors" && randomNumberComputer === 3)) {
        return alert("Tie .-.")
    } else if (selectionUser === "rock" && randomNumberComputer === 2) {
        return alert("You win!")
    } else if (selectionUser === "paper" && randomNumberComputer === 0) {
        return alert("You win!")
    } else if (selectionUser === "scissors" && randomNumberComputer === 1) {
        return alert("You win!")
    } else {
        return alert("You lose...")
    }
}
battleUserComputer()