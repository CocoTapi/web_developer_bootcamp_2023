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
            // required: true
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

    // productSchema.methods.greet = function() {
    //     console.log("HELLO! HI!! HOWDY!!!");
    //     console.log(`-from ${this.name}`);
    // }

    // productSchema.methods.toggleOnSale = function(){
    //     this.onSale = !this.onSale;
    //     return this.save();
    // }

    productSchema.methods.addCategory = function (newCategory){
        console.log('Adding category:', newCategory);
        this.categories.push(newCategory);
        return this.save();
    }

    productSchema.statics.fireSale = function() {
        return this.updateMany({}, {onSale: true, price: 0});
    }

    productSchema.statics.outOfStock = function() {
        return this.updateMany({}, {onSale: false});
    }

    const Product = mongoose.model('Product', productSchema);

    //this is for .addCategory method
    const findProduct = async() => {
        try {
            const foundProduct = await Product.findOne({name: "Mountain Bike"});
        console.log(foundProduct);
        // await foundProduct.toggleOnSale();
        // console.log(foundProduct);
        await foundProduct.addCategory('Sports')
        console.log(foundProduct);
        } catch (error) {
            console.log(error);
        }
    }

    Product.fireSale().then(res => console.log(res));

    // findProduct();

    // this is for .greet() method
    // const findProduct = async() => {
    //     try {
    //         const foundProduct = await Product.findOne({name:'Mountain Bike'});
    //         foundProduct.greet();
    //     } catch (err) {
    //         console.log(err)
    //     }
        
    // }

    // findProduct();


    //This is to register a new product 
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
