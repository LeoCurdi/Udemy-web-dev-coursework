

// Default Parameters: user has option to pass in a parameter, and if they dont, the program uses a default value
    function rollDie(numSides = 6) { // new way

        //if (numSides === undefined) numSides = 6; // the old way

        return Math.floor(Math.random() * numSides) + 1;
    }

    // always put defaults last in parameters list becuase otherwise if ppl dont enter all parameters, it will use the ones they do pass in for the defaults and undefined for the ones listed at the end
    function greet(person, msg = "Hey there") {
        console.log(`${msg}, ${person}!`);
    }


// Spread
    // in function calls
        const nums = [5,3,7,3,7,89,6,4];
        Math.max(nums); // doesnt work
        Math.max(...nums); // this works

        console.log(nums); // print array
        console.log(...nums); // print the series of numbers

        // doesnt have to be arrays
        console.log(...'hello'); // pass in a single string as separate arguments

    // with array literals
        const cats = ['blue', 'scout', 'rocket'];
        const dogs = ['rusty', 'wyatt'];

        const allPets = [...cats, ...dogs] // spread an array into another array

    // with objects
        const feline = {
            legs: 4,
            family: 'Felidae'
        }
        const canine = {
            legs: 4,
            family: 'Caninae'
        }

        const catDog = {...feline, ...canine} // well lose the value for feline family bc it will combine with canine and get overwritten


// Rest Parameters: looks like spread with the 3 dots but menas something different
    function sum() { // you can pass in as many arguments as you want and they will be collected in an arguments object
        console.log(arguments); // this is how math.max etc works

        // get sum
        //let sum = arguments.reduce((total, el) => total + el); // arguments is not a regular array though, so u cant use standard array methods
    }

    function sum2(...nums) { // were using rest here to collect the rest of the parameters entered in and store them in an actual array unlike above
        let sum = nums.reduce((total, el) => total + el);
        return sum;
    }

    function raceResults(gold, silver, ...everyoneElse) {
        console.log(`Gold: ${gold}`);
        console.log(`Silver: ${silver}`);
        console.log(`Everyone else: ${everyoneElse}`);
    }
    raceResults('jake', 'dake', 'keven', 'kevin', 'ryan');


// Destructuring
    // arrays
        const scores = [52353245, 5235243, 534,431,56,7];
        // turn an array into a bunch of individual variables
        const [gold, silver, bronze, ...everyoneElse] = scores; // inside the brackets is a list of names for our variables
        console.log(bronze);
        console.log(everyoneElse);

    // objects
        const user = {
            email: 'harvey@gmail.com',
            password: '5425',
            firstName: 'Harvey',
            lastName: 'Milk',
            born: 1978
        }

        const {email, firstName, born} = user; // variables inside the brackets have to match a member of the object
        const {born: birthYear} = user;// to rename variables

    // parameters
        function fullName(user) {
            
            //return `${user.firstName} ${user.lastName}`;

            const {firstName, lastName} = user;
            return `${firstName} ${lastName}`;
        }

        function fullName2({firstName, lastName}) {
            return `${firstName} ${lastName}`;
        }
        fullName2(user);