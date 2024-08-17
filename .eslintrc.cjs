module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        'alloy',
        'alloy/vue',
        'alloy/typescript',
        "eslint:recommended",
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser":"vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": {
            js: '@babel/eslint-parser',
            jsx: '@babel/eslint-parser',
            ts: '@typescript-eslint/parser',
            tsx: '@typescript-eslint/parser',
        },
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ]
    }
}
