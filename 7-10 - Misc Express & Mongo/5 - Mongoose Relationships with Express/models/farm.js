const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    // were using a two way approach, where farm contains product id,s and products contain a farm id
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED
// this is the mongoose middleware that is called when a farm is deleted
farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        // delete all products where their id is in the array of product ids in the deleted farm
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        console.log(res);
    }
})

const Farm = mongoose.model('Farm', farmSchema);


// dont forget to export the farm model
module.exports = Farm;