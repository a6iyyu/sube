const path = require("path");

module.exports = {
  entry: {
    main: "./server.ts",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.cs$/,
        exclude: /node_modules/,
        loader: "raw-loader",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "ignore-loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "production.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};