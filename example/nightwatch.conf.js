// Use these in an actual project:
// const karmaConfig = require('frontendkit-tests').karmaConfig;

const nightwatchConfig = require('../index').nightwatchConfig;

module.exports = nightwatchConfig({
  debug: true,
  tests: './example/test/e2e/',
  reports: './example/test/e2e/_reports',
  logs: './',
  screenshots: {
    path: './example/test/e2e/_screenshots',
    enabled: true,
  },
  launch_url: process.env.LAUNCH_URL,
  // server: './node_modules/selenium-standalone-bins/jar/selenium-server-standalone-3.1.0.jar',
  // driver: './node_modules/selenium-standalone-bins/drivers/chromedriver_mac64_2.27',
});
