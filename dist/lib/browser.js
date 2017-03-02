'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = undefined;

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setup = function setup() {
  beforeEach(function () {
    /* eslint-disable no-console */
    _expect2.default.spyOn(console, 'error').andCall(function (msg) {
      var expected = false;

      console.error.expected.forEach(function (about) {
        if (msg.indexOf(about) !== -1) {
          console.error.warned[about] = true;
          expected = true;
        }
      });

      if (expected) {
        return;
      }

      console.error.threw = true;
      throw new Error(msg);
    });

    console.error.expected = [];
    console.error.warned = Object.create(null);
    console.error.threw = false;
    /* eslint-enable no-console */
  });

  afterEach(function () {
    // eslint-disable-next-line no-console
    var _console$error = console.error,
        threw = _console$error.threw,
        expected = _console$error.expected,
        warned = _console$error.warned;
    // eslint-disable-next-line no-console

    console.error.restore();

    if (!threw) {
      expected.forEach(function (about) {
        (0, _expect2.default)(warned[about]).toExist('Missing expected warning: ' + about);
      });
    }
  });
}; /* eslint-env mocha */

// TODO: replace expect.spyOn with sinon.spy; then remove expect from dependencies

exports.default = setup;
exports.setup = setup;