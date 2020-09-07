
function analizar(entrada){
    try{
        /*let variable:number = 54.54;
        let suma:number = 32 + variable;
        variable = (32 == 32) ? 10 : 8;
        console.log(suma); 
        //86.54*/
        console.log(entrada);
        var res = Analizador.parse(entrada);

        var f = new Blob([visualizarArbol(res)], {type: 'text/plain'});
        if(window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(f, "arbol.dot");
        else{
            var a = document.createElement("a"), url = URL.createObjectURL(f);
            a.href = url;
            a.download = "arbol.dot";
            document.body.appendChild(a);
            a.click();
            setTimeout(function(){
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            });
        }
        
    }catch(e){
        console.log("Error en compilación de Entrada: " + e.toString());
    }
}

