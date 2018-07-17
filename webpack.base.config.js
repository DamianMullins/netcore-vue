const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        publicPath: '/js/'
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
            },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader',
                options: {
                    svgo: {
                        plugins: [
                            { removeDoctype: true },
                            { removeComments: true }
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
