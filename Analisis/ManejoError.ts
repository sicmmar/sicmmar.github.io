import { Error } from "./Error";

export class ManejoError{
    listaError:Error[];

    constructor(){
        this.listaError = [];
    }

    agregar(err:Error):void{
        this.listaError.push(err);
    }

    mostrarErrores():String{
        var respuesta:String = "", i:number;
        for(i = 0; i < this.listaError.length; i++)
            respuesta+=this.listaError[i].toString() + "";

        return respuesta;
    }
}