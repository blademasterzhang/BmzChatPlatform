var express = require('express');
var router = express.Router();

var UserService = require('../services/userService.js');

/* add user */
router.post('/', function(req,res,next){
	UserService.saveUser(req.body,function(err){
		if(err)
		{
			res.send('add user fail')
			return next();
		}
		res.send('add user success')
	});
})

/* delete user */
router.delete('/:code', function(req,res,next){
	UserService.deleteUser({"userCode":req.params.code},function(data){
		res.json(data)
	});
})

router.put('/', function(req,res,next){
	res.send('update user')
})

router.post('/register', function(req,res,next){
	res.send('register')
})

router.put('/login', function(req,res,next){
	res.send('login')
})

router.get('/nearby', function(req,res,next){
	res.send('nearby-users')
})

router.get('/detail/:code', function(req,res,next){
	UserService.userdetail({userCode:req.params.code},function(data){
		res.json(data);
	});
})

router.get('/brief/:code', function(req,res,next){
	User.findOne({userCode:req.params.code},function(err,docs){
		if(err){
			res.json({});
			return;
		}
		res.json(docs);
	});
})

router.post('/like', function(req,res,next){
	res.send('like-user')
})

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
