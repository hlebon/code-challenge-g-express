import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: ['prettier'],
    extends: [
      'plugin:prettier/recommended', // Integración con Prettier
      eslintConfigPrettier, // Desactivar reglas que puedan entrar en conflicto con Prettier
    ],
    rules: {
      'prettier/prettier': 'error', // Asegura que los errores de Prettier sean reportados como errores
    },
  },
];
