/**
 * Test server for black box tests.
 * @author Euan Goddard
 */

var smtpevent = require('../../smtpevent.js'),
    
server = new smtpevent.SMTPServer('test');

server.listen(1025, "127.0.0.1");
server.on('incoming-mail', function (peer, from, to, message) {
    console.log('Received test message from: '+ peer);
    console.log('Message from: '+ from + ' to: '+ to);
    console.log('---------------------');
    console.log(message.substr(0, 72), message.length > 72 ? "[+" + (message.length - 72) + " more characters]" : "[EOM]");
    console.log('---------------------');
});

// tell server to log its stats every 60 seconds
setInterval(server.log_stats, 60 * 1000);
