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
    window.getComputedStyle('h1').color;











