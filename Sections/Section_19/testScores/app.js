const testScores = {
    keenan: 88,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 22
}

// for(let student in testScores) {
//     console.log(`student got ${testScores[student]}`);
// }

let total = 0;
let scores = Object.values(testScores);  //don't forget to put a parameter in Object.values(). it's a function!
for(let score of scores) {    //Don't forget "let"!!!!!!!
    total += score;
}
let average = total/scores.length;
console.log(average);