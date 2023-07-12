
const mongoose = require('mongoose')

// we dont need to connect to the database in this file bc were 
// creating the model here but using it elsewhere


// make schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
