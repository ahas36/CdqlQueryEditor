var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/my-mode');
var langTools = ace.require("ace/ext/language_tools");
editor.setOptions({
    enableBasicAutocompletion: false,
    enableSnippets: true
});

$(".pop-up").hide();
var isPopup = false;
var popupIndex = 0;
var suggestionCount = 0;
$("#editor").keydown(function (e)
{
    var key = e.keyCode ? e.keyCode : e.which;
    if (isPopup && (key == 13 || key == 38 || key == 37 || key == 39 || key == 40))
    {
        e.preventDefault();
        e.stopPropagation();
    }
});

function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}

window.onkeyup = function (e) {
    var query = editor.getValue();
    var wordLength = 0;
    var mismatched = "";
    var pos = editor.getCursorPosition();
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 32 && e.ctrlKey) {
        test = $("#Test");
        test.text(editor.getValue());

        var index = 0;
        var text = "";
        for (var i = 0; i < pos.column; i++)
        {
            text = text + "a";
        }
        test.text(text);
        test.attr('style', "font:12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace");
        test = document.getElementById("Test");
        var height = (pos.row * 16 + 16) + "px";
        var width = (test.clientWidth + 55) + "px";
        $(".pop-up").attr("style", "left:" + width + ";top:" + height);
        text = "";
        for (var i = 0; i < pos.row; i++)
        {
            index = query.indexOf("\n");
        }
        subQuery = query.substring(0, index + pos.column);

        if (subQuery[(subQuery.length - 1)] == " " || subQuery.length == 0)
        {
            subQuery = subQuery + "testForAutoComp";
        } else
        {
            while (wordLength < subQuery.length && subQuery[(subQuery.length - wordLength)] != " ")
            {
                wordLength++;
            }
            if (wordLength != subQuery.length)
            {
                wordLength--;
            }
        }
        var errs = validate(subQuery);
        var suggestion = [];
        for (var item in errs)
        {
            var error = errs[item];
            if ((error.column == pos.column - wordLength || error.column == pos.column) && error.row == pos.row)
            {
                var errorText = error.text;
                if (errorText.includes("missing"))
                {
                    var start = errorText.indexOf("missing '");
                        var end = getPosition(errorText,"'",2);
                        var tempText = errorText.substring(start+"missing '".length, end);
                        suggestion.push(tempText.replace(new RegExp("'", 'g'), ''));
                } else if (errorText.includes("mismatched input") || errorText.includes("extraneous input"))
                {
                    if (errorText.includes("ENTITY_TYPE"))
                    {
                        suggestion.push("Person");
                        suggestion.push("Location");
                        suggestion.push("Organization");
                        suggestion.push("Event");
                        suggestion.push("Device");

                    } else if (errorText.includes("expecting '"))
                    {
                        var start = errorText.indexOf("expecting '");
                        var end = errorText.lastIndexOf("'");
                        var tempText = errorText.substring(start+"expecting '".length, end);
                        suggestion.push(tempText.replace(new RegExp("'", 'g'), ''));
                    } else if (errorText.includes("expecting {"))
                    {
                        var start = errorText.indexOf("{");
                        var end = errorText.indexOf("}");
                        var tempText = errorText.substring(start + 1, end);
                        var split = tempText.split(", '");
                        for (item in split)
                        {
                            suggestion.push(split[item].replace(new RegExp("'", 'g'), ''));
                        }
                    }
                } else if (errorText.includes("no viable alternative at input '<EOF>'"))
                {

                } else if (errorText.includes("no viable alternative at input 'testForAutoComp'"))
                {

                }
            }
        }
        var isEof = suggestion.indexOf("<EOF>");
        if (isEof != -1)
        {
            suggestion.splice(isEof, 1);
        }
        var suggestionHtml = "<ul>"
        for (item in suggestion)
        {
            suggestionHtml = suggestionHtml + "<li>" + suggestion[item] + "</li>";
        }
        suggestionCount = suggestion.length;
        suggestionHtml += "</ul>"
        $(".pop-up").html(suggestionHtml);
        $(".pop-up").show();
        isPopup = true;
        editor.textInput.getElement().disabled = true;
        popupIndex = 0;
    }
    if (key == 27)
    {
        editor.textInput.getElement().disabled = false;
        $(".pop-up").hide();
        isPopup = false;
    }
    if (isPopup)
    {
        if (key == 40)
        {
            e.preventDefault();
            e.stopPropagation();
            if (suggestionCount > popupIndex)
            {
                $(".pop-up li").each(function () {
                    $(this).removeClass('highLightRow')
                });
                $(".pop-up li:nth-child(" + (++popupIndex) + ")").addClass('highLightRow');
            }
        } else if (key == 38)
        {
            e.preventDefault();
            e.stopPropagation();
            if ((popupIndex - 1) > 0)
            {
                $(".pop-up li").each(function () {
                    $(this).removeClass('highLightRow')
                });
                $(".pop-up li:nth-child(" + (--popupIndex) + ")").addClass('highLightRow');
            }
        } else if (key == 13)
        {
            e.preventDefault();
            e.stopPropagation();
            query = [query.slice(0, pos.column), $(".pop-up li:nth-child(" + (popupIndex) + ")").text(), query.slice(pos.column)].join('');
            editor.setValue(query);
            $(".pop-up").hide();
            isPopup = false;
            editor.textInput.getElement().disabled = false;
            editor.focus();
            editor.gotoLine(0);
            editor.navigateLineEnd();
        }
    }

}
var validate;
var antlr4, CdqlLexer, CdqlParser;
$(document).ready(function () {
    var ace_require = require;
    window.require = undefined; // prevent error: "Honey: 'require' already defined in global scope"
//    var Honey = {'requirePath': ['..']}; // walk up to js folder, see Honey docs
//    importScripts("./require.js");
    var antlr4_require = window.require;
    window.require = require = ace_require;

    // load antlr4 and myLanguage

    try {
        window.require = antlr4_require;
        antlr4 = antlr4_require('antlr4/index');
        CdqlLexer = antlr4_require('cdql/CdqlLexer').CdqlLexer;
        CdqlParser = antlr4_require('cdql/CdqlParser').CdqlParser;
    } finally {
        window.require = ace_require;
    }
    validate = function (input) {
        var stream = new antlr4.InputStream(input);
        var lexer = new CdqlLexer(stream);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new CdqlParser(tokens);
        var annotations = [];
        var listener = new AnnotatingErrorListener(annotations);
        parser.removeErrorListeners();
        parser.addErrorListener(listener);
        parser.rule_Cdql();
        return annotations;
    }

    // class for gathering errors and posting them to ACE editor
    var AnnotatingErrorListener = function (annotations) {
        antlr4.error.ErrorListener.call(this);
        this.annotations = annotations;
        return this;
    };

    AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
    AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

    AnnotatingErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        this.annotations.push({
            row: line - 1,
            column: column,
            text: msg,
            type: "error"
        });
    };
});


