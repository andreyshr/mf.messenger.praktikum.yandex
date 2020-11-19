const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["./src/app.ts", "./src/styles/global.scss"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.[contenthash].js",
        publicPath: "/",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
        hot: true,
        open: true,
        historyApiFallback: {
            index: "index.html",
        },
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: path.resolve(
                                __dirname,
                                "tsconfig.json"
                            ),
                        },
                    },
                ],
                exclude: /(node_modules)/,
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.hbs/,
                loader: "handlebars-loader",
                exclude: /(node_modules)/,
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
};
