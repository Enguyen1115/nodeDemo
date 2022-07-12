var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var rs = fs.createReadStream('./myNewFile.txt');

rs.on('open', function(){
    console.log('the file is open.');
});