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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/cat', (req, res) => {
    console.log("MEOW")
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index.ejs', {products})
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', {product});
})

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.post('/products', (req, res) => {
    console.log(req.body);
    res.send("making your product");
})

app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})