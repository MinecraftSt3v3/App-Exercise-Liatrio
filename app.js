/* ** LIATRIO **
 * Developer: Steven Mendez
 * Created: April 5th 2022
 * Description: Simple node app that shows my name
 * And the current time 
 */


// Display name
var disName = ' Steven Mendez :)';
// Display name
console.log("My name is", disName);


// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date and time 
console.log('Date: ' + n);
console.log('Time: ' + time);
