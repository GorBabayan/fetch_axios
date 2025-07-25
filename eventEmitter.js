var eventEmitter = require('events').EventEmitter;
var example = new eventEmitter();

function events(letter) {
    example.on('message', function(letter) {
        console.log(`show the message: ${letter}`);
    });
    
    example.once('message', function(letter) {
        console.log(`show me once: ${letter}`);
    });
    
    example.emit('message', "This very helpful");
    example.emit('message', "pretty good");
    example.emit('message', "pretty good");    
}    

events();



