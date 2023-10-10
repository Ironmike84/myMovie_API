//Import Modules
const bodyParser = require ('body-parser');
const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const uuidv4 = require ("uuid");
const Models = require('../Models/AllModels.js');

// Connect Server Setup Environmental Variables
const PORT = process.env.PORT || 5000
dotenv.config({path: './.env'})
const app = express();
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

//Bring In Models and Data
const Movies = Models.Movie
const Users = Models.User
const Directors = Models.Directors
const Genre = Models.Genre

//Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}
connectDB()

//ROUTES

app.get('/', (req, res)=>{
    res.send('Hello From Backend')
})

app.get('/documentation', (req, res)=>{
    let __dirname = '../src'
    res.sendFile('documentation.html', ({root: __dirname}));
})

//Get All Movies
app.get('/Movies',(req, res)=>{
    Movies.find()
    .then((Movies) => {
        res.status(201).json(Movies);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
})

//Create New User

app.post('/Users', async (req, res)=>{
    Users.findOne({Username: req.body.Username})
    .then((user)=>{
        if(user){
            return res.status(400).send(req.body.Username + "Already Exists")
        }else{
            Users.Create({
                UserName: req.body.Username,
                Password: req.body.Password,
                Email: req.body.Email,
                Birthday: req.body.Birthday
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




app.listen(PORT, ()=>{console.log(`Your Server is Listening on Port: ${PORT}`)})