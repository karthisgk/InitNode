
var db = require('./db');

var main = {
	development: {
		name: 'Node App',
		port: process.env.PORT || 5000
	},
	production: {
		name: 'Node App',
		port: process.env.PORT || 5000
	},
	db: db,
	initApp: function(dir){
		main.app_dir = dir;
		return main;
	}
};

module.exports = main;
