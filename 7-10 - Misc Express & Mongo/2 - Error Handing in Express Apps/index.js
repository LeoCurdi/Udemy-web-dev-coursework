
// express boilerplate
const express = require('express')
const app = express()
const morgan = require('morgan')

// our custom error class
const AppError = require('./appError')

// this says to use this morgan middleware on every request
app.use(morgan('tiny'))
/* app.use((req, res, next) => {
    console.log('my first middleware')
    next()
}) */
app.use((req, res, next) => {
    //req.method = 'GET' // make all requests into gets
    req.requestTime = Date.now() // get the time that all requests are made
    console.log(req.method, req.path)
    next()
})
app.use('/dogs', (req, res, next) => {
    console.log('doggos')
    next()
})

// authentication middleware
const verifyPassword = (req, res, next) => {
    const {password} = req.query
    if (password === 'chickens') {
        next()
    }
    // else (next is like a return)
    //res.status(401)
    throw new AppError('Password required!', 401)
    //res.send('you need to enter a password!')
}



app.get('/', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('home page!')
})

// error route
app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    res.send('woof!')
})
app.get('/secret', verifyPassword, (req, res) => { // verifyPassword is a middleware
    res.send('insert secret here')
})
app.get('/admin', (req, res) => {
    throw new AppError('you are not an admin!', 403)
})



// if none of the gets were matched (wrong url aka error 404)
app.use((req, res, next) => {
    res.status(404).send('Not Found!')
})


// lets define our own error handler (it has to be below all other app.uses)
/* app.use((err, req, res, next) => {
    console.log('ERROR!', err)
    //res.status(500).send('this is an error message and the status is set to 500')
    next(err) // next wil allow to still use express built in error handling after our custom error handler
}) */
app.use((err, req, res, next) => {
    const {status = 500} = err // 500 is a default if the err has no status
    const {message = 'something went wrong'} = err
    res.status(status).send('Error!', message)
})


// set up localhost port
app.listen(3000, () => {
    console.log('listening on port 3000!')
})