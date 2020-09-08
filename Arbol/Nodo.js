var nNodo = 0;

function newNodo(nt, value, line, childrens){
    var Nodo = {nonterminal: nt, valor:value, linea: line, hijos:childrens};
    return Nodo;
}

function visualizarArbol(root){
    nNodo = 0;
    var respuesta = "digraph arbol{\n node[shape=\"box\"]\n";
    respuesta += recorrer(root);
    respuesta += "\n}";
    return respuesta;
}

function recorrer(root){
    nNodo++;
    var padre = "n" + nNodo;
    var respuesta = padre + " [label = \""+ root.nonterminal +" \\n "+ root.valor +"\"];";
    if(root.hijos.length > 0){
        for(var i = 0; i < root.hijos.length; i++){
            respuesta += padre + " -> n" + (nNodo + 1) + ";\n";
            respuesta += recorrer(root.hijos[i]);
        }
    }

    return respuesta;
}