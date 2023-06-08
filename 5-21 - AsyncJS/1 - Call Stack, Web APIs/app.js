
// call stack demo
    function isRightTriangle(a, b, c) {
        return square(a) + square(b) === square(c)
    }

    function square(x) {
        let result = multiply(x, x)
        return result
    }

    function multiply(x, y) {
        return x * y
    }



// web apis
    console.log('sending request to server')
    setTimeout(() => {
        console.log('here is the data . . .')
    }, 3000) // set timeout is a web api function. so js tells the browser to set a timeout, then when the time runs out, the web browser tells js to execute the code inside the timeout function
    console.log('reached end of file')

