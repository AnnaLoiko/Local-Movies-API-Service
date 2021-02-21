const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: false,
  verbose: true,
  testEnvironment: 'node',
  testRegex: "((\\.|/*.)(test))\\.js?$",
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions, 'css', 'ts', 'tsx', 'jsx', 'json'
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
