var express = require('express');
var router = express.Router();

router.post('/', function(req,res,next){
	res.send('add article')
})

router.delete('/', function(req,res,next){
	res.send('delete article')
})

router.put('/', function(req,res,next){
	res.send('update article')
})

router.get('/:type', function(req,res,next){
	res.send('article list')
})

router.get('/:id', function(req,res,next){
	res.send('article')
})

module.exports = router;