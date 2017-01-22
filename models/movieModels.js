var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: String,
    year: Number,
    good: Boolean,
    director: String,
    star:[{
        starId:{type:Schema.Types.ObjectId, ref:"stars"}   
    }]
});

var movies = mongoose.model('movies', movieSchema);

module.exports = movies;