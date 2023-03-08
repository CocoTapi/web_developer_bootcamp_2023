//Write a function called validUserNames that accepts an array of usernames (strings).
//It should return a new array, containing only the usernames that are less than 10 characters.

function validUserNames (names) {
    return names.filter(name => name.length < 10);
}


/**
 * Define a function called allEvens that accepts a single array of numbers.  
 * If the array contains all even numbers, return true.  Otherwise, return false. 
 */

function allEvens (numbers) {
    return numbers.every(num => num % 2 === 0);
}