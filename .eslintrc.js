/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-named-as-default-member': 'off',
    'import/namespace': 'off',

    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/prefer-number-properties': ['error', { checkInfinity: false }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          ref: false,
          props: false,
          args: false,
          param: false,
          params: false,
          fn: false,
          vars: false,
        },
      },
    ],
    'unicorn/no-negated-condition': 'off',

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],

    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: { '{}': false },
        extendDefaults: true,
      },
    ],
  },
};
