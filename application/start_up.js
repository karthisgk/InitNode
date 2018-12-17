
var main_config = require('./config');
var config = main_config[process.env.NODE_ENV || 'development'];

main_config.setDIR(__dirname);

var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(main_config.app_dir + '/public'));
app.set('view engine', 'ejs');
app.use(main_config.initRoutes());

var server  = require('http').createServer(app);
main_config.initServerSocket(server);
server.listen(config.port, '127.0.0.1');
console.log("server listening at "+config.port);


