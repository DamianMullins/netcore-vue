const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base, {
    target: 'node',
    entry: path.resolve(__dirname, 'Assets/js/server.menu.js'),
    output: {
        libraryTarget: 'commonjs2',
        filename: 'bundle.server.menu.js'
    }
});
