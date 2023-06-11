

const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

console.log(franc('Alle menslike wesens word vry'))
const langCode = franc('Alle menslike wesens word vry')
const language = langs.where('3', langCode)
console.log(language.name)


// get arg from command line
const input = process.argv[2]

const langC = franc(input)
const langResult = langs.where('3', langC)

try {
    console.log(langResult.name.green) // langResult will be undefined if user enters an argument that's too small or something so we need the try catch
} catch (error) {
    console.log('error!'.red, error)
}