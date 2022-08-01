const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test:/\.(png|svg|jpeg|jpg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "K Test",
            filename: "index.html",
            template: "src/template.html",
        }),
        // new BundleAnalyzerPlugin()
    ],
};
