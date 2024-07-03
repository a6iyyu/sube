const path = require("path");

module.exports = {
  entry: {
    main: "./server.ts",
  },
  externals: {
    express: "express",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "development.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};