var http = require('http');

var server = http.createServer(function (request, response) {
    console.log(request.url);
    console.log(request.method);
    let data = '';
    request.on('data', chunk => {
        data +=chunk;
    })
    request.on('end', () => {
        console.log(data);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<html><body><h1>Hello World from WWW-Programming course</h1></body></html>');
        response.end();
    })
    
    return response;
});

var port = 9090;
server.listen(port);
console.log(`Node.js web server at port ${port}`);