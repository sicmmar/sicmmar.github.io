export class Nodo{
    linea:number;
    nonterminal:String;
    valor:any;
    hijos:Nodo[];

    constructor(linea:number, valor:any){
        this.linea = linea;
        this.nonterminal = "";
        this.valor = valor;
        this.hijos = [];
    }

    nuevoHijo(nuevo:Nodo):void{
        this.hijos.push(nuevo);
    }
}