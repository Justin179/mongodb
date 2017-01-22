// HOME ROUTE
var express = require('express');
// USING EXPRESS ROUTER METHOD
var router = express.Router();

// ****** MIDDLEWARE VERSION OF INDEX ROUTE *****
// var langCheck = require('../middleware/langCheck.js');
// router.get('/',function(req,res){
// 	res.render('index');
// });


// USE ROUTER.GET
router.get('/',function(req,res){
	res.render('index');
});
// EXPORT ROUTER
module.exports = router;