/* jslint node: true */
'use strict';

//
//	Socks
//




/*
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
				host: "facebookcorewwwi.onion",
				port: 443
			},

			command: 'connect'
		};

		socks.createConnection(options, function(err, socket, info)
		{
			if (err) console.log(err);
			else
			{
				socket.setEncoding('utf8');
				socket.write("GET / HTTPS/1.1\nHost: facebookcorewwwi.onion\n\n");
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
*/

//module.exports = request;