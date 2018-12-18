
function Routes(app){
	this.db = require('../config').db;
	app.get('/', function(req, res) {
	    res.render('index', {title: 'kathick'});
	});

	app.post('/users', function (req, res) {
	    this.db.query('INSERT INTO customer SET ?', req.body, 
	        function (err, result) {
	            if (err) throw err;
	            res.send('User added to database with ID: ' + result.insertId);
	        }
	    );
	});
	this.r = app;
}

module.exports = Routes;