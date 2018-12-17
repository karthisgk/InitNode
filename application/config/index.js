
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
	setDIR: function(dir){
		main.app_dir = dir;
	},	
	initRoutes: function(){
		return require(main.app_dir+'/config/routes');
	},
	initServerSocket: function(server){
		main.ServerSocket = server;
		return require('./ServerSocket');
	}
};

module.exports = main;
