const path = require("path");
const webpack = require("webpack")

module.exports = {
  entry: {
    index: './src/index.js',
    post: './src/post.js',
    
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  watch: true,

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    liveReload: true
  }
}