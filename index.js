var http = require('http');
var json = require('json-object');

http.createServer(function(req,res){
	var newJson = {
		"quote": "hello world",
		"author":"Peter"
	}
	//res.setHeader(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(newJson));
}).listen(3000, 'localhost');
