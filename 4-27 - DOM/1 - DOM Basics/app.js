/*
    - console.dir(document) // gets you the javascript document in the console
*/



// selectors

    // tag name: select elements by html tag
    const allImages = document.getElementsByTagName('img'); // gives you a collection of all images in the document
    // allImages is NOT an array, so you dont have array methods buy you do have indexing

    for (let img of allImages) {
        console.log(img.src)
    }


    // query selector is a newer better way of selecting things
    document.querySelector('p') // gives us the first p element in the doc
    document.querySelector('#banner') // select by ID
    document.querySelector('.square') // gives you the first element with class square
    //document.querySelector('p[nth-of-type(2)]')
    // query selector all gives you a collection, like tag name
    document.querySelectorAll('p')
    const links = document.querySelectorAll('p a') // select all a tags that are nested in p tags
    for (let link of links) {
        console.log(link.href);
    }


// manipulation

    document.querySelector('p').innerText = 'lol'
    
    const allLinks = document.querySelectorAll('a');

    
    // innerHTML
    let h1 = document.querySelector('h1').innerHTML // gives you the full html markup as opposed to just text
    document.querySelector('h1').innerHTML += '<i>hi<i>' // put an italicised element inside the h1 element


    // attributes
    document.querySelector('#banner').id = 'whoops' // change the id
    document.querySelector('#whoops').id = 'banner' // change it back

    const input = document.querySelector('input[type="text"]')
    input.type = 'password'
    input.setAttribute('type', 'text')

    // changing styles
    // Note: the style docuemnt does not contain any of the styles defined in an external css docuemnt
    h1 = document.querySelector('h1')
    h1.style.color = 'green'

    for (let link of allLinks) {
        link.style.color = 'rgb(0, 108, 134)';
        link.style.textDecorationColor = 'magenta';
        link.style.textDecorationStyle = 'wavy'
    }

    // you can use window to get all the current styles of an element
    //window.getComputedStyle('h1').color;

    // classlist
    const h2 = document.querySelector('h2')
    h2.setAttribute('class', 'purple')

    //h2.classList.add('border')
    h2.classList.toggle('border') // switches whether or not a class is in the class list

    // select parent/child/sibling
    const squareImg = document.querySelector('.square')
    squareImg.nextElementSibling
    squareImg.previousElementSibling

    // create element
    const newImg = document.createElement('img')
    newImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
    document.body.appendChild(newImg)

    const newH3 = document.createElement('h3')
    newH3.innerText = 'new h3'
    document.body.appendChild(newH3)

    // append text inside of a p element
    const p = document.querySelector('p')
    p.append('this is a bunch of appended text')
    
    // create a 'b' element
    const newB = document.createElement('b')
    newB.append('hi')
    p.prepend(newB)

    // another example
    const h3 = document.createElement('h3')
    h3.append('new h3 text')
    const hOne = document.querySelector('h1')
    hOne.insertAdjacentElement('afterend', h3)

    // remove child
    const firstLi = document.querySelector('li')
    const ul = firstLi.parentElement
    ul.removeChild(firstLi)
    // or firstLi.parentElement.removeChild(firstLi)

    // remove
    const secondLi = document.querySelector('li')
    secondLi.remove()


