/* jslint node: true */
'use strict';

var	TORFetch = require('torfetch');
var loaded = 0;

process.on('config', function(message, callback)
{
	console.log('Worker: Configured %s!', process.id);
	callback();
});

process.on('message', function(message, callback)
{
	var request = new TORFetch('http://' + message.url + '.onion');

	var foo = {};

	request.on('headers', function(headers)
	{
		foo.head = headers;
	});

	request.on('data', function(chunk)
	{
		foo.data = chunk.toString('utf-8');
	});

	request.on('end', function()
	{
		console.log('done', foo.length);
		callback(foo);
	});
});

process.on('terminate', function(message, callback) {console.log("Worker: %s Loaded", process.id, ++loaded);});




/*
var request = new TORFetch('http://' + message.url + '.onion');

request.on('headers', function(headers)
{
	return headers;
});


request.on('data', function(chunk)
{
	console.log(chunk.toString('utf-8'));
});

request.on('end', function()
{
	console.log('Ready');
});
*/

//console.log(message);

/*
var options =
{
	host: 'google.com',
	port: 443,
	path: '/'
};

http
.get(options, function(res) {callback(process.id, "status-code:", res.statusCode, "loaded", ++loaded, message);})
.on('error', function(e) {callback("error:", e);});
*/