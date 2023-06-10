
// index.js requires all other js files inside a directory, and combines them into an array

const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

const allCats = [blue, sadie, janet]
//console.log(allCats)

module.exports = allCats;