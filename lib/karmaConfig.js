import webpackConfig from './webpackConfig';


const getConfig = (config, karmaConfig) => {
  if (process.env.RELEASE || process.env.TRAVIS || process.env.SINGLERUN) {
    karmaConfig.set({ singleRun: true });
  }

  const customLaunchers = {
    // Browsers to run on BrowserStack.
    BS_Chrome: {
      base: 'BrowserStack',
      os: 'Windows',
      os_version: '10',
      browser: 'chrome',
      browser_version: '47.0',
    },
    BS_Firefox: {
      base: 'BrowserStack',
      os: 'Windows',
      os_version: '10',
      browser: 'firefox',
      browser_version: '43.0',
    },
    BS_Safari: {
      base: 'BrowserStack',
      os: 'OS X',
      os_version: 'El Capitan',
      browser: 'safari',
      browser_version: '9.0',
    },
    BS_MobileSafari8: {
      base: 'BrowserStack',
      os: 'ios',
      os_version: '8.3',
      browser: 'iphone',
      real_mobile: false,
    },
    BS_MobileSafari9: {
      base: 'BrowserStack',
      os: 'ios',
      os_version: '9.1',
      browser: 'iphone',
      real_mobile: false,
    },
    BS_InternetExplorer10: {
      base: 'BrowserStack',
      os: 'Windows',
      os_version: '8',
      browser: 'ie',
      browser_version: '10.0',
    },
    BS_InternetExplorer11: {
      base: 'BrowserStack',
      os: 'Windows',
      os_version: '10',
      browser: 'ie',
      browser_version: '11.0',
    },

    // The ancient Travis Chrome that most projects use in CI.
    ChromeCi: {
      base: 'Chrome',
      flags: ['--no-sandbox'],
    },
  };

  karmaConfig.set({
    customLaunchers,

    browsers: ['Chrome'],
    frameworks: ['mocha'],
    reporters: ['mocha', 'coverage'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      config.entry,
    ],

    preprocessors: {
      '*.js': ['webpack', 'sourcemap'],
    },

    webpack: config.webpackConfig || webpackConfig,

    webpackServer: {
      // noInfo: true,
      stats: {
        colors: true,
      },
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
    },
  });

  // USE_CLOUD is a Travis config option
  if (process.env.USE_CLOUD) {
    karmaConfig.set({
      browsers: Object.keys(customLaunchers),
      reporters: ['dots', ...karmaConfig.reporters.shift(1)],
      concurrency: 2,
      browserDisconnectTimeout: 10000,
      browserDisconnectTolerance: 3,
    });

    let browserStack;
    if (process.env.TRAVIS) {
      browserStack = {
        project: config.projectName,
        build: process.env.TRAVIS_BUILD_NUMBER,
        name: process.env.TRAVIS_JOB_NUMBER,
      };
    } else {
      browserStack = {
        project: config.projectName,
      };
    }

    karmaConfig.set({
      browserStack,
    });
  }
};

const setup = config => getConfig.bind(getConfig, config);

export default setup;
export {
  setup,
};
