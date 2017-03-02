'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stub = exports.spy = exports.expect = undefined;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiAsPromised2.default);

var expect = exports.expect = _chai2.default.expect;
var spy = exports.spy = _sinon2.default.spy;
var stub = exports.stub = _sinon2.default.stub;
exports.default = {
  expect: expect,
  spy: spy,
  stub: stub
};