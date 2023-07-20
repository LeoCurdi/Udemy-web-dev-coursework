const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');
const Farm = require('./models/farm')
const categories = ['fruit', 'vegetable', 'dairy'];


mongoose.connect('mongodb://127.0.0.1:27017/expressRelationshipDemo')
    .then(() => {
        console.log('Mongo connection open!')
    })
    .catch(error => {
        console.log('Mongo connection error', error)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


// FARM ROUTES

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})
// any /:id routes must come at the end because otherwise express will think something like '/new' is an id
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})

app.delete('/farms/:id', async (req, res) => {
    // findByIdAndDelete will call middleware 'findOneAndDelete' so we can use that middleware to delete all products associated with the farm being deleted
    const farm = await Farm.findByIdAndDelete(req.params.id);

    res.redirect('/farms');
})


app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms') // put the user back to the farms page after makinga  new farm
})

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm })
})

// create a new product
app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params; // get the farm by id
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body; // get all info for the new product from the submitted form
    const product = new Product({ name, price, category });
    farm.products.push(product); // push the id of the product onto the associated farm
    product.farm = farm; // give the product the id of the farm as well
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`) // redirect the user to the page for the farm they added a product to
})



// PRODUCT ROUTES

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name');
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})





app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})



