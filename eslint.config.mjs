import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

function stripPlugins(configs, pluginsToStrip) {
  return configs.map((config) => {
    if (config.plugins) {
      const newPlugins = { ...config.plugins };
      pluginsToStrip.forEach((pluginName) => {
        delete newPlugins[pluginName];
      });
      return { ...config, plugins: newPlugins };
    }
    return config;
  });
}

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...stripPlugins(compat.extends('airbnb'), ['react', 'react-hooks', 'jsx-a11y']),
  ...stripPlugins(compat.extends('airbnb-typescript'), [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
  ]),
  ...compat.extends('plugin:prettier/recommended'),

  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.eslint.json',
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      'prettier/prettier': 'warn',
    },
  },
  {
    ignores: ['eslint.config.mjs', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
]);

export default eslintConfig;
