// Example:
// Load this file in karma.

// const browser = require('frontendkit-tests').browser;
const browser = require('../index').browser;

browser.setup();

const context = require.context('./test/unit', true, /-test\.js$/);
context.keys().forEach(context);
