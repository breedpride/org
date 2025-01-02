// import { FlatCompat } from '@eslint/eslintrc';
// import js from '@eslint/js';
// // eslint-disable-next-line @nx/enforce-module-boundaries
// import baseConfig from '../../../eslint.config.js';

// const __dirname = import.meta.url.replace('file://', '');

const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../../../eslint.config.cjs');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
  },
];
