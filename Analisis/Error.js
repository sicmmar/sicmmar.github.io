"use strict";
exports.__esModule = true;
exports.Error = void 0;
var Error = /** @class */ (function () {
    function Error(tipo, descripcion, linea) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
    }
    Error.prototype.toString = function () {
        return "<tr><td>" + this.tipo + "</td><td>" + this.descripcion + "</td><td>" + this.linea + "</td>" +
            "<td>" + this.columna + "</td><td>" + this.ambito + "</td><td>" + this.fase + "</td></tr>";
    };
    return Error;
}());
exports.Error = Error;
