//Import Modules
const bodyParser = require ('body-parser');
const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Models = require('../Models/AllModels.js');
const { check, validationResult } = require('express-validator')
const cors = require('cors');
// Connect Server Setup Environmental Variables
const PORT = process.env.PORT || 5000
dotenv.config({path: './.env'})
const app = express();
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
origin: "*"
}));
require('./Auth.js')(app);
require('./Passport');


//Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://michaelgrosstn:Febuary22013@cluster1.bb4ff5n.mongodb.net/Muvies?retryWrites=true&w=majority", {
            useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Mongo DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}
connectDB()


//Bring In Models and Data
const Movies = Models.Movies
const Users = Models.Users
const Directors = Models.Directors
const Genres = Models.Genres
const Actors = Models.Actors

//ROUTES
app.get('/', (req, res)=>{
res.send('Welcome')
})

app.get('/documentation', (req, res)=>{
    let __dirname = '../src'
    res.sendFile('documentation.html', ({root: __dirname}));
})

//Get All Movies
app.get('/Movies', async (req, res)=>{
    await Movies.find()
    .then((Movies) => {
        res.status(201).json(Movies);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
})

app.get('/Movies/:MovieID', async (req, res)=>{
    await Movies.findOne({ObjectId: req.params.MovieID})
    .then((movie)=>{
        res.json(movie)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).send('Error: ' + err)
    })
})

//Create New User
app.post('/Users',
    [
        check('Username', 'Username is required').isLength({min: 5}),
        check('Username', 'Username contains non alphanumeric Characters - not allowed.').isAlphanumeric(),
        check('Password', 'Password is Required').not().isEmpty(),
        check('Email', 'Email is not Valid').isEmail()
    ],async (req, res) => {
        //Check the validation of object for Errors
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array()})
        }
    let hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOne({Username: req.body.Username})
    .then((user)=>{
        if(user){
            return res.status(400).send(req.body.Username + "Already Exists")
        }else{
            Users.create({
                _id: uuidv4(),
                Username: req.body.Username,
                Password: hashedPassword,
                Email: req.body.Email,
                Birthday: req.body.Birthday,
                ImagePath: req.body.ImagePath
            })
            .then((user)=>{ res.status(201).json(user)})
            .catch((error)=>{
                console.log(error);
                res.status(500).send('Error ' + error)
            })
        }
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).send('Error ' + error)
    })
})

//Get All Users
app.get('/Users/AllUsers', async (req, res)=>{
    await Users.find()
    .then((users)=>{
        res.status(201).json(users)
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).send('Error ' + err)
    })
})

//Find User By Username
app.get('/Users/Profile/:Username', async (req, res) => {
    await Users.findOne({ Username: req.params.Username })
    .then((user) => {
        res.json(user);
        })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
        });
});

//Update Current User
app.put('/Users/UpdateProfile/:Username', async (req, res)=>{
    await Users.findOneAndUpdate({Username: req.params.Username}, { $set: {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday
    }})
    .then((updatedUser)=>{
        res.json(updatedUser)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).send('Error ' + err)
    })
})

//Remove User By Id
app.delete('/Users/DeleteUser/:Username', async (req, res)=>{
    await Users.deleteOne({Username: req.params.Username})
    .then((RemovedUser)=>{
        res.send(RemovedUser)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).send('Error: ' + err)
    })
})

//Add To Users Favorites
app.post('/Users/:Username/FavMovies/Add/:MovieID', async (req, res) => {
    await Users.findOneAndUpdate({ Username: req.params.Username }, {
        $push: { FavoriteMovies: {
            ObjectId: req.params.MovieID,
            Title: req.body.Title,
            Genre: req.body.Genre,
            Rating: req.body.Rating,
            ImagePath: req.body.ImagePath
        }}},
     { new: true }) // This line makes sure that the updated document is returned
    .then((updatedUser) => {
        res.json(updatedUser);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});
// Remove Favorite MovieBy ID
app.delete('/Users/:Username/FavMovies/Delete/:MovieID', async (req, res) => {
    await Users.findOneAndUpdate({ Username: req.params.Username }, {
        $pull: { FavoriteMovies: {
            ObjectId: req.params.MovieID
        }}},
     { new: true }) // This line makes sure that the updated document is returned
    .then((removed)=>{
        res.json(removed)
    })
    .catch((err)=>{
        res.status(500).send('Error ' + err)
    })
});

//Get Description of Genre
app.get('/Genre/:Name', async (req, res)=>{
    await Genres.find({Name: req.params.Name})
    .then((Genre)=>{
        res.json(Genre)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Error: " + err)
    })
})

//Get Movies By Genre Type
app.get('/Movies/Genre/:Name', async (req, res)=>{
    await Movies.find({ "Genre.Name": req.params.Name })
    .then((movies) => {
        res.json(movies);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});
// Get All Directors
app.get('/Directors', async (req, res)=>{
    await Directors.find()
    .then((director)=>{
        res.json(director)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).send('Error: ' + err)
    })
})

// Get Director By Name
app.get('/Directors/:DirectorID', async (req, res)=>{
    await Directors.find({ObjectId: req.params.DirectorID})
    .then((director)=>{
        res.json(director)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).send('Error: ' + err)
    })
})

//Get Actors
app.get('/Actors', async (req, res)=>{
    await Actors.find()
    .then((Actor)=>{
        res.send(Actor)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Error: " + err)
    })
})


app.listen(PORT, ()=>{console.log(`Your Server is Listening on Port: ${PORT}`)})