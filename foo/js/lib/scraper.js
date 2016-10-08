/* jslint node: true */
'use strict';

var request = require('./curl.js');

process.on('config', function(message, callback)
{
	console.log('Worker: %s configured!', process.id);
	callback();
});

process.on('message', function(message, callback)
{
	console.log('Worker: %s received message: %s', process.id, message.url);
	request.get(message.url, function(statusCode, headers, body, msg){callback(statusCode, headers, body, msg, process.id);});
});

process.on('terminate', function(message)
{
	console.log("Worker: %s is terminating!", process.id);
});