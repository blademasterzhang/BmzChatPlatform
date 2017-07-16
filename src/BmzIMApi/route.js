module.exports = function(app){
	var index = require('./routes/index');
	var users = require('./routes/users');
	var articles = require('./routes/articles');
	var dictionary = require('./routes/dictionary');

	app.use('/api', index);
	app.use('/api/user', users);
	app.use('/api/article', articles);
	app.use('/api/dictionary', dictionary);
}