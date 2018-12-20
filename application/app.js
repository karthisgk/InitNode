
var socket  = require( 'socket.io' );
var express = require('express');
var Routes = require('./routes');
var ServerSocket = require('./ServerSocket');
var appConfig = require('./config').initApp(__dirname);
var config = appConfig[process.env.NODE_ENV || 'development'];

var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var router = new Routes(express.Router());
app.use(router.r);

var server  = require('http').createServer(app);
var io = socket.listen(server);
var sv = new ServerSocket(io);

server.listen(config.port, '127.0.0.1');
console.log("server listening at "+config.port);


