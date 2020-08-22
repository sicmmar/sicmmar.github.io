var compilador = Analizador;

function analizar(entrada){
    try{
        console.log(compilador);
        Analizador.parse('let variable:number = 54.54;\nlet suma:number = 32 + variable; \nconsole.log(suma); //86.54');
        return an;
    }catch(e){
        console.log("Error en compilación de Entrada: " + e.toString());
    }
}

