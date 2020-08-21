export class Error{
    tipo:String;
    descripcion:any;
    linea:number;
    columna:number;
    ambito:String;
    fase:String;

    constructor(tipo:String, descripcion:any, linea:number){
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
    }

    toString():String{
        return "<tr><td>" + this.tipo + "</td><td>" + this.descripcion + "</td><td>" + this.linea + "</td>" + 
        "<td>" + this.columna + "</td><td>" + this.ambito + "</td><td>" + this.fase + "</td></tr>";
    }
}