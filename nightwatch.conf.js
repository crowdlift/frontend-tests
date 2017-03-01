// See http://nightwatchjs.org/getingstarted#installation

const DEBUG = true;
const TESTS_PATH = './test/e2e/';
const REPORTS_PATH = './test/e2e/_reports';
const SCREENSHOTS_PATH = './test/e2e/_screenshots';


const SCREENSHOTS = {
  enabled: false,
  path: SCREENSHOTS_PATH,
};

const SELENIUM_CONFIGURATION = {
  server_path: './node_modules/selenium-standalone-bins/jar/selenium-server-standalone-3.1.0.jar',
  log_path: './',
  start_process: true,
  host: '127.0.0.1',
  port: 4444,
  cli_args: {
    'webdriver.chrome.driver': './node_modules/selenium-standalone-bins/drivers/chromedriver_mac64_2.27',
  },
};

const CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true,
  browserConnectionEnabled: true,
  chromeOptions: {
    args: ['--no-sandbox'],
  },
};

const TEST_SETTINGS = {
  default: {
    launch_url: process.env.LAUNCH_URL,
    selenium_port: 4444,
    selenium_host: 'localhost',
    silent: !DEBUG,
    screenshots: SCREENSHOTS,
    desiredCapabilities: CHROME_CONFIGURATION,
  },

  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
    },
  },

  edge: {
    desiredCapabilities: {
      browserName: 'MicrosoftEdge',
    },
  },
};

module.exports = {
  src_folders: TESTS_PATH,
  output_folder: REPORTS_PATH,
  selenium: SELENIUM_CONFIGURATION,
  test_settings: TEST_SETTINGS,
};
