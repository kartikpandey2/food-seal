const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  title: "Restaurant Finder",
  template: "./src/index.html"
});

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: ["file-loader", "image-webpack-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            [
              "import",
              { libraryName: "antd", libraryDirectory: "es", style: "css" }
            ]
          ]
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};
