const path = require("path");

module.exports = {
  entry: {
    azura: "./.src/js/azura",
    azura_sidebar: "./.src/js/azura-sidebar",
  },
  output: {
    path: path.resolve(__dirname, "../../assets"),
    filename: "[name].js",
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "common",
          chunks: "initial",
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
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
  },
  plugins: [],
};
