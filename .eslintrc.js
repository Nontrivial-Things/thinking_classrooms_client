module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "import", "react"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jest/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
};