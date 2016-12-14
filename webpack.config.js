const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        publicPath: "/assets/",
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.html$/,
            loader: "raw-loader"
        }
        ],
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize : true,
                compressor: {
                    warnings: false,
                },
            })
        ]
    },
    devServer: {
        contentBase: "./src/main-content",
        inline: true
    }
};