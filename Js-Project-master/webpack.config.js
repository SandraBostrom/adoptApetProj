const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "app": "./src/js/addpet.js",
        "app2": "./src/js/homepage.js",
        
    },

    output: {
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        disableHostCheck: true,
        hot: true
    }
};
