var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var starSchema = new Schema({
    name: String,
    birthday: Date,
    age: Number,
    sex: String,
    movie:[{
        movieId:{type:Schema.Types.ObjectId, ref:"movies"},
        title:String,
        director:String
    }]
});

var star = mongoose.model('star', starSchema);
module.exports = star;