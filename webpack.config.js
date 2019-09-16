const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill',
        './src/js/index.js'
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/bundle.js'
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],

    devServer: {
        contentBase: "./dist",
        port: 3000
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}