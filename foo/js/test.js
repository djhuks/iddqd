/* jslint node: true */
'use strict';

var net = require('net');

function scan (host, opts)
{
    opts.ports.map(function (port)
    {
        var c = net.connect(port, host, function ()
        {
            return console.log('connected to', host + ':' + port);
        });
    });
}

scan('facebookcorewwwi.onion', {ports:[80, 81, 443]});