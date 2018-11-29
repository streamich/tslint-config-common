/* tslint:disable:prefer-object-spread */
module.exports = {
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  linterOptions: {
    exclude: ['node_modules', 'dist', 'coverage', 'dev'],
  },
  rules: {
    'no-var-requires': false,
    'array-type': false,
    'member-access': false,
    ban: [true, 'eval', '$', ['describe', 'only'], ['it', 'only']],
    'ban-comma-operator': true,
    encoding: true,
    'newline-before-return': false,
    'no-duplicate-imports': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-dynamic-delete': false,
    'no-empty': false,
    'no-implicit-dependencies': [true, 'dev'],
    'no-import-side-effect': [true, {'ignore-module': '\\.css$'}],
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-magic-numbers': false,
    'no-parameter-reassignment': true,
    'no-require-imports': false,
    'no-return-await': false,
    'no-sparse-arrays': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': [true, {'allow-destructuring': true}],
    'no-unnecessary-callback-wrapper': false,
    'no-unnecessary-class': true,
    'prefer-conditional-expression': false,
    'prefer-function-over-method': false,
    'prefer-object-spread': false,
    'prefer-switch': true,
    'prefer-template': false,
    'triple-equals': true,
    'interface-name': false,
    'no-any': false,
    'no-inferrable-types': false,
    'no-non-null-assertion': false,
    'no-shadowed-variable': false,
    'no-bitwise': false,
    'no-empty-interface': false,
    'array-type': false,
    'prefer-for-of': false,
    'await-promise': false,
    'no-floating-promises': false,
    'no-unused-variable': false,
    'promise-function-async': false,
    'restrict-plus-operands': false,
    'member-ordering': false,
    'max-classes-per-file': false,
    'object-literal-sort-keys': false,
    'no-any': false,
    'interface-name': false,
    'object-literal-sort-keys': false,
    'member-access': false,
    'no-shadowed-variable': false,
    'no-bitwise': false,
    'no-empty-interface': false,
    'prefer-object-spread': false,
    'no-var-requires': false,
    'no-require-imports': false,
    curly: false,
    'prefer-template': false,
    'prefer-conditional-expression': false,
    'no-parameter-reassignment': false,
    'array-type': false,
    'object-literal-shorthand': false,
    'prefer-for-of': false,
    'await-promise': false,
    'no-floating-promises': false,
    'no-unused-variable': false,
    'promise-function-async': false,
    'restrict-plus-operands': false,
    'no-misused-new': false,
    'ordered-imports': false,
    forin: false,
  },
};
