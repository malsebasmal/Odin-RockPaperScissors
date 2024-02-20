//This, is the form how i employed the game "rock, paper, scissors" in code. But, after this commit*, I'll delete all code and i create new code followed the instructions of Odin Project.

//Inputs disponibles:
let options = ["rock", "paper", "scissors"]
let selectionUser = prompt(`Your options are these ${options}`)
let selectionRandomComputer = options[Math.floor(Math.random() * options.length)]

//Show the election
    //User
alert(`You are selection ${selectionUser}`)
    //Computer
alert(`The computer selection ${selectionRandomComputer}`)

// Battle
function battleUserComputer() {
    if (selectionUser === selectionRandomComputer) {
        return alert("Tie .-.")
    } else if (selectionUser === "rock" && selectionRandomComputer === "paper") {
        return alert("You win!")
    } else if (selectionUser === "paper" && selectionRandomComputer === "rock") {
        return alert("You win!")
    } else if (selectionUser === "scissors" && selectionRandomComputer === "scissors") {
        return alert("You win!")
    } else {
        return alert("You lose...")
    }
}
battleUserComputer()