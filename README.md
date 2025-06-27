# stylelint-config-moni-web

## Installation

All the dependencies have to be installed explicitly.
```bash
$ npm install --save-dev stylelint-config-moni-web stylelint stylelint-config-standard-scss
```

or using yarn:
```bash
$ yarn add -D stylelint-config-moni-web stylelint stylelint-config-standard-scss
```

Alternatively you can use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):
```bash
$ npm install install-peerdeps --global
$ npm install stylelint-config-moni-web --save-dev
$ install-peerdeps stylelint-config-moni-web --dev
```

## Usage

Once the `stylelint-config-moni-web` package is installed, you can use it by specifying the config in your `.stylelintrc` or `stylelint.config.js`:

```json
{
    "extends": "stylelint-config-moni-web"
}
```

## Version Compatibility

This config requires:
- Stylelint ^16.21.0
- stylelint-config-standard-scss ^15.0.1