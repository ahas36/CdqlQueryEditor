// Generated from /Users/ali/CDQLParserV3/Cdql.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CdqlListener = require('./CdqlListener').CdqlListener;
var CdqlVisitor = require('./CdqlVisitor').CdqlVisitor;



var grammarFileName = "Cdql.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003&\u00d3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0003\u0002\u0003\u0002\u0005\u00029\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002>\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004H\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004M\n\u0004",
    "\u0007\u0004O\n\u0004\f\u0004\u000e\u0004R\u000b\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005Y\n\u0005\f\u0005",
    "\u000e\u0005\\\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bg\n\b\f\b\u000e",
    "\bj\u000b\b\u0003\b\u0003\b\u0003\b\u0005\bo\n\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "y\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u0081",
    "\n\r\u0003\r\u0003\r\u0005\r\u0085\n\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u0091\n\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u0097\n\u000f\f\u000f\u000e\u000f",
    "\u009a\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00ac\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00bb\n\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0007\u0019\u00c4\n\u0019\f\u0019\u000e\u0019\u00c7\u000b\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u00cf\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0002",
    "\u0003\u001c\u001c\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.024\u0002\u0006\u0004\u0002##&&\u0004",
    "\u0002\n\u000b&&\u0003\u0002\u0017\u001a\u0003\u0002\u001c!\u00cd\u0002",
    "=\u0003\u0002\u0002\u0002\u0004A\u0003\u0002\u0002\u0002\u0006D\u0003",
    "\u0002\u0002\u0002\bU\u0003\u0002\u0002\u0002\n]\u0003\u0002\u0002\u0002",
    "\f_\u0003\u0002\u0002\u0002\u000ea\u0003\u0002\u0002\u0002\u0010p\u0003",
    "\u0002\u0002\u0002\u0012r\u0003\u0002\u0002\u0002\u0014x\u0003\u0002",
    "\u0002\u0002\u0016z\u0003\u0002\u0002\u0002\u0018|\u0003\u0002\u0002",
    "\u0002\u001a\u0086\u0003\u0002\u0002\u0002\u001c\u0090\u0003\u0002\u0002",
    "\u0002\u001e\u009b\u0003\u0002\u0002\u0002 \u00ab\u0003\u0002\u0002",
    "\u0002\"\u00ad\u0003\u0002\u0002\u0002$\u00af\u0003\u0002\u0002\u0002",
    "&\u00b1\u0003\u0002\u0002\u0002(\u00b3\u0003\u0002\u0002\u0002*\u00b5",
    "\u0003\u0002\u0002\u0002,\u00ba\u0003\u0002\u0002\u0002.\u00bc\u0003",
    "\u0002\u0002\u00020\u00be\u0003\u0002\u0002\u00022\u00c8\u0003\u0002",
    "\u0002\u00024\u00d0\u0003\u0002\u0002\u000268\u0005\u0004\u0003\u0002",
    "79\u0005\u0018\r\u000287\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029>\u0003\u0002\u0002\u0002:;\u0005.\u0018\u0002;<\u0005\u0018",
    "\r\u0002<>\u0003\u0002\u0002\u0002=6\u0003\u0002\u0002\u0002=:\u0003",
    "\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u00050\u0019\u0002@\u0003",
    "\u0003\u0002\u0002\u0002AB\u0007\u000e\u0002\u0002BC\u0005\u0006\u0004",
    "\u0002C\u0005\u0003\u0002\u0002\u0002DG\u0007\u0013\u0002\u0002EH\u0005",
    "\b\u0005\u0002FH\u0005\u000e\b\u0002GE\u0003\u0002\u0002\u0002GF\u0003",
    "\u0002\u0002\u0002HP\u0003\u0002\u0002\u0002IL\u0007\u0014\u0002\u0002",
    "JM\u0005\b\u0005\u0002KM\u0005\u000e\b\u0002LJ\u0003\u0002\u0002\u0002",
    "LK\u0003\u0002\u0002\u0002MO\u0003\u0002\u0002\u0002NI\u0003\u0002\u0002",
    "\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002",
    "\u0002\u0002QS\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002ST\u0007",
    "\u0015\u0002\u0002T\u0007\u0003\u0002\u0002\u0002UZ\u0005\n\u0006\u0002",
    "VW\u0007\u0016\u0002\u0002WY\u0005\f\u0007\u0002XV\u0003\u0002\u0002",
    "\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003",
    "\u0002\u0002\u0002[\t\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002",
    "]^\u0007\"\u0002\u0002^\u000b\u0003\u0002\u0002\u0002_`\u0007\"\u0002",
    "\u0002`\r\u0003\u0002\u0002\u0002ab\u0005\u0012\n\u0002bc\u0007\u0013",
    "\u0002\u0002ch\u0005\u0014\u000b\u0002de\u0007\u0014\u0002\u0002eg\u0005",
    "\u0014\u000b\u0002fd\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002",
    "hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ik\u0003\u0002\u0002",
    "\u0002jh\u0003\u0002\u0002\u0002kn\u0007\u0015\u0002\u0002lm\u0007\u0010",
    "\u0002\u0002mo\u0005\u0010\t\u0002nl\u0003\u0002\u0002\u0002no\u0003",
    "\u0002\u0002\u0002o\u000f\u0003\u0002\u0002\u0002pq\u0007\"\u0002\u0002",
    "q\u0011\u0003\u0002\u0002\u0002rs\u0007\"\u0002\u0002s\u0013\u0003\u0002",
    "\u0002\u0002ty\u0005\n\u0006\u0002uy\u0005\b\u0005\u0002vy\u0005\u000e",
    "\b\u0002wy\u0005\u0016\f\u0002xt\u0003\u0002\u0002\u0002xu\u0003\u0002",
    "\u0002\u0002xv\u0003\u0002\u0002\u0002xw\u0003\u0002\u0002\u0002y\u0015",
    "\u0003\u0002\u0002\u0002z{\t\u0002\u0002\u0002{\u0017\u0003\u0002\u0002",
    "\u0002|}\u0007\t\u0002\u0002}\u0080\u0005\u001c\u000f\u0002~\u007f\u0007",
    "\u0011\u0002\u0002\u007f\u0081\u0007&\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0007\u0012\u0002\u0002\u0083\u0085\u0005\u001a",
    "\u000e\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002",
    "\u0002\u0002\u0085\u0019\u0003\u0002\u0002\u0002\u0086\u0087\t\u0003",
    "\u0002\u0002\u0087\u001b\u0003\u0002\u0002\u0002\u0088\u0089\b\u000f",
    "\u0001\u0002\u0089\u0091\u0005 \u0011\u0002\u008a\u008b\u0007\u0013",
    "\u0002\u0002\u008b\u008c\u0005\u001c\u000f\u0002\u008c\u008d\u0007\u0015",
    "\u0002\u0002\u008d\u0091\u0003\u0002\u0002\u0002\u008e\u008f\u0007\u0017",
    "\u0002\u0002\u008f\u0091\u0005\u001c\u000f\u0003\u0090\u0088\u0003\u0002",
    "\u0002\u0002\u0090\u008a\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0091\u0098\u0003\u0002\u0002\u0002\u0092\u0093\f\u0005",
    "\u0002\u0002\u0093\u0094\u0005\u001e\u0010\u0002\u0094\u0095\u0005\u001c",
    "\u000f\u0006\u0095\u0097\u0003\u0002\u0002\u0002\u0096\u0092\u0003\u0002",
    "\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u001d\u0003\u0002",
    "\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009c\t\u0004",
    "\u0002\u0002\u009c\u001f\u0003\u0002\u0002\u0002\u009d\u009e\u0005\"",
    "\u0012\u0002\u009e\u009f\u0005(\u0015\u0002\u009f\u00a0\u0005$\u0013",
    "\u0002\u00a0\u00ac\u0003\u0002\u0002\u0002\u00a1\u00a2\u0005&\u0014",
    "\u0002\u00a2\u00a3\u0005*\u0016\u0002\u00a3\u00a4\u0005\"\u0012\u0002",
    "\u00a4\u00a5\u0007\u0018\u0002\u0002\u00a5\u00a6\u0005$\u0013\u0002",
    "\u00a6\u00ac\u0003\u0002\u0002\u0002\u00a7\u00a8\u0005&\u0014\u0002",
    "\u00a8\u00a9\u0005,\u0017\u0002\u00a9\u00aa\u0007\u001b\u0002\u0002",
    "\u00aa\u00ac\u0003\u0002\u0002\u0002\u00ab\u009d\u0003\u0002\u0002\u0002",
    "\u00ab\u00a1\u0003\u0002\u0002\u0002\u00ab\u00a7\u0003\u0002\u0002\u0002",
    "\u00ac!\u0003\u0002\u0002\u0002\u00ad\u00ae\u0005\u0014\u000b\u0002",
    "\u00ae#\u0003\u0002\u0002\u0002\u00af\u00b0\u0005\u0014\u000b\u0002",
    "\u00b0%\u0003\u0002\u0002\u0002\u00b1\u00b2\u0005\u0014\u000b\u0002",
    "\u00b2\'\u0003\u0002\u0002\u0002\u00b3\u00b4\t\u0005\u0002\u0002\u00b4",
    ")\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007\f\u0002\u0002\u00b6+\u0003",
    "\u0002\u0002\u0002\u00b7\u00bb\u0007\r\u0002\u0002\u00b8\u00b9\u0007",
    "\r\u0002\u0002\u00b9\u00bb\u0007\u0017\u0002\u0002\u00ba\u00b7\u0003",
    "\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb-\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0007\u0003\u0002\u0002\u00bd/\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0007\u0004\u0002\u0002\u00bf\u00c0\u0007",
    "\u0005\u0002\u0002\u00c0\u00c5\u00052\u001a\u0002\u00c1\u00c2\u0007",
    "\u0014\u0002\u0002\u00c2\u00c4\u00052\u001a\u0002\u00c3\u00c1\u0003",
    "\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003",
    "\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c61\u0003",
    "\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007",
    "\u000f\u0002\u0002\u00c9\u00ca\u00054\u001b\u0002\u00ca\u00cb\u0007",
    "\u0006\u0002\u0002\u00cb\u00ce\u0007\u0007\u0002\u0002\u00cc\u00cd\u0007",
    "\b\u0002\u0002\u00cd\u00cf\u0005\u001c\u000f\u0002\u00ce\u00cc\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf3\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0007\"\u0002\u0002\u00d15\u0003\u0002",
    "\u0002\u0002\u00138=GLPZhnx\u0080\u0084\u0090\u0098\u00ab\u00ba\u00c5",
    "\u00ce"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'push'", "'define'", "'context entity'", "'is from'", 
                     null, "'where'", "'when'", "'date'", "'lifetime'", 
                     "'between'", "'is'", "'pull'", "'entity'", "'as'", 
                     "'every'", "'until'", "'('", "','", "')'", "'.'", null, 
                     null, null, "'xor'", "'null'", "'='", "'<'", "'>'", 
                     "'<='", "'>='", "'!='" ];

var symbolicNames = [ null, null, "DEFINE", "CONTEXT_ENTITY", "IS_FROM", 
                      "ENTITY_TYPE", "WHERE", "WHEN", "DATE", "LIFETIME", 
                      "BETWEEN", "IS", "PULL", "ENTITY", "AS", "EVERY", 
                      "UNTIL", "LPAREN", "COMMA", "RPAREN", "DOT", "NOT", 
                      "AND", "OR", "XOR", "NULL", "EQ", "LTH", "GTH", "LET", 
                      "GET", "NOT_EQ", "ID", "STRING", "COMMENT", "WS", 
                      "INT" ];

var ruleNames =  [ "rule_Cdql", "rule_Pull", "rule_Select", "rule_Attribute", 
                   "rule_EntityTitle", "rule_AttributeTitle", "rule_FunctionCall", 
                   "rule_AssisgnedName", "rule_FunctionTitle", "rule_Operand", 
                   "rule_ContextValue", "rule_When", "rule_Occurrence", 
                   "rule_Condition", "rule_expr_op", "rule_Constraint", 
                   "rule_left_element", "rule_right_element", "rule_target_element", 
                   "rule_relational_op", "rule_between_op", "rule_is_or_is_not", 
                   "ruel_Push", "rule_Define", "rule_context_entity", "rule_entity_id" ];

function CdqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CdqlParser.prototype = Object.create(antlr4.Parser.prototype);
CdqlParser.prototype.constructor = CdqlParser;

Object.defineProperty(CdqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CdqlParser.EOF = antlr4.Token.EOF;
CdqlParser.T__0 = 1;
CdqlParser.DEFINE = 2;
CdqlParser.CONTEXT_ENTITY = 3;
CdqlParser.IS_FROM = 4;
CdqlParser.ENTITY_TYPE = 5;
CdqlParser.WHERE = 6;
CdqlParser.WHEN = 7;
CdqlParser.DATE = 8;
CdqlParser.LIFETIME = 9;
CdqlParser.BETWEEN = 10;
CdqlParser.IS = 11;
CdqlParser.PULL = 12;
CdqlParser.ENTITY = 13;
CdqlParser.AS = 14;
CdqlParser.EVERY = 15;
CdqlParser.UNTIL = 16;
CdqlParser.LPAREN = 17;
CdqlParser.COMMA = 18;
CdqlParser.RPAREN = 19;
CdqlParser.DOT = 20;
CdqlParser.NOT = 21;
CdqlParser.AND = 22;
CdqlParser.OR = 23;
CdqlParser.XOR = 24;
CdqlParser.NULL = 25;
CdqlParser.EQ = 26;
CdqlParser.LTH = 27;
CdqlParser.GTH = 28;
CdqlParser.LET = 29;
CdqlParser.GET = 30;
CdqlParser.NOT_EQ = 31;
CdqlParser.ID = 32;
CdqlParser.STRING = 33;
CdqlParser.COMMENT = 34;
CdqlParser.WS = 35;
CdqlParser.INT = 36;

CdqlParser.RULE_rule_Cdql = 0;
CdqlParser.RULE_rule_Pull = 1;
CdqlParser.RULE_rule_Select = 2;
CdqlParser.RULE_rule_Attribute = 3;
CdqlParser.RULE_rule_EntityTitle = 4;
CdqlParser.RULE_rule_AttributeTitle = 5;
CdqlParser.RULE_rule_FunctionCall = 6;
CdqlParser.RULE_rule_AssisgnedName = 7;
CdqlParser.RULE_rule_FunctionTitle = 8;
CdqlParser.RULE_rule_Operand = 9;
CdqlParser.RULE_rule_ContextValue = 10;
CdqlParser.RULE_rule_When = 11;
CdqlParser.RULE_rule_Occurrence = 12;
CdqlParser.RULE_rule_Condition = 13;
CdqlParser.RULE_rule_expr_op = 14;
CdqlParser.RULE_rule_Constraint = 15;
CdqlParser.RULE_rule_left_element = 16;
CdqlParser.RULE_rule_right_element = 17;
CdqlParser.RULE_rule_target_element = 18;
CdqlParser.RULE_rule_relational_op = 19;
CdqlParser.RULE_rule_between_op = 20;
CdqlParser.RULE_rule_is_or_is_not = 21;
CdqlParser.RULE_ruel_Push = 22;
CdqlParser.RULE_rule_Define = 23;
CdqlParser.RULE_rule_context_entity = 24;
CdqlParser.RULE_rule_entity_id = 25;

function Rule_CdqlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Cdql;
    return this;
}

Rule_CdqlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_CdqlContext.prototype.constructor = Rule_CdqlContext;

Rule_CdqlContext.prototype.rule_Define = function() {
    return this.getTypedRuleContext(Rule_DefineContext,0);
};

Rule_CdqlContext.prototype.rule_Pull = function() {
    return this.getTypedRuleContext(Rule_PullContext,0);
};

Rule_CdqlContext.prototype.ruel_Push = function() {
    return this.getTypedRuleContext(Ruel_PushContext,0);
};

Rule_CdqlContext.prototype.rule_When = function() {
    return this.getTypedRuleContext(Rule_WhenContext,0);
};

Rule_CdqlContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Cdql(this);
	}
};

Rule_CdqlContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Cdql(this);
	}
};

Rule_CdqlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Cdql(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_CdqlContext = Rule_CdqlContext;

CdqlParser.prototype.rule_Cdql = function() {

    var localctx = new Rule_CdqlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CdqlParser.RULE_rule_Cdql);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CdqlParser.PULL:
            this.state = 52;
            this.rule_Pull();
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CdqlParser.WHEN) {
                this.state = 53;
                this.rule_When();
            }

            break;
        case CdqlParser.T__0:
            this.state = 56;
            this.ruel_Push();
            this.state = 57;
            this.rule_When();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 61;
        this.rule_Define();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_PullContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Pull;
    return this;
}

Rule_PullContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_PullContext.prototype.constructor = Rule_PullContext;

Rule_PullContext.prototype.PULL = function() {
    return this.getToken(CdqlParser.PULL, 0);
};

Rule_PullContext.prototype.rule_Select = function() {
    return this.getTypedRuleContext(Rule_SelectContext,0);
};

Rule_PullContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Pull(this);
	}
};

Rule_PullContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Pull(this);
	}
};

Rule_PullContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Pull(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_PullContext = Rule_PullContext;

CdqlParser.prototype.rule_Pull = function() {

    var localctx = new Rule_PullContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CdqlParser.RULE_rule_Pull);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(CdqlParser.PULL);
        this.state = 64;
        this.rule_Select();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_SelectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Select;
    return this;
}

Rule_SelectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_SelectContext.prototype.constructor = Rule_SelectContext;

Rule_SelectContext.prototype.LPAREN = function() {
    return this.getToken(CdqlParser.LPAREN, 0);
};

Rule_SelectContext.prototype.RPAREN = function() {
    return this.getToken(CdqlParser.RPAREN, 0);
};

Rule_SelectContext.prototype.rule_Attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Rule_AttributeContext);
    } else {
        return this.getTypedRuleContext(Rule_AttributeContext,i);
    }
};

Rule_SelectContext.prototype.rule_FunctionCall = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Rule_FunctionCallContext);
    } else {
        return this.getTypedRuleContext(Rule_FunctionCallContext,i);
    }
};

Rule_SelectContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CdqlParser.COMMA);
    } else {
        return this.getToken(CdqlParser.COMMA, i);
    }
};


Rule_SelectContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Select(this);
	}
};

Rule_SelectContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Select(this);
	}
};

Rule_SelectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Select(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_SelectContext = Rule_SelectContext;

CdqlParser.prototype.rule_Select = function() {

    var localctx = new Rule_SelectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CdqlParser.RULE_rule_Select);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(CdqlParser.LPAREN);
        this.state = 69;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 67;
            this.rule_Attribute();
            break;

        case 2:
            this.state = 68;
            this.rule_FunctionCall();
            break;

        }
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CdqlParser.COMMA) {
            this.state = 71;
            this.match(CdqlParser.COMMA);
            this.state = 74;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            switch(la_) {
            case 1:
                this.state = 72;
                this.rule_Attribute();
                break;

            case 2:
                this.state = 73;
                this.rule_FunctionCall();
                break;

            }
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 81;
        this.match(CdqlParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Attribute;
    return this;
}

Rule_AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_AttributeContext.prototype.constructor = Rule_AttributeContext;

Rule_AttributeContext.prototype.rule_EntityTitle = function() {
    return this.getTypedRuleContext(Rule_EntityTitleContext,0);
};

Rule_AttributeContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CdqlParser.DOT);
    } else {
        return this.getToken(CdqlParser.DOT, i);
    }
};


Rule_AttributeContext.prototype.rule_AttributeTitle = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Rule_AttributeTitleContext);
    } else {
        return this.getTypedRuleContext(Rule_AttributeTitleContext,i);
    }
};

Rule_AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Attribute(this);
	}
};

Rule_AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Attribute(this);
	}
};

Rule_AttributeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Attribute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_AttributeContext = Rule_AttributeContext;

CdqlParser.prototype.rule_Attribute = function() {

    var localctx = new Rule_AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CdqlParser.RULE_rule_Attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.rule_EntityTitle();
        this.state = 88;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 84;
                this.match(CdqlParser.DOT);
                this.state = 85;
                this.rule_AttributeTitle(); 
            }
            this.state = 90;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_EntityTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_EntityTitle;
    return this;
}

Rule_EntityTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_EntityTitleContext.prototype.constructor = Rule_EntityTitleContext;

Rule_EntityTitleContext.prototype.ID = function() {
    return this.getToken(CdqlParser.ID, 0);
};

Rule_EntityTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_EntityTitle(this);
	}
};

Rule_EntityTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_EntityTitle(this);
	}
};

Rule_EntityTitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_EntityTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_EntityTitleContext = Rule_EntityTitleContext;

CdqlParser.prototype.rule_EntityTitle = function() {

    var localctx = new Rule_EntityTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CdqlParser.RULE_rule_EntityTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(CdqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_AttributeTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_AttributeTitle;
    return this;
}

Rule_AttributeTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_AttributeTitleContext.prototype.constructor = Rule_AttributeTitleContext;

Rule_AttributeTitleContext.prototype.ID = function() {
    return this.getToken(CdqlParser.ID, 0);
};

Rule_AttributeTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_AttributeTitle(this);
	}
};

Rule_AttributeTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_AttributeTitle(this);
	}
};

Rule_AttributeTitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_AttributeTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_AttributeTitleContext = Rule_AttributeTitleContext;

CdqlParser.prototype.rule_AttributeTitle = function() {

    var localctx = new Rule_AttributeTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CdqlParser.RULE_rule_AttributeTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(CdqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_FunctionCall;
    return this;
}

Rule_FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_FunctionCallContext.prototype.constructor = Rule_FunctionCallContext;

Rule_FunctionCallContext.prototype.rule_FunctionTitle = function() {
    return this.getTypedRuleContext(Rule_FunctionTitleContext,0);
};

Rule_FunctionCallContext.prototype.LPAREN = function() {
    return this.getToken(CdqlParser.LPAREN, 0);
};

Rule_FunctionCallContext.prototype.rule_Operand = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Rule_OperandContext);
    } else {
        return this.getTypedRuleContext(Rule_OperandContext,i);
    }
};

Rule_FunctionCallContext.prototype.RPAREN = function() {
    return this.getToken(CdqlParser.RPAREN, 0);
};

Rule_FunctionCallContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CdqlParser.COMMA);
    } else {
        return this.getToken(CdqlParser.COMMA, i);
    }
};


Rule_FunctionCallContext.prototype.AS = function() {
    return this.getToken(CdqlParser.AS, 0);
};

Rule_FunctionCallContext.prototype.rule_AssisgnedName = function() {
    return this.getTypedRuleContext(Rule_AssisgnedNameContext,0);
};

Rule_FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_FunctionCall(this);
	}
};

Rule_FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_FunctionCall(this);
	}
};

Rule_FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_FunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_FunctionCallContext = Rule_FunctionCallContext;

CdqlParser.prototype.rule_FunctionCall = function() {

    var localctx = new Rule_FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CdqlParser.RULE_rule_FunctionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.rule_FunctionTitle();
        this.state = 96;
        this.match(CdqlParser.LPAREN);
        this.state = 97;
        this.rule_Operand();
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CdqlParser.COMMA) {
            this.state = 98;
            this.match(CdqlParser.COMMA);
            this.state = 99;
            this.rule_Operand();
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 105;
        this.match(CdqlParser.RPAREN);
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 106;
            this.match(CdqlParser.AS);
            this.state = 107;
            this.rule_AssisgnedName();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_AssisgnedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_AssisgnedName;
    return this;
}

Rule_AssisgnedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_AssisgnedNameContext.prototype.constructor = Rule_AssisgnedNameContext;

Rule_AssisgnedNameContext.prototype.ID = function() {
    return this.getToken(CdqlParser.ID, 0);
};

Rule_AssisgnedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_AssisgnedName(this);
	}
};

Rule_AssisgnedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_AssisgnedName(this);
	}
};

Rule_AssisgnedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_AssisgnedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_AssisgnedNameContext = Rule_AssisgnedNameContext;

CdqlParser.prototype.rule_AssisgnedName = function() {

    var localctx = new Rule_AssisgnedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CdqlParser.RULE_rule_AssisgnedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(CdqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_FunctionTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_FunctionTitle;
    return this;
}

Rule_FunctionTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_FunctionTitleContext.prototype.constructor = Rule_FunctionTitleContext;

Rule_FunctionTitleContext.prototype.ID = function() {
    return this.getToken(CdqlParser.ID, 0);
};

Rule_FunctionTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_FunctionTitle(this);
	}
};

Rule_FunctionTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_FunctionTitle(this);
	}
};

Rule_FunctionTitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_FunctionTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_FunctionTitleContext = Rule_FunctionTitleContext;

CdqlParser.prototype.rule_FunctionTitle = function() {

    var localctx = new Rule_FunctionTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CdqlParser.RULE_rule_FunctionTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(CdqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_OperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Operand;
    return this;
}

Rule_OperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_OperandContext.prototype.constructor = Rule_OperandContext;

Rule_OperandContext.prototype.rule_EntityTitle = function() {
    return this.getTypedRuleContext(Rule_EntityTitleContext,0);
};

Rule_OperandContext.prototype.rule_Attribute = function() {
    return this.getTypedRuleContext(Rule_AttributeContext,0);
};

Rule_OperandContext.prototype.rule_FunctionCall = function() {
    return this.getTypedRuleContext(Rule_FunctionCallContext,0);
};

Rule_OperandContext.prototype.rule_ContextValue = function() {
    return this.getTypedRuleContext(Rule_ContextValueContext,0);
};

Rule_OperandContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Operand(this);
	}
};

Rule_OperandContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Operand(this);
	}
};

Rule_OperandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Operand(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_OperandContext = Rule_OperandContext;

CdqlParser.prototype.rule_Operand = function() {

    var localctx = new Rule_OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CdqlParser.RULE_rule_Operand);
    try {
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 114;
            this.rule_EntityTitle();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 115;
            this.rule_Attribute();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 116;
            this.rule_FunctionCall();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 117;
            this.rule_ContextValue();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_ContextValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_ContextValue;
    return this;
}

Rule_ContextValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_ContextValueContext.prototype.constructor = Rule_ContextValueContext;

Rule_ContextValueContext.prototype.INT = function() {
    return this.getToken(CdqlParser.INT, 0);
};

Rule_ContextValueContext.prototype.STRING = function() {
    return this.getToken(CdqlParser.STRING, 0);
};

Rule_ContextValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_ContextValue(this);
	}
};

Rule_ContextValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_ContextValue(this);
	}
};

Rule_ContextValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_ContextValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_ContextValueContext = Rule_ContextValueContext;

CdqlParser.prototype.rule_ContextValue = function() {

    var localctx = new Rule_ContextValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CdqlParser.RULE_rule_ContextValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        _la = this._input.LA(1);
        if(!(_la===CdqlParser.STRING || _la===CdqlParser.INT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_WhenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_When;
    return this;
}

Rule_WhenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_WhenContext.prototype.constructor = Rule_WhenContext;

Rule_WhenContext.prototype.WHEN = function() {
    return this.getToken(CdqlParser.WHEN, 0);
};

Rule_WhenContext.prototype.rule_Condition = function() {
    return this.getTypedRuleContext(Rule_ConditionContext,0);
};

Rule_WhenContext.prototype.EVERY = function() {
    return this.getToken(CdqlParser.EVERY, 0);
};

Rule_WhenContext.prototype.INT = function() {
    return this.getToken(CdqlParser.INT, 0);
};

Rule_WhenContext.prototype.UNTIL = function() {
    return this.getToken(CdqlParser.UNTIL, 0);
};

Rule_WhenContext.prototype.rule_Occurrence = function() {
    return this.getTypedRuleContext(Rule_OccurrenceContext,0);
};

Rule_WhenContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_When(this);
	}
};

Rule_WhenContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_When(this);
	}
};

Rule_WhenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_When(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_WhenContext = Rule_WhenContext;

CdqlParser.prototype.rule_When = function() {

    var localctx = new Rule_WhenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CdqlParser.RULE_rule_When);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(CdqlParser.WHEN);
        this.state = 123;
        this.rule_Condition(0);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CdqlParser.EVERY) {
            this.state = 124;
            this.match(CdqlParser.EVERY);
            this.state = 125;
            this.match(CdqlParser.INT);
        }

        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CdqlParser.UNTIL) {
            this.state = 128;
            this.match(CdqlParser.UNTIL);
            this.state = 129;
            this.rule_Occurrence();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_OccurrenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Occurrence;
    return this;
}

Rule_OccurrenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_OccurrenceContext.prototype.constructor = Rule_OccurrenceContext;

Rule_OccurrenceContext.prototype.DATE = function() {
    return this.getToken(CdqlParser.DATE, 0);
};

Rule_OccurrenceContext.prototype.INT = function() {
    return this.getToken(CdqlParser.INT, 0);
};

Rule_OccurrenceContext.prototype.LIFETIME = function() {
    return this.getToken(CdqlParser.LIFETIME, 0);
};

Rule_OccurrenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Occurrence(this);
	}
};

Rule_OccurrenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Occurrence(this);
	}
};

Rule_OccurrenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Occurrence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_OccurrenceContext = Rule_OccurrenceContext;

CdqlParser.prototype.rule_Occurrence = function() {

    var localctx = new Rule_OccurrenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CdqlParser.RULE_rule_Occurrence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        _la = this._input.LA(1);
        if(!(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (CdqlParser.DATE - 8)) | (1 << (CdqlParser.LIFETIME - 8)) | (1 << (CdqlParser.INT - 8)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Condition;
    return this;
}

Rule_ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_ConditionContext.prototype.constructor = Rule_ConditionContext;

Rule_ConditionContext.prototype.rule_Constraint = function() {
    return this.getTypedRuleContext(Rule_ConstraintContext,0);
};

Rule_ConditionContext.prototype.LPAREN = function() {
    return this.getToken(CdqlParser.LPAREN, 0);
};

Rule_ConditionContext.prototype.rule_Condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Rule_ConditionContext);
    } else {
        return this.getTypedRuleContext(Rule_ConditionContext,i);
    }
};

Rule_ConditionContext.prototype.RPAREN = function() {
    return this.getToken(CdqlParser.RPAREN, 0);
};

Rule_ConditionContext.prototype.NOT = function() {
    return this.getToken(CdqlParser.NOT, 0);
};

Rule_ConditionContext.prototype.rule_expr_op = function() {
    return this.getTypedRuleContext(Rule_expr_opContext,0);
};

Rule_ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Condition(this);
	}
};

Rule_ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Condition(this);
	}
};

Rule_ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Condition(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CdqlParser.prototype.rule_Condition = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Rule_ConditionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, CdqlParser.RULE_rule_Condition, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CdqlParser.ID:
        case CdqlParser.STRING:
        case CdqlParser.INT:
            this.state = 135;
            this.rule_Constraint();
            break;
        case CdqlParser.LPAREN:
            this.state = 136;
            this.match(CdqlParser.LPAREN);
            this.state = 137;
            this.rule_Condition(0);
            this.state = 138;
            this.match(CdqlParser.RPAREN);
            break;
        case CdqlParser.NOT:
            this.state = 140;
            this.match(CdqlParser.NOT);
            this.state = 141;
            this.rule_Condition(1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 150;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Rule_ConditionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CdqlParser.RULE_rule_Condition);
                this.state = 144;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 145;
                this.rule_expr_op();
                this.state = 146;
                this.rule_Condition(4); 
            }
            this.state = 152;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Rule_expr_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_expr_op;
    return this;
}

Rule_expr_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_expr_opContext.prototype.constructor = Rule_expr_opContext;

Rule_expr_opContext.prototype.AND = function() {
    return this.getToken(CdqlParser.AND, 0);
};

Rule_expr_opContext.prototype.XOR = function() {
    return this.getToken(CdqlParser.XOR, 0);
};

Rule_expr_opContext.prototype.OR = function() {
    return this.getToken(CdqlParser.OR, 0);
};

Rule_expr_opContext.prototype.NOT = function() {
    return this.getToken(CdqlParser.NOT, 0);
};

Rule_expr_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_expr_op(this);
	}
};

Rule_expr_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_expr_op(this);
	}
};

Rule_expr_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_expr_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_expr_opContext = Rule_expr_opContext;

CdqlParser.prototype.rule_expr_op = function() {

    var localctx = new Rule_expr_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CdqlParser.RULE_rule_expr_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CdqlParser.NOT) | (1 << CdqlParser.AND) | (1 << CdqlParser.OR) | (1 << CdqlParser.XOR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_ConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Constraint;
    return this;
}

Rule_ConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_ConstraintContext.prototype.constructor = Rule_ConstraintContext;

Rule_ConstraintContext.prototype.rule_left_element = function() {
    return this.getTypedRuleContext(Rule_left_elementContext,0);
};

Rule_ConstraintContext.prototype.rule_relational_op = function() {
    return this.getTypedRuleContext(Rule_relational_opContext,0);
};

Rule_ConstraintContext.prototype.rule_right_element = function() {
    return this.getTypedRuleContext(Rule_right_elementContext,0);
};

Rule_ConstraintContext.prototype.rule_target_element = function() {
    return this.getTypedRuleContext(Rule_target_elementContext,0);
};

Rule_ConstraintContext.prototype.rule_between_op = function() {
    return this.getTypedRuleContext(Rule_between_opContext,0);
};

Rule_ConstraintContext.prototype.AND = function() {
    return this.getToken(CdqlParser.AND, 0);
};

Rule_ConstraintContext.prototype.rule_is_or_is_not = function() {
    return this.getTypedRuleContext(Rule_is_or_is_notContext,0);
};

Rule_ConstraintContext.prototype.NULL = function() {
    return this.getToken(CdqlParser.NULL, 0);
};

Rule_ConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Constraint(this);
	}
};

Rule_ConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Constraint(this);
	}
};

Rule_ConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Constraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_ConstraintContext = Rule_ConstraintContext;

CdqlParser.prototype.rule_Constraint = function() {

    var localctx = new Rule_ConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CdqlParser.RULE_rule_Constraint);
    try {
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 155;
            this.rule_left_element();
            this.state = 156;
            this.rule_relational_op();
            this.state = 157;
            this.rule_right_element();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.rule_target_element();
            this.state = 160;
            this.rule_between_op();
            this.state = 161;
            this.rule_left_element();
            this.state = 162;
            this.match(CdqlParser.AND);
            this.state = 163;
            this.rule_right_element();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 165;
            this.rule_target_element();
            this.state = 166;
            this.rule_is_or_is_not();
            this.state = 167;
            this.match(CdqlParser.NULL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_left_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_left_element;
    return this;
}

Rule_left_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_left_elementContext.prototype.constructor = Rule_left_elementContext;

Rule_left_elementContext.prototype.rule_Operand = function() {
    return this.getTypedRuleContext(Rule_OperandContext,0);
};

Rule_left_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_left_element(this);
	}
};

Rule_left_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_left_element(this);
	}
};

Rule_left_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_left_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_left_elementContext = Rule_left_elementContext;

CdqlParser.prototype.rule_left_element = function() {

    var localctx = new Rule_left_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CdqlParser.RULE_rule_left_element);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.rule_Operand();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_right_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_right_element;
    return this;
}

Rule_right_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_right_elementContext.prototype.constructor = Rule_right_elementContext;

Rule_right_elementContext.prototype.rule_Operand = function() {
    return this.getTypedRuleContext(Rule_OperandContext,0);
};

Rule_right_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_right_element(this);
	}
};

Rule_right_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_right_element(this);
	}
};

Rule_right_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_right_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_right_elementContext = Rule_right_elementContext;

CdqlParser.prototype.rule_right_element = function() {

    var localctx = new Rule_right_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CdqlParser.RULE_rule_right_element);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.rule_Operand();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_target_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_target_element;
    return this;
}

Rule_target_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_target_elementContext.prototype.constructor = Rule_target_elementContext;

Rule_target_elementContext.prototype.rule_Operand = function() {
    return this.getTypedRuleContext(Rule_OperandContext,0);
};

Rule_target_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_target_element(this);
	}
};

Rule_target_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_target_element(this);
	}
};

Rule_target_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_target_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_target_elementContext = Rule_target_elementContext;

CdqlParser.prototype.rule_target_element = function() {

    var localctx = new Rule_target_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CdqlParser.RULE_rule_target_element);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.rule_Operand();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_relational_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_relational_op;
    return this;
}

Rule_relational_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_relational_opContext.prototype.constructor = Rule_relational_opContext;

Rule_relational_opContext.prototype.EQ = function() {
    return this.getToken(CdqlParser.EQ, 0);
};

Rule_relational_opContext.prototype.LTH = function() {
    return this.getToken(CdqlParser.LTH, 0);
};

Rule_relational_opContext.prototype.NOT_EQ = function() {
    return this.getToken(CdqlParser.NOT_EQ, 0);
};

Rule_relational_opContext.prototype.GTH = function() {
    return this.getToken(CdqlParser.GTH, 0);
};

Rule_relational_opContext.prototype.LET = function() {
    return this.getToken(CdqlParser.LET, 0);
};

Rule_relational_opContext.prototype.GET = function() {
    return this.getToken(CdqlParser.GET, 0);
};

Rule_relational_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_relational_op(this);
	}
};

Rule_relational_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_relational_op(this);
	}
};

Rule_relational_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_relational_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_relational_opContext = Rule_relational_opContext;

CdqlParser.prototype.rule_relational_op = function() {

    var localctx = new Rule_relational_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CdqlParser.RULE_rule_relational_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CdqlParser.EQ) | (1 << CdqlParser.LTH) | (1 << CdqlParser.GTH) | (1 << CdqlParser.LET) | (1 << CdqlParser.GET) | (1 << CdqlParser.NOT_EQ))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_between_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_between_op;
    return this;
}

Rule_between_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_between_opContext.prototype.constructor = Rule_between_opContext;

Rule_between_opContext.prototype.BETWEEN = function() {
    return this.getToken(CdqlParser.BETWEEN, 0);
};

Rule_between_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_between_op(this);
	}
};

Rule_between_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_between_op(this);
	}
};

Rule_between_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_between_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_between_opContext = Rule_between_opContext;

CdqlParser.prototype.rule_between_op = function() {

    var localctx = new Rule_between_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CdqlParser.RULE_rule_between_op);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(CdqlParser.BETWEEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_is_or_is_notContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_is_or_is_not;
    return this;
}

Rule_is_or_is_notContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_is_or_is_notContext.prototype.constructor = Rule_is_or_is_notContext;

Rule_is_or_is_notContext.prototype.IS = function() {
    return this.getToken(CdqlParser.IS, 0);
};

Rule_is_or_is_notContext.prototype.NOT = function() {
    return this.getToken(CdqlParser.NOT, 0);
};

Rule_is_or_is_notContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_is_or_is_not(this);
	}
};

Rule_is_or_is_notContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_is_or_is_not(this);
	}
};

Rule_is_or_is_notContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_is_or_is_not(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_is_or_is_notContext = Rule_is_or_is_notContext;

CdqlParser.prototype.rule_is_or_is_not = function() {

    var localctx = new Rule_is_or_is_notContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CdqlParser.RULE_rule_is_or_is_not);
    try {
        this.state = 184;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this.match(CdqlParser.IS);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 182;
            this.match(CdqlParser.IS);
            this.state = 183;
            this.match(CdqlParser.NOT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ruel_PushContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_ruel_Push;
    return this;
}

Ruel_PushContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ruel_PushContext.prototype.constructor = Ruel_PushContext;


Ruel_PushContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRuel_Push(this);
	}
};

Ruel_PushContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRuel_Push(this);
	}
};

Ruel_PushContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRuel_Push(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Ruel_PushContext = Ruel_PushContext;

CdqlParser.prototype.ruel_Push = function() {

    var localctx = new Ruel_PushContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CdqlParser.RULE_ruel_Push);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(CdqlParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_DefineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_Define;
    return this;
}

Rule_DefineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_DefineContext.prototype.constructor = Rule_DefineContext;

Rule_DefineContext.prototype.DEFINE = function() {
    return this.getToken(CdqlParser.DEFINE, 0);
};

Rule_DefineContext.prototype.CONTEXT_ENTITY = function() {
    return this.getToken(CdqlParser.CONTEXT_ENTITY, 0);
};

Rule_DefineContext.prototype.rule_context_entity = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Rule_context_entityContext);
    } else {
        return this.getTypedRuleContext(Rule_context_entityContext,i);
    }
};

Rule_DefineContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CdqlParser.COMMA);
    } else {
        return this.getToken(CdqlParser.COMMA, i);
    }
};


Rule_DefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_Define(this);
	}
};

Rule_DefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_Define(this);
	}
};

Rule_DefineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_Define(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_DefineContext = Rule_DefineContext;

CdqlParser.prototype.rule_Define = function() {

    var localctx = new Rule_DefineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CdqlParser.RULE_rule_Define);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(CdqlParser.DEFINE);
        this.state = 189;
        this.match(CdqlParser.CONTEXT_ENTITY);

        this.state = 190;
        this.rule_context_entity();
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CdqlParser.COMMA) {
            this.state = 191;
            this.match(CdqlParser.COMMA);
            this.state = 192;
            this.rule_context_entity();
            this.state = 197;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_context_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_context_entity;
    return this;
}

Rule_context_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_context_entityContext.prototype.constructor = Rule_context_entityContext;

Rule_context_entityContext.prototype.ENTITY = function() {
    return this.getToken(CdqlParser.ENTITY, 0);
};

Rule_context_entityContext.prototype.rule_entity_id = function() {
    return this.getTypedRuleContext(Rule_entity_idContext,0);
};

Rule_context_entityContext.prototype.IS_FROM = function() {
    return this.getToken(CdqlParser.IS_FROM, 0);
};

Rule_context_entityContext.prototype.ENTITY_TYPE = function() {
    return this.getToken(CdqlParser.ENTITY_TYPE, 0);
};

Rule_context_entityContext.prototype.WHERE = function() {
    return this.getToken(CdqlParser.WHERE, 0);
};

Rule_context_entityContext.prototype.rule_Condition = function() {
    return this.getTypedRuleContext(Rule_ConditionContext,0);
};

Rule_context_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_context_entity(this);
	}
};

Rule_context_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_context_entity(this);
	}
};

Rule_context_entityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_context_entity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_context_entityContext = Rule_context_entityContext;

CdqlParser.prototype.rule_context_entity = function() {

    var localctx = new Rule_context_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CdqlParser.RULE_rule_context_entity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(CdqlParser.ENTITY);
        this.state = 199;
        this.rule_entity_id();
        this.state = 200;
        this.match(CdqlParser.IS_FROM);
        this.state = 201;
        this.match(CdqlParser.ENTITY_TYPE);
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CdqlParser.WHERE) {
            this.state = 202;
            this.match(CdqlParser.WHERE);
            this.state = 203;
            this.rule_Condition(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rule_entity_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CdqlParser.RULE_rule_entity_id;
    return this;
}

Rule_entity_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_entity_idContext.prototype.constructor = Rule_entity_idContext;

Rule_entity_idContext.prototype.ID = function() {
    return this.getToken(CdqlParser.ID, 0);
};

Rule_entity_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.enterRule_entity_id(this);
	}
};

Rule_entity_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof CdqlListener ) {
        listener.exitRule_entity_id(this);
	}
};

Rule_entity_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CdqlVisitor ) {
        return visitor.visitRule_entity_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CdqlParser.Rule_entity_idContext = Rule_entity_idContext;

CdqlParser.prototype.rule_entity_id = function() {

    var localctx = new Rule_entity_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CdqlParser.RULE_rule_entity_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(CdqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CdqlParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 13:
			return this.rule_Condition_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CdqlParser.prototype.rule_Condition_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CdqlParser = CdqlParser;
