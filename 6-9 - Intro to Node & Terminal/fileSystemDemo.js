
// type 'node fileSystemDemo.js <folderName>' in the terminal
    // this will create a new folder named <folderName> with an html, css, and js files in it


// we need to require this module
const fs = require('fs')

// now get the folder name that the user passed in as n argument
const folderName = process.argv[2] || 'project' // get the first arg entered by user aka the third total arg or set default if user didnt enter anything

// wrap the whole thing in a try catch bc theres potential for something to go wrong
try {
    // create the folder
    fs.mkdirSync(folderName)
    // create the html, css, and js files
    fs.writeFileSync(`${folderName}/index.html`, '') // create the file inside the newly created folder
    fs.writeFileSync(`${folderName}/app.js`, '') // the second arg (empty string) is a default in case the first arg is undefined
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (error) {
    console.log("ERROR:");
    console.log(error);
}
