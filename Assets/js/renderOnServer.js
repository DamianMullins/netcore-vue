process.env.VUE_ENV = 'server';

const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const filePath = path.join(__dirname, '../../wwwroot/dist/bundle.server.js')
const serverBundle = fs.readFileSync(filePath, 'utf8');
const bundleRenderer = createBundleRenderer(serverBundle, {
    runInNewContext: false
});

module.exports = function (params) {
    return new Promise((resolve, reject) => {
        // params.data is the store's initial state. Sent by the asp-prerender-data attribute
        bundleRenderer.renderToString(params.data, (err, resultHtml) => {
            if (err) {
                reject(err.message);
            }

            resolve({
                html: resultHtml,
                globals: {
                    // window.__INITIAL_STATE__ will be the initial state of the Vuex store
                    __INITIAL_STATE__: params.data
                }
            });
        });
    });
};