import nx from "@nx/eslint-plugin";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/*"],
}, ...compat.extends(
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
), {
    plugins: {
        "@nx": nx,
        react,
        "@typescript-eslint": typescriptEslint,
        prettier,
        "simple-import-sort": simpleImportSort,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.base.json",
        },
    },

    rules: {
        "simple-import-sort/imports": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-named-as-default": "off",
        "react/react-in-jsx-scope": "off",
        "linebreak-style": "error",
        "react/jsx-props-no-spreading": "off",
        "no-console": "error",
        "no-var": "error",

        "react/jsx-sort-props": ["error", {
            shorthandFirst: true,
        }],

        "@typescript-eslint/no-floating-promises": "off",
        "react/jsx-one-expression-per-line": "off",
        "spaced-comment": ["error", "always"],
        eqeqeq: ["error", "smart"],
        "no-else-return": "error",
        "no-empty-function": "error",
        "react/require-default-props": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-ignore": "off",

        "max-len": ["error", {
            code: 120,
        }],

        "consistent-return": "off",
        "array-callback-return": "warn",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/no-loss-of-precision": "off",
        "react/button-has-type": "off",
        "no-plusplus": "off",
        "no-param-reassign": "off",

        "@typescript-eslint/no-misused-promises": [2, {
            checksVoidReturn: {
                attributes: false,
            },
        }],

        "padding-line-between-statements": ["error", {
            blankLine: "always",
            prev: "*",
            next: "return",
        }, {
            blankLine: "always",
            prev: ["const", "let", "import"],
            next: "*",
        }, {
            blankLine: "any",
            prev: ["import"],
            next: ["import"],
        }, {
            blankLine: "never",
            prev: ["const", "let"],
            next: ["const", "let"],
        }, {
            blankLine: "always",
            prev: ["multiline-const", "multiline-let"],
            next: ["*"],
        }, {
            blankLine: "always",
            prev: ["*"],
            next: ["multiline-const", "multiline-let"],
        }, {
            blankLine: "always",
            prev: ["*"],
            next: ["if", "switch", "for", "while", "try", "function", "class"],
        }, {
            blankLine: "always",
            prev: ["if", "switch", "for", "while", "try", "function", "class"],
            next: ["*"],
        }, {
            blankLine: "never",
            prev: ["case"],
            next: ["case"],
        }],

        "object-curly-spacing": ["error", "always", {
            objectsInObjects: true,
            arraysInObjects: true,
        }],

        "array-bracket-spacing": ["error", "always", {
            objectsInArrays: true,
            arraysInArrays: false,
        }],
    },
}, {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],

    rules: {
        "simple-import-sort/imports": ["error", {
            groups: [
                ["^@nx", "^react", "^\\w"],
                ["^@store(/.*|$)"],
                ["^@components(/.*|$)"],
                ["^@ui(/.*|$)"],
                ["^@lib(/.*|$)"],
                ["^@pages(/.*|$)"],
                ["^@routes(/.*|$)"],
                ["^@layouts(/.*|$)"],
                ["^@utils(/.*|$)"],
                ["^@assets(/.*|$)"],
                ["^@helpers(/.*|$)"],
                ["^@hooks(/.*|$)"],
                ["^@providers(/.*|$)"],
                ["^@services(/.*|$)"],
                ["^\\u0000"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ["^.+\\.?(css)$"],
            ],
        }],

        "@nx/enforce-module-boundaries": ["error", {
            enforceBuildableLibDependency: true,
            allow: [],

            depConstraints: [{
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
            }],
        }],
    },
}, ...compat.extends("plugin:@nx/typescript").map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
})), {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {},
}, ...compat.extends("plugin:@nx/javascript").map(config => ({
    ...config,
    files: ["**/*.js", "**/*.jsx"],
})), {
    files: ["**/*.js", "**/*.jsx"],
    rules: {},
}, {
    files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.spec.js", "**/*.spec.jsx"],

    languageOptions: {
        globals: {
            ...globals.jest,
        },
    },

    rules: {},
}];