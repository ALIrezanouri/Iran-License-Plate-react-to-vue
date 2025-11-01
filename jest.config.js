module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  'transformIgnorePatterns': [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
  ],
  moduleNameMapper: {
    '\\.(svg|png)$': '<rootDir>/src/tests/fileMock.js',
  },
};
