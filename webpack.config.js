const path= require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    // Mapping errors
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    // Main file
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    // Output file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // Read files with followings extensions
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        // contentBase: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ].filter(Boolean),
    // How to handle each file extension
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                // Babel loader is integration between Babel and Webpack
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && new require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                // Babel loader is integration between css files and Webpack
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};