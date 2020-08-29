

function analizar(entrada){
    try{
        /*let variable:number = 54.54;
        let suma:number = 32 + variable;
        console.log(suma); 
        //86.54*/
        console.log(entrada);
        var res = Analizador.parse(entrada);
        console.log(res);
    }catch(e){
        console.log("Error en compilación de Entrada: " + e.toString());
    }
}

