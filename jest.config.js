const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  moduleNameMapper: {
    '@components(.*)$': '<rootDir>/src/components$1',
    '@pages(.*)$': '<rootDir>/src/pages$1',
    '@styles(.*)$': '<rootDir>/src/styles$1',
    '@utils(.*)$': '<rootDir>/src/utils$1',
  },
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
