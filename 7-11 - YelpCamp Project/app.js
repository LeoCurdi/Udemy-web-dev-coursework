
// boilerplate
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const session = require('express-session')
const flash = require('connect-flash')
const ExpressError = require('./utilities/ExpressError')
const methodOverride = require('method-override')

const campgrounds = require('./routes/campgrounds')
const reviews = require('./routes/reviews')


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
app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig = {
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + (1000 * 60 * 60 * 24 * 7), // thats in milliseconds so this says expire a week from now
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash())

// flash middleware
app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})



// routes
    app.get('/', (req, res) => {
        //res.send('hello from yelpcamp!')
        res.render('home')
    })

    // all campground routes come from this router
    app.use('/campgrounds', campgrounds)

    // all reviews routes come from this router
    app.use('/campgrounds/:id/reviews', reviews)




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
