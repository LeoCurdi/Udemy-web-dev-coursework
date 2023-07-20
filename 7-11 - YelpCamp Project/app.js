
// boilerplate
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const {campgroundSchema, reviewSchema} = require('./schemas.js')
const wrapAsync = require('./utilities/wrapAsync')
const ExpressError = require('./utilities/ExpressError')
const methodOverride = require('method-override')
const Campground = require('./models/campground') // import the campground model
const Review = require('./models/review')


// connect mongoose. the link says which port and database to use. lets create and use a movies database
mongoose.connect('mongodb://127.0.0.1:27017/yelpCamp') // passing in options is no longer required

// mongoose connection logic
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


// middleware
const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate)

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



// routes
    app.get('/', (req, res) => {
        //res.send('hello from yelpcamp!')
        res.render('home')
    })
    app.get('/campgrounds', wrapAsync(async (req, res) => {
        const campgrounds = await Campground.find({}) // grab all campgrounds
        res.render('campgrounds/index', {campgrounds})
    }))

    // create campground
    app.get('/campgrounds/new', (req, res) => {
        res.render('campgrounds/new')
    })
    app.post('/campgrounds', validateCampground, wrapAsync(async (req, res) => { // were passing in the validate campground function as an argument to the route
        // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
        //try { // we no longer need a try catch in here since we have the wrap async function
        
        const campground = new Campground(req.body.campground)
        await campground.save()
        res.redirect(`/campgrounds/${campground._id}`)
        //} catch (e) { // if we get an error this will send us to the custom error handler (app.use) we put in down below
        //    next(e)
        //}
    }))

    // read (show details) campground
    app.get('/campgrounds/:id', wrapAsync(async (req, res) => {
        const campground = await Campground.findById(req.params.id).populate('reviews')
        res.render('campgrounds/show', {campground})
    }))

    // update campground
    app.get('/campgrounds/:id/edit', wrapAsync(async (req, res) => {
        const campground = await Campground.findById(req.params.id)
        res.render('campgrounds/edit', {campground})
    }))
    app.put('/campgrounds/:id', validateCampground, wrapAsync(async (req, res) => {
        //res.send('it worked!')
        const {id} = req.params
        const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}) // using the spread operator
        res.redirect(`/campgrounds/${campground._id}`)
    }))

    // delete campground
    app.delete('/campgrounds/:id', wrapAsync(async (req, res) => { // could use any route here besides a get but were going with delete
        // were using method override in the html form to send a post request as a delete
        
        const {id} = req.params
        // when we delete a campground, we must delete all reviews for the campground as well
        await Campground.findByIdAndDelete(id) // the middleware that is called by findByIdAndDelete is FindOneAndDelete, so we use that middleware inside campground.js to delete all reviews
        res.redirect('/campgrounds')
    }))



    // post review
    app.post('/campgrounds/:id/reviews', validateReview, wrapAsync(async (req, res) => {
        const campground = await Campground.findById(req.params.id)
        const review = new Review(req.body.review)
        campground.reviews.push(review)
        await review.save()
        await campground.save()
        res.redirect(`/campgrounds/${campground._id}`)
    }))

    // delete review
    app.delete('/campgrounds/:id/reviews/:reviewId', wrapAsync(async (req, res) => {
        const { id, reviewId } = req.params;
        await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/campgrounds/${id}`);
    }))


    // error handler (this will catch every error that comes from a wrapAsync function)
    app.all('*', (req, res, next) => { // * will respond to all requests
        //res.send('404!!!')
        next(new ExpressError('Page Not Found', 404)) // this will pass the error down to the app.use below
    })

    app.use((err, req, res, next) => {
        const {statusCode = 500} = err // when destructuring, its a good idea to give everything a default value
        if (!err.message) err.message = 'Something went wrong'
        res.status(statusCode).render('error', {err})
    })



// set up localhost port
app.listen(3000, () => {
    console.log('listening on port 3000!')
})
