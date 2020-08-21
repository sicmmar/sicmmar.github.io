import { Nodo } from "../Árbol/Nodo";

export class Expresion extends Nodo{
    tipo:number;

    constructor(valor:any, linea:number, tipo:number){
        super(linea, valor);
        this.tipo = tipo;
    }
}