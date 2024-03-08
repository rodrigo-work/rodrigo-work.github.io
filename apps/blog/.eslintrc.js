/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@acme/eslint-config/remix.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  }
}
