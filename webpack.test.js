const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { loader: 'raw', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
    ]
  },
  resolve: {
    extensions: ['.ts', '.es6', '.js']
  },
  stats: { colors: true, reasons: true }
};