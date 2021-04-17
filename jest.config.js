const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testRegex: "((\\.|/*.)(test))\\.js?$",
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions, 'css', 'ts', 'tsx', 'jsx', 'json', "js", "node"
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["<rootDir>/public/", "<rootDir>/node_modules/"],
  coverageThreshold: {
    "global": {
      "branches": 50,
      "functions": 40,
      "lines": 50,
      "statements": 50
    },
  }
}
