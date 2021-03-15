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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.bla = function (bla) {
        return this.name + ' ' + bla;
    };
    return Person;
}());
//inheritance / dědičnost
var Emloyee = /** @class */ (function (_super) {
    __extends(Emloyee, _super);
    function Emloyee(name, id) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    Emloyee.prototype.kdo = function () {
        return 'In Emloyee Constructor: ' + this.id + ' and extends: ' + this.name;
    };
    return Emloyee;
}(Person));
var zakaznik = new Emloyee('Bob', 123);
console.log(zakaznik.kdo());
console.log(zakaznik.name + ' ' + zakaznik.id);
console.log(zakaznik.bla('blabla'));
