const jwtSecret = 'your_jwt_secret';
const express = require('express')
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('./Passport.js')

let generateJWTToken = (user) => {
    return jwt.sign(user, jwtSecret, {
        subject: user.Username,
        expiresIn: '7d',
        algorithm: 'HS256'
    })
}

//Post Login

module.export = (router) => {
    router.post('/login', (req, res) => {
        passport.authenticate('local', { session: false },
            (error, user, info) => {
                if (error || !user) {
                    return res.status(400).json({
                        message: "Something Didn't Work",
                        user: user
                    })
                }
                req.login(user, { session: false }, (error) => {
                    if (error) {
                        res.send(error);
                    }
                    let token = generateJWTToken(user.toJSON());
                    return res.json({ user, token });
                })
            })(req, res)
    })
}