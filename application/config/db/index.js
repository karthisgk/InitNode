var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'BU0Ii1E9IrOJ',
	database: 'quiz'
});

connection.connect(function(error){
	if(!!error)
		console.log('db error');
});

module.exports = connection;