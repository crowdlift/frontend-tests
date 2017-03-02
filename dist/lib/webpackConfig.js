'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  resolve: {
    // extensions: ['.js', '.json'],
    alias: {
      sinon: 'sinon/pkg/sinon'
    }
  },
  devtool: 'cheap-module-inline-source-map',
  module: {
    noParse: [/\/sinon\.js/],
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  plugins: [new _webpack2.default.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('test'),
    // eslint-disable-next-line quote-props
    '__DEV__': true
  })]
}; // eslint-disable-next-line import/no-extraneous-dependencies
exports.default = config;