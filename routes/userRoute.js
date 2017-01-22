var express = require('express');
var router = express.Router();

// ***** PASSING IN PARAMETER ':name' *****
router.get('/user/:name',function(req,res){
	var name = req.params.name; // assigning parameter name -> var name
	
	// CREATING MOVIE OBJECT
	var movie = {
		title:'titanic',
		year:1995,
		director: 'Alex'
	};

	// PASSING USER VAR AND MOVIE VAR TO USER.PUG
	res.render('user',{user:name,movie:movie});
});

module.exports = router;