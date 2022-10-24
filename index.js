module.exports = {
    extends: "stylelint-config-standard-scss",
    rules: {
        "indentation": 4,
        "property-no-vendor-prefix": null,
        "color-function-notation": "legacy",
        "alpha-value-notation": "number",
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "color-hex-case": "upper",
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["function", "if", "each", "include", "mixin", "extend"]
        }]
    }
}
