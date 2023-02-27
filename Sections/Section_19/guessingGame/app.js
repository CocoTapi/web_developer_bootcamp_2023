let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        console.log(prompt("Too high! Enter a new guess! or type 'q' to quit."));
    } else {
        console.log(prompt("Too low! Enter a new guess! or type 'q' to quit."));
    }
}

if (guess === 'q') {
    console.log("Okay. You Quit.");
} else {
    console.log("Congrats! You win!");
    console.log(`It took you ${attempts} guesses`);
}


