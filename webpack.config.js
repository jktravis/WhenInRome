module.exports = {
  entry: './src/app',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, use: 'babel-loader',
      },
    ],
  },
};