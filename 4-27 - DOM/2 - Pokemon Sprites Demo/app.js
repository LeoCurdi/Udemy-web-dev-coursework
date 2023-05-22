// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png

const container = document.querySelector('#container')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 1011; i++) {
    // create a div for each pokemon
    const pokemon = document.createElement('div')

    // give it the pokemon class
    pokemon.classList.add('pokemon')

    // create a label and an image
    const label = document.createElement('span')
    label.innerText = `#${i}`
    const img = document.createElement('img')
    img.src = `${baseUrl}${i}.png`

    // append the image and label to the new div
    pokemon.appendChild(img)
    pokemon.appendChild(label)
   
    // add the pokemon to the document
    container.appendChild(pokemon)
}