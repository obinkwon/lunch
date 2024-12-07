const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/, // loader를 적용할 파일(정규식으로 작성)
        use: ["style-loader", "css-loader"], // 사용할 loader
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js", // entry point가 1개인 경우
    // filename: '[name]_bundle.js', // entry point가 여러개인 경우
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@view": path.resolve(__dirname, "../src/views/"),
      "@comp": path.resolve(__dirname, "../src/components/"),
      "@type": path.resolve(__dirname, "../src/types/"),
      "@json": path.resolve(__dirname, "../src/json/"),
      "@asset": path.resolve(__dirname, "../src/assets/"),
    },
  },
};
