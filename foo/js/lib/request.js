/* jslint node: true */
'use strict';

var Socks = require('socks');

var request =
{
	'get': function (url, callback)
	{
		var options =
		{
			proxy:
			{
				ipaddress: '127.0.0.1',
				port: 9050,
				type: 5
			},

			target:
			{
				host: "google.com",
				port: 80
			},

			command: 'connect'
		};

		Socks.createConnection(options, function(err, socket, info)
		{
			if (err) console.log(err);
			else
			{
				socket.write("GET / HTTP/1.1\nHost: google.com\n\n");
				socket.on('data', function(data)
				{
					//callback(data.length, 0, 0);
					console.log('Request: ', data.toString('utf8').length, data.toString('utf8'), '\n\n\n##########\n\n\n');
				});

				socket.resume();
			}
		});

	}
};

module.exports = request;