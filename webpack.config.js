const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, "src"),
  entry: {
    index: './index.js',
  },
  output: {
    filename: `${filename('js')}`,
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".jpg"],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${filename('[ext]')}`,
              outputPath: "assets/images",
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'public/assets') },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/images/404.jpg' },
      ],
    },
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    overlay: true,
  },
  devtool: isProd ? false : "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  }
};