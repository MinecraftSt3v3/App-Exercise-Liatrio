/* ** LIATRIO **
 * Developer: Steven Mendez
 * Created: April 5th 2022
 * Description: Simple node app that shows my name
 * And the current time 
 */

/*
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
*/


const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;
// program to display the date



app.get('/', (req, res) => {

  // get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();


res.write(('<h1> My name is Steven Mendez </h1>'));
res.write(('<h1> Date: ' + n + ' </h1>'));
res.write(('<h1>Time:  ' + time + '</h1>' ));

res.end();
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
