var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log("Got a get request for the homepage")
    res.send('Hello Express get!');
});

app.post('/', function(req, res){
    console.log("Got a post request for the homepage")
    res.send('Hello Express post!');
});

app.delete('/deleteUser', function(req, res){
    console.log("Got a delete request for the deleteUser homepage")
    res.send('Hello Express Delete!');
});

app.get('/listOfUsers', function(req, res){
    console.log("Got a get request for the homepage")
    res.send('List of users!');
});

app.get('/ab*cd', function(req, res){
    console.log("Got a get request for the /ab*cd homepage")
    res.send('Page pattern match!');
});

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Connecting");
});