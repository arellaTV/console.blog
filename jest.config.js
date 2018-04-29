module.exports = {
  moduleNameMapper: {
    "\\.(sass)$": "<rootDir>/lib/spec/styleMock.js"
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.(gql|graphql)$": "<rootDir>/lib/spec/transformer.js"
  },
}
