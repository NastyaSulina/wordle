import { defineConfig, globalIgnores } from 'eslint/config'
import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

const eslintRecommended = eslint.configs.recommended
const typescriptEslintRecommended = typescriptEslint.configs.recommended
const importRecommended = importPlugin.flatConfigs.recommended
const storybookRecommended = storybook.configs['flat/recommended']

export default typescriptEslint.config(
    eslintRecommended,
    typescriptEslintRecommended,
    importRecommended,
    prettierRecommended,
    ...storybookRecommended,
    defineConfig([globalIgnores(['dist/', 'node_modules/'])]),
    {
        plugins: {
            '@typescript-eslint': typescriptEslint.plugin,
            'jsx-a11y': jsxA11y,
            react,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: typescriptEslint.parser,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },

                project: './tsconfig.json', // Нужно для типозависимых правил, замедляет ESLint
            },
        },

        settings: {
            'import/resolver': {
                typescript: {},
            },
            react: {
                version: 'detect',
            },
        },

        rules: {
            'prettier/prettier': 2,
            'import/order': [
                2,
                {
                    groups: [
                        'external',
                        'builtin',
                        'index',
                        'sibling',
                        'parent',
                        'internal',
                        'type',
                    ],
                    'newlines-between': 'always-and-inside-groups',
                },
            ],
            'import/no-extraneous-dependencies': ['off'],
            'import/prefer-default-export': ['off'],

            'react/require-default-props': ['off'],
            'react/react-in-jsx-scope': ['off'],
            'react/jsx-uses-react': ['off'],
            'react/jsx-props-no-spreading': ['off'],
            'react/no-unescaped-entities': ['off'],
            'react/no-array-index-key': ['warn'],
            'react/function-component-definition': [
                2,
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],

            'jsx-a11y/alt-text': 'error',
            'jsx-a11y/anchor-is-valid': 'error',
            'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
            'jsx-a11y/click-events-have-key-events': 'warn',

            'no-plusplus': ['off'],
        },
    },
)
