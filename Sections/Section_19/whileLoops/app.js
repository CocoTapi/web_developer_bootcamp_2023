// //won't stop until you type a secret code

// const SECRET = "Banana"

// let guess = prompt("enter the secret code...")
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("Congrats you got the secret!!!");


//copying what you type until you type "stop copying me"
let input = prompt("Hey, say something!")

while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN");