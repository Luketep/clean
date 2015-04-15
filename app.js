/*global require*/
/*global __dirname*/

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    port = 5555,
    exampleModule = require('./modules/example.js')
;

console.log('%s loaded', exampleModule);

server.listen(port);

console.log('Server started and listening to port %d', port);

app.use(express.static(__dirname + '/public'));

app.get('/', function AppRouteRoot(req, res) {
	'use strict';
    res.sendFile(__dirname + 'index.html');
});