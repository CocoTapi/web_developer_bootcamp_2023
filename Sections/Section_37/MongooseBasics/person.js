const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/personApp')
    .then(() => {
        console.log("CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    })

    const personSchema = new mongoose.Schema({
        first: String,
        last: String
    })

    personSchema.virtual('fullName').get(function () {
        return `${this.first} ${this.last}`;
    })

    personSchema.pre('save', async function() {
        console.log("ABOUT TO SAVE!!!!")
    })

    personSchema.post('save', async function() {
        console.log("JUST SAVED!!!!")
    })
    const Person = mongoose.model('person', personSchema);