var main_config = require('../index.js');
var socket  = require( 'socket.io' );
var io = socket.listen(main_config.ServerSocket);

io.on('connection', function (socket) {
	socket.on('chat', function(data){
		io.sockets.emit('chat', data);
	});
});

module.exports = io;