/*global require*/
/*global __dirname*/

var express = require('express'),
    app = express(),
    server = require('http').createServer(app)
;

server.listen(5555);

app.use(express.static(__dirname + '/public'));

app.get('/', function AppRouteRoot(req, res) {
	'use strict';
    res.sendFile(__dirname + 'index.html');
});