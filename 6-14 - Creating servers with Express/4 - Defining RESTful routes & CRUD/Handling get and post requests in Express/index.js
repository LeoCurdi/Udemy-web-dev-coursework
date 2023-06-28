
const express = require('express')
const app = express()
const path = require('path')
const {v4: getId} = require('uuid') // destructure uuid version 4 and rename it getId (can rename it whatever)
const methodOverride = require('method-override')

// this is what we have to do if we want to access the request body
app.use(express.urlencoded({extended: true})) // app.use runs on every request, regardless of path
app.use(express.json()) // we also have to tell express to parse json requests
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views')) // set the views path
app.set('view engine', 'ejs') // set the view engine to ejs


// lets create a RESTful architecture
    // we will be working with comments, but since we dont have a database, well use an array
    // we want full CRUD, so create, read, update, delete

// array of comments
let comments = [ // array of objects
    {
        id: getId(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: getId(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: getId(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: getId(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

// this will allow index.ejs to display all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})
// now lets create new comments. we need a get and a post for this
    app.get('/comments/new', (req, res) => {
        res.render('comments/new')
    })
    app.post('/comments', (req, res) => {
        const {username, comment} = req.body // destructure the post
        comments.push({username, comment, id: getId()}) // add the data of the post to the comments array
        //res.send('it worked')
        res.redirect('/comments') // we want to redirect the user back to the comments page after they submit
    })
// view a specific comnment (read)
    app.get('/comments/:id', (req, res) => {
        const {id} = req.params // get the id by destructuring
        const comment = comments.find(c => c.id === id) // find the comment with the specified id
        res.render('comments/show', {comment}) // pass in the resulting comment
    })
// edit a comment. need it install method-override
    app.get('/comments/:id/edit', (req, res) => {
        const {id} = req.params 
        const comment = comments.find(c => c.id === id)
        res.render('comments/edit', {comment})
    })
    app.patch('/comments/:id', (req, res) => {
        console.log('request to update a comment', req.body.comment)

        const newCommentText = req.body.comment
        const {id} = req.params // get the id by destructuring
        const targetComment = comments.find(c => c.id === id)

        // update the comment by changing the text
        targetComment.comment = newCommentText

        res.redirect('/comments')
    })
// delete a comment
    app.delete('/comments/:id', (req, res) => {
        const {id} = req.params
        const targetComment = comments.find(c => c.id === id)
        comments = comments.filter(c => c.id !== id) // move all comments to a new array except the one we want to delete
        
        res.redirect('/comments')
    })





app.get('/tacos', (req, res) => {
    res.send('get /tacos response')
})

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body // destructure the data from the request
    //res.send('post /tacos response')
    res.send(`here are your ${qty} ${meat} tacos`)
})




app.listen(3000, () => {
    console.log('listening on port 3000')
})


