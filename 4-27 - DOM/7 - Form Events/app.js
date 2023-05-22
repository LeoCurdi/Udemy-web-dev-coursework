
const form = document.querySelector('#tweetForm')
const ul = document.querySelector('#tweets')

// get input - both of these ways work
//const un = document.querySelector('#un')
//const tweet = document.querySelector('#tweet')
const un = form.elements.username
const tweet = form.elements.tweet

form.addEventListener('submit', function(event) {
    // the following will prevent the default behavior triggered by an event
    // so when you submit a form, you can prevent it from auto going to another page
    event.preventDefault()
    
    console.log('submitted')

    // create a new list element and a bold tag
    const newLi = document.createElement('li')
    const boldTag = document.createElement('b')

    // put username in bold
    boldTag.append(un.value) // append is adding inside the element. interchangeable with appendchild here

    // put username in list element
    newLi.append(boldTag)

    // append the tweet inside the list element
    newLi.append(` - ${tweet.value}`)

    // <li><b>un<b> - tweet<li>
    console.log(newLi)

    // add the tweet
    ul.append(newLi)
    console.log(ul)

    // clear the form input box
    un.value = ""
    tweet.value = ""
})





