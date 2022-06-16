const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    azura: "./.src/js/azura",
    azura_sidebar: "./.src/js/azura-sidebar",
  },
  output: {
    path: path.resolve(__dirname, '../../assets'),
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  devServer: {
    writeToDisk: (filePath) => {
      return /bundle_.*\.js$/.test(filePath);
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
};
