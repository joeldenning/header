const path = require("path");
const pkjson = require("./package.json");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === "production";
const fileVersion = isProduction ? "." + pkjson.version : "";

module.exports = {
  configureWebpack: {
    output: {
      filename: "js/[name]" + fileVersion + ".js",
      chunkFilename: "[name]" + fileVersion + ".js",
      libraryTarget: "system"
    },
    externals: ['vue', 'vue-router'],
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "./report.html"
      })
    ]
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
};
