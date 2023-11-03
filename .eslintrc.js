// https://eslint.org/docs/latest/use/configure/configuration-files#using-configuration-files

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
  },
  ignorePatterns: ["src/**/*.test.ts", "src/frontend/generated/*"],

  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "react/display-name": [0, { ignoreTranspilerName: false }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "function-expression",
      },
    ],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect and polyfill imports.
          ["^\\u0000"],
          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],
          // App layer
          ["^~/(app)(/.*|$)"],
          // Pages Layer
          ["^~/(routes|pages)(/.*|$)"],
          // Features Layer
          ["^~/(features)(/.*|$)"],
          // Entities Layer
          ["^~/(entities)(/.*|$)"],
          // Shared Layer
          ["^~/(shared)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // (S)CSS files imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/prefer-default-export": "off",
    "import/no-cycle": "warn",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "no-nested-ternary": "off",
    radix: ["error", "as-needed"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_errors"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
    {
      files: ["**/*.stories.@(js|jsx|ts|tsx)"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "storybook/csf-component": "error",
      },
    },
    {
      files: ["**/*.mdx"],
      extends: ["plugin:mdx/recommended"],
      settings: {
        "mdx/code-blocks": true,
        "mdx/language-mapper": false,
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
