/* jslint node: true */
'use strict';

//
//	Index
//

var torRequest = require("torrequest");

torRequest(
{
	uri		: "https://facebookcorewwwi.onion",
	torHost	: "localhost",
	torPort	: 9050
},

function(err,res,doc)
{
	if(err) return console.log("Error: "+err);
	console.log(res.headers);
});