const net = require('net');

const server = net.creatServer(client => {
  client.write('hello');

  client.on('data', message => {
    client.write(message);
  });
});

module.exports = server;