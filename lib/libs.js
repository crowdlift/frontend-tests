import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import asPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(asPromised);

export const expect = chai.expect;
export const spy = sinon.spy;
export const stub = sinon.stub;
export default {
  expect,
  spy,
  stub,
};
