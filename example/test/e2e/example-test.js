// See:
// http://nightwatchjs.org/guide#bdd-expect-assertions
// http://nightwatchjs.org/api#expect-api

module.exports = {
  Google: (browser) => {
    browser
      .url('https://www.google.com');
      // .pause(1000);

    browser.expect.element('body').to.be.present.before(200);
    browser.expect.element('title').to.be.present;
    browser.expect.element('body').text.to.contain('Gmail');

    browser.end();
  },

  Local: (browser) => {
    browser.url(browser.launch_url);

    browser.expect.element('body').to.be.present.before(200);
    browser.expect.element('title').to.be.present;
    browser.expect.element('h1').text.to.contain('Testing');

    browser.end();
  },
};
