var cool = ('cool-ascii-faces');

module.exports = {
  makeGreeter: function(salutation) {
    return function greet(name) {
      return salutation + ' ' + name + cool();
    };
  },
  makeFarewell: function(salutation) {
    return function(greet) {
      return salutation + ' ' + name;
    };
  }
};