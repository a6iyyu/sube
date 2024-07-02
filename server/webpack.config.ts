import path from "path";

module.exports = {
  entry: "./server.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.txt/i,
        use: [
          {
            loader: "raw-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "server.bundle.js",
  },
  target: "node",
};