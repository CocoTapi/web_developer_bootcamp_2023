const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

//make a model using that schema
mongoose.model('Movie', movieSchema);

//save this result to a variable
const Movie = mongoose.model('Movie', movieSchema);

const HarryPotter1 = new Movie({
    title:"HarryPotter1",
    year: 2001,
    score: 7.6,
    rating: 'R',
});
