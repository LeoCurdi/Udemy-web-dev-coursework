
function fakeRequest(url) {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < .7) {
                resolve('resolved')
            }
            reject('error') // resolve() works like a return, so we dont need to put reject inside an else here
        }, 1000)
    })
}

fakeRequest('dogs/')
    .then((data) => {
        console.log('done with request', data)
    })
    .catch((error) => {
        console.log('error', error)
    })



// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}


/* delayedColorChange('red', 1000)
delayedColorChange('orange', 1000) */ // these will happen at the same time, so we cant just do this
    
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))


    