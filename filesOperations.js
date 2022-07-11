var fs = require('fs')
var http = require('http')

// Read from file
// http.createServer(function (req, res) {
//     fs.readFile('myFile.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data)
//         return res.end()
//     });
// }).listen(8080);

/*Create a file
fs.appendFile('myNewFile.txt', 'Hello NodeJS!', function(err){ */
//Create an empty file
fs.open('myNewFile.txt', 'w', function (err, file) {
    if (err) throw err
    console.log('Saved!');
})