const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

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
app.use(methodOverride('_method'));

app.get('/cat', (req, res) => {
    console.log("MEOW")
})

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index.ejs', {products})
})

//this needs before the get request from id. Otherwise it assumes "/new" is id and doesn't work.  
app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', {product});
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product});
})

app.put('/products/:id', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`);
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.render('products/show', {product: newProduct});
})

app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})