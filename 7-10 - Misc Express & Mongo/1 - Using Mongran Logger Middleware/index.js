
// express boilerplate
const express = require('express')
const app = express()
const morgan = require('morgan')

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
    res.send('you need to enter a password!')
}


// routes for creating products
app.get('/', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('home page!')
})
app.get('/dogs', (req, res) => {
    res.send('woof!')
})
app.get('/secret', verifyPassword, (req, res) => { // verifyPassword is a middleware
    res.send('insert secret here')
})



// if none of the gets were matched (wrong url aka error 404)
app.use((req, res, next) => {
    res.status(404).send('Not Found!')
})


// set up localhost port
app.listen(3000, () => {
    console.log('listening on port 3000!')
})