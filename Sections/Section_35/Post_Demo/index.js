const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid} = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: "lol that is so funny!"
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: 'Dodger',
        comment: "I like sun bathing on my couch"
    },
    {
        id: uuid(),
        username: 'Salty',
        comment: "That looks so delicious!"
    },
    {
        id: uuid(),
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
    comments.push({username, comment, id: uuid()});
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
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

