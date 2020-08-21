import { Parametro } from "./Parametro";

export class Simbolo{
    nombre:String;
    tipo:String;
    valor:any;
    linea:number;
    listaParametros:Parametro[];
    ambito:String;

    constructor(tipo:String, nombre:String, valor:any, linea:number, ambito:String){
        this.valor = valor;
        this.nombre = nombre;
        this.tipo = tipo;
        this.linea = linea;
        this.ambito = ambito;
    }

    colocarParametros(listaParametros:Parametro[]):void{
        this.listaParametros = listaParametros;
    }

    toString():String{
        return this.valor.toString() + "<td>" + this.linea.toString();
    }
}