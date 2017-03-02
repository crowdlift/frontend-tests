// Use these in an actual project:
// const karmaConfig = require('frontendkit-tests').karmaConfig;
// const webpackConfig = require('frontendkit-tests').webpackConfig;
// const projectName = require('./package').name;

const karmaConfig = require('../index').karmaConfig;
const webpackConfig = require('../index').webpackConfig;
const projectName = 'Test Project';

module.exports = karmaConfig({
  projectName,
  entry: 'tests.browser.js',
  // Optional webpack config; if omitted, will use defaults
  webpackConfig,
});
