module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    semi: 0,
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'eol-last': 1,
    'no-catch-shadow': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'no-inline-comments': 'error',
    'no-nested-ternary': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z][A-Z]+',
          match: false,
        },
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    'sort-imports': ['off', { ignoreCase: true, ignoreDeclarationSort: true }],
    'no-console': 'error',

    'import/no-unresolved': ['error', { ignore: ['\\.svg$'] }],
    'import/named': 'error',
    'import/order': [
      'off',
      {
        groups: ['external', 'builtin', 'internal', ['parent', 'sibling'], 'type'],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-default-export': 'error',

    'no-restricted-imports': 'off',
  },
  globals: {
    Intl: 'readonly',
    JSX: 'readonly',
    NodeJS: 'readonly',
    SVGElement: 'readonly',
    Element: 'readonly',
  },
  ignorePatterns: [],
  overrides: [],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.native.js', '.native.ts'],
      },
    },
    'import/ignore': ['react-native', '@react-navigation/stack'],
  },
}
