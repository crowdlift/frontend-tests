// See http://nightwatchjs.org/getingstarted#installation

const DEFAULTS = {
  debug: true,
  tests: './test/e2e/',
  reports: './test/e2e/_reports',
  logs: './',
  screenshots: {
    path: './test/e2e/_screenshots',
    enabled: false,
  },
  launch_url: process.env.LAUNCH_URL,
  server: './node_modules/selenium-standalone-bins/jar/selenium-server-standalone-3.1.0.jar',
  driver: './node_modules/selenium-standalone-bins/drivers/chromedriver_mac64_2.27',
};


const setup = (_config) => {
  const config = { ...DEFAULTS, ..._config };

  const SELENIUM_CONFIGURATION = {
    server_path: config.server,
    log_path: config.logs,
    start_process: true,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': config.driver,
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
      launch_url: config.launch_url,
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: !config.debug,
      screenshots: config.screenshots,
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

  return {
    src_folders: config.tests,
    output_folder: config.reports,
    selenium: SELENIUM_CONFIGURATION,
    test_settings: TEST_SETTINGS,
  };
};


export default setup;
export {
  setup,
};
