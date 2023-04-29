const Product = require('./models/product'); 
//require this to use the schema in product.js

const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO Mongo ERROR!!!");
        console.log(err);
    })

const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.65,
    category: 'fruit'
})

p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })
    