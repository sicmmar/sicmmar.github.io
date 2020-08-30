"use strict";
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
exports.__esModule = true;
exports.Operacion = void 0;
var Expresion_1 = require("./Expresion");
var Operacion = /** @class */ (function (_super) {
    __extends(Operacion, _super);
    function Operacion(operacion, linea, valor, izq, der) {
        var _this = _super.call(this, valor, linea, 6) || this;
        _this.izq = izq;
        _this.der = der;
        _this.operacion = operacion;
        _this.nuevoHijo(izq);
        _this.nuevoHijo(der);
        return _this;
    }
    Operacion.prototype.ejecutar = function (ent) {
        switch (this.tipo) {
            case 1:
                return "Es string";
            case 2:
                return "Es un numero";
            case 3:
                return "Es un bool";
            case 4:
                return "Es void";
            case 5:
                return "Es types";
        }
    };
    return Operacion;
}(Expresion_1.Expresion));
exports.Operacion = Operacion;
