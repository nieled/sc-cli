import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const APP_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './build/dist/');

const isDevMode = process.env.NODE_ENV !== 'production';

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
	mode: isDevMode ? 'development' : 'production',
	entry: {
		app: APP_DIR + 'index.tsx',
	},
	output: {
		path: BUILD_DIR,
		filename: 'app/[name].[chunkhash].js',
		chunkFilename: 'app/[id].[chunkhash].chunk.js',
		publicPath: '/',
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
				use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
				use: ['file-loader'],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	optimization: {
		moduleIds: 'named',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendors: {
					chunks: 'all',
					filename: '[name].[chunkhash].js',
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
				},
			},
			maxSize: 256 * 1024,
		},
	},
	devtool: 'inline-source-map',
	devServer: {
		static: BUILD_DIR,
		historyApiFallback: true,
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: PUBLIC_DIR + '/index.html',
		}),
	],
};

// new MiniCssExtractPlugin({
// 	filename: isDevMode ? '[name].css' : '[name].[hash].css',
// 	chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
// }),

export default config;
