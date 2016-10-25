//what are the requirements for our chat server?
//1. add clients and announce
//2. broadcast messages
//3. track clients leaving and announce

module.exports = class ChatRoom {
  constructor() {
    this.seed = 1;
    this.clients = [];
  }

  add(client) {
    client.name = 'client ' + (this.seed++);
    this.clients.push(client);
  }

  send(sender, message) {
    //send this to all the other clients
    this.clients.forEach(c => {
      //if same as sender, return (exit this particular forEach invocation)
      if(c === sender) return;
      //send the message
      c.write(`${sender.name}: ${message}`);
    });
  }

  remove(client) {
    //remove from array
    const index = this.clients.indexOf(client);
    if (index !== -1) this.clients.splice(index, 1);
  }
};