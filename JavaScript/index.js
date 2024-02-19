//Inputs disponibles:
let options = ["rock", "paper", "scissors"]

function choiceUser(inputUser) {
    //variable where save the result
    let selectionUser
    
    if (inputUser == options[0]) {
        selectionUser = `You are selection ${options[0]}`
    } else if (inputUser == options[1]) {
        selectionUser = `You are selection ${options[1]}`
    } else if (inputUser == options[2]) {
        selectionUser = `You are selection ${options[2]}`
    } else {
        return "Please, you are need selection one valides option"
    }
    
    return selectionUser
}

function choiceComputer() {
    let randomNumberComputer = Math.floor(Math.random() * 4)
    let selectionComputer

    if (randomNumberComputer === 0 ) {
        selectionComputer = `The computer selection ${options[0]}`
    } else if (randomNumberComputer === 1) {
        selectionComputer = `The computer selection ${options[1]}`
    } else if (randomNumberComputer === 2) {
        selectionComputer = `The computer selection ${options[2]}`
    }

    return selectionComputer
}