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