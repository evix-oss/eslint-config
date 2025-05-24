import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config({
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
        globals: {
            ...globals.browser,
        },
    },
    plugins: {
        react: pluginReact,
    },
    settings: {
        'react': {
            version: 'detect',
        },
        'formComponents': ['Form'],
        'linkComponents': [
            { name: 'Link', linkAttribute: 'to' },
            { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
            typescript: {},
        },
    },
    extends: [
        pluginReact.configs.flat.recommended,
        pluginReact.configs.flat['jsx-runtime'],
        pluginReactHooks.configs['recommended-latest'],
        pluginJsxA11y.flatConfigs.recommended,
    ],
});
