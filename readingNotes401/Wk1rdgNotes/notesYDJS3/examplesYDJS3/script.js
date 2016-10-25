// Sandbox for YDJS3
"use strict";

var myObject = {};

Object.defineProperty( myObject, "a", {
  value: 2,
  writable: false, // not writable!
  configurable: true,
  enumerable: true
} );

myObject.a = 3; // TypeError
