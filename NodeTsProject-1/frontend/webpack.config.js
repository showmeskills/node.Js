const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: "development",
    devtool:"source-map",
    entry: {
        app: path.join(__dirname, 'src', "app.js"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,"public","index.html"),
            filename:"index.html",
            inject:true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "public", "*.ico"),
                    to: path.join(__dirname, "dist", "favicon.ico"),
                }
            ]
        }),
    ],
    //配置server
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        compress: true,
        open: true,
    }
}