const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const plugins = require('./webpack.plugins');

module.exports = {
  entry: './src/main/index.ts',
  module: {
    rules: require('./webpack.rules'),
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', 'less', '.dll', '.png', '.dylib'],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: {
    "ref-napi": "commonjs2 ref-napi",
    "ffi-napi": "commonjs2 ffi-napi"
  }
};
