module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/strict',
    'next/core-web-vitals'
  ],
  rules: {
    'max-depth': ['warn', 4],

    // enabled
    'no-bitwise': 'error',
    'guard-for-in': 'error',
    'no-new-func': 'error',
    'no-undef': 'error',

    'linebreak-style': ['error', 'unix'],

    'no-unreachable': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

    // TODO: fix these
    'no-unused-vars': ['warn', { args: 'none' }],
    'no-use-before-define': ['warn', 'nofunc'],

    'multiline-ternary': ['warn', 'always-multiline'],

    // maybe fix these?
    strict: 'off',

    // standard-js overrides
    'comma-dangle': 'off', // never fix this; IE 8.0 is obsolete/unsupported
    semi: 'off', // maybe someday switch to no-semi
    camelcase: 0,
    'key-spacing': ['error', { mode: 'minimum' }],
    'object-curly-newline': 0,
    'no-multi-spaces': 0,
    'space-in-parens': 0,
    'no-multi-str': 1,
    'jsx-quotes': 'error',

    // jsx-a11y
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/anchor-ambiguous-text': 'warn',
    'jsx-a11y/lang': 'warn',
    'jsx-a11y/prefer-tag-over-role': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
  },
  env: {
    browser: true,
  },
};
