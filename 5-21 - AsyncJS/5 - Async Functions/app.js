
// async
    // async functions automatically return a promise
    async function sing() {
        throw 'this will print, instead of a boilerplate syntax error' // promise will be thrown since we called throw above return
        return 'la la la' // return a promise that's resolved with 'la la la'
    }

    sing().then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
    /*
    sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })
    */

    const login = async(username, password) => {
        if (!username || !password) throw 'missing credentials'
        if (password === 'banana') return 'welcome!'
        throw 'invalid password' // else throw
    }

    login('todd', 'banana')
        .then(message => {
            console.log(message)
        })
        .catch(error => {
            console.log(error)
        })



// await
    // lets you write async code that looks syncronous

    const delayedColorChange = (color, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        })
    }
    /* 
    delayedColorChange('red', 1000)
        .then(() => delayedColorChange('orange', 1000))
        .then(() => delayedColorChange('yellow', 1000))
        .then(() => delayedColorChange('green', 1000))
        .then(() => delayedColorChange('blue', 1000))
        .then(() => delayedColorChange('indigo', 1000))
        .then(() => delayedColorChange('violet', 1000))
    */
    async function rainbow() {
        await delayedColorChange('red', 1000) // await essentially pauses the program until the async function executes
        console.log('this will run after the red transition')
        await delayedColorChange('orange', 1000)
        await delayedColorChange('yellow', 1000)
        await delayedColorChange('green', 1000)
        await delayedColorChange('blue', 1000)
        await delayedColorChange('indigo', 1000)
        await delayedColorChange('violet', 1000)
        return "ALL DONE!"
    }

    rainbow().then((data) => console.log("END OF RAINBOW!", data)) // data = 'all done!'

    async function printRainbow() {
        await rainbow();
        console.log("END OF RAINBOW!")
    }

    printRainbow();

    const fakeRequest = (url) => {
        return new Promise((resolve, reject) => {
            const delay = Math.floor(Math.random() * (4500)) + 500;
            setTimeout(() => {
                if (delay > 2000) {
                    reject('Connection Timeout :(')
                } else {
                    resolve(`Here is your fake data from ${url}`)
                }
            }, delay)
        })
    }

    // try / catch lets the program continue when a promise is rejected
    async function makeTwoRequests() {
        try {
            let data1 = await fakeRequest('/page1');
            console.log(data1);
            let data2 = await fakeRequest('/page2');
            console.log(data2);
        } catch (e) {
            console.log("CAUGHT AN ERROR!")
            console.log("error is:", e)
        }

    }
