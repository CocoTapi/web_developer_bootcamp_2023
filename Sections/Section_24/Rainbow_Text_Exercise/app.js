/**
 * I've provided you with an <h1> element which contains 7 individual spans 
 * (each holding a single letter). 

Please write some JavaScript to make them rainbow-colored! 

In app.js make a variable called colors and contains 
['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] in an array.

Your task is to select all spans, iterate over them, and assign them each one of the colors 
from the colors array.  
 */

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const letters = document.querySelectorAll('span');

for ( let i = 0; i < colors.length; i++) {
    letters[i].style.color = colors[i];
}