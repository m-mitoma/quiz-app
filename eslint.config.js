import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-undef": "error",
      "no-unused-vars": "error",
      "react/prop-types": "off",
    },
  },
  // ここから追加する設定
  {
    // vite.config.js および vite.config.ts にのみ適用
    files: ["vite.config.js", "vite.config.ts"],
    languageOptions: {
      // Node.jsのグローバル変数を有効にする
      globals: {
        ...globals.node,
      },
      // Node.js環境ではモジュールタイプがCommonJSである可能性も考慮
      // 必要に応じて sourceType: 'module' または 'commonjs' を指定
      sourceType: "module",
    },
    rules: {
      // Node.js環境でよくある no-undef の誤検出を防ぐため、特定のルールを調整
      // 例: require() を使う場合など
    },
  },
];
