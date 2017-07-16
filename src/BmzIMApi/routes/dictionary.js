var express = require('express');
var router = express.Router();

router.post('/', function(req,res,next){
	res.send('add dictionary')
})

router.delete('/', function(req,res,next){
	res.send('delete dictionary')
})

router.put('/', function(req,res,next){
	res.send('update dictionary')
})

router.get('/:type',function(req,res,next){
	console.log('params type:'+req.params.type)
	var jsonData= [{"id":1,"name":"首页","type":'menu'},{"id":2,"name":"历史","type":'menu'},{"id":3,"name":"关于","type":'menu'}];
	res.json(jsonData);
});

module.exports = router;