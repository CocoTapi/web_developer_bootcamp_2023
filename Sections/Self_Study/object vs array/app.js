const testScoresObj = {
    keenan: 88,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 22
}

const studentScoreList = [
    {
        name: "keenan",
        score: 88
    },
    {
        name: "damon",
        score: 67
    }
]

let total = 0;
let count = 0;
let highestScore = 0;
let highestStudent = "";
for (const student of studentScoreList) {
    count++;
    if(student.score > highestScore) {
        highestScore = student.score;
        highestStudent = student.name;
    }
    total += student.score;
}

const average = total/count;
console.log(`the average class score is: ${average}`);
console.log(`the highest score was ${highestScore} achieved by student: ${highestStudent}`)