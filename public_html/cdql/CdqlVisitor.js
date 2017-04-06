// Generated from /Users/ali/CDQLParserV3/Cdql.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CdqlParser.

function CdqlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CdqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CdqlVisitor.prototype.constructor = CdqlVisitor;

// Visit a parse tree produced by CdqlParser#rule_Cdql.
CdqlVisitor.prototype.visitRule_Cdql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Pull.
CdqlVisitor.prototype.visitRule_Pull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Select.
CdqlVisitor.prototype.visitRule_Select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Attribute.
CdqlVisitor.prototype.visitRule_Attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_EntityTitle.
CdqlVisitor.prototype.visitRule_EntityTitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_AttributeTitle.
CdqlVisitor.prototype.visitRule_AttributeTitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_FunctionCall.
CdqlVisitor.prototype.visitRule_FunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_AssisgnedName.
CdqlVisitor.prototype.visitRule_AssisgnedName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_FunctionTitle.
CdqlVisitor.prototype.visitRule_FunctionTitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Operand.
CdqlVisitor.prototype.visitRule_Operand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_ContextValue.
CdqlVisitor.prototype.visitRule_ContextValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_When.
CdqlVisitor.prototype.visitRule_When = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Occurrence.
CdqlVisitor.prototype.visitRule_Occurrence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Condition.
CdqlVisitor.prototype.visitRule_Condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_expr_op.
CdqlVisitor.prototype.visitRule_expr_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Constraint.
CdqlVisitor.prototype.visitRule_Constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_left_element.
CdqlVisitor.prototype.visitRule_left_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_right_element.
CdqlVisitor.prototype.visitRule_right_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_target_element.
CdqlVisitor.prototype.visitRule_target_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_relational_op.
CdqlVisitor.prototype.visitRule_relational_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_between_op.
CdqlVisitor.prototype.visitRule_between_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_is_or_is_not.
CdqlVisitor.prototype.visitRule_is_or_is_not = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#ruel_Push.
CdqlVisitor.prototype.visitRuel_Push = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_Define.
CdqlVisitor.prototype.visitRule_Define = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_context_entity.
CdqlVisitor.prototype.visitRule_context_entity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CdqlParser#rule_entity_id.
CdqlVisitor.prototype.visitRule_entity_id = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CdqlVisitor = CdqlVisitor;