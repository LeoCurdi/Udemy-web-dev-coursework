
// express boilerplate
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// get our model
const Product = require('./models/product')

// connect mongoose. the link says which port and database to use. lets create and use a movies database
mongoose.connect('mongodb://127.0.0.1:27017/farmStandApp'/* , {useNewUrlParser: true} */)
    .then(() => {
        console.log('Mongo connection open!')
    })
    .catch(error => {
        console.log('Mongo connection error', error)
    })


// middleware boilerplate
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// hard code product categories
const categories = ['fruit', 'vegetable', 'dairy']


// route to products page
app.get('/products', async (req, res) => {
    // check query
    const {category} = req.query
    if(category) {
        const products = await Product.find({category})
        res.render('products/index', {products, category})
    }
    else {
        const products = await Product.find({}) // await makes it so we dont need to use a .then .catch here: much easier
        //console.log(products)
        //res.send('You\'re on the products page!')
        res.render('products/index', {products, category: 'All'})
    }
}) 


// routes for creating products
app.get('/products/new', (req, res) => {
    res.render('products/new', {categories})
})
app.post('/products', async (req, res) => {
    //console.log(req.body)
    const newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    //res.send('making product')
    res.redirect(`/products/${newProduct._id}`)
})

// routes for updating products
app.get('/products/:id/edit', async (req, res) => {
    // look up the product by id
    const {id} = req.params // get the product id by destructuring
    const product = await Product.findById(id)

    res.render('products/edit', {product, categories})
})
app.put('/products/:id', async (req, res) => { // were using a put but we could have used a patch since were updating
    // we need to use method override, since the html form is submitting a post that we need to convert to a put
    // method override is in the action line of the form
    
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    //console.log(req.body)
    //res.send('put!')
    res.redirect(`/products/${product._id}`)
})


// route for deleting products
app.delete('/products/:id', async (req, res) => {
    // using method override for delete
    const {id} = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})


// route to details page for a product
app.get('/products/:id', async (req, res) => {
    const {id} = req.params // get the product id by destructuring
    const product = await Product.findById(id)
    //console.log(product)
    //res.send('details page!')
    res.render('products/show', {product})
})





// set up localhost port
app.listen(3000, () => {
    console.log('listening on port 3000!')
})