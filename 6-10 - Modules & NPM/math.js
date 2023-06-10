
const add = (x, y) => x + y

const PI = 3.14

const square = x => x * x

const math = {
    add: add,
    PI: PI,
    square: square
}

// we need to say what we want to export from this file

    // can export a single object
    module.exports = math

    // or export everything individually
    module.exports.add = add
    module.exports.PI = PI
    module.exports.square = square

    // short hand for the above strategy
    exports.add = add

    // we can also do it more directly
    module.exports.divide = (x, y) => x / y

// module.exports is an object by default

