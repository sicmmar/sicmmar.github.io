"use strict";
exports.__esModule = true;
exports.ManejoError = void 0;
var ManejoError = /** @class */ (function () {
    function ManejoError() {
        this.listaError = [];
    }
    ManejoError.prototype.agregar = function (err) {
        this.listaError.push(err);
    };
    ManejoError.prototype.mostrarErrores = function () {
        var respuesta = "", i;
        for (i = 0; i < this.listaError.length; i++)
            respuesta += this.listaError[i].toString() + "";
        return respuesta;
    };
    return ManejoError;
}());
exports.ManejoError = ManejoError;
