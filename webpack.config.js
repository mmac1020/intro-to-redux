module.exports = {
  mode: 'development',
  entry: './public/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
