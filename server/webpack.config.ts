const path = require("path");

module.exports = {
  entry: "./server.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "server.js",
  },
  target: "node",
};