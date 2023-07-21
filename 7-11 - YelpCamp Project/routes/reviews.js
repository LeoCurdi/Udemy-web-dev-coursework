
const express = require('express')
const router = express.Router({mergeParams: true})

const wrapAsync = require('../utilities/wrapAsync')
const {reviewSchema} = require('../schemas.js')
const ExpressError = require('../utilities/ExpressError')
const Campground = require('../models/campground') // import the campground model
const Review = require('../models/review')


// middleware
const validateReview = (req, res, next) => {
    const {error} = reviewSchema.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }
    else {
        next() // we have to call next on success in order to make it past the middleware
    }
}



// all review routes

// post review
router.post('/', validateReview, wrapAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    
    // flash a confirmation message
    req.flash('success', 'Created new review!')

    res.redirect(`/campgrounds/${campground._id}`)
}))

// delete review
router.delete('/:reviewId', wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    
    // flash a confirmation message
    req.flash('success', 'Successfully deleted review!')

    res.redirect(`/campgrounds/${id}`);
}))


// export our router
module.exports = router