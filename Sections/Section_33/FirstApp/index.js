const express = require('express');
const app = express();

app.listen( 3000, () => {
    console.log('LISTENING ON PORT 3000!!!');
})

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!!");
//     res.send("<h1>We got a request! This is a response!!!!</h1>");
// })

app.get('/', (req, res) => {
    res.send("This is my home page!!!");
})

//This makes a path 
//localhost:3000/r/night(type anything you want) 
app.get('/r/:subreddit', (req, res) => {
    const {
        params:{subreddit}, 
        body: {divs, h1},
        body
    } = req;
    //console.log(body)

    res.send(`Browsing the ${subreddit} subreddit`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`Viewing Post Id: ${postId} on the ${subreddit} subreddit!!!`);
})

app.get('/cat', (req, res) => {
    res.send("<h1>meow!!!</h1>");
})

app.get('/dog', (req, res) => {
    res.send("woof!!!");
})

//This "*" need to be the last. Everthing after this are ignored.
app.get('*', (req, res) => {
    res.send("I don't know the path!!!!")
})