var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('I am learning Nodejs')
}

eventEmitter.on('learnNode', myEventHandler);

var myEventHandler1 = function(){
    console.log('I am learning REACT')
}

eventEmitter.on('learnReact', myEventHandler1);

eventEmitter.emit('learnNode');