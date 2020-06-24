const express = require('express') // require express is the same as importing express
const ctrl = require('./controller')
const app = express() // creating an instance of express and saving it equal to a variable.

app.use(express.json()) // parse JSON into Javascript using top level middleware

app.get('/api/movies', ctrl.getMovies) // endpoints

app.listen(3456, () => console.log('HERE ON THE SERVER!'))