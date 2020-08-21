"use strict";
exports.__esModule = true;
exports.Nodo = void 0;
var Nodo = /** @class */ (function () {
    function Nodo(linea, valor) {
        this.linea = linea;
        this.nonterminal = "";
        this.valor = valor;
        this.hijos = [];
    }
    Nodo.prototype.nuevoHijo = function (nuevo) {
        this.hijos.push(nuevo);
    };
    return Nodo;
}());
exports.Nodo = Nodo;
