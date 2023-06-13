const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan('tiny'));
//middleware runs only when you have a particular path: /cats
// app.use('/cats', (req, res, next) => {
//     console.log("I love cats");
//     next();
// })

//set a password to open any page
// app.use( (req, res, next) => {
//     const { password } = req.query;
//     if(password === 'dodgerthecat') {
//         next();
//     }
//     res.send("SORRY YOU NEED A PASSWORD");
// }) 

app.get('/', (req, res) => {
    res.send("Welcome to My Home Page");
})

app.get('/cats', (req, res) => {
    res.send("Meow meow ^'w'^")
})

app.use((req, res) => {
    res.status(404).send("NOT FOUND!");
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})