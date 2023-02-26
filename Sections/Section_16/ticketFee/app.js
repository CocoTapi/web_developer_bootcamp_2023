//0 - 4 free
//5 - 18 $10
//19 - 64 $20
//65+ free

const age = 2;

if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 19) {
    console.log("$10");
} else if (age >= 19 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE");
}

// // using NOT '!'
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You are not a baby or senior");
// } 
