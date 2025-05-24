// @ts-check
import js from '@eslint/js';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import * as pluginImportX from 'eslint-plugin-import-x';
import { createNodeResolver } from 'eslint-plugin-import-x';
import pluginPromise from 'eslint-plugin-promise';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: [
            '**/node_modules/',
            '**/.cache/',
            '**/dist/',
            '**/build/',
            '**/package-lock.json',
            '**/yarn.lock',
            '**/pnpm-lock.yaml',
            '**/bun.lockb',
        ],
    },
    {
        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2022,
                sourceType: 'module',
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        extends: [
            pluginImportX.flatConfigs.recommended,
            pluginImportX.flatConfigs.typescript,
            pluginPromise.configs['flat/recommended'],
        ],
        rules: {
            'array-callback-return': 'error',
            'block-scoped-var': 'error',

            'curly': 'error',
            'default-case-last': 'error',
            'dot-notation': 'error',
            'eqeqeq': ['error', 'smart'],
            'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            'import-x/first': 'error',
            'import-x/newline-after-import': 'error',
            'import-x/no-empty-named-blocks': 'error',
            'import-x/no-mutable-exports': 'error',
            'import-x/no-named-as-default': 'error',
            'import-x/no-named-default': 'error',
            'import-x/no-self-import': 'error',
            'import-x/order': [
                'error',
                {
                    groups: [
                        'type',
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index'],
                        'object',
                        'unknown',
                    ],
                },
            ],
            'max-depth': 'warn',
            'max-nested-callbacks': ['warn', { max: 4 }],
            'new-cap': 'error',
            'no-alert': 'error',
            'no-array-constructor': 'error',
            'no-caller': 'error',
            'no-else-return': [
                'error',
                {
                    allowElseIf: false,
                },
            ],
            'no-eval': 'error',
            'no-extend-native': 'error',
            'no-extra-boolean-cast': 'error',
            'no-implied-eval': 'error',
            'no-iterator': 'error',
            'no-label-var': 'error',
            'no-labels': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-multi-assign': 'error',
            'no-multi-str': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-octal-escape': 'error',
            'no-proto': 'error',
            'no-restricted-globals': [
                'error',
                { message: 'Use `globalThis` instead.', name: 'global' },
                { message: 'Use `globalThis` instead.', name: 'self' },
            ],
            'no-restricted-properties': [
                'error',
                {
                    message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
                    property: '__proto__',
                },
                { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
                { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
                {
                    message: 'Use `Object.getOwnPropertyDescriptor` instead.',
                    property: '__lookupGetter__',
                },
                {
                    message: 'Use `Object.getOwnPropertyDescriptor` instead.',
                    property: '__lookupSetter__',
                },
            ],
            'no-return-assign': 'error',
            'no-script-url': 'error',
            'no-self-compare': 'error',
            'no-sequences': 'error',
            'no-template-curly-in-string': 'error',
            'no-throw-literal': 'error',
            'no-undef-init': 'error',
            'no-undefined': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unneeded-ternary': 'error',
            'no-unreachable-loop': 'error',
            'no-unused-expressions': 'error',
            'no-unused-vars': [
                'error',
                {
                    caughtErrors: 'none',
                    vars: 'all',
                },
            ],
            'no-use-before-define': ['error', { classes: true, functions: false, variables: true }],
            'no-useless-call': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-void': 'error',
            'object-shorthand': [
                'error',
                'always',
                { avoidQuotes: true, ignoreConstructors: false },
            ],
            'one-var': ['error', 'never'],
            'operator-assignment': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-const': [
                'error',
                {
                    destructuring: 'all',
                    ignoreReadBeforeAssign: true,
                },
            ],
            'prefer-exponentiation-operator': 'error',
            'prefer-object-has-own': 'error',
            'prefer-object-spread': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': [
                'error',
                {
                    disallowRedundantWrapping: true,
                },
            ],
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'symbol-description': 'error',
            'unicode-bom': ['error', 'never'],
            'vars-on-top': 'error',
            'yoda': ['error', 'never'],
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            globals: {
                ...globals.node,
            },
        },
        settings: {
            'import-x/internal-regex': '^~/',
            'import-x/resolver-next': [
                createTypeScriptImportResolver({
                    alwaysTryTypes: true,
                }),
                createNodeResolver({
                    extensions: ['.js', '.ts'],
                }),
            ],
        },
    },
);
