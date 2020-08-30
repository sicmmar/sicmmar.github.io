import { Nodo } from "../Arbol/Nodo";
import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "./Expresion";

export class Operacion extends Expresion{
    izq:Nodo;
    der:Nodo;
    operacion:number;

    constructor(operacion:number, linea:number, valor:any, izq:Nodo, der:Nodo){
        super(valor, linea, 6);
        this.izq = izq;
        this.der = der;
        this.operacion = operacion;
        this.nuevoHijo(izq);
        this.nuevoHijo(der);
    }

    ejecutar(ent:Entorno):any {
        switch(this.tipo){
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
    }
}