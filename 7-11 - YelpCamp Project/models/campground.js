
const mongoose = require('mongoose')
const Schema = mongoose.Schema // shorten mongoose.Schema to just Schema


// create the campground model
const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
})

// export the model
module.exports = mongoose.model('Campground', CampgroundSchema)