import { Simbolo } from "./Simbolo";
export class Entorno{
    siguiente:Entorno;
    i:number = 0;
    TablaSimbolos:Simbolo[];
    consola:String[];

    constructor(){
        this.siguiente = null;
        this.TablaSimbolos = [];
        this.consola = [];
    }

    appendConsola(nuevo:any):void{
        this.consola.push(nuevo);
    }

    nuevoSimbolo(nuevo:Simbolo):void {
        if(this.existeSimbolo(nuevo.tipo, nuevo.nombre) > this.TablaSimbolos.length)
            this.TablaSimbolos.push(nuevo);
    }

    buscarSimbolo(tipo:String, nombre:String):Simbolo {
        var ent:Entorno;
        for(ent = this; ent != null; ent = ent.siguiente){
            var indice:number = ent.existeSimbolo(tipo, nombre);
            if(indice < ent.TablaSimbolos.length){
                return ent.TablaSimbolos[indice];
            }
        }
        return null;
    }

    existeSimbolo(tipo:String, nombre:String):number{
        var i:number;
        for(i = 0; i < this.TablaSimbolos.length; i++){
            if(this.TablaSimbolos[i].nombre == nombre  && this.TablaSimbolos[i].tipo == tipo){
                return i;
            }
        }
        return this.TablaSimbolos.length+100;
    }

    colocarSiguiente(nuevoEnt:Entorno):void{
        var entPuntero:Entorno = this;
        var unfinished:boolean = true;
        while(unfinished){
            if(entPuntero.siguiente == null){
                entPuntero.siguiente = nuevoEnt;
                unfinished = false;
            }
            entPuntero = entPuntero.siguiente;
        }
    }
}