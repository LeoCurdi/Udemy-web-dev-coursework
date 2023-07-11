
// require mongoose
const mongoose = require('mongoose')

// connect mongoose. the link says which port and database to use. lets create and use a movies database
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser: true})

console.log('it worked')


// we're going to create a schema with some constraints

const productSchema = new mongoose.Schema({
/*     name: String,
    price: Number,
    isOnSale: Boolean */

    // more robust way of setting this up
    name: {
        type: String,
        required: true,
        maxLength: 20 // 20 characters
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive'] // set up a custom error message
    },
    isOnSale: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'] // entered size value has to be in this array 
    },
    categories: [String] // categories must be an array of strings
})

const Product = mongoose.model('Product', productSchema)

const bike = new Product({name: 'Mountain Bike', price: 599.99, categories: ['Cycling', 'Outdoors']})
bike.save()
    .then(data => {
        console.log('added', data)
    })
    .catch(e => {
        console.log('error', e)
    })


// validating updates
    Product.findOneAndUpdate({name: 'Bike'}, {price: 499.99}, {new: true, runValidators: true})


// defining instance methods
    productSchema.methods.toggleOnSale = function() { // we dont want to use an arrow function here
        this.onSale = !this.onSale
        return this.save()
    }

    productSchema.methods.addCategory = function(newCat) {
        this.categories.push(newCat)
        return this.save()
    }



    const findProduct = async () => {
        const foundProduct = await Product.findOne({name: 'Bike Helmet'})
        console.log(foundProduct)
        await foundProduct.toggleOnSale()
        console.log(foundProduct)
        await foundProduct.addCategory('Outdoors')
        console.log(foundProduct)
    }

    findProduct()



// defining static methods
    productSchema.statics.fireSale = function() {
        return this.updateMany({}, {onSale: true, price: 0}) // the first empty bracket means update all
    }

    Product.fireSale().then(res => console.log(res))






