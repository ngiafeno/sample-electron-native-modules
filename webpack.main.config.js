module.exports = {
  entry: './src/main/index.ts',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', 'less', '.dll','.png', '.dylib']
   
  },
  node: {
    __dirname: true,
  }
};
