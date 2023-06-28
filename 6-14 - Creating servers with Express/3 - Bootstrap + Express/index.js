
// had to install ejs: 'npm i ejs', also express 'npm i express'
// need to create a directory called 'views' for the templates to exist in
    // 'mkdir views', 'touch views/home.ejs'

const express = require('express')
const app = express()
const path = require('path') // path comes built in with node
const redditData = require('./data.json') // pull data froma json file


// load in static stuff like stylesheets or images
app.use(express.static(path.join(__dirname, 'public'))) // weve loaded in the public directory, which contains a stylesheet that we can refer to in our templates


// tell express to use ejs. we dont needs to require ejs because express will do it automatically
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')) // this is for if you run this file but youre in a different working directory. path cats the directory paths together so ejs still works

app.get('/', (req, res) => {
    //res.send('hi')
    res.render('home', {name: 'home'}) // we dont need to say 'views/home.ejs' since we set the view engine to ejs
})


app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', {rand: num, name: 'random'}) // random.ejs
})


app.get('/r/:subreddit', (req, res) => { // subreddits in the json file: chickens, soccer, mightyharvest
    const {subreddit} = req.params
    
    const data = redditData[subreddit]

    if (data) {
        res.render('subreddit', { ...data }) // were spreading data into the object that we pass in when rendering the subreddit template
    } else {
        res.render('notfound', {subreddit})
    }
})


// loops practice in an ejs file
app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Winston', 'Stephanie'
    ]
    res.render('cats', {cats, name: 'cats'}) // we can just say 'cats' instead of 'cats: cats'
})



app.listen(3000, () => {
    console.log('server running on port 3000')
})