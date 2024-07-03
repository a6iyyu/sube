const path = require("path");

module.exports = {
  entry: {
    main: "./server.ts",
  },
  mode: "development",
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
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};