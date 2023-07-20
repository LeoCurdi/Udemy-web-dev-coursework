
const mongoose = require('mongoose')
const Schema = mongoose.Schema // shorten mongoose.Schema to just Schema

const reviewSchema = new Schema({
    body: String,
    rating: Number
})


module.exports = mongoose.model("Review", reviewSchema)
