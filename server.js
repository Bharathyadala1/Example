var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

app.get('/', function(request,response) {
	var html = ReactDOMServer.renderToString(
	React.createElement(Component)
);
	response.send(html);
});

var PORT = 5000;
app.listen(PORT, function() {
	console.log('http://localhost:' + PORT);
});
