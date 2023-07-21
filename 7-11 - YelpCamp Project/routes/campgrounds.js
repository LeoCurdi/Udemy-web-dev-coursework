
const express = require('express')
const router = express.Router()

const wrapAsync = require('../utilities/wrapAsync')
const {campgroundSchema} = require('../schemas.js')
const ExpressError = require('../utilities/ExpressError')
const Campground = require('../models/campground') // import the campground model
const {isLoggedIn} = require('../middleware')


// this is a middleware function that will be used for form validation
// here we use joi to set up some validation / error handling that will work if soemone sends a post request through something like postman
const validateCampground = (req, res, next) => {
    const {error} = campgroundSchema.validate(req.body)
    //console.log(result)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }
    else {
        next() // we have to call next on success in order to make it past the middleware
    }
}


// all campground routes

router.get('/', wrapAsync(async (req, res) => {
    const campgrounds = await Campground.find({}) // grab all campgrounds
    res.render('campgrounds/index', {campgrounds})
}))

// create campground
router.get('/new', isLoggedIn, (req, res) => { // validate if user is logged in
    res.render('campgrounds/new')
})
router.post('/', isLoggedIn, validateCampground, wrapAsync(async (req, res) => { // were passing in the validate campground function as an argument to the route
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
    //try { // we no longer need a try catch in here since we have the wrap async function

    const campground = new Campground(req.body.campground)
    await campground.save()    

    // flash a confirmation message
    req.flash('success', 'Successfully made a new campground!')

    res.redirect(`/campgrounds/${campground._id}`)
    //} catch (e) { // if we get an error this will send us to the custom error handler (app.use) we put in down below
    //    next(e)
    //}
}))

// read (show details) campground
router.get('/:id', wrapAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews')
    
    // if someone searches for a campground that doesnt exist
    if (!campground) {
        req.flash('error', 'Cannot find campground')
        return res.redirect('/campgrounds')
    }

    res.render('campgrounds/show', {campground})
}))

// update campground
router.get('/:id/edit', isLoggedIn, wrapAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
        
    // if someone searches for a campground that doesnt exist
    if (!campground) {
        req.flash('error', 'Cannot find campground')
        return res.redirect('/campgrounds')
    }

    res.render('campgrounds/edit', {campground})
}))
router.put('/:id', isLoggedIn, validateCampground, wrapAsync(async (req, res) => {
    //res.send('it worked!')
    const {id} = req.params
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}) // using the spread operator
    
    // flash a confirmation message
    req.flash('success', 'Campground updated!')

    res.redirect(`/campgrounds/${campground._id}`)
}))

// delete campground
router.delete('/:id', isLoggedIn, wrapAsync(async (req, res) => { // could use any route here besides a get but were going with delete
    // were using method override in the html form to send a post request as a delete
    
    const {id} = req.params
    // when we delete a campground, we must delete all reviews for the campground as well
    await Campground.findByIdAndDelete(id) // the middleware that is called by findByIdAndDelete is FindOneAndDelete, so we use that middleware inside campground.js to delete all reviews
        
    // flash a confirmation message
    req.flash('success', 'Successfully deleted campground!')

    res.redirect('/campgrounds')
}))


// export the campground routes
module.exports = router
