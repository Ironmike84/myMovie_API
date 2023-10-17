const jwtSecret = 'your_jwt_secret';
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('./Passport.js')
const express = require('express')
const router = express.Router()
const app = express()
app.use((request, response, next)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})


let generateJWTToken = (user) => {
    return jwt.sign(user, jwtSecret, {
        subject: user.Username,
        expiresIn: '7d',
        algorithm: 'HS256'
    })
}

//Post Login

module.exports = () => {
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