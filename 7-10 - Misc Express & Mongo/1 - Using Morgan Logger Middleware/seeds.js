
// this file contains a bunch of data that can be used to fill our database initially


// get our model
const Product = require('./models/product')


// connect mongoose. the link says which port and database to use. lets create and use a movies database
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/farmStandApp'/* , {useNewUrlParser: true} */)
    .then(() => {
        console.log('Mongo connection open!')
    })
    .catch(error => {
        console.log('Mongo connection error', error)
    })


// this saves one product to the database
/* const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
})

p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    }) */


// this saves many products to the database
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
