/* eslint-disable quotes */
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelCase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
