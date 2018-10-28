/* tslint:disable:prefer-object-spread */
const commonRules = {
  'jsx-alignment': false,
  'jsx-equals-spacing': false,
  'jsx-key': true,
  'jsx-no-multiline-js': false,
  'jsx-no-string-ref': true,
  'jsx-self-close': true,
  'jsx-wrap-multiline': false,
  'jsx-boolean-value': false,
  'jsx-no-lambda': false,
  "jsx-boolean-value": false,
};

module.exports = {
  extends: ['tslint-react'],
  jsRules: commonRules,
  rules: Object.assign({}, commonRules, {
    'jsx-curly-spacing': false,
  }),
};
