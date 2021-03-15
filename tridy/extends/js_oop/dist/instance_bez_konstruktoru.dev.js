"use strict";

// class Dum {
//   bla(bla: String) {
//     return bla;
//   }
// }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // let valdstejnsky = new Dum();
// console.log(valdstejnsky.bla('hallo'));


var Human =
/** @class */
function () {
  function Human() {
    var _this = this;

    this.gender = 'male';

    this.prnG = function () {
      console.log(_this.gender);
    };
  }

  return Human;
}();

var Osoba =
/** @class */
function (_super) {
  __extends(Osoba, _super);

  function Osoba() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = 'Ana';
    _this.gender = 'female';

    _this.prnN = function () {
      console.log(_this.name);
    };

    return _this;
  }

  return Osoba;
}(Human);

var hum = new Human();
hum.prnG(); // "male"

var osoba = new Osoba();
osoba.prnG(); // "female"

osoba.prnN(); // "Ana"