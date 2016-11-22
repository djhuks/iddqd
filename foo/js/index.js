/* jslint node: true */
'use strict';

var BG = require('backgrounder'),
	C = require('./config');


var worker = BG.spawn(__dirname + "/lib/scraper.js", {"children-count" : C.worker}, function()
{
	for (var i = 0, ii = C.urls.length, iii = 0; i < ii; i ++)
	{
		worker.send
		(
			{'url': C.urls[i]},
			function(statusCode, headers, body, msg, pid)
			{
				console.log('Master: %s Worker sent: %s', pid, statusCode, headers, body, msg);
				if (++iii === ii) worker.terminate();
			}
		);
	}
});



/*
pool.map(function (url)
{
	var request = new TORFetch('http://' + url + '.onion');

	request.on('headers', function(headers)
	{
		console.log(headers);
	});

	request.on('data', function(chunk)
	{
		//console.log(chunk.toString('utf-8'));
	});

	request.on('end', function()
	{
		console.log('Ready');
	});
});
*/