
// AJAX = making requests to load something behind the scenes from a server, when the webpage has already been loaded.
// ex: scroling down reddit and when you get far enough new stuff auto loads, instead of having to click to another page for the next set of posts

// JSON is a way of formatting data from an API or something.
// it's formatted like a JS object
/* {
    "ticker": "btc",
    "price": 12280.34
} */
// JSONs can still be used with other languages than JS

//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// THIS IS A JS OBJECT
const parsedData = JSON.parse(data); // this turns a JSON into a JS object
console.log(parsedData)
console.log('bitcoin price:', parsedData.ticker.price)

// go from js to json
const dog = {breed: 'lab', color: 'black', isAlive: true, owner: undefined}
const jsonDog = JSON.stringify(dog)
console.log(jsonDog)



// making our first request with js!

    // the old way: xmlhttp - doesnt support promises so we get callback hell - not really used anymore
    const url = "https://swapi.dev/api/people/1/"

    const request = new XMLHttpRequest();

    request.onload = function() {
        console.log('loaded!', this.responseText)

        // we now have the json (which is a string) and need to convert it to a js object
        const data = JSON.parse(this.responseText)
        console.log(data)
        console.log(data.name)
    }
    request.onerror = function() {
        console.log('error', this)
    }

    request.open('GET', url);
    request.send();




// a better way of making requests (fetch)
    fetch('https://swapi.dev/api/people/1/')
        .then(response => {
            console.log('resolved', response)

            return response.json()
        })
        .then(data => {
            console.log('json done', data)

            return fetch('https://swapi.dev/api/people/2/') // here we can make another request without nesting
        })
        .then(response => {
            console.log('second request resolved')
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch(error => {
            console.log('error', error)
        })

    // refactor with async function
    const loadData = async (link) => {
        try {
            const response = await fetch(link)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log('error', error)
        }
    }

    loadData('https://swapi.dev/api/people/4/')
    loadData('https://swapi.dev/api/people/5/')


