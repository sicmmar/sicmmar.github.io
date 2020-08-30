
//const Error = Struct('tipo', 'descripcion', 'linea', 'columna', 'ambito', 'fase');
var listaError = [];

function toString(err){
    return "<tr><td>" + err.tipo + "</td><td>" + err.descripcion + "</td><td>" + err.linea + "</td>" + 
        "<td>" + err.columna + "</td><td>" + err.ambito + "</td><td>" + err.fase + "</td></tr>";
}