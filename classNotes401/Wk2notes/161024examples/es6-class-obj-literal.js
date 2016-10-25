

const obj = {
  //same as "add: function(client) {
  add(client) {

  },
  //these are property "getters"
  //this runs when you use obj.name
  get name() {

  },
  // and "setters"
  //this runs when you use obj.naem = value
  set name(value) {

  }
};

obj.name = 'fred';
console.log(obj.name);

class ChatRoom {
  constructor() {
    //constructor logic goes here
  }

  //prototype function
  add() {

  }
}

class PrivateChatRoom extends ChatRoom {
  constructor() {
    //calls bse ChatRoom constructor
    super();
    //can't use "this" until here
  }

  add() {
    //custom behavior...
    //you can (but don't need to) access base class methods via:
    super.add();
    //more custom behavior
  }
}

function ChatRoom2() {
  //constructor logic goes here
}

chatRoom2.prototype.add = function() {
  //prototype function
};

function PrivateChatRoom2() {
  ChatRoom2.call(this);
};

PrivateChatRoom2.prototype = Object.create(CahtRoom2.prototype);
PrivateChatRoom2.prototype.add = function() {
  ChatRoom2.prototype.add.call(this);
}