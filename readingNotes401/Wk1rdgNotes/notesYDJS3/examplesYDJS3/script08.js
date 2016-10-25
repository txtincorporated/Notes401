// Sandbox for YDJS3
var myArray = [ "foo", 42, "bar" ];
console.log(myArray);

myArray.baz = "baz";
console.log(myArray);

console.log(myArray.length); // 3

console.log(myArray.baz);    // "baz"