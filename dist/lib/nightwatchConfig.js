'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// See http://nightwatchjs.org/getingstarted#installation

var DEFAULTS = {
  debug: true,
  tests: './test/e2e/',
  reports: './test/e2e/_reports',
  logs: './',
  screenshots: {
    path: './test/e2e/_screenshots',
    enabled: false
  },
  launch_url: process.env.LAUNCH_URL,
  server: './node_modules/selenium-standalone-bins/jar/selenium-server-standalone-3.1.0.jar',
  driver: './node_modules/selenium-standalone-bins/drivers/chromedriver_mac64_2.27'
};

var setup = function setup(_config) {
  var config = _extends({}, DEFAULTS, _config);

  var SELENIUM_CONFIGURATION = {
    server_path: config.server,
    log_path: config.logs,
    start_process: true,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': config.driver
    }
  };

  var CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    browserConnectionEnabled: true,
    chromeOptions: {
      args: ['--no-sandbox']
    }
  };

  var TEST_SETTINGS = {
    default: {
      launch_url: config.launch_url,
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: !config.debug,
      screenshots: config.screenshots,
      desiredCapabilities: CHROME_CONFIGURATION
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge'
      }
    }
  };

  return {
    src_folders: config.tests,
    output_folder: config.reports,
    selenium: SELENIUM_CONFIGURATION,
    test_settings: TEST_SETTINGS
  };
};

exports.default = setup;
exports.setup = setup;