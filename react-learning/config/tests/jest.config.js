import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

module.exports = {
  automock: false,
  browser: false,
  bail: false,
  collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/coverage',
  globals: {
      __DEV__: true
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  transform: {
      '^.+\\.js?$': 'babel-jest'
  },
//   moduleNameMapper: {
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
//     "\\.(css|less)$": "identity-obj-proxy"
//   },
  verbose: true,
  setupTestFrameworkScriptFile: './rtl.setup.js'
};
