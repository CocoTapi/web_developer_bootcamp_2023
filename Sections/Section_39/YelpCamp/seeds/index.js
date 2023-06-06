const mongoose = require('mongoose');
const Campground = require("../models/campground");
const cities = require('./cities');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("Database connected");
});

// const seedDB = async() => {
//     await Campground.deleteMany({});
//     const c = new Campground({title: 'purple field'});
//     await c.save();
// }

const seedDB = async() => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random()*1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`
        })
        await camp.save();
    }
}

seedDB();


