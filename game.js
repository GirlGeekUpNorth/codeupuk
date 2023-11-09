let player = prompt("Enter rock (r), paper (p) or scissors (s)")

if (player == "r") {
    alert("You have chosen ROCK")
}
else if (player == "p") {
    alert("You have chosen PAPER")
}
else {
    alert("You have chosen SCISSORS")
}

let random = Math.floor(Math.random() * 3) + 1
let computer = 0

if (random == 1) {
    alert("Computer has chosen ROCK");
    computer = "r";
}
else if (random == 2) {
    alert("Computer has chosen PAPER");
    computer = "p";
}
else {
    alert("Computer has chosen SCISSORS");
    computer = "s";
}

if (player == computer) {
    alert("It's a DRAW")
}
else if (player == "r") {
    if (computer == "s") {
        alert("You win!");
    }
    else {
        alert("You lose :(")
    }
}
else if (player == "p") {
    if (computer == "r") {
        alert("You win!");
    }
    else {
        alert("You lose :(")
    }
}
else {
    if (computer == "p") {
        alert("You win!");
    }
    else {
        alert("You lose :(")
    }
}

