export class Nodo{
    linea:number;
    columna:number;
    nonterminal:String;
    valor:any;

    constructor(linea:number, columna:number, nonterminal:String, valor:any){
        this.linea = linea;
        this.columna = columna;
        this.nonterminal = nonterminal;
        this.valor = valor;
    }
}