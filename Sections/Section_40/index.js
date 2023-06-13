const express = required("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to My Home Page");
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})