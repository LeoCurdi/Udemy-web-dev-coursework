
// check if the user is logged in and if not, dont allow for certain actions
module.exports.isLoggedIn = (req, res, next) => {
    //console.log(req.user)
    if(!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'you are not signed in!')
        return res.redirect('/login')
    }
    next()
}

// return the user to their desired page after they log in
module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl; // add this line
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}
