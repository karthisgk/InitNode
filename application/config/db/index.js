var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'quiz'
});

connection.connect(function(error){
	if(!!error)
		console.log('db error');
});

module.exports = connection;