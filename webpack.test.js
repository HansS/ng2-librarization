module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { loader: 'raw-loader', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loaders: ['ts-loader', 'angular2-template-loader'], test: /\.ts$/ }
    ]
  },
  resolve: {
    extensions: ['.ts', '.es6', '.js']
  },
  stats: { colors: true, reasons: true }
};
