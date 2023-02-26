// // 1,2,3,,,,,20
// for (let i = 1; i <=20; i++){
//     console.log(i);
// }

// //100, 90, 80,,,,0 
// for (let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }

// //Loop over the people array with a for loop, printing out each name in uppercase letters.
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++){
//     console.log(people[i].toUpperCase());
// }

// Nesting loops

//i is:1
    //j is: 1
    //j is: 2
    //j is: 3
//i is 2 ....
// for (let i = 1; i <= 10; i++){
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++){
//         console.log(`       j is: ${j}`);
//     }
// }



// list of names with a row#
const seatingChart = [
	['Ken', 'Erik', 'Namita' ],
	['Geo', 'John', 'Antonio', 'Kevin'],
	['Yuma', 'Sakura', 'Jack', 'Erika']
	]

for (i = 0; i < seatingChart.length; i++){
    console.log(`ROW #${i + 1}`);
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}