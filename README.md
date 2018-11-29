# Linting setup for TypeScript project

- TSLint
- Prettier
- Commitlint


## Usage

Install dependencies

```bash
yarn add --dev tslint-config-common tslint typescript prettier pretty-quick husky @commitlint/cli @commitlint/config-conventional
```

Run below command to add necessary scripts to `package.json`.

```shell
yarn global add climod-add-script \
  && climod-add-script --name=tslint --cmd="tslint 'src/**/*.{js,jsx,ts,tsx}' -t verbose" \
  && climod-add-script --name=prettier --cmd="prettier --ignore-path .gitignore --write 'src/**/*.{ts,tsx,js,jsx}'" \
  && climod-add-script --name="prettier:diff" --cmd="prettier -l 'src/**/*.{ts,tsx,js,jsx}'" \
  && climod-add-script --name=commitmsg --cmd="commitlint -E GIT_PARAMS" \
  && climod-add-script --name=precommit --cmd="pretty-quick --staged && yarn tslint" \
  && climod-add-script --name=prepush --cmd="yarn prettier:diff"
```

Or add those scripts manually.

```json
{
  "scripts": {
    "tslint": "tslint 'src/**/*.{js,jsx,ts,tsx}' -t verbose",
    "prettier": "prettier --ignore-path .gitignore --write 'src/**/*.{ts,tsx,js,jsx}'",
    "prettier:diff": "prettier -l 'src/**/*.{ts,tsx,js,jsx}'",
    "commitmsg": "commitlint -E GIT_PARAMS",
    "precommit": "pretty-quick --staged && yarn tslint",
    "prepush": "yarn prettier:diff"
  }
}
```
