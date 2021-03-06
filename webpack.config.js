module.exports = {
  devtool: 'source-maps',
  entry: './src/app',
  output: {
    filename: './dist/javascripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, use: 'babel-loader',
      },
    ],
  },
};
