var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, response) {
    var q = url.parse(req.url);
    var path = '.' + q.path
    if (q.path == '/') {path += 'index'};
    
    var page = path + '.html' 
    console.log(page);
    fs.readFile(page, function (err, data) {
        if (err) {
            response.writeHead(400, {'Content-Type': 'text/html'});
            response.write('404 Page not Found');
            return response.end();
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        console.log('User does' + req.method);
        return response.end();
    })
}).listen(8081);



console.log('Server running at http://127.0.0.1:8081/');