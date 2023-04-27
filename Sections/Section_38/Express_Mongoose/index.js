const express = require("express");
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.get('/cat', (req, res) => {
    console.log("MEOW")
})

app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})