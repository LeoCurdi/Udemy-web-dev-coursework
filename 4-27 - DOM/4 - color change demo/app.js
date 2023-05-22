
const button = document.querySelector('button')
const h1 = document.querySelector('h1')


button.addEventListener('click', () => {
    console.log('clicked')

    // generate random rgb color
    const color = makeRandomColor()
    
    // set the new color
    document.body.style.backgroundColor = color // shortcut for selecting body

    // set the inner text content of the h1
    h1.innerText = color
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    if ((r + g + b) < 200) {
        h1.style.color = 'white'
    }
    else {
        h1.style.color = 'black'
    }
    return `rgb(${r}, ${g}, ${b})` // 'rgb(0-255, 0-255, 0-255)'
}
