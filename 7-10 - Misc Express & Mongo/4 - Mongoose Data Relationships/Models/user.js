const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('Mongo connection open!')
    })
    .catch(error => {
        console.log('Mongo connection error', error)
    })


/* 
    were modeling a 'one to few' data relationship here, where a single user may have a few addresses, but not many
    we store all addresses directly in the user data
*/
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            // turn off id creation since we dont need an id for each address, given theyre already connected to a user with an id
            _id: { _id: false }, // if this line causes an error, we may be using mongoose 7. fix error by adding an _ before the second id
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

//makeUser()

// we can push new addresses onto the array for user addresses
const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
}

// addAddress('5f4426235f9f6233f9ed0996');