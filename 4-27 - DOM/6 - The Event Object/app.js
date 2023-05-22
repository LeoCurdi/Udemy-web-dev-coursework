
document.querySelector('button').addEventListener('click', (event) => {
    console.log(event)


})


const input = document.querySelector('input')

input.addEventListener('keydown', function (event) {
    console.log('key down')
    console.log(event.key,'\n',event.code)
})
input.addEventListener('keyup', function () {
    console.log('key up')
})


// window stuff - anywhere on the page
window.addEventListener('keydown', function(event) {
    console.log(event.key,'\n',event.code)

    switch(event.code) {
        case 'ArrowUp':
            console.log('up')
            break
        case 'ArrowDown':
            console.log('dcown')
            break
        case 'ArrowLeft':
            console.log('left')
            break
        case 'ArrowRight':
            console.log('right')
            break
        default:
            console.log('ignored')
            break
    }
})






