var http = require('http');
var json = require('json-object');
var mysql = require('mysql');
var newJson;

var con = mysql.createConnection({
	host : "localhost",
	user : "techUser",
	password : "techisgreat",
	database : "TechQuotes"
});

http.createServer(function(req,res){
		//res.setHeader(200, {'Content-Type': 'application/json'});
		con.query("SELECT * FROM quotes", function (err, result, fields){
			if (err) throw err;
			var randomNum = Math.floor(Math.random()*10);
			newJson = {
				"quote" : result[randomNum].quote,
				"author" : result[randomNum].author
			}
			console.log(result);
            res.setHeader('Access-Control-Allow-Origin', '*');
			res.end(JSON.stringify(newJson));

		});
}).listen(3000, 'localhost');
