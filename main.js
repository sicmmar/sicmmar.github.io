var analizador = require("./Análisis/Analizador");
var texto = document.getElementById("inicioTXT");

function analizar(entrada){
    try{
        var an = analizador.parse(entrada);
        analizador
        return an;
    }catch(e){
        console.log("Error en compilación de Entrada: " + e.toString());
    }
}

analizar(texto);