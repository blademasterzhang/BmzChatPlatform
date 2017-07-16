var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
	saveUser:function(jsonValue,callback){
		var user = new User(jsonValue);
		user.save(function(err){
			callback(err);
		})
	},
	deleteUser:function(condition,callback){
		User.findOne(condition,function(err,doc){
			if(err)
			{
				callback({});
				return;
			}
			if(doc)
				doc.remove();
			callback({success:1});
		});
	},
	userdetail:function(condition,callback){
		User.findOne(condition,function(err,doc){
			if(err){
				callback({});
				return;
			}
			callback(doc);
		});
	},


}

// var user = new User({
// 	userCode:'123456',
// 	password:'Password01!',
// 	Avatar:'http://img2.100bt.com/upload/ttq/20131103/1383470553132_middle.jpg',
// 	realName:'张晓亮',
// 	sex:1,
// 	identityCardNum:'522228198701031522',
// 	phone:13856987452,
// 	qq:'705325136',
// 	nickName:'blademasterzhang'
// });

// user.birthday = '1987-05-06';

// user.save(function(err){
// 	console.log('save status:',err?'failed'+err:'success');
// });