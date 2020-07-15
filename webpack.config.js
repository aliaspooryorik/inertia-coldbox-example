const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: {
        main: './resources/assets/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'includes/js'),
        filename: '[name].initial.js', /* initial */
        chunkFilename: '[name].[contenthash].js', /* non-initial chunks */
        publicPath: 'includes/js/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: { 
                    extensions: [".js", ".jsx"] 
                },
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin()
    ]
};
