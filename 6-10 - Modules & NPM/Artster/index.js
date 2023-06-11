
// 'npm init' creates a package.json file. fill in all the fields in the terminal then hit enter and it will create
// this json file will keep a record of all the packages that have been installed for a project
// the packages that have been installed can be viewed in the package.json file under dependencies

// a package.json file is not required for a project to work, but its vital for keeping track of what modules youre using
// typically you wont upload the packages to things like github (ignore node-modules folder). instead when ppl clone your repo they will look at package.json dependencies and install everything on sight
    // install all dependencies in one go with just 'npm install'

const figlet = require('figlet')

const colors = require('colors')

figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});