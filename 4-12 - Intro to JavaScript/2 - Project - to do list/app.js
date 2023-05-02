

const todos = ['collect chicken eggs', 'do homework'];

let input;
do {
    input = prompt("enter a thing");

    if (input === 'list') {
        // practice with an iterator. a for loop would make more sense tho since we already have an i going
        let i = 0;
        for (let item of todos) {
            i++;
            console.log(i + ': ' + item);
        }
    }
    else if (input === 'new') {
        const newItem = prompt('enter new item');
        todos.push(newItem);
        console.log(`${newItem} added to list`);
    }
    else if (input === 'delete') {
        let target;
        do {
            target = parseInt(prompt('enter number to delete'));
            if (Number.isNaN(target)) {
                console.log('enter a number');
            }
        } while (Number.isNaN(target)); // loop until input is a number

        console.log(`Deleting: ${target}: ${todos[target-1]}`);
        // remove item at index with splice
        todos.splice(target - 1, 1);
    }

} while(input !== 'quit' && input !== 'q')

console.log("quitting");


/* input = prompt("enter a thing");
while (input !== 'quit' && input !== 'q') {
    input = prompt("enter a thing");
    if (input === 'list') {
        // practice with an iterator. a for loop would make more sense tho since we already have an i going
        let i = 0;
        for (let item of todos) {
            i++;
            console.log(i + item);
        }
    }
}
console.log("quitting"); */