
// boilerplate
const mongoose = require('mongoose')
const Campground = require('../models/campground') // import the campground model
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')
const campground = require('../models/campground');

// connect mongoose. the link says which port and database to use. lets create and use a movies database
mongoose.connect('mongodb://127.0.0.1:27017/yelpCamp'/* , {useNewUrlParser: true} */) // passing in options is no longer required

// mongoose connection logic
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// randomly generate an index in an array
const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    // start by removing everything from the database
    await Campground.deleteMany({}) // delete all

    // randomly generate a bunch of campgrounds
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save()
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close() // close the database
    })