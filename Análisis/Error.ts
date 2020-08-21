export class Error{
    tipo:String;
    descripcion:any;
    linea:number;
    columna:number;
    ambito:String;
    fase:String;

    constructor(tipo:String, descripcion:any, linea:number, columna:number, ambito:String, fase:String){
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
        this.ambito = ambito;
        this.fase = fase;
    }

    toString():String{
        return "<tr><td>" + this.tipo + "</td><td>" + this.descripcion + "</td><td>" + this.linea + "</td>" + 
        "<td>" + this.columna + "</td><td>" + this.ambito + "</td><td>" + this.fase + "</td></tr>";
    }
}