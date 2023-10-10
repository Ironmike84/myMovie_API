const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema ({
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

const UserSchema = mongoose.Schema ({
    _id: {type: Object, required:true},
    Username: String,
    Password: String,
    Email: String,
    Birthday: Date,
    FavoriteMovies:[{Object}],
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


const GenreSchema = mongoose.Schema ({
    _id: {type: Object},
    Name: String,
    Description: String
})

let Directors = mongoose.model('Directors', DirectorsSchema)
let Genre = mongoose.model('Genre', GenreSchema)
let Movie = mongoose.model('Movie', MovieSchema)
let Actors = mongoose.model('Actors', ActorsSchema)
let User = mongoose.model("User", UserSchema)

// export default {User, Movie, Genre, Directors}

module.exports.User = User
module.exports.Movie = Movie
module.exports.Genre = Genre
module.exports.Actors = Actors
module.exports.Directors = Directors