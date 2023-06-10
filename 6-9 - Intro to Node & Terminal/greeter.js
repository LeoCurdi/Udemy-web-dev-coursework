
// this document will take action on each argument thats passed to node, excluding the first 2 as they are boilerplate arguments

const args = process.argv.slice(2)

for (let arg of args) {
    console.log(`Hello ${arg}!`)
}

// test it by entering 'node greeter.js <arg1> <arg2> ...' in the terminal