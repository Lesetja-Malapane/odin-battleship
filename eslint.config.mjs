import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["package.json", "package-lock.json", "babel.config.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.json"],
    ignores: ["package.json", "package-lock.json", "babel.config.js"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["src/**/*.test.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
    env: { node: true },
    rules: {
      // Optionally, relax import/export rules for tests
      "import/no-commonjs": "off",
    },
  },
]);
