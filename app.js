var express = require("express");
var app = express();



var fs = require('fs');


//app.get('/',function(req,res,next){
//    res.send('this is the home');
//});


//fs.readdirSync(__dirname+'/models').forEach(function(filename){
//    if(~filename.indexOf('.js'))
//        require(__dirname+'/models/'+filename)
//});


app.set('view engine','pug');

// grab the things we need
var mongoose = require('mongoose');

if('development' == app.get('env')){
    mongoose.connect('mongodb://localhost/mongostuff?socketTimeoutMS=300000');    
} else {
    mongoose.connect('production ip');
}





// if our user.js file is at app/models/user.js
var User = require('./models/user');
  
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha2',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
// chris.save(function(err) {
//   if (err) throw err;

//   console.log('User saved successfully!');
// });


var userSchema = mongoose.model('user');
userSchema.find({},function(err,data){
  if(err)
    console.log(err);
  else 
    console.log(data);
    
});


// ------------------------------------
// include all models inside model folder
//fs.readdirSync(__dirname+'/models').forEach(function(filename){
//    if(~filename.indexOf('.js'))
//        require(__dirname+'/models/'+filename)
//});













app.listen(3000,function(req,res){
   console.log('listening on port 3000'); 
});


//var Cat = mongoose.model('Cat', { name: String });
//
//var kitty = new Cat({ name: 'Zildjian' });
//kitty.save(function (err) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log('meow');
//  }
//});