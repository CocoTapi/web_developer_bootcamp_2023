const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const comments = [
    {
        username: 'Todd',
        comment: "lol that is so funny!"
    },
    {
        username: 'Skyler',
        comment: "I like to go birdwatching with my dog"
    },
    {
        username: 'Dodger',
        comment: "I like sun bathing on my couch"
    },
    {
        username: 'Salty',
        comment: "That looks so delicious!"
    },
    {
        username: 'Pikmin',
        comment: "I am not a carrot"
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment})
    res.send("IT WORKED");
})

app.get('/tacos', (req, res) => {
    res.send("Get /tacos response");
})

app.post('/tacos', (req, res) => {
    const { meat, qty} = req.body;
    res.send(`OK, here are your ${qty} ${meat}`);
})

app.listen(3000, () => {
    console.log("ON PORT 3000");
})

