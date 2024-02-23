const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  /* plugins: [
    new ESLintPlugin({
      emitWarning: false,
      extensions: ['.tsx', '.ts', '.js'],
      exclude: 'node_modules',
    }),
  ], */
};
