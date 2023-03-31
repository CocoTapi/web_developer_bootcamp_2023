// for (let i=0; i < 10; i++) {
//     console.log("Hello New World!");
// }

const fs = require('fs');
console.log("I am before mkdir!");

// fs.mkdir ("Dogs", {recursive: true}, (err) => {
//     console.log("In the callback!")
//     if (err) throw err;
// })

fs.mkdirSync("Cats");

console.log("I come after mkdir in the file!");