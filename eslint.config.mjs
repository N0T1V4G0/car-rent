import js from '@eslint/js';
import { configs as airbnb, plugins as airbnbPlugins } from 'eslint-config-airbnb-extended';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },
  js.configs.recommended,

  // Airbnb (base + TypeScript) e regras de Node
  airbnbPlugins.stylistic,
  airbnbPlugins.importX,
  airbnbPlugins.typescriptEslint,
  airbnbPlugins.node,
  ...airbnb.base.typescript,
  ...airbnb.node.recommended,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: rootDir,
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Ajustes para backend Node/TypeScript
      'no-console': 'off',
      'import-x/prefer-default-export': 'off',
      'import-x/extensions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Prettier por último: desliga as regras de formatação do Airbnb
  prettier,
];
