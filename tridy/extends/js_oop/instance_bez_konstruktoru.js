var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human() {
        var _this = this;
        this.gender = '';
        this.prnG = function (g) {
            _this.gender = g;
            console.log(_this.gender);
        };
    }
    return Human;
}());
var Osoba = /** @class */ (function (_super) {
    __extends(Osoba, _super);
    function Osoba() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        //gender = 'female';
        _this.prnN = function (n) {
            _this.name = n;
            console.log(_this.name);
        };
        return _this;
    }
    return Osoba;
}(Human));
var hum = new Human();
hum.prnG('male'); // "male"
var osoba = new Osoba();
osoba.prnG('female'); // "female"
osoba.prnN('Ana'); // "Ana"
