const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './dist');

const isDevMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: {
    app: APP_DIR + "/index.tsx"
  },
  output: {
    publicPath: '/',
    chunkFilename: "[name].[chunkhash].chunk.js",
    filename: "[name].[chunkhash].js",
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    static: BUILD_DIR,
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: "all",
          filename: "[name].[chunkhash].js",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/
        },
      },
      maxSize: 256 * 1024,
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: PUBLIC_DIR + "/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: isDevMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css'
    }),
  ],
}