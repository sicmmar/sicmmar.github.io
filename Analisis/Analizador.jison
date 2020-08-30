%{
    /*let NodoExp = require('../Arbol/Nodo');
    let Op = require('../Expresión/Operacion');*/
    let err = require('Error');
    let lista = require('ManejoError');
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

"number"        return 'rnumber';
"string"        return 'rstring';
"boolean"       return 'rboolean';
"void"          return 'rvoid';
"false"         return 'rfalse';
"true"          return 'rtrue';
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
"let"           return 'rlet';
"const"         return 'rconst';
"console"       return 'rconsole';
"log"           return 'rlog';
"type"          return 'rtypes';

[0-9]+("."[0-9]+)?                          %{ return 'numero'; %}
[a-zA-Z_][a-zA-Z0-9_]*                      %{ return 'identificador'; %}
[´\"`'].*[´\"`']                                  %{ return 'cadena'; %}


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
    : LINSTRUCCION EOF {return "Done";}
    ;

LINSTRUCCION
    : LINSTRUCCION INSTRUCCION {}
    | INSTRUCCION {}
    ;

INSTRUCCION
    : VAR {}
    | 'rconsole' '.' 'rlog' '(' EXP ')' 'pyc' {}
    ;

VAR
    : T LVAR 'pyc' {}
    | T LVAR '=' EXP 'pyc' {}
    | 'identificador' '=' EXP 'pyc' {}
    | error 'pyc' {}
    | error '}' {}
    ;

T
    : 'rlet' {}
    | 'rconst' {}
    ;

LVAR
    : LVAR ',' 'identificador' ':' TIPO {}
    | 'identificador' ':' TIPO {}
    ;

TIPO
    : 'rnumber' {}
    | 'rstring' {}
    | 'rboolean' {} 
    | 'rvoid'  {}
    | 'rtypes' {}
    ;

AOD
    : EXP '++' {}
    | EXP '--'  {}
    ;

LENVIO
    : LENVIO ',' EXP {}
    | EXP {}
    ;

EXP
    : '(' EXP ')'  {}
    | EXP '||' EXP {}
    | '!' EXP  {}
    | EXP '&&' EXP {}
    | EXP '==' EXP {}
    | EXP '!=' EXP {}
    | EXP '<' EXP {}
    | EXP '<=' EXP {}
    | EXP '>' EXP {}
    | EXP '>=' EXP {}
    | EXP '+' EXP {}
    | EXP '-' EXP {}
    | EXP '*' EXP {}
    | EXP '/' EXP {}
    | EXP '^' EXP {}
    | EXP '%' EXP {}
    | '-' EXP %prec UMINUS {}
    | 'identificador' '(' LENVIO ')' {}
    | 'identificador' '(' ')' {}
    | AOD  {}
    | 'identificador' {}
    | 'rfalse' {}
    | 'rtrue' {}
    | 'numero' {}
    | 'cadena' {}
    ;