//Inputs disponibles:
let options = ["rock", "paper", "scissors"]
let selectionUser = prompt(`Your options are these ${options}`)

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

function choiceComputer() {
    let randomNumberComputer = Math.floor(Math.random() * options.length)
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
alert(choiceComputer())
// Battle
