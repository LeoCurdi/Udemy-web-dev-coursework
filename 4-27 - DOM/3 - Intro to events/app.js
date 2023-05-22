

const button = document.querySelector('#v2')
button.onclick = function () {
    console.log('btn2 clicked')
}

function scream() {
    console.log('scream')
}

button.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('dis h1')
}



// event listeners
    const btn3 = document.querySelector('#v3')
    btn3.addEventListener('click', function () {
        alert('clicked')
    })
    btn3.addEventListener('click', () => { // same thing but arrow function (no function keyword)
        alert('clicked')
    })


    function twist() {
        console.log('twist')
    }
    function shout() {
        console.log('shout')
    }
    const ts = document.querySelector('#ts')
    //ts.onclick = twist
    //ts.onclick = shout // you cant have more than one 'onclick' property. its like setting a color to red then setting it to purple

    ts.addEventListener('click', twist)
    ts.addEventListener('click', shout) // we can add as many event listeners as we want
    








