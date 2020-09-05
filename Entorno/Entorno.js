
function newSimbolo(name, tip, value, line, param, amb){
    var Simbolo = {nombre: name, tipo: tip, valor:value, linea:line, lParametros: param, ambito:amb};
    return Simbolo;
}

function newEntorno(father){
    var Entorno = {anterior:father, tablaSimbolos:[], consola:[]};
    return Entorno;
}

function appendConsola(nuevo, entorno){
    entorno.consola.push(nuevo);
}

function nuevoSimbolo(entorno, symbol){
    if(yaHay(entorno, symbol.nombre) == (entorno.tablaSimbolos.length + 100)) return false; 
    else{
        entorno.tablaSimbolos.push(symbol);
        return true;
    }
}

function buscarSimbolo(entorno, nombre){
    var v;
    for(var ent = entorno; ent != null; ent = ent.anterior){
        v = yaHay(ent, nombre);
        if(v < ent.tablaSimbolos.length)
            return ent.tablaSimbolos[v];
    }

    return null;
}

function editarSimbolo(entorno, symbol){
    var v;
    for(var ent = entorno; ent != null; ent = ent.anterior){
        v = yaHay(ent, nombre);
        if(v < ent.tablaSimbolos.length){
            ent.tablaSimbolos[v] = symbol;
            return true;
        }
    }

    return false;
}

function yaHay(entorno, nombre){
    for(var i = 0; i < entorno.tablaSimbolos.length; i++){
        if(entorno.tablaSimbolos[i].nombre == nombre) return i;
    }

    return entorno.tablaSimbolos.length + 100;
}