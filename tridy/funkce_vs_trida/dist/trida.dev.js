"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Uzivatel =
/** @class */
function () {
  function Uzivatel(name) {
    this.name = name;
  }

  Uzivatel.prototype.sayHi = function () {
    alert(this.name);
  };

  return Uzivatel;
}(); // class is a function


alert(_typeof(Uzivatel)); // function
// ...or, more precisely, the constructor method

alert(Uzivatel === Uzivatel.prototype.constructor); // true
// The methods are in Uzivatel.prototype, e.g:

alert(Uzivatel.prototype.sayHi); // alert(this.name);
// there are exactly two methods in the prototype

alert(Object.getOwnPropertyNames(Uzivatel.prototype)); // constructor, sayHi