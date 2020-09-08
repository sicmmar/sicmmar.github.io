%{
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
"**"     return '**';
"+"      return '+';
"-"      return '-';
"*"      return '*';
"/"      return '/';
"("      return '(';
")"      return ')';
"%"      return '%';
"!"      return '!';
"="      return '=';
">"      return '>';
"<"      return '<';
"{"      return 'lla';
"}"      return 'llc';
";"      return 'pyc';
","      return ',';
":"      return ':';
"."      return '.';
"?"      return '?';

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
[´\"`'].*[´\"`']                            %{ return 'cadena'; %}


\s+     %{ /* skip whitespace */ %}


<<EOF>>         %{ return 'EOF'; %}

.               listaError.push(err);

/lex

/* operator associations and precedence */
/* lo que se hace de ultimo */
%left '.'
%left '?'
%left '||'
%left '&&'
%left '!'
%left '==' '!=' '<' '>' '<=' '>='
%left '+' '-'
%left '/' '*'
%left '**'
%left '%'
%right '++' '--'
%left UMINUS
%left '(' ')'
/* lo que se hace de primero */
%start INICIO

%% /* language grammar */

INICIO
    : LINSTRUCCION EOF { var h = [];
                    h.push($1);
                    return newNodo("INICIO", "", yylineno, h); }
    ;

LINSTRUCCION
    : LINSTRUCCION INSTRUCCION { $$ = $1;
                                $$.hijos.push($2);}
    | INSTRUCCION { var h = [];
                    h.push($1);
                    $$ = newNodo("LINSTRUCCION", "", yylineno, h);}
    ;

INSTRUCCION
    : 'rtypes' 'identificador' '=' EXP 'pyc' { var h = [];
                                            h.push(newNodo("Identificador", $2, yylineno, []));
                                            h.push($4);
                                            $$ = newNodo("TYPE", "", yylineno, h);
    }
    | VAR { $$ = $1; }
    | 'rconsole' '.' 'rlog' '(' EXP ')' 'pyc' { var h = [];
                                        h.push($5);
                                        $$ = newNodo("IMPRIMIR", "", yylineno, h); }
    | 
    ;

VAR
    : T LVAR 'pyc' { var h = [];
                    h.push($1);
                    h.push($2);
                    $$ = newNodo("VAR", "", yylineno, h); }
    | T LVAR '=' EXP 'pyc' { var h = [];
                    h.push($1);
                    h.push($2);
                    h.push($4);
                    $$ = newNodo("VAR", "", yylineno, h);}
    | 'identificador' '=' EXP 'pyc' { var h = [];
                    h.push(newNodo("IDENTIFICADOR", $1, yylineno, []));
                    h.push($3);
                    $$ = newNodo("VAR", "", yylineno, h);}
    | error 'pyc' {}
    | error '}' {}
    ;

T
    : 'rlet' { $$ = newNodo("TIPO", $1, yylineno, []); }
    | 'rconst' { $$ = newNodo("TIPO", $1, yylineno, []); }
    ;

LVAR
    : LVAR ',' IDENTI {     $$ = $1;
                            $$.hijos.push($3); }
    | IDENTI {  var h = [];
                h.push($1);
                $$ = newNodo("LISTAVAR", "", yylineno, h); }
    ;

IDENTI
    : 'identificador' ':' TIPO { var h = [];
                            h.push(newNodo("IDENTIFICADOR", $1, yylineno, [])); 
                            h.push($3);
                            $$ = newNodo("ID", "", yylineno, h); }
    | 'identificador' ':' 'identificador' { var h = [];
                            h.push(newNodo("IDENTIFICADOR", $1, yylineno, [])); 
                            h.push(newNodo("Identificador", $3, yylineno, []));
                            $$ = newNodo("ID", "", yylineno, h);
                            }
    ;

TIPO
    : 'rnumber' { $$ = newNodo("TIPO", $1, yylineno, []); }
    | 'rstring' { $$ = newNodo("TIPO", $1, yylineno, []); }
    | 'rboolean' { $$ = newNodo("TIPO", $1, yylineno, []); } 
    | 'rvoid'  { $$ = newNodo("TIPO", $1, yylineno, []); }
    ;

AOD
    : EXP '++' { var h = [];
                h.push($1);
                h.push(newNodo("++", "", yylineno, []));
                $$ = newNodo("AUMENTO", "", yylineno, h);}
    | EXP '--'  { var h = [];
                h.push($1);
                h.push(newNodo("--", "", yylineno, []));
                $$ = newNodo("DECREMENTO", "", yylineno, h);}
    ;

LENVIO
    : LENVIO ',' EXP { var h = [];
        h.push($3);
        var e = newNodo("EXP", "", yylineno, h);
        h = [];
        h.push(e);
        $$ = $1;
        $$.hijos.push(h);}
    | EXP { var h = [];
        h.push($1);
        var e = newNodo("EXP", "", yylineno, h);
        h = [];
        h.push(e);
        $$ = newNodo("LISTA", "", yylineno, h);}
    ;

EXP
    : EXP '?' EXP ':' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("Interr", "?", yylineno, []));
                    h.push($3);
                    h.push(newNodo("Dos puntos", ":", yylineno, []));
                    h.push($5);
                    $$ = newNodo("Ternario", "", yylineno, h); }
    | '(' EXP ')'  { $$ = $2; }
    | 'lla' LVAR 'llc' { var h = [];
                        h.push(newNodo("Llave abierta", $1, yylineno, []));
                        h.push($2);
                        h.push(newNodo("Llave cerrada", $3, yylineno, []));
                        $$ = newNodo("Def. Type", "", yylineno, h); }
    | EXP '||' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Or", "", yylineno, h);}
    | '!' EXP  { var h = [];
                    h.push(newNodo("", $1, yylineno, []));
                    h.push($2);
                    $$ = newNodo("Mayor o Igual", "", yylineno, h);}
    | EXP '&&' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("And", "", yylineno, h);}
    | EXP '==' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Igual", "", yylineno, h);}
    | EXP '!=' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Diferente", "", yylineno, h);}
    | EXP '<' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Menor", "", yylineno, h);}
    | EXP '<=' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Menor o Igual", "", yylineno, h);}
    | EXP '>' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Mayor", "", yylineno, h);}
    | EXP '>=' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Mayor o Igual", "", yylineno, h);}
    | EXP '+' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("Mas", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Suma", "", yylineno, h);}
    | EXP '-' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("Menos", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Resta", "", yylineno, h);}
    | EXP '*' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("Mult", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Multiplicacion", "", yylineno, h);}
    | EXP '/' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("Div", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Division", "", yylineno, h);}
    | EXP '**' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("Pot", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Potencia", "", yylineno, h);}
    | EXP '%' EXP { var h = [];
                    h.push($1);
                    h.push(newNodo("Mod", $2, yylineno, []));
                    h.push($3);
                    $$ = newNodo("Modular", "", yylineno, h);}
    | '-' EXP %prec UMINUS { var h = [];
                            h.push(newNodo("Signo negativo", $1, yylineno, []));
                            h.push($2);
                            $$ = newNodo("Menos", "", yylineno, h);}
    | 'identificador' '(' LENVIO ')' { var h = [];
                                        h.push($3);
                                        $$ = newNodo("Llamada funcion con Parametros", $1, yylineno, h); }
    | 'identificador' '(' ')' { $$ = newNodo("Llamada Funcion sin Parametros", $1, yylineno, []); }
    | AOD  { $$ = $1; }
    | 'identificador' { $$ = newNodo("Identificador", $1, yylineno, []); }
    | EXP '.' EXP { $$ = $1;
                    $$.hijos.push($3); }
    | 'rfalse' { $$ = newNodo("Falso", $1, yylineno, []); }
    | 'rtrue' { $$ = newNodo("Verdadero", $1, yylineno, []); }
    | 'numero' { $$ = newNodo("Numero", $1, yylineno, []);}
    | 'cadena' { $$ = newNodo("Cadena", $1, yylineno, []); }
    ;