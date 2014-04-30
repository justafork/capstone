var http = require('http');
var sys = require('sys');
var fs = require('fs');

var server = http.createServer();
console.log('node_log-> server has started');
server.listen(3000);

server.on('request', function(request, response) {
	console.log('node_log-> server.on working...');
	var file = fs.createWriteStream('file.jpg');
	var fileSize = request.headers['content-length'];
	var uploadSize = 0;
	
	request.on('data', function(chunk) {
		console.log('node_log-> req.on.data working...');
		var bufferStore = file.write(chunk);
		if (bufferStore == false) {request.pause();}
	});

	file.on('drain', function() {request.resume();});
	
	request.on('end', function() {
		response.write('upload done');
		response.end();
	});
});