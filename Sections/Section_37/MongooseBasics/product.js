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
            required: true,
            min: [0, 'Price must be positive number!']
        },
        color: {
            type: String,
            required: true
        },
        onSale: {
            type: Boolean,
            default: false,
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
            //now you can only register only'S', 'M', 'L' sizes. 
        }
    })

    productSchema.methods.greet = function() {
        console.log("HELLO! HI!! HOWDY!!!");
        console.log(`-from ${this.name}`);
    }

    const Product = mongoose.model('Product', productSchema);
    
    const findProduct = async() => {
        try {
            const foundProduct = await Product.findOne({name:'Mountain Bike'});
            foundProduct.greet();
        } catch (err) {
            console.log(err)
        }
        
    }

    findProduct();

    // const bike = new Product ({ name: 'Bike Pump', price: 10.99, color: 'white', categories: ['Cycling']});
    // bike.save()
    //     .then(data => {
    //         console.log("IT WORKED");
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log("OH NO ERROR!");
    //         console.log(err);
    //     })

// Product.findOneAndUpdate({name: 'Bike Pump'}, {price: 9.99}, {new: true, runValidators: true})
//     .then(data => {
//     console.log("IT WORKED");
//     console.log(data);
//     })
//     .catch(err => {
//     console.log("OH NO ERROR!");
//     console.log(err);
//     })
