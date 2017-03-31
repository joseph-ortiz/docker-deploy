var http = require('http');
var faker = require('faker');

var PORT=3000;

function handleRequest(request, resposne) {
	response.end("Hello World");
}

var server =  http.createServer(function(request, response) {
	if(request.url === "/"){
		console.log("Request received. Greeting user!");
		var user = faker.name.findName();
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(`Hello <strong>${user}</strong>! my you look sexy today`);
	}
});

server.listen(PORT, function() {
	console.log("Server is listening on: http://localhost:%s", PORT)
});
