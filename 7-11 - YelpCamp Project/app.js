
// boilerplate
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const wrapAsync = require('./utilities/wrapAsync')
const ExpressError = require('./utils/ExpressError')
const methodOverride = require('method-override')
const Campground = require('./models/campground') // import the campground model


// connect mongoose. the link says which port and database to use. lets create and use a movies database
mongoose.connect('mongodb://127.0.0.1:27017/yelpCamp'/* , {useNewUrlParser: true} */) // passing in options is no longer required

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

// routes
    app.get('/', (req, res) => {
        //res.send('hello from yelpcamp!')
        res.render('home')
    })
    app.get('/campgrounds', wrapAsync(async (req, res) => {
        const campgrounds = await Campground.find({}) // grab all campgrounds
        res.render('campgrounds/index', {campgrounds})
    }))

    // create
    app.get('/campgrounds/new', (req, res) => {
        res.render('campgrounds/new')
    })
    app.post('/campgrounds', wrapAsync(async (req, res) => {
        // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
        //try { // we no longer need a try catch in here since we have the wrap async function
            const campground = new Campground(req.body.campground)
            await campground.save()
            res.redirect(`/campgrounds/${campground._id}`)
        //} catch (e) { // if we get an error this will send us to the custom error handler (app.use) we put in down below
        //    next(e)
        //}
    }))

    // read (show details)
    app.get('/campgrounds/:id', wrapAsync(async (req, res) => {
        const campground = await Campground.findById(req.params.id)
        res.render('campgrounds/show', {campground})
    }))

    // update
    app.get('/campgrounds/:id/edit', wrapAsync(async (req, res) => {
        const campground = await Campground.findById(req.params.id)
        res.render('campgrounds/edit', {campground})
    }))
    app.put('/campgrounds/:id', wrapAsync(async (req, res) => {
        //res.send('it worked!')
        const {id} = req.params
        const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}) // using the spread operator
        res.redirect(`/campgrounds/${campground._id}`)
    }))

    // delete
    app.delete('/campgrounds/:id', wrapAsync(async (req, res) => { // could use any route here besides a get but were going with delete
        // were using method override in the html form to send a post request as a delete
        
        const {id} = req.params
        await Campground.findByIdAndDelete(id)
        res.redirect('/campgrounds')
    }))


    // error handler (this will catch every error that comes from a wrapAsync function)
    app.all('*', (req, res, next) => { // * will respond to all requests
        //res.send('404!!!')
        next(new ExpressError('Page Not Found', 404)) // this will pass the error down to the app.use below
    })

    app.use((err, req, res, next) => {
        const {statusCode = 500, message = 'Something went wrong'} = err // when destructuring, its a good idea to give everything a default value
        res.status(statusCode).send(message)
    })



// set up localhost port
app.listen(3000, () => {
    console.log('listening on port 3000!')
})
