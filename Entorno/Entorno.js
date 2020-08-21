"use strict";
exports.__esModule = true;
exports.Entorno = void 0;
var Entorno = /** @class */ (function () {
    function Entorno() {
        this.i = 0;
        this.siguiente = null;
        this.TablaSimbolos = [];
        this.consola = [];
    }
    Entorno.prototype.appendConsola = function (nuevo) {
        this.consola.push(nuevo);
    };
    Entorno.prototype.nuevoSimbolo = function (nuevo) {
        if (this.existeSimbolo(nuevo.tipo, nuevo.nombre) > this.TablaSimbolos.length)
            this.TablaSimbolos.push(nuevo);
    };
    Entorno.prototype.buscarSimbolo = function (tipo, nombre) {
        var ent;
        for (ent = this; ent != null; ent = ent.siguiente) {
            var indice = ent.existeSimbolo(tipo, nombre);
            if (indice < ent.TablaSimbolos.length) {
                return ent.TablaSimbolos[indice];
            }
        }
        return null;
    };
    Entorno.prototype.existeSimbolo = function (tipo, nombre) {
        var i;
        for (i = 0; i < this.TablaSimbolos.length; i++) {
            if (this.TablaSimbolos[i].nombre == nombre && this.TablaSimbolos[i].tipo == tipo) {
                return i;
            }
        }
        return this.TablaSimbolos.length + 100;
    };
    Entorno.prototype.colocarSiguiente = function (nuevoEnt) {
        var entPuntero = this;
        var unfinished = true;
        while (unfinished) {
            if (entPuntero.siguiente == null) {
                entPuntero.siguiente = nuevoEnt;
                unfinished = false;
            }
            entPuntero = entPuntero.siguiente;
        }
    };
    return Entorno;
}());
exports.Entorno = Entorno;
