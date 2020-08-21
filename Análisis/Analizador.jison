%{
    let NodoExp = require('../Arbol/Nodo');
    let err = require('./Error');
    let lista = require('./ManejoError');
    var listaErrores = new lista.ManejoError();
%}


/* lexical grammar */
%lex
%YYRECOVERING

%%

("//".*\r\n)|("//".*\n)|("//".*\r)                  /* comentario de una linea */
"/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/"            /* comentario multilinea */ 

">="     return '>=';
"++"     return '++';
"--"     return '--';
"<="     return '<=';
"&&"     return '&&';
"||"     return '||';
"=="     return '==';
"!="     return '!=';
"+"     return '+';
"-"     return '-';
"*"     return '*';
"/"     return '/';
"^"     return '^';
"("     return '(';
")"     return ')';
"%"     return '%';
"!"     return '!';
"="     return '=';
">"     return '>';
"<"     return '<';
"{"     return '{';
"}"     return '}';
";"     return 'pyc';
","     return ',';
":"     return ':';
"."     return '.';

"int"           return 'rint';
"double"        return 'rdouble';
"boolean"       return 'rboolean';
"char"          return 'rchar';
"String"        return 'rstring';
"false"         return 'rfalse';
"true"          return 'rtrue';
"class"         return 'rclass';
"import"        return 'rimport';
"if"            return 'rif';
"else"          return 'relse';
"switch"        return 'rswitch';
"case"          return 'rcase';
"default"       return 'rdefault';
"while"         return 'rwhile';
"do"            return 'rdo';
"for"           return 'rfor';
"break"         return 'rbreak';
"continue"      return 'rcontinue';
"return"        return 'rreturn';
"void"          return 'rvoid';
"main"          return 'rmain';
"System"        return 'rsystem';
"out"           return 'rout';
"print"         return 'rprint';
"println"       return 'rln';

[0-9]+("."[0-9]+)?                          %{ return 'numero'; %}
[a-zA-Z_][a-zA-Z0-9_]*                      %{ return 'identificador'; %}
[\"].*[\"]                                  %{ return 'cadena'; %}
[']("\\n"|"\\t"|"\\r"|"\\\\"|"\\\""|.)[']   %{ return 'caracter'; %}


\s+     %{ /* skip whitespace */ %}


<<EOF>>         %{ return 'EOF'; %}

.               listaErrores.agregar(new err.Error("Lexico", "Caracter "  + yytext +  " no admitido", yylineno));

/lex

/* operator associations and precedence */
/* lo que se hace de ultimo */
%left '||'
%left '&&'
%left '!'
%left '==' '!=' '<' '>' '<=' '>='
%left '+' '-'
%left '/' '*'
%left '^'
%left '%'
%right '++' '--'
%left UMINUS
%left '(' ')'
/* lo que se hace de primero */
%start INICIO

%% /* language grammar */

INICIO
    : LINSTRUCCION EOF { $$ = new NodoExp.Nodo("INICIO", "", yylineno);
        $$.agregarHijo($1);
        return $$;}
    ;

LINSTRUCCION
    : LINSTRUCCION INSTRUCCION  { $$ = $1;
        $$.agregarHijo($2); }
    | INSTRUCCION   { $$ = new NodoExp.Nodo("INSTRUCCION", "", yylineno);
        $$.agregarHijo($1); }
    ;

INSTRUCCION
    : 'rclass' 'identificador' SENTENCIA     { $$ = new NodoExp.Nodo("CLASS", "", yylineno);
        $$.agregarHijo(new NodoExp.Nodo("Identificador", $2, yylineno));
        $$.agregarHijo($3); }
    | 'rimport' 'identificador' 'pyc'      { $$ = new NodoExp.Nodo("IMPORT", "", yylineno);
        $$.agregarHijo(new NodoExp.Nodo("Identificador", $2, yylineno)); }
    | 'rif' EXP SENTENCIA LELSEIF ELSE { $$ = new NodoExp.Nodo("IF", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($3);
        $$.agregarHijo($4);
        $$.agregarHijo($5); }
    | 'rif' EXP SENTENCIA LELSEIF { $$ = new NodoExp.Nodo("IF", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($3);
        $$.agregarHijo($4); }
    | 'rif' EXP SENTENCIA ELSE { $$ = new NodoExp.Nodo("IF", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($3);
        $$.agregarHijo($4); }
    | 'rif' EXP SENTENCIA { $$ = new NodoExp.Nodo("IF", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($3); }
    | 'rswitch' EXP '{' LCASES DEFAULT '}' { $$ = new NodoExp.Nodo("SWITCH", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($4);
        $$.agregarHijo($5); }
    | 'rswitch' EXP '{' LCASES '}' { $$ = new NodoExp.Nodo("SWITCH", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($4); }
    | 'rwhile' EXP SENTENCIA    { $$ = new NodoExp.Nodo("WHILE", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($3); }
    | 'rdo' SENTENCIA 'rwhile' EXP ';'    { $$ = new NodoExp.Nodo("DO", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($4); }
    | 'rfor' '(' VAR EXP ';' AOD ')' SENTENCIA  { $$ = new NodoExp.Nodo("FOR", "", yylineno);
        $$.agregarHijo($3);
        $$.agregarHijo($4);
        $$.agregarHijo($6);
        $$.agregarHijo($8); }
    | AOD ';'   { $$ = $1; }
    | 'rbreak' ';'  { $$ = new NodoExp.Nodo("BREAK", $1, yylineno); }
    | 'rcontinue' ';' { $$ = new NodoExp.Nodo("CONTINUE", $1, yylineno); }
    | 'rreturn' EXP ';' { $$ = new NodoExp.Nodo("RETURN", $1, yylineno);
        $$.agregarHijo($2); }
    | 'rreturn' ';' { $$ = new NodoExp.Nodo("RETURN", $1, yylineno); }
    | 'rsystem' '.' 'rout' '.' 'rprint' '(' EXP ')' ';'  { $$ = new NodoExp.Nodo("PRINT", "", yylineno);
        $$.agregarHijo($7); }
    | 'rsystem' '.' 'rout' '.' 'rln' '(' EXP ')' ';'   { $$ = new NodoExp.Nodo("PRINT", "", yylineno);
        $$.agregarHijo($7); }
    | 'identificador' '(' LENVIO ')' ';'   { $$ = new NodoExp.Nodo("LLAMADA", $1, yylineno);
        $$.agregarHijo($3); }
    | 'identificador' '(' ')' ';'   { $$ = new NodoExp.Nodo("LLAMADA", $1, yylineno); }
    | TIPO 'identificador' '(' ')' SENTENCIA { $$ = new NodoExp.Nodo("FUNCION", $2, yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo($5); }
    | TIPO 'identificador' '(' LPARAM ')' SENTENCIA { $$ = new NodoExp.Nodo("FUNCION", $2, yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo($4);
        $$.agregarHijo($6); }
    | 'rvoid' 'identificador' '(' LPARAM ')' SENTENCIA  { $$ = new NodoExp.Nodo("METODO", $2, yylineno);
        $$.agregarHijo($4);
        $$.agregarHijo($6); }
    | 'rvoid' 'identificador' '(' ')' SENTENCIA  { $$ = new NodoExp.Nodo("METODO", $2, yylineno);
        $$.agregarHijo($5); }
    | 'rvoid' 'rmain' '(' ')' SENTENCIA { $$ = new NodoExp.Nodo("MAIN", "", yylineno);
        $$.agregarHijo($5); }
    | VAR { $$ = $1; }
    ;

SENTENCIA
    : '{' LINSTRUCCION '}'      { $$ = $2;}
    ;

VAR
    : TIPO LENVIO ';'  { $$ = new NodoExp.Nodo("DECLARACION", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo($2); }
    | TIPO LENVIO '=' EXP ';'  { $$ = new NodoExp.Nodo("DECLARACION", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo($2);
        $$.agregarHijo($4); }
    | 'identificador' '=' EXP ';'   { $$ = new NodoExp.Nodo("ASIGNACION", "", yylineno);
        $$.agregarHijo(new NodoExp.Nodo("Identificador", $1, yylineno));
        $$.agregarHijo($3); }
    | error ';' {console.log($1 + ":" + yylineno);}
    | error '}' {console.log($1 + ":" + yylineno);}
    ;

LPARAM
    : LPARAM ',' TIPO 'identificador'       { $$ = $1;
        var aux = new NodoExp.Nodo("PARAMETRO", "", yylineno);
        aux.agregarHijo($3);
        aux.agregarHijo(new NodoExp.Nodo("Identificador", $4, yylineno));
        $$.agregarHijo(aux); }
    | TIPO 'identificador'      { $$ = new NodoExp.Nodo("LPARAMETRO", "", yylineno);
        var aux = new NodoExp.Nodo("PARAMETRO", "", yylineno);
        aux.agregarHijo($1);
        aux.agregarHijo(new NodoExp.Nodo("Identificador", $2, yylineno));
        $$.agregarHijo(aux);}
    ;

TIPO
    : 'rint'    { $$ = new NodoExp.Nodo("RESERVADA INT", $1, yylineno); }
    | 'rdouble'   { $$ = new NodoExp.Nodo("RESERVADA DOUBLE", $1, yylineno); }
    | 'rboolean'    { $$ = new NodoExp.Nodo("RESERVADA BOOLEAN", $1, yylineno); }
    | 'rchar'   { $$ = new NodoExp.Nodo("RESERVADA CHAR", $1, yylineno); }
    | 'rstring' { $$ = new NodoExp.Nodo("RESERVADA STRING", $1, yylineno); }
    ;

AOD
    : EXP '++'   { $$ = new NodoExp.Nodo("AUMENTO", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("AUMENTO", "++", yylineno));}
    | EXP '--'   { $$ = new NodoExp.Nodo("DECREMENTO", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("DECREMENTO", "--", yylineno)); }
    ;

LENVIO
    : LENVIO ',' EXP    { $$ = $1; 
        $$.agregarHijo($3); }
    | EXP   { $$ = new NodoExp.Nodo("LISTA", "", yylineno);
        $$.agregarHijo($1); }
    ;

LCASES
    : LCASES CASES  { $$ = $1;
        $$.agregarHijo($2); }
    | CASES { $$ = new NodoExp.Nodo("LCASE", "", yylineno);
        $$.agregarHijo($1); }
    ;

CASES
    : 'rcase' EXP ':' LINSTRUCCION  { $$ = new NodoExp.Nodo("CASE", "", yylineno);
        $$.agregarHijo($2);
        $$.agregarHijo($4);}
    ;

DEFAULT
    : 'rdefault' ':' LINSTRUCCION   { $$ = new NodoExp.Nodo("DEFAULT", "", yylineno);
        $$.agregarHijo($3);}
    ;

LELSEIF
    : LELSEIF 'relse' 'rif' EXP SENTENCIA   { $$ = $1;
        var aux = new NodoExp.Nodo("ELSEIF", "", yylineno);
        aux.agregarHijo($4);
        aux.agregarHijo($5);
        $$.agregarHijo(aux);}
    | 'relse' 'rif' EXP SENTENCIA   {$$ = new NodoExp.Nodo("LELSEIF", "", yylineno);
        var aux = new NodoExp.Nodo("ELSEIF", "", yylineno);
        aux.agregarHijo($3);
        aux.agregarHijo($4);
        $$.agregarHijo(aux);}
    ;

ELSE
    : 'relse' SENTENCIA     {$$ = new NodoExp.Nodo("ELSE", "", yylineno);
        $$.agregarHijo($2);}
    ;

EXP
    : '(' EXP ')'   { $$ = $2; }
    | EXP '||' EXP  {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Or", $2, yylineno));
        $$.agregarHijo($3);}
    | '!' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo(new NodoExp.Nodo("Negacion", $1, yylineno));
        $$.agregarHijo($2);}
    | EXP '&&' EXP  {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("And", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '==' EXP  {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Igualdad", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '!=' EXP  {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("No igual", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '<' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Menor", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '<=' EXP  {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Menor o igual", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '>' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Mayor", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '>=' EXP  {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Mayor o Igual", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '+' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Suma", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '-' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Resta", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '*' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Multiplicacion", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '/' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Division", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '^' EXP   {$$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Potencia", $2, yylineno));
        $$.agregarHijo($3);}
    | EXP '%' EXP   { $$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo($1);
        $$.agregarHijo(new NodoExp.Nodo("Modular", $2, yylineno));
        $$.agregarHijo($3); }
    | '-' EXP %prec UMINUS  { $$ = new NodoExp.Nodo("EXP", "", yylineno);
        $$.agregarHijo(new NodoExp.Nodo("Menos", $1, yylineno));
        $$.agregarHijo($2); }
    | 'identificador' '(' LENVIO ')' { $$ = new NodoExp.Nodo("LLAMADA", $1, yylineno);
        $$.agregarHijo($3); }
    | 'identificador' '(' ')' { $$ = new NodoExp.Nodo("LLAMADA", $1, yylineno); }
    | AOD   { $$ = $1; }
    | 'identificador'   { $$ = new NodoExp.Nodo("Identificador", $1, yylineno); }
    | 'rfalse'  { $$ = new NodoExp.Nodo("False", $1, yylineno); }
    | 'rtrue'   { $$ = new NodoExp.Nodo("True", $1, yylineno); }
    | 'numero'  { $$ = new NodoExp.Nodo("Numero", $1, yylineno); }
    | 'caracter'    {$$ = new NodoExp.Nodo("Caracter", $1, yylineno);}
    | 'cadena'  {$$ = new NodoExp.Nodo("Cadena", $1, yylineno);}
    ;