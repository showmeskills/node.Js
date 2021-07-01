const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        "js/app": path.join(__dirname, 'src', "app.js"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                //要使用的loader
                use: [
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    //指定环境插件
                                    '@babel/preset-env',
                                    //配置信息
                                    {
                                        //兼容的目标浏览器
                                        targets: {
                                            "chrome": '58',
                                            "ie": '11'
                                        },
                                        //使用corejs的那个版本 例如ie 11不兼容promise使用corejs 和 useBuiltIns 来帮它下载promise
                                        "corejs": "3",
                                        //使用corejs的方法,按需下载(所以会把)
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.art$/,
                use: {
                    loader: "art-template-loader"
                }
            },
            {
                test: /\.css$/g,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: "index.html",
            inject: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "public", "*.ico"),
                    to: path.join(__dirname, "dist", "favicon.ico"),
                },
                {
                    from: path.join(__dirname, "public", "*.io.js"),
                    to: path.join(__dirname, "dist", "socket.io.js"),
                },
            ]
        }),
        new CleanWebpackPlugin(),
    ],
    //配置server
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        compress: true,
        open: true,
        proxy:{
           "/socket":{
               target:"http://localhost:5000",
               changeOrigin:true,
               pathRewrite:{
                   "^/socket":""
               }
           }
        }
    }
}