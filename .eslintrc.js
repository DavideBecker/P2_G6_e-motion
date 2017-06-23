module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ],
        "callback-return": "error",
        "camelcase": "error",
        "class-methods-use-this": "error",
        "comma-dangle": "off",
        "comma-spacing": "error",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "curly": "error",
        "default-case": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "off",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": 0,
        "func-style": [
            "error",
            "declaration"
        ],
        "generator-star-spacing": "error",
        "global-require": "error",
        "guard-for-in": 0,
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-length": [
            "error",
            {
                "properties": "never",
                "exceptions": ["x", "y", "w", "h"]
            }
        ],
        "id-match": "error",
        "indent": "error",
        "init-declarations": "error",
        "jsx-quotes": "error",
        "key-spacing": [
            "error",
            { "mode": "minimum" }
        ],
        "keyword-spacing": [
            "error",
            { "overrides": { "if": { "after": false }, "for": { "after": false }, "while": { "after": false } } }
        ],
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "error",
        "lines-around-directive": "error",
        "max-depth": "error",
        "max-len": [
            "warn",
            { "code": 120, "ignoreComments": true, "ignoreTrailingComments": true }
        ],
        "max-lines": "error",
        "max-nested-callbacks": "error",
        "max-params": 0,
        "max-statements": 0,
        "max-statements-per-line": [
            "error",
            { "max": 2 }
        ],
        "multiline-ternary": 0,
        "new-cap": "error",
        "new-parens": "error",
        "newline-after-var": "error",
        "newline-before-return": "error",
        "newline-per-chained-call": [
            "error",
            { "ignoreChainWithDepth": 3 }
        ],
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": "error",
        "no-console": 0,
        "no-control-regex": 0,
        "no-continue": 0,
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        //"no-magic-numbers": "error",
        "no-mixed-operators": 0,
        "no-mixed-requires": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": [
            "error",
            { "exceptions": { "VariableDeclarator": true } }
        ],
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-plusplus": "error",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-sync": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "warn",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": 0,
        //"no-undef-init": "error",
        //"no-undefined": "error",
        "no-underscore-dangle": 0,
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": [
            "warn",
             { "vars": "local", "args": "after-used" }
        ],
        "no-use-before-define": "warn",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "off",
        "no-void": "error",
        "no-warning-comments": 0,
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": 0,
        "object-curly-spacing": "error",
        "object-property-newline": "error",
        "object-shorthand": 0,
        "one-var": "off",
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": "error",
        "prefer-destructuring": 0,
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-rest-params": 0,
        "prefer-spread": "error",
        "prefer-template": 0,
        "quote-props": "off",
        "quotes": [
            "error",
            "single"
        ],
        "radix": "error",
        "require-await": "error",
        "require-jsdoc": 0,
        "require-yield": 0,
        "rest-spread-spacing": "error",
        "semi": "off",
        "semi-spacing": "error",
        "sort-imports": "error",
        "sort-keys": "off",
        "sort-vars": 0,
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": 0,
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        "valid-jsdoc": "error",
        "vars-on-top": 0,
        "wrap-iife": "error",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": "error"
    }
};