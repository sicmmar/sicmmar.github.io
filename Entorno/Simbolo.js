"use strict";
exports.__esModule = true;
exports.Simbolo = void 0;
var Simbolo = /** @class */ (function () {
    function Simbolo(tipo, nombre, valor, linea, ambito) {
        this.valor = valor;
        this.nombre = nombre;
        this.tipo = tipo;
        this.linea = linea;
        this.ambito = ambito;
    }
    Simbolo.prototype.colocarParametros = function (listaParametros) {
        this.listaParametros = listaParametros;
    };
    Simbolo.prototype.toString = function () {
        return this.valor.toString() + "<td>" + this.linea.toString();
    };
    return Simbolo;
}());
exports.Simbolo = Simbolo;
