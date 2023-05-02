
/*
you can print the value of variables in the console while a page is open by just typing the variable name into the console


*/
console.log(undefined == null);
let total = 4 + 3;

let age = Math.random() * 30;
//const age = prompt('Enter your age');

/* if (age > 18) {
    console.log("old. Age: ",age);
}
else if (age < 18) {
    console.log("young. Age: ",age);
}
else {
    console.log("You're exactly 18");
} */

//const password = prompt("please enter a new password");
/* 
if (password.length < 6) {
    console.log("too short");
}
else if (password.indexOf(' ')) {
    console.log("cant use space");
}
else {
    console.log("youre good");
} */

// falsey and truthy
//const userInput = prompt("enter something");
/* if (userInput) {
    console.log("truthy");
}
else {
    console.log("falsey");
} */


// switch statement
const day = 2;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("bruh");
}

// arrays
    const a = "steak", b = "banannas", c = "apples", d = "guac";
    let food = [];
    food[0] = a, food[1] = b /* etc */;

    let colors = ['red', 'orange', 'yellow'];

    // this is cool. it expands the array to 11 slots then puts purple at the end
    colors[10] = 'purple';

// push and pop
    let names = ['tom', 'nancy'];
    // push adds to end
    names.push('oliver');
    // push multiple at same time
    names.push('jake', 'jane');

    // pop removes back
    names.pop();

    // Note: push and pop can simulate a stack

// shift and unshift
    let names2 = ['tom', 'nancy', 'kate', 'sid'];
    // shift
    console.log(names2);
    names2.shift() // pops the front
    console.log("shifted: ", names2);

    // un shift
    names2.unshift('newPerson'); // pushes to the front
    console.log("unshifted: ", names2);

// more array methods
    // concat: add array to the end of another array
    let names3 = names.concat(names2);
    console.log("names + names2: ", names3);

    // includes: tells us if an array contains a value
    names3.includes('steve') // returns true or false

    // index of: returns index of a target or -1 if not found
    names3.indexOf('nancy');

    // reverse: reverses an array
    names3.reverse();
    console.log('reversed array: ', names3);

// slice and splice
    // slice: returns a section of an array
    names3.slice(); // returns the full names3 array
    let names3s1 = names3.slice(3); // returns the portion of names3 starting at index 3
    let names3s2 = names3.slice(2, 4); // starting at index 2 and ending BEFORE index 4
    console.log('names3 slice2,4: ', names3s2);

    // splice: inserts an array into another array and can replace part of new array
    let arr = ['spl', 'ice'];
    console.log('names3 pre splice3,2: ', names3);
    names3.splice(3,2); // start at index 3, delete 2 items
    console.log('names3 after splice: ', names3);
    names3.splice(3,0,'insert');
    console.log('names3 after splice/insert value3: ', names3);
    names3.splice(1,0,arr);
    console.log('names3 after splice/insert array: ', names3);

// sort: sorts an array. converts everything into strings and does a string compare - kind of jenky
    let nums = [4, 34, 5, 2, 553, 7];
    console.log(nums.sort()); // notice it didnt sort the numbers in order

// array equality
    arr = ['hi', 'bye'];
    let arr2 = ['hi', 'bye'];
    console.log(arr === arr2); // notice it says false, becuase its comparing space in memory. since arr and arr2 are 2 separate arrays, they have a different address
    let arr3 = arr;
    console.log(arr === arr3); // these are equal becuase arr3 is a variable that points to the same memory as arr

// arrays + const
    const numbers = [1,2,3]; // you can change everything in the array, and change size, but cant set the variable to a different array - the address in memory is set to const
    let nums2 = [4,5,6];
    //numbers = nums2; // cant do this
    //numbers = [1,2,3]; // cant do this either because the rhs is essentially a new array

// nested arrays
    var colors2 = [['blue', 'purple'], ['red', 'orange']];
    var tictactoeGame = [
        ['x','o','x'],
        ['o','null','o'],
        ['x','o','x']
    ]
    console.log(tictactoeGame);
    console.log(tictactoeGame[1][1]);


// js object literals: similar to an array - used for labeling contents, doesnt support indexing
    // fitbit data: steps = 38000, calories = 2700
    const fitbitdata = [38000, 2700]; // not clear whats what
    const fitBitData = {
        totalSteps: 38000,
        calories  : 2700
    } // this is like an array of key-value pairs: calories->2700
    console.log(fitBitData);
    console.log('calories: ', fitBitData.calories);

    const product = { // multiple types
        name: 'Gummy Bears', // string
        inStock: true, // bool
        price: 1.99, // float
        flavors: ['grape', 'apple', 'cherry'] // array
    }
    
    // Note: were using const since we wont be assigning these array and object variables to new arrays or objects

    // modifying objects
    product.price = 2.99;
    product.location = 'aisle 5'; // add a member
    console.log(product);

    // nested arrays / objects
    const arrOfObjects = [
        {product: 'a', price: 5, quantity: 1},
        {product: 'b', price: 2, quantity: 11},
        {product: 'c', price: 7, quantity: 4}
    ] // Note: its considered best practice here to have each object have the same members and names
    console.log(arrOfObjects[1].product) // access nested object

// loops
    // can increment i by more than 1
    for (let i = 0; i < 21; i += 2) {
        console.log(`i is: ${i}`);
    }

    // Note: infinite loops will run until yopur program runs out of memory, then program crashes. Thats why when ur shits fucked, it pauses before crashing

    // break: breaks out of whatever loop youre in
    for (let i = 0; i < 100; i++) {
        console.log(i);
        if (i === 13) {
            break;
        }
    }

    // guessing game
    let guesses = 1;
    let max = parseInt(prompt("Enter a number"));
    while (!max) { // while max is falsey (aka max is NaN like if the user entered a string)
        max = parseInt(prompt("Enter a number"));
    }

    const target = Math.floor(Math.random() * max + 1);
    console.log(target);

    let guess = prompt("enter guess");
    while (parseInt(guess) !== target) {
        if (guess === 'q') break;
        if (guess > target) {
            guess = prompt("too high");
        }
        else {
            guess = prompt("too low");
        }
        guesses++;
    }
    if (guess === 'q') {
        console.log("quitting");
    }
    else {
        console.log(`correct, ${guesses} guesses`);
    }

    // for of loop
    const things = ['books', 'hair', 'food', 'candles', 'youtube', 'school'];
    for (let thing of things) {
        console.log(thing);
    }

    // iterating over objects
    const product1 = { // multiple types
        name: 'Gummy Bears', // string
        inStock: true, // bool
        price: 1.99, // float
        flavors: ['grape', 'apple', 'cherry'] // array
    }
    for (let thing in product1) {
        console.log(`${thing} equals ${product1[thing]}`);
    }

    const scores = {
        jake: 5,
        ake: 17,
        brake: 12
    }
    for (let score of Object.values(scores)/*  returns an array of the values inside the scores object */) {
        console.log(score);
    }
