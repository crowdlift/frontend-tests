// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  resolve: {
    // extensions: ['.js', '.json'],
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  },
  devtool: 'cheap-module-inline-source-map',
  module: {
    noParse: [
      /\/sinon\.js/,
    ],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test'),
      __DEV__: true,
    }),
  ],
};
