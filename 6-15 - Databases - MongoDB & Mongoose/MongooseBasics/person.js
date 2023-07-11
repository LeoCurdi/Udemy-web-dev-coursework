
// require mongoose
const mongoose = require('mongoose')

// connect mongoose. the link says which port and database to use. lets create and use a movies database
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser: true})

console.log('it worked')



// lets do some mongoose virtual getters and setters

// make schema
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// get full name
personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
})

// this is some middleware
personSchema.pre('save', async function() { // pre runs before the save function
    console.log('about to save')
})
personSchema.post('save', async function() { // post runs after the save function
    console.log('just saved!')
})

const Person = mongoose.model('Person', personSchema)

const tammy = new Person({first: 'Tammy', last: 'Chow'})
//enter 'tammy.fullname' in the node console and it will give you the full name using the method. there is no property for full name because it is a waste of space to store full name when you have both names already

