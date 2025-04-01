module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' ? ['error', { allow: ['error'] }] : ['warn', { allow: ['error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-var': 'error',
    'vue/multi-word-component-names': 'off',
    //   'no-new-object': 'error',
    //   'no-new-func': 'error',
    //   'no-array-constructor': 'error',
    //   'object-shorthand': 'error',
    //   'prefer-template': 'error',
    //   'no-eval': 'error',
    //   'no-iterator': 'error',
    //   'no-multi-assign': 'error',
    //   'no-nested-ternary': 'error',
    //   'no-unneeded-ternary': 'error',
    //   'spaced-comment': 'error',
    //   'prefer-arrow-callback': 'error',
    //   'no-new-wrappers': 'error',
    //   radix: 'error',
    //   camelcase: 'off',
    //   'new-cap': 'off',
    //   'no-loop-func': 'error',
    //   'func-style': 'error',
    //   'no-param-reassign': 'error',
    //   'prefer-promise-reject-errors': 'warn',
    //   'prefer-spread': 'error',
    //   'array-callback-return': ['error', { allowImplicit: true }],
    //   'prefer-destructuring': ['error', { array: true, object: true }, { enforceForRenamedProperties: false }],
    //   'vue/script-setup-uses-vars': 'off',
    //   'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'prettier/prettier': ['error', { usePrettierrc: true, endOfLine: 'auto' }]
  }
}
