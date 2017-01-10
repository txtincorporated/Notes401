//this is core node library for tcp server
const net = require('net');
const figlet = require('figlet');

//let's name clients with a counter
let i = 1;

//create a server and give it the listener
//for "requests" aka connection
// (we pass in event handler as this is an e ent emitter)
const server = net.createServer(client => {
  const name = 'client ' + (i++);
  console.log('client', name, 'connected');

  client.setEncoding('utf-8');

  //"client" is a "duplex stream"
  client.on('data', data => {
    figlet(data, (err, figletized) => {
      client.write(figletized + '\n');
    });
  });

  client.on('close', () => {
    console.log(`client ${name} has disconnected`);
  });
});

const port = 65000;
server.listen(port, err => {
  console.log('server listening on port', port, err);
});