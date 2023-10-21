const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../Models/AllModels.js');
const passportJWT = require('passport-jwt')

let Users = Models.Users;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
    new LocalStrategy(
        {
            usernameField: "Username",
            passwordField: "Password",
        },
        async (Username, Password, callback) => {
            console.log(`${Username} ${Password}`);
            await Users.findOne({ Username: Username })
                .then((user) => {
                    if (!user) {
                        console.log('Incorrect Username');
                        return callback(null, false, {
                            message: 'Incorrect Username or Password'
                        })
                    }
                    if (!user.validatePassword(Password)) {
                        console.log('Incorrect Password...')
                        return callback(null, false, {
                            message: 'Incorrect Password'
                        });
                    }
                    console.log('Finished')
                    return callback(null, user)
                })
                .catch((error) => {
                    if (error) {
                        console.log(error)
                        return callback(error);
                    }
                })
        }
    )
);

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
},
    async (jwtPayload, callback) => {
        return await Users.findById(jwtPayload._id)
            .then((user) => {
                return callback(null, user);
            })
            .catch((error) => {
                return callback(error)
            })
}))