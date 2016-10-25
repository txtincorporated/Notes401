// Sandbox for YDJS3
function foo() {
  // 'use strict';
  console.log( this.a );
}

var a = 2;

foo(/*window*/);

// (function() {
//   'use strict';
//   foo();
// })();
