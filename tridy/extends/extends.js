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
var Clovek = /** @class */ (function () {
    function Clovek(jmeno) {
        this.jmeno = jmeno;
        console.log('Nazdar' + jmeno);
    }
    return Clovek;
}());
var Zakaznik = /** @class */ (function (_super) {
    __extends(Zakaznik, _super);
    function Zakaznik(jmeno, zamestnani) {
        var _this = _super.call(this, jmeno) || this;
        _this.zamestnani = zamestnani;
        return _this;
    }
    Zakaznik.prototype.funkce = function () {
        console.log('Člověk jménem ' + this.jmeno + ' pracuje jako ' + this.zamestnani);
    };
    return Zakaznik;
}(Clovek));
var dalsiVul = new Zakaznik('Honza', 'Programátor');
dalsiVul.funkce();
