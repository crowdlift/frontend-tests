// Example:
// Load this file in karma.

// NOTE: Requiring frontend-tests directly results in webpack compile errors.
//       As a workaround, just require browser directly from dist/lib.
// const browser = require('frontendkit-tests/dist/lib/browser');
const browser = require('../lib/browser');

browser.setup();

const context = require.context('./test/unit', true, /-test\.js$/);
context.keys().forEach(context);
