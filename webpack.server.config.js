const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target: 'node',
    entry: path.join(__dirname, 'Assets/js/server.js'),
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'wwwroot/dist'),
        filename: 'bundle.server.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
