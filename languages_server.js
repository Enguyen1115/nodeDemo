var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var p = url.parse(req.url, true)
    var fileName = "." + p.pathname;
    fs.readFile(fileName, function(err, data){
        if(err){
            res.writeHead(200, {'Content-Type':'text/html'});
            return res.end("404 page not found")
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);