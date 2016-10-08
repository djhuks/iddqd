/* jslint node: true  */
'use strict';

var backgrounder = require("backgrounder");


//var arrays = [], size = 1;
//while (pool.length > 0) arrays.push(pool.splice(0, size));

var worker = backgrounder.spawn
(
	__dirname + "/worker.js",

	{"children-count" : 4},

	function()
	{
		for (var i = 0, ii = pool.length, counter = 0; i < ii; i ++)
		{
			worker.send
			(
				{'url': pool[i]},

				function(message)
				{
					console.log("Master: client called the callback with %s arguments:", arguments.length);
					if (++counter === pool.length) {worker.terminate();}
				}
			);
		}
	}
);