


console.log('before setTimeut');

setTimeout(() => {
    console.log('hello');
}, 3000); // first parameter is an arrow function, second is how long to wait before executing

console.log('after setTimeut'); // notice this line executes before the arrow function. because the settimeout is called then the machine immediately moves to the next line to execute


/* setInterval(() => {
    console.log(Math.random());
}, 500); // this will continuously execute the function at the given interval until you stop it
 */

const id = setInterval(() => {
    console.log(Math.random());
}, 500);

// type 'clearInterval(id)' into the console to stop the function


