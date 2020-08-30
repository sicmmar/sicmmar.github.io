/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Analizador = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,5],$V2=[1,7],$V3=[1,9],$V4=[1,10],$V5=[2,5,8,18,20,21],$V6=[1,25],$V7=[1,28],$V8=[1,26],$V9=[1,27],$Va=[1,30],$Vb=[1,31],$Vc=[1,32],$Vd=[1,33],$Ve=[1,38],$Vf=[1,39],$Vg=[1,40],$Vh=[1,41],$Vi=[1,42],$Vj=[1,58],$Vk=[1,59],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[1,51],$Vt=[1,52],$Vu=[1,53],$Vv=[1,54],$Vw=[1,55],$Vx=[1,56],$Vy=[1,57],$Vz=[13,14,22,31,32,34,36,37,38,39,40,41,42,43,44,45,46,47,48],$VA=[14,17,22],$VB=[13,14,22,34,36],$VC=[13,14,22,34,36,37,38,39,40,41,42],$VD=[13,14,22,34,36,37,38,39,40,41,42,43,44],$VE=[13,14,22,34,36,37,38,39,40,41,42,43,44,45,46],$VF=[13,22];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"LINSTRUCCION":4,"EOF":5,"INSTRUCCION":6,"VAR":7,"rconsole":8,".":9,"rlog":10,"(":11,"EXP":12,")":13,"pyc":14,"T":15,"LVAR":16,"=":17,"identificador":18,"}":19,"rlet":20,"rconst":21,",":22,":":23,"TIPO":24,"rnumber":25,"rstring":26,"rboolean":27,"rvoid":28,"rtypes":29,"AOD":30,"++":31,"--":32,"LENVIO":33,"||":34,"!":35,"&&":36,"==":37,"!=":38,"<":39,"<=":40,">":41,">=":42,"+":43,"-":44,"*":45,"/":46,"^":47,"%":48,"rfalse":49,"rtrue":50,"numero":51,"cadena":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"rconsole",9:".",10:"rlog",11:"(",13:")",14:"pyc",17:"=",18:"identificador",19:"}",20:"rlet",21:"rconst",22:",",23:":",25:"rnumber",26:"rstring",27:"rboolean",28:"rvoid",29:"rtypes",31:"++",32:"--",34:"||",35:"!",36:"&&",37:"==",38:"!=",39:"<",40:"<=",41:">",42:">=",43:"+",44:"-",45:"*",46:"/",47:"^",48:"%",49:"rfalse",50:"rtrue",51:"numero",52:"cadena"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,7],[7,3],[7,5],[7,4],[7,2],[7,2],[15,1],[15,1],[16,5],[16,3],[24,1],[24,1],[24,1],[24,1],[24,1],[30,2],[30,2],[33,3],[33,1],[12,3],[12,3],[12,2],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,2],[12,4],[12,3],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
console.log(toString(err));
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:$V1,15:6,18:$V2,20:$V3,21:$V4},{1:[3]},{2:$V0,5:[1,11],6:12,7:4,8:$V1,15:6,18:$V2,20:$V3,21:$V4},o($V5,[2,3]),o($V5,[2,4]),{9:[1,13]},{16:14,18:[1,15]},{17:[1,16]},{14:[1,17],19:[1,18]},{18:[2,11]},{18:[2,12]},{1:[2,1]},o($V5,[2,2]),{10:[1,19]},{14:[1,20],17:[1,21],22:[1,22]},{23:[1,23]},{11:$V6,12:24,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},o($V5,[2,9]),o($V5,[2,10]),{11:[1,34]},o($V5,[2,6]),{11:$V6,12:35,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{18:[1,36]},{24:37,25:$Ve,26:$Vf,27:$Vg,28:$Vh,29:$Vi},{14:[1,43],31:$Vj,32:$Vk,34:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy},{11:$V6,12:60,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:61,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:62,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},o($Vz,[2,44],{11:[1,63]}),o($Vz,[2,43]),o($Vz,[2,45]),o($Vz,[2,46]),o($Vz,[2,47]),o($Vz,[2,48]),{11:$V6,12:64,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{14:[1,65],31:$Vj,32:$Vk,34:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy},{23:[1,66]},o($VA,[2,14]),o($VA,[2,15]),o($VA,[2,16]),o($VA,[2,17]),o($VA,[2,18]),o($VA,[2,19]),o($V5,[2,8]),{11:$V6,12:67,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:68,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:69,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:70,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:71,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:72,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:73,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:74,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:75,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:76,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:77,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:78,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:79,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{11:$V6,12:80,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},o($Vz,[2,20]),o($Vz,[2,21]),{13:[1,81],31:$Vj,32:$Vk,34:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy},o($VB,[2,26],{31:$Vj,32:$Vk,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($Vz,[2,40]),{11:$V6,12:84,13:[1,83],18:$V7,30:29,33:82,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},{13:[1,85],31:$Vj,32:$Vk,34:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy},o($V5,[2,7]),{24:86,25:$Ve,26:$Vf,27:$Vg,28:$Vh,29:$Vi},o([13,14,22,34],[2,25],{31:$Vj,32:$Vk,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VB,[2,27],{31:$Vj,32:$Vk,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VC,[2,28],{31:$Vj,32:$Vk,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VC,[2,29],{31:$Vj,32:$Vk,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VC,[2,30],{31:$Vj,32:$Vk,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VC,[2,31],{31:$Vj,32:$Vk,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VC,[2,32],{31:$Vj,32:$Vk,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VC,[2,33],{31:$Vj,32:$Vk,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VD,[2,34],{31:$Vj,32:$Vk,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VD,[2,35],{31:$Vj,32:$Vk,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),o($VE,[2,36],{31:$Vj,32:$Vk,47:$Vx,48:$Vy}),o($VE,[2,37],{31:$Vj,32:$Vk,47:$Vx,48:$Vy}),o([13,14,22,34,36,37,38,39,40,41,42,43,44,45,46,47],[2,38],{31:$Vj,32:$Vk,48:$Vy}),o([13,14,22,34,36,37,38,39,40,41,42,43,44,45,46,47,48],[2,39],{31:$Vj,32:$Vk}),o($Vz,[2,24]),{13:[1,87],22:[1,88]},o($Vz,[2,42]),o($VF,[2,23],{31:$Vj,32:$Vk,34:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy}),{14:[1,89]},o($VA,[2,13]),o($Vz,[2,41]),{11:$V6,12:90,18:$V7,30:29,35:$V8,44:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd},o($V5,[2,5]),o($VF,[2,22],{31:$Vj,32:$Vk,34:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy})],
defaultActions: {9:[2,11],10:[2,12],11:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    /*let NodoExp = require('../Arbol/Nodo');
    let Op = require('../Expresión/Operacion');*/
    //var err = require('Error');
    //let lista = require('./ManejoError');
    //var listaErrores = new lista.ManejoError();
    var err = {tipo: 'lexico', descripcion: 'error 1', linea: 5, columna: 6, ambito: 'global', fase: 'traduccion'};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* comentario de una linea */
break;
case 1:/* comentario multilinea */ 
break;
case 2:return 42;
break;
case 3:return 31;
break;
case 4:return 32;
break;
case 5:return 40;
break;
case 6:return 36;
break;
case 7:return 34;
break;
case 8:return 37;
break;
case 9:return 38;
break;
case 10:return 43;
break;
case 11:return 44;
break;
case 12:return 45;
break;
case 13:return 46;
break;
case 14:return 47;
break;
case 15:return 11;
break;
case 16:return 13;
break;
case 17:return 48;
break;
case 18:return 35;
break;
case 19:return 17;
break;
case 20:return 41;
break;
case 21:return 39;
break;
case 22:return '{';
break;
case 23:return 19;
break;
case 24:return 14;
break;
case 25:return 22;
break;
case 26:return 23;
break;
case 27:return 9;
break;
case 28:return 25;
break;
case 29:return 26;
break;
case 30:return 27;
break;
case 31:return 28;
break;
case 32:return 49;
break;
case 33:return 50;
break;
case 34:return 'rif';
break;
case 35:return 'relse';
break;
case 36:return 'rswitch';
break;
case 37:return 'rcase';
break;
case 38:return 'rdefault';
break;
case 39:return 'rwhile';
break;
case 40:return 'rdo';
break;
case 41:return 'rfor';
break;
case 42:return 'rbreak';
break;
case 43:return 'rcontinue';
break;
case 44:return 'rreturn';
break;
case 45:return 20;
break;
case 46:return 21;
break;
case 47:return 8;
break;
case 48:return 10;
break;
case 49:return 29;
break;
case 50: return 51; 
break;
case 51: return 18; 
break;
case 52: return 52; 
break;
case 53: /* skip whitespace */ 
break;
case 54: return 5; 
break;
case 55:listaError.push(err);
break;
}
},
rules: [/^(?:(\/\/.*\r\n)|(\/\/.*\n)|(\/\/.*\r))/,/^(?:\/\*\/*([^*/]|[^*]\/|\*[^/])*\**\*\/)/,/^(?:>=)/,/^(?:\+\+)/,/^(?:--)/,/^(?:<=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:==)/,/^(?:!=)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:%)/,/^(?:!)/,/^(?:=)/,/^(?:>)/,/^(?:<)/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:,)/,/^(?::)/,/^(?:\.)/,/^(?:number\b)/,/^(?:string\b)/,/^(?:boolean\b)/,/^(?:void\b)/,/^(?:false\b)/,/^(?:true\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:for\b)/,/^(?:break\b)/,/^(?:continue\b)/,/^(?:return\b)/,/^(?:let\b)/,/^(?:const\b)/,/^(?:console\b)/,/^(?:log\b)/,/^(?:type\b)/,/^(?:[0-9]+(\.[0-9]+)?)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:[´\"`'].*[´\"`'])/,/^(?:\s+)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Analizador;
exports.Parser = Analizador.Parser;
exports.parse = function () { return Analizador.parse.apply(Analizador, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}