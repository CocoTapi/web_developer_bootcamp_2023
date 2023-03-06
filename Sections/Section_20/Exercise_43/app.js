/**
 * Write a function called returnDay. this function takes in one parameter 
 * (a number from 1-7) and returns the day of the week (1 is Monday, 
 * 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, 
 * the function should return null. 
 */

const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    }
    return days[num];
}