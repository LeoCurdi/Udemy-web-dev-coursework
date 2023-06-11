
// to install the jokes moduleand the colors module:
    // inside npmPackageDemo directory 'npm install give-me-a-joke'
    // 'npm install colors' or 'npm i colors'
// both packages were put inside the node-modules folder, which was created automatically when the first package was installed

// after doing tyhe above, we've installed these packages locally, meaning they are only useable inside this directory. we can install packages globally, but this is not common as it doesnt really make sense

// we're now going to install a package globally, such that it can be used everywhere
    // install talking cow package: 'npm install -g cowsay'
    // we can now use the cowsay module in any directory by typing: 'cowsay <message>' in the terminal
    // if we try to use this globally installed package in this file by doing require('cowsay'),
        // it wont work bc cowsay is not inside the node-modules folder in this directory. we would need to link it
        

const jokes = require('give-me-a-joke')
//console.dir(jokes)

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow)
})



const colors = require('colors')

console.log('rainbow text test'.rainbow)
console.log(colors.green('hello'))