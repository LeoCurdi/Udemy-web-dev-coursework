
const express = require('express')
const router = express.Router()
const passport = require('passport')
const wrapAsync = require('../utilities/wrapAsync')
const User = require('../models/user')
const { storeReturnTo } = require('../middleware')

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', wrapAsync(async (req, res) => {
    //res.send(req.body)
    try {
        const {email, username, password} = req.body
        const user = new User({email, username})
        const registeredUser = await User.register(user,password)

        // log the user in after they register
        req.login(registeredUser, err => {
            if (err) return next(err)
            req.flash('success', 'Welcome to Yelp Camp')
            res.redirect('/campgrounds')
        })
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('register')
    }
}))

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), (req, res) => {
    req.flash('success', 'welcome back!')
    // we called storeReturnTo and are now able to redirect the user after login
    const redirectUrl = res.locals.returnTo || '/campgrounds'
    delete req.session.returnTo;
    res.redirect(redirectUrl)
})

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
})


module.exports = router
