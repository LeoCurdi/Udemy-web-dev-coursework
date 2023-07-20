
const mongoose = require('mongoose')
const Review = require('./review')
const Schema = mongoose.Schema // shorten mongoose.Schema to just Schema


// create the campground model
const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    // define an array that contains references to reviews for a specific campground
    reviews: [ 
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

// DELETE ALL ASSOCIATED REVIEWS AFTER A CAMP IS DELETED
// this is the mongoose middleware that is called when a camp is deleted
CampgroundSchema.post('findOneAndDelete', async function (campground) {
    if (campground) {
        await Review.deleteMany({
            _id: {
                $in: campground.reviews
            }
        })
    }
})


// export the model
module.exports = mongoose.model('Campground', CampgroundSchema)
