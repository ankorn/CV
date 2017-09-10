const path = require('path');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx', '.json'],
  },
};
