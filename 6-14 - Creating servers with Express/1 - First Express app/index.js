
// start server by running node index.js (must restart server to utilize new code)
// go to localhost:3000 in browser. localhost is a reference to this computer

// Auto restart server with Nodemon!!!:
    // I've installed nodemon globally: 'npm i -g nodemon'. the -g signals global
    // nodemon watches for changes to files, and restarts the server automatically whenever necessary
    // to use, run 'nodemon <file>.js' instead of 'node <file>.js'

const express = require('express')
const app = express() // we need to execute express (which is a function) and save the return

// this will run whenever we have an incoming request (when the browser goes to localhost:3000)
/* app.use((request, response) => {
    console.log('we got a new request!') // this will print in the terminal when you pull up localhost in browser

    // can send a string
    //response.send('hello, we got your request. this is a response')

    // or we can send an object
    response.send({
        color: 'red',
        length: 6
    })

    // lets send some html
    //response.send('<h1>This is a webpage!</h1>')

    // Note: we can pretty much send whatever we want, but we can only have one send
}) */

// Note: we cant have the above response if we also want to have the ones below because the above one will respond to everything and then we cant send any more responses. we could put it at the end tho

// lets add some routes
app.get('/', (req, res) => { // the '/' is the root route, which is equivalent to the commented one above
    console.log('homepage request')
    res.send('homepage request')
})
app.get('/cats', (req, res) => {
    console.log('cat request')
    res.send('cat request')
})
app.get('/dogs', (req, res) => {
    console.log('dog request')
    res.send('dog request')
})
// we can also do one that covers everything using a *, but it has to go at the end, else all the other ones will be ignored
/* app.get('*', (req, res) => {
    console.log('umbrella request')
    res.send('umbrella request')
}) */
// some post requests
app.post('/', (req, res) => {
    console.log('homepage post request')
    res.send('homepage post request')
})


// we dont always want to manually define each route because there may be a lot (ex reddit 'r/something')
// heres the alternate method
app.get('/r/:subreddit', (req, res) => { // go to 'localhost:3000/r/<subreddit>'
    const {subreddit} = req.params // destructure params
    console.log('subreddit request: ', subreddit)
    res.send(`<h1>this is the ${subreddit} subreddit!</h1>`)
})
// another template
app.get('/r/:subreddit/:postId', (req, res) => { // go to 'localhost:3000/r/<subreddit>'
    const {subreddit, postId} = req.params // destructure params
    console.log('subreddit request & post ID: ', subreddit, postId)
    res.send(`<h1>this is post ${postId} of the ${subreddit} subreddit!</h1>`)
})

// query strings
app.get('/search', (req, res) => {
    const {q} = req.query
    
    if (!q) {
        res.send('nothing found if nothing searched')
    }
    else {
        console.log('search request: ', req.query)
        res.send(`<h1>Showing search results for ${q}</h1>`)
    }
})


// this will start the server
app.listen(3000, () => {
    console.log('listening on port 3000!')
})
