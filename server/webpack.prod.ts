const root = require("path");

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
    path: root.resolve(__dirname, "build"),
    filename: "production.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};