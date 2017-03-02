// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';

const config = {
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
      // eslint-disable-next-line quote-props
      '__DEV__': true,
    }),
  ],
};

export default config;
