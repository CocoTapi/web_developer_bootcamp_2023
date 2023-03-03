//Define a function called capitalize that accepts a string argument and 
//returns a new string with the first letter capitalized 
//(but the rest of the string unchanged).  

//For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"

function capitalize(str) {
    let firstLetter = str[0].toUpperCase();  
    let otherLetter = str.slice(1);
    return firstLetter + otherLetter;
}


/**
 * This function recieves an array and iterates over it.
 * Then, it calls the capitalize function on each item in the array
 * finally, it returns a new array which is the copy of the original array
 * 
 */
function capitalizeList(arr) {
    const newArr = [];
    for (const index in arr) {
        newArr[index] = capitalize(arr[index]);
    }
    return newArr;
}



const familyList = [
    'shiori loves dodger',
    'zack loves shiori',
    'dodger loves food'
]

const capitalizedFamilyList = capitalizeList(familyList);

console.log(capitalizedFamilyList);
console.log(familyList);
console.log(newArr);  //gives error "newArr is not defined" because newArr is only defined in the function.