
// require mongoose
const mongoose = require('mongoose')

// connect mongoose. the link says which port and database to use. lets create and use a movies database
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp', {useNewUrlParser: true})

console.log('it worked')


// set up a template for movie items
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// set up a collection
const Movie = mongoose.model('Movie', movieSchema) // 'Movie' has to be uppercased and not plural. the collection will be auto named 'movies'

// Create
    // Note: the following code will create movie object each time index.js is run in node, so we'll keep getting duplicates

    // we now have a movie item
    const amadeus = new Movie({
        title: 'Amadeus',
        year: 1986,
        score: 9.2,
        rating: 'R'
    })

    // save the new movie item
    amadeus.save()

    Movie.insertMany([
        { title: 'Skyfall', year: 2013, score: 9.6, rating: 'R' },
        { title: 'Cars', year: 2004, score: 9.1, rating: 'E' }
    ]) // insert many doesnt need you to call save because it does it automatically
        .then(data => { // we do this because insert many takes time so it returns a promise - we love asyncJS
            console.log('it worked')
            console.log(data)
        })
        .catch(err => {
            console.log('error!', err)
        })


// Read aka find
    console.log('searching for movie . . .')
    Movie.find({title: 'Skyfall'})
        .then(m => console.log(m))

// Update
    Movie.updateOne({title: 'Amadeus'}, {year: 1984})
        .then(res => console.log(res))

// Delete
    Movie.deleteMany({title: 'Cars'})
        .then(msg => console.log(msg))
    


