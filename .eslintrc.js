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
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports'],
      extends: [
        'airbnb-typescript',
        'next/core-web-vitals',
        'prettier',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: './ott-testing/tsconfig.json',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
            semi: true,
            trailingComma: 'all',
            printWidth: 80,
            tabWidth: 2,
          },
        ],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 'off', // Next.js uses its own internal link system
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        'react-hooks/exhaustive-deps': 'off', // Incorrectly report needed dependency with Next.js router
        '@next/next/no-img-element': 'off', // We currently not using next/image because it isn't supported with SSG mode
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
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
              '**/*.config.js',
            ],
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        'import/extensions': [
          'warn',
          'never',
          {
            png: 'always',
            jpg: 'always',
          },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
    // Configuration for testing
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      plugins: ['jest', 'jest-formatting', 'testing-library', 'jest-dom'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
    },
    // Configuration for e2e testing (Cypress)
    {
      files: ['**/*.cy.ts'],
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
  ],
};
