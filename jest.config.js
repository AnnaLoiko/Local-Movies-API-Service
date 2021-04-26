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
  collectCoverage: true,
  transformIgnorePatterns: [`/node_modules/node_modules/react-datepicker/dist/react-datepicker.css`],
  coveragePathIgnorePatterns: ["<rootDir>/public/", "<rootDir>/node_modules/"],
}
