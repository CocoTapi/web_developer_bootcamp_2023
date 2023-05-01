const express = require("express");
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.get('/cat', (req, res) => {
    console.log("MEOW")
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.send("ALL PRODUCTS")
    // res.render('products/index', {products})
})

app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})