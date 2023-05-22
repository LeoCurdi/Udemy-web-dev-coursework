
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// 'change' only fires when you click out of the input box
// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

// 'input' event fires whenever the contents of the input box changes
input.addEventListener('input', function (e) {
    if (input.value !== '') {
        h1.innerText = `Welcome, ${input.value}`;
    }
    else {
        h1.innerText = 'Enter Your Username'
    }
})