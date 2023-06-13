const express = require("express");
const app = express();
const morgan = require("morgan");

//middleware runs only when you have a particular path: /cats
app.use('/cats', (req, res, next) => {
    console.log("I love cats");
    next();
})

app.get('/', (req, res) => {
    res.send("Welcome to My Home Page");
})

app.get('/cats', (req, res) => {
    res.send("Meow meow ^'w'^")
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})