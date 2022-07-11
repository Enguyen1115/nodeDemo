var http = require('http')
var todaysDate = require('./myCPRG352Date')
var url = require('url')

http.createServer(function(req, res){
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.write('Today\'s date is ' + todaysDate.myDateTime());
    var d = url.parse(req.url, true).query;
    var txt = d.year + " " + d.month;

    // res.write(d.year + " " + d.month)
    res.end(txt);
    // res.end('Hello Nodejs!');
}).listen(8080);