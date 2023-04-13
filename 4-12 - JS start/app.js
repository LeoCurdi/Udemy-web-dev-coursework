console.log(undefined == null);
let total = 4 + 3;

let age = Math.random() * 30;
//const age = prompt('Enter your age');

if (age > 18) {
    console.log("old. Age: ",age);
}
else if (age < 18) {
    console.log("young. Age: ",age);
}
else {
    console.log("You're exactly 18");
}

const password = prompt("please enter a new password");

if (password.length < 6) {
    console.log("too short");
}
else if (password.indexOf(' ')) {
    console.log("cant use space");
}
else {
    console.log("youre good");
}

// falsey and truthy
const userInput = prompt("enter something");
if (userInput) {
    console.log("truthy");
}
else {
    console.log("falsey");
}


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