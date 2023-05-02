
/*
    Array methods require a function to be passed in

*/

// For Each. was mainly used before the advent of for of
    const numbers = [1,2,3,4,5,6,7];
    
/*     function print(element) {
        console.log(element);
    }

    numbers.forEach(print); // this will pass each element into the print function */

    numbers.forEach(function (num) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }) // define a function inside of the forEach. the function will take each element in the array as a parameter

// Map. runs a method on each element in an array, AND copies the result to a new array (mapping)
    const numbers2 = [1,2,3,4,5,6,7];
    const numbers2double = numbers2.map(function(num) {
        return num * 2;
    })
    console.log(numbers2double);

    const fullNames = [
        {first: 'Albus', last: 'Dumbledore'}, 
        {first: 'Harry', last: 'Potter'}, 
        {first: 'Hermione', last: 'Granger'}, 
        {first: 'Ron', last: 'Weasley'}, 
        {first: 'Rubeus', last: 'Hagrid'}, 
        {first: 'Minerva', last: 'McGonagall'}, 
        {first: 'Severus', last: 'Snape'}
    ];

    const firstNames = fullNames.map(function(name) {
        return name.first;
    })

// Arrow Functions (no internet explorer support). Allow us to write functions without the keyword 'function'
    const add = (x, y) => { // the parameters go in the ()
        return x + y;
    }

    const rollDie = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Implicit Returns (only works with arrow functions)
    const square = (x) => (
        x * x
    ) // the parentheses says that were just returning a thing
    const square2 = (x) => x * x // you can also do it on one line without parentheses

    // arrow function with map using the names array above
    const first = fullNames.map((name) => {
        return name.first;
    })

// Filter
    const nums = [9,8,7,6,5,4,3,2,1];
    const odds = nums.filter((num) => {
        return num % 2 === 1;
    }); // arrow function returns true or false. if true, item will be copied from nums to odds
    console.log(odds);

    const usernames = [];
    // takes a usernames array and returns a new array with invalid names filtered out
    function validUserNames(usernames) {
        const valid = usernames.filter((name) => {
            return name.length <= 10;
        })
        return valid;
    }


// Every & Some
    const exams = [80,98,92,78,73,90];
    exams.every((score) => {
        return score >= 75;
    }); // every will return true if every item in an array meets the defined condition
    // it will return false here since one item is 73

    exams.some((score) => {
        return score >= 90;
    }) // will return true since at least one score is >= 90

    // will return true if all exam scores are even
    function allEvens(numbers) {
        const result = (numbers.every((num) => {
            return num % 2 === 0;
        }));
        return result;
    }

// Reduce
    const prices = [9.99, 1.50, 19.99, 30.50];

    // this is how to get total without reduce
    let total = 0;
    for (let price of prices) {
        total += price;
    }

    // this gets total using reduce
    const total2 = prices.reduce((total2, price) => {
        return total2 + price;
    })

    // find min price in the array
    prices.reduce((min, price) => {
        if (price < min) {
            return price;
        }
        return min;
    });

// Arrow Functions and 'This'
    const person = {
        fisrtName: 'Vinnie',
        lastName: 'Mortinson',
        fullName: function() {
            return `${this.fisrtName} ${this.lastName}`;
        },
        fullName2: () => {
            return `${this.fisrtName} ${this.lastName}`; // 'this' will end up referring to the window object, so well get undefined
        },
        shoutName: function() {
            setTimeout(() => {
                console.log(this.fullname())
            }, 1500);
        }
    }
    // this is kinda fucked. Just know that 'this' behaves different when using arrow functions





