const path = require('path');

module.exports = {
  entry: {
    'htmlremap': './src/htmlremap.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  target: 'node',
  mode: 'development',
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name]/handler.js',
    path: path.resolve(__dirname, 'dist'),
  },
}; 