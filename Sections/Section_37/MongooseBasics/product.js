const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/productApp')
    .then(() => {
        console.log("CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    })

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        onSale: {
            type: Boolean,
            default: false,
        },
        categories: [String]
    })

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product ({ name: 'Bike Helmet ver. 4', price: 32.99, categories: ['Cycling', 'Safety']});
    bike.save()
        .then(data => {
            console.log("IT WORKED");
            console.log(data);
        })
        .catch(err => {
            console.log("OH NO ERROR!");
            console.log(err);
        })

    