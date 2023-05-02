
    
// Try / Catch
    //hello.toUpperCase(); // there is no hello so we get an error

    try {
        hello.toUpperCase(); // call it in here if youre anticipating a possible error
    }
    catch { // in here we put what we want to do if hello.etc throws an error. so we dont break the program
        console.log('error');
    }

    function yell(msg) {
        try {
            console.log(msg.toUpperCase().repeat(3));
        }
        catch (error) {
            console.log(error);
        }
    }