var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	userCode: String,
	password: String,
	Avatar: String,
	backgroundImg: String,
	ImgList: String,
	realName: String,
	sex: Number,//0女，1男
	identityCardNum: String,
	phone: Number,
	qq: String,

	nickName: String,
	birthday: Date,
	relationshipStatus: Number,//0保密，1单身，2恋爱中，3已婚，4同性

	personSign: String,//个人签名
	address: String,
	career: String,//职业
	school: String,//学校

	tags: String,//标签
	personRemark: String,//个人说明

	movies: String,
	bookes: String,
	music: String,

	lastLoginDate: Date,
	registerDate: Date,
});

mongoose.model('User',UserSchema);