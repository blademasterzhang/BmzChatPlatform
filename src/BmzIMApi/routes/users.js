var express = require('express');
var router = express.Router();

//var UserService = require('../services/userService.js');

var usersData=[{
	userCode: "kai",
	password: "123456",
	avatar: "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg",
	backgroundImg: "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193-bigskin-1.jpg",
	imgList: ["http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193-bigskin-1.jpg","http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193-bigskin-1.jpg"],
	realName: "铠",
	sex: 1,//0女，1男
	birthday: new Date('1987-01-01'),
	relationshipStatus: 1,//0保密，1单身，2恋爱中，3已婚，4同性

	personSign: "古老的魔道家族，流动着神秘力量的血脉传承，都是因为“罪”而获得的。当年轻人追溯着疯狂血缘的来历了解到这个事实后，变得面目全非。他抛开家乡离去……只留下可怕的传说。当一个家族获得不属于自身的力量，终究是要偿还的。而他背负起了罪恶，去终结罪恶。",//个人签名
	address: "贵州 贵阳",
	career: "坦克",//职业
	school: "贵州大学",//学校
},{
	userCode: "daqiao",
	password: "123456",
	avatar: "http://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg",
	backgroundImg: "http://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191-bigskin-1.jpg",
	imgList: ["http://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191-bigskin-1.jpg","http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193-bigskin-1.jpg"],
	realName: "大乔",
	sex: 0,//0女，1男
	birthday: new Date('1987-01-01'),
	relationshipStatus: 1,//0保密，1单身，2恋爱中，3已婚，4同性

	personSign: "古老的魔道家族，流动着神秘力量的血脉传承，都是因为“罪”而获得的。当年轻人追溯着疯狂血缘的来历了解到这个事实后，变得面目全非。他抛开家乡离去……只留下可怕的传说。当一个家族获得不属于自身的力量，终究是要偿还的。而他背负起了罪恶，去终结罪恶。",//个人签名
	address: "贵州 贵阳",
	career: "法师",//职业
	school: "贵州大学",//学校
},{
	userCode: "zhugeliang",
	password: "123456",
	avatar: "http://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg",
	backgroundImg: "http://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190-bigskin-1.jpg",
	imgList: ["http://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191-bigskin-1.jpg","http://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"],
	realName: "诸葛亮",
	sex: 1,//0女，1男
	birthday: new Date('1987-01-01'),
	relationshipStatus: 1,//0保密，1单身，2恋爱中，3已婚，4同性

	personSign: "古老的魔道家族，流动着神秘力量的血脉传承，都是因为“罪”而获得的。当年轻人追溯着疯狂血缘的来历了解到这个事实后，变得面目全非。他抛开家乡离去……只留下可怕的传说。当一个家族获得不属于自身的力量，终究是要偿还的。而他背负起了罪恶，去终结罪恶。",//个人签名
	address: "贵州 贵阳",
	career: "刀客",//职业
	school: "贵州大学",//学校
}];

/* add user */
router.post('/', function(req,res,next){
	// UserService.saveUser(req.body,function(err){
	// 	if(err)
	// 	{
	// 		res.send('add user fail')
	// 		return next();
	// 	}
	// 	res.send('add user success')
	// });
})

/* delete user */
router.delete('/:code', function(req,res,next){
	// UserService.deleteUser({"userCode":req.params.code},function(data){
	// 	res.json(data)
	// });
})

router.put('/', function(req,res,next){
	res.send('update user')
})

router.post('/register', function(req,res,next){
	res.send('register')
})

router.post('/login', function(req,res,next){
	for(var item in usersData){
		if(usersData[item].userCode == req.body.code&& usersData[item].password == req.body.pwd)
		{
			res.json({"result":1});
			return;
		}
	}
	res.json({"result":0});
})

router.get('/nearby/:code', function(req,res,next){
	//res.json(usersData);
	let users = []
	for(var item in usersData){
		if(usersData[item].userCode != req.params.code)
		{
			users.push(usersData[item]);
		}
	}
	console.log(users);
	res.json(users);
	//res.send('nearby-users')
})

router.get('/detail/:code', function(req,res,next){
	for(var item in usersData){
		if(usersData[item].userCode == req.params.code)
		{
			res.json(usersData[item]);
			return;
		}
	}
	res.json({});

	// UserService.userdetail({userCode:req.params.code},function(data){
	// 	res.json(data);
	// });
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
