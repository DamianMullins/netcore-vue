const path = require('path');

module.exports = {
    entry: { 'bundle.client.js': './Assets/js/client.js' },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/dist/',
        filename: 'bundle.client.js'
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
    }
};
