
/* ** LIATRIO **
 * Developer: Steven Mendez
 * Created: April 5th 2022
 * Description: Simple node program that shows my name
 * And dynamic timestamp
 */

const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 80;



app.get('/', (req, res) => {
		// get local machine date time
		const date = new Date();

		// get the date as a string
		const n = date.toDateString();

		// get the time as a string
		const time = date.toLocaleTimeString();

		res.status(200).send({
            message: 'My name is Steven Mendez',
            timestamp: +new Date
         })
});


app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
});
