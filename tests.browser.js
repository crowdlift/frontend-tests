/* eslint-env mocha */

// TODO: replace expect.spyOn with sinon.spy; then remove expect from dependencies

import expect from 'expect';

beforeEach(() => {
  /* eslint-disable no-console */
  expect.spyOn(console, 'error').andCall((msg) => {
    let expected = false;

    console.error.expected.forEach((about) => {
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

afterEach(() => {
  // eslint-disable-next-line no-console
  const { threw, expected, warned } = console.error;
  // eslint-disable-next-line no-console
  console.error.restore();

  if (!threw) {
    expected.forEach((about) => {
      expect(warned[about]).toExist(`Missing expected warning: ${about}`);
    });
  }
});

const context = require.context('./test/unit', true, /-test\.js$/);
context.keys().forEach(context);
