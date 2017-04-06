module.exports = {
    literals: {
        'keyword.control': ['push', 'define', 'context entity',
            'is from', 'where', 'when',
            'date', 'lifetime', 'between',
            'is', 'pull', 'entity', 'as',
            'every', 'until'],
        'keyword.operator': ['xor',
            'null', '=', '<', '>', '<=',
            '>=', '!='],
        'paren.lparen': ['(', '{', '['],
        'paren.rparen': [')', '}', ']'],
        'punctuation.operator': [',', ';', '.'],
        'storage.type': ['Person', 'int', 'void'],
        'constant.language': ['true', 'false']
    },
    symbols: {
        'identifier': ['ID' , 'COMMENT',
            'WS'],
        'constant.numeric': 'INT',
        'string.quoted.double': 'STRING',
        'keyword.control': ['DEFINE', 'CONTEXT_ENTITY',
            'IS_FROM', 'WHERE',
            'WHEN', 'DATE', 'LIFETIME', 'BETWEEN',
            'IS', 'PULL', 'ENTITY', 'AS', 'EVERY',
            'UNTIL'],
        'keyword.operator': ['NOT', 'AND', 'OR', 'XOR',
            'NULL', 'EQ', 'LTH', 'GTH', 'LET',
            'GET', 'NOT_EQ'],
        'paren.lparen': ['RPAREN'],
        'paren.rparen': ['LPAREN'],
        'punctuation.operator': ['COMMA', 'DOT'],
        'storage.type': ['ENTITY_TYPE']


    }
};