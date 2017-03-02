import { expect } from '../support/config';

describe('Test', () => {
  // afterEach(() => {
  //     process.env.NODE_ENV = 'test';
  //     delete require.cache[require.resolve('../config')];
  //   }
  // );
  //
  // beforeEach(() =>
  //   expect(process.env.NODE_ENV).toBe('test')
  // )
  //
  // describe('production', () => {
  //   it('uses production endpoint only when NODE_ENV is production', () => {
  //     process.env.NODE_ENV = 'production';
  //     const conf = require('../config').default;
  //     expect(conf.env).toBe('production');
  //     expect(conf.domain).toBe('crowdlift.me');
  //   });
  // });
  //
  // describe('development', () => {
  //   it('uses development endpoint when NODE_ENV is development', () => {
  //     process.env.NODE_ENV = 'development';
  //     const conf = require('../config').default;
  //     expect(conf.env).toBe('development');
  //     expect(conf.authDomain).toBe('dev.crowdlift.me');
  //   });
  // });

  describe('example', () => {
    it('works', () => {
      expect(1).to.be.equal(1);
      expect(1).to.be.ok;
    });
  });
});
