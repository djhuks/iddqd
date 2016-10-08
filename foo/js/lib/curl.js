/* jslint node: true */
'use strict';

var Curl = require('node-libcurl').Curl;

var curl =
{
	'get': function (url, callback)
	{
		var curl = new Curl();

		curl.setOpt('URL', url + '.onion'); // url + '.onion'
		curl.setOpt('FOLLOWLOCATION', true);
		curl.setOpt('TIMEOUT', 10);
		curl.setOpt('SSL_VERIFYPEER', false);
		curl.setOpt('SSL_VERIFYHOST', false);
		curl.setOpt('PROXY', 'socks5h://127.0.0.1:9050');

		curl.on('end', function(statusCode, headers, body)
		{
			callback(statusCode, headers.length, body.length);
			//curl.close.bind(curl);
			//this.close();
		});

		curl.on('error', function(err)
		{
			callback(0, 0, 'Error: ' + err + ' ' + this.getInfo('TOTAL_TIME'));
			//curl.close.bind(curl);
			//this.close();
		});

		curl.perform();

	}
};

module.exports = curl;