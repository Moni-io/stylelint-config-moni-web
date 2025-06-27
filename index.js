module.exports = {
    extends: "stylelint-config-standard-scss",
    plugins: ["@stylistic/stylelint-plugin"],
    rules: {
        "@stylistic/indentation": 4,
        "@stylistic/string-quotes": "single",
        "@stylistic/color-hex-case": "upper",
        "@stylistic/max-line-length": 150,

        "color-function-notation": null,
        "custom-property-pattern": "^([a-z]{1,})(([A-Z]{1}[a-z]*)|[0-9]{1,})*$",
        "alpha-value-notation": "number",
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "declaration-block-no-redundant-longhand-properties": null,
        "scss/at-extend-no-missing-placeholder": null,
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["function", "if", "each", "include", "mixin", "extend"]
        }]
    }
}
