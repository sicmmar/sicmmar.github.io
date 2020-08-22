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
exports.Expresion = void 0;
var Nodo_1 = require("../Arbol/Nodo");
var Expresion = /** @class */ (function (_super) {
    __extends(Expresion, _super);
    function Expresion(valor, linea, tipo) {
        var _this = _super.call(this, linea, valor) || this;
        _this.tipo = tipo;
        return _this;
    }
    return Expresion;
}(Nodo_1.Nodo));
exports.Expresion = Expresion;
