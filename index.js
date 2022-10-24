module.exports = {
    extends: "stylelint-config-standard-scss",
    rules: {
        "indentation": 4,
        "property-no-vendor-prefix": null,
        "color-function-notation": "off",
        "custom-property-pattern": "^([a-z]{1,})(([A-Z]{1}[a-z]*)|[0-9]{1,})*$",
        "alpha-value-notation": "number",
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "color-hex-case": "upper",
        "declaration-block-no-redundant-longhand-properties": [{
            "ignoreShorthands": ["grid-gap", "font"]
        }],
        "scss/at-extend-no-missing-placeholder": "off",
        "string-quotes": "single",
        "max-line-length": 150,
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["function", "if", "each", "include", "mixin", "extend"]
        }]
    }
}
