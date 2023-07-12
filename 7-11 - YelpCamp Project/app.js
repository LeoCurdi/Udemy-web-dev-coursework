
// boilerplate
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
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

// routes
    app.get('/', (req, res) => {
        //res.send('hello from yelpcamp!')
        res.render('home')
    })
    app.get('/campgrounds', async (req, res) => {
        const campgrounds = await Campground.find({}) // grab all campgrounds
        res.render('campgrounds/index', {campgrounds})
    })

    // create
    app.get('/campgrounds/new', (req, res) => {
        res.render('campgrounds/new')
    })
    app.post('/campgrounds', async (req, res) => {
        const campground = new Campground(req.body.campground)
        await campground.save()
        res.redirect(`/campgrounds/${campground._id}`)
    })

    // read (show details)
    app.get('/campgrounds/:id', async (req, res) => {
        const campground = await Campground.findById(req.params.id)
        res.render('campgrounds/show', {campground})
    })

    // update
    app.get('/campgrounds/:id/edit', async (req, res) => {
        const campground = await Campground.findById(req.params.id)
        res.render('campgrounds/edit', {campground})
    })
    app.put('/campgrounds/:id', async (req, res) => {
        //res.send('it worked!')
        const {id} = req.params
        const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}) // using the spread operator
        res.redirect(`/campgrounds/${campground._id}`)
    })

    // delete
    app.delete('/campgrounds/:id', async (req, res) => { // could use any route here besides a get but were going with delete
        // were using method override in the html form to send a post request as a delete
        
        const {id} = req.params
        await Campground.findByIdAndDelete(id)
        res.redirect('/campgrounds')
    })



// set up localhost port
app.listen(3000, () => {
    console.log('listening on port 3000!')
})
