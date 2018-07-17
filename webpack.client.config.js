const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base, {
    entry: { 'bundle.client.js': './Assets/js/client.js' },
    output: {
        filename: 'bundle.client.js'
    }
});
