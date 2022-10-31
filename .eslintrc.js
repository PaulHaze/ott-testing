module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:cypress/recommended',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'cypress', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {},
    },
  },

  rules: {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/__tests__/**', // jest pattern
          'test.{ts,tsx}', // repos with a single test file
          'test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.ts', // jest config
          '**/jest.setup.ts', // jest setup
          '**/test.tsx',
          '**/test.ts',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',

    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.tsx', '.js', '.ts'] },
    ],

    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
};
