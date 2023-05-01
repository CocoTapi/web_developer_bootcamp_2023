const Product = require('./models/product'); 
//require this to use the schema in product.js

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO Mongo ERROR!!!");
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.65,
//     category: 'fruit'
// })

// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [{
    name: 'Cherry Tomatoes',
    price: 1.99,
    category: 'vegetable'
},
{
    name: 'Cucumber',
    price: 1.25,
    category: 'vegetable'
},
{
    name: 'Shisho',
    price: 1.99,
    category: 'vegetable'
},
{
    name: 'Peas',
    price: 2.99,
    category: 'vegetable'
},
{
    name: 'Grapes',
    price: 2.99,
    category: 'fruit'
},
{
    name: 'Corn',
    price: 1.25,
    category: 'vegetable'
},
{
    name: 'Eggs',
    price: 1.25,
    category: 'dairy'
}]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })