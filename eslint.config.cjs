const nx = require('@nx/eslint-plugin');
const unusedImports = require('eslint-plugin-unused-imports');
const eslintPluginImport = require('eslint-plugin-import');
const stylisticEslintPlugin = require('@stylistic/eslint-plugin');
const eslintPluginReadableTailwind = require('eslint-plugin-readable-tailwind');
// const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

// const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
// const baseConfig = require('../../../eslint.config.cjs');

// const __dirname = import.meta.url.replace("file://", "");

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
// });

const unusedI = {
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  plugins: { 'unused-imports': unusedImports },
  rules: {
    'no-unused-vars': 'off', // Disable the default no-unused-vars rule
    'unused-imports/no-unused-imports': 'error', // Remove unused imports
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        arsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

// Base configuration
const baseConfig = {
  files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
  plugins: {
    // "@nx": nxEslintPlugin,
    '@stylistic': stylisticEslintPlugin,
    // prettier: eslintPluginPrettier,
    // "@angular-eslint": angularEslintEslintPlugin,
    // "rxjs-angular": eslintPluginRxjsAngular,
    // "tailwindcss": tailwindcss,
    // "sort-class-members": sortClassMembers,
  },
  rules: {
    '@stylistic/no-multiple-empty-lines': ['error', { max: 2 }],
    '@stylistic/indent': ['error', 2],
    '@stylistic/no-trailing-spaces': ['error', { skipBlankLines: false }],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/quotes': ['off', 'single'],
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/quote-props': ['error', 'as-needed'],
    // "tailwindcss/classnames-order": ["error"],
  },
};
//---------------------------------------------------------
// TAILWIND
//---------------------------------------------------------
const imp = {
  files: ['*.ts', '*.js'],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
      project: './tsconfig.base.json', // Reference the shared Nx tsconfig
    },
  },
  plugins: {
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    import: require('eslint-plugin-import'),
  },
  rules: {
    'import/no-unresolved': 'error', // Disallow unresolved imports
    'import/named': 'error', // Ensure named imports match exports
    'import/default': 'error', // Ensure a default export is present
    'import/no-duplicates': 'error', // Disallow duplicate imports
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/newline-after-import': 'error', // Enforce a newline after import statements
    'import/no-cycle': 'error', // Prevent circular dependencies
    'import/no-self-import': 'error', // Disallow a module importing itself
    'import/no-useless-path-segments': 'error', // Disallow unnecessary path segments in imports
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.base.json',
      },
    },
  },
};
// {
//   files: ["*.spec.ts"],
//   languageOptions: {
//     env: { jest: true }, // Enable Jest environment for test files
//   },
//   rules: {
//     // Add any test-specific rules here if needed
//   },
// },

const tailwindConfig = {
  //"**/*.ts", "**/*.tsx",
  files: ['**/*.html'],
  plugins: {
    'readable-tailwind': eslintPluginReadableTailwind,
  },
  rules: {
    // enable all recommended rules to warn
    ...eslintPluginReadableTailwind.configs.warning.rules,
    // enable all recommended rules to error
    ...eslintPluginReadableTailwind.configs.error.rules,

    'readable-tailwind/multiline': [
      'warn',
      { group: 'newLine', printWidth: 80 },
    ],
    'readable-tailwind/no-unnecessary-whitespace': [
      'warn',
      { allowMultiline: true },
    ],
    'readable-tailwind/sort-classes': ['warn'],
  },
};
// console.log("baseConfig", baseConfig);

// module.exports = {
//   plugins: ['unused-imports'],
//   rules: {
//     // Turn off the default `no-unused-vars` rule to avoid conflicts
//     'no-unused-vars': 'off',

//     // Enable the unused imports rule to automatically remove unused imports
//     'unused-imports/no-unused-imports': 'error',

//     // Configure `no-unused-vars` via the plugin
//     'unused-imports/no-unused-vars': [
//       'warn',
//       {
//         vars: 'all', // Check all variables
//         varsIgnorePattern: '^_', // Ignore variables starting with _
//         args: 'after-used', // Ignore unused arguments if they occur after used ones
//         argsIgnorePattern: '^_', // Ignore arguments starting with _
//       },
//     ],
//   },
// };

module.exports = [
  {
    files: ['**/*.json'],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parser: require('jsonc-eslint-parser'),
    },
  },

  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  // baseConfig,
  // tailwindConfig,

  {
    ignores: ['**/dist', '**/breedpride/src/assets/lib/checkout.js', '**/.nx'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: false,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
