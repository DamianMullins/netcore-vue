const path = require('path');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env => {
    const sharedConfig = {
        mode: 'development',
        output: {
            filename: '[name].js',
            path: path.join(__dirname, 'wwwroot/js'),
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

    const clientBundleConfig = merge(sharedConfig, {
        entry: { 'bundle.client': './Assets/js/client.js' },
    });

    const menuBundleConfig = merge(sharedConfig, {
        target: 'node',
        entry: { 'bundle.server.menu': './Assets/js/server.menu.js' },
        output: {
            libraryTarget: 'commonjs2'
        }
    });

    const basketBundleConfig = merge(sharedConfig, {
        target: 'node',
        entry: { 'bundle.server.basket': './Assets/js/server.basket.js' },
        output: {
            libraryTarget: 'commonjs2'
        }
    });

    return [clientBundleConfig, menuBundleConfig, basketBundleConfig];
};
