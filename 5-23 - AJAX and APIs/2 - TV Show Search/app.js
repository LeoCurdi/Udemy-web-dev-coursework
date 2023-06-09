// http://api.tvmaze.com/search/shows

const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (event) {
    event.preventDefault()

    const search = form.elements.query.value
    console.log(search)

    //const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
    const config = {params: {q: searchTerm}}
    const response = await axios.get('http://api.tvmaze.com/search/shows', config) // can be better to add an object then using a template literal

    console.log(response.data)
    console.log(response.data[0].show.image.medium)

    makeImages(response.data)

    // empty the input
    form.elements.query.value = ''
})

const makeImages = (shows) => {
    for (let show of shows) {

        if (result.show.image) { // make sure the show has an image
            // append the image to the document
            const img = document.createElement('img')
            img.src = show.show.image.medium
            document.body.append(img)
        }
    }
}



