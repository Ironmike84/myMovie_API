const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema ({
    _id: {type: Object},
    Title: { type: String},
    Genre: {_id: {type: Object, ref: "Genre", required: true}},
    Name: String,
    Bio: String,
    Birth: Date,
    Death: String,
    Actors: [{type: Object, ref: 'Actors'}],
    Rating: String,
    Release: String,
    ImagePath: String,
    Featured: Boolean
})

const DirectorsSchema = mongoose.Schema ({
    _id: {type: Object},
    Name: String,
    Bio: String,
    Birth: Date,
    Death: String,
    ImagePath: String,
    Featured: Boolean,
    Movies: [{type: Object}]
})

const UsersSchema = mongoose.Schema ({
    _id: {type: Object, required:true},
    Username: {type: String, required: true},
    Password: String,
    Email: String,
    Birthday: Date,
    FavoriteMovies:[{type: Object, ref:'Movies'}],
    ImagePath: String
})

const ActorsSchema = mongoose.Schema ({
    _id: {type: Object, required:true},
    Name: String,
    Bio: String,
    Birth: Date,
    Death: String,
    ImagePath: String
})


const GenresSchema = mongoose.Schema ({
    _id: {type: Object},
    Name: String,
    Description: String
})

let Directors = mongoose.model('Directors', DirectorsSchema)
let Genres = mongoose.model('Genres', GenresSchema)
let Movies = mongoose.model('Movies', MoviesSchema)
let Actors = mongoose.model('Actors', ActorsSchema)
let Users = mongoose.model("Users", UsersSchema)

// export default {User, Movie, Genre, Directors}

module.exports.Users = Users
module.exports.Movies = Movies
module.exports.Genres = Genres
module.exports.Actors = Actors
module.exports.Directors = Directors