
function Routes(app){
	var self = this;
	self.db = require('../config').db;
	app.get('/', function(req, res) {
		self.db.get('user', {name: "karthi"}, function(data){
			res.render('index', {title: data[0]._id});
		});
	});

	app.post('/users', function (req, res) {
	    
	});
	self.r = app;
}

module.exports = Routes;