const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("Database connected");
});

const Campground = require("../models/campground");

const seedDB = async() => {
    await campground.deleteMany({});
    const c = new Campground({title: 'purple field'});
    await c.save();
}



