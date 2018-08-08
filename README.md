# `tslint` and `prettier` Config


## Usage

Install dependencies

```bash
yarn add --dev tslint-config-common tslint typescript prettier pretty-quick husky
```

Create TSLint configuration file (`tslint.json`) that extends `tslint-config-common`:

```json
{
  "extends": "tslint-config-common"
}
```

Create `prettier.config.js` on the root of your project with these contents:

```js
module.exports = require('tslint-config-common/prettier');
```

Add the following script command to your `package.json`:

```json
{
  "scripts": {
    "tslint": "tslint 'src/**/*.{js,jsx,ts,tsx}' -t verbose",
    "lint": "yarn tslint",
    "prettier": "prettier --ignore-path .gitignore --write 'src/**/*.{ts,js}'",
    "prettier:diff": "prettier -l 'src/**/*.{ts,js}'",
    "precommit": "pretty-quick --staged && yarn lint",
    "prepush": "yarn prettier:diff && yarn test"
  }
}
```

## Extended configs

The package also has separate entry points for some environments. Simply extend from the entry point as described below

```json
{
  "extends": [
    "tslint-config-common",
    "tslint-config-common/react"
  ]
}
```

### React

```json
{
  "extends": "tslint-config-common/react"
}
```
