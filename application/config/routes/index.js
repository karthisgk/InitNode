var express = require('express');
var app = express.Router();
var main_config = require('../index.js');
var db = main_config.db;


app.get('/', function(req, res) {
    res.render(main_config.app_dir + '/views/index', {title: 'kathick'});
});

app.post('/users', function (req, res) {
    db.query('INSERT INTO customer SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            res.send('User added to database with ID: ' + result.insertId);
        }
    );
});

module.exports = app;