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
var Rodic = /** @class */ (function () {
    function Rodic(name, rocnik) {
        this.name = name;
        this.rocnik = rocnik;
    }
    return Rodic;
}());
var Potomek = /** @class */ (function (_super) {
    __extends(Potomek, _super);
    function Potomek(name, rocnik, zamestnani) {
        var _this = _super.call(this, name, rocnik) || this;
        _this.zamestnani = zamestnani;
        return _this;
    }
    Potomek.prototype.protoMetoda = function () {
        var vek = new Date().getFullYear() - (this.rocnik + 1);
        console.log(this.name
            + ' ve svých '
            + String(vek)
            + ' letech, pracuje jako '
            + this.zamestnani);
    };
    return Potomek;
}(Rodic));
var zamestnanec = new Potomek('Eliáš', 1978, 'Kuchař');
zamestnanec.protoMetoda();
