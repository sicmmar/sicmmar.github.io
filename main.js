

function analizar(entrada){
    try{
        //let variable:number = 54.54;\nlet suma:number = 32 + variable; \nconsole.log(suma); //86.54
        Analizador.parse('id = false;');
        console.log("done");
    }catch(e){
        console.log("Error en compilación de Entrada: " + e.toString());
    }
}

