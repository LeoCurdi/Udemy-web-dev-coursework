

// function basics
    function randomIntInRange(lower, upper) {
        if (typeof lower !== 'number' || typeof upper !== 'number') {
            return false;
        }
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
        console.log('this line wont run since its below the return keyword');
    }

    let die1 = randomIntInRange(1,6);

    for (let i = 0; i < 15; i++) {
        console.log(randomIntInRange(29,30));
    }

// scope
    function collectEggs() {
        let totalEggs = 6;
        console.log(totalEggs);
    }
    // totalEggs is not defined out here

    let num = 0;
    function collectEggs() {
        num = 6;
    }
    console.log(num); // num IS defined out here, since we declared it out here, and its accessible within functions, 
                      // so i guess in js function scope is within global scope


    // Note: you can still define a variable inside a function with the same name as a global variable
    let scope = 0;
    function scopeTest() {
        let scope = 5;
        console.log(scope);
    }
    scopeTest();
    console.log(scope);
    // this will print 5, then 0. inner scope takes priority


// Block Scope: difference between let and var
    // vars are not block scoped so they can be defined inside an if statement etc, and used outside of it. lets follow block scope so a let inside an if or something cannot be accessed outside of it.

// Lexical Scope: aka defining functions within functions
    function outer() {
        const food = ['lasagna', 'pizza', 'tacos'];
        function inner() {
            for (let thing of food) {
                console.log(`this is an item of food: ${thing}`);
            }
            function innerer() {
                console.log('innerer');
            }
            innerer();
        }
        inner(); // function is defined in here so we can call it
    }
    //inner(); // this function is not defined out here

// function expressions
    // storing a function in a variable
    const add = function(x, y) {
        return x + y;
    }
    add(3,4); // the function has no name and is stored inside a variable, but is called the same way


// higher order functions
    // passing a function as a parameter
    function callTwice(func) {
        func();
        func();
    } 
    function rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }
    callTwice(rollDie); // passing a function as an argument. Note: dont use ()

    // returning functions
    function makeMysteryFunction() {
        console.log('inside make mystery function');
        const num = Math.random();
        if (num > 0.5) {
            //console.log('>')
            return function() { // this function doesnt need a name
                console.log('good function');
            }
        }
        else {
            //console.log('<')
            return function() {
                console.log('bad function');
            }
        }
    }
    makeMysteryFunction(); // this will exectute the function that gets returned
    const mystery = makeMysteryFunction();
    mystery();

    function makeBetweenFunction(min, max) {
        return function(num) {
            return (num >= min && num <= max);
        }
    }
    const testRange = makeBetweenFunction(5, 10); // will return a function that tests if a number is between 5-10
    console.log(testRange(11)); // should return false


// defining methods // this is the something.something thing ex Math.something. basically means a method is a property of an object
    const myMath = {
        PI: 3.14159,
        square: function (num) {
            return num * num;
        }
        // more methods here
    }
    console.log(myMath.square(3)); // should log 9

    const myMath2 = {
        PI: 3.14159,
        square(num) { // this is an easier way of defining methods in an object
            return num * num;
        }, // Note: need a comma between methods in an object
        divide(n, m) {
            return n / m;
        }
        // more methods here
    }
    console.log(myMath2.square(3)); // should log 9

// This
    const cat = {
        name: 'blue',
        color: 'grey',
        breed: 'scottish fold',
        meow() {
            console.log('meow');
        },
        printDeets() {
            console.log(`name: ${this.name}. color: ${this.color}. breed: ${this.breed}`);
        }
    }
    const printDeets2 = cat.printDeets; // printDeets2 is a reference to the printDeets function. but 'this' inside the function will refer 
    //to the window object, which is the object in js that contains everything
    // ex: alert() is actually window.alert(). so the function is trying window.name etc
