const fs = require('fs');
const path = require('path');
const prerendering = require('aspnet-prerendering');
const { createBundleRenderer } = require('vue-server-renderer');


module.exports = ({ bundleName, setGlobalState = false }) => {
    const filePath = path.join(__dirname, `../../wwwroot/js/${bundleName}.js`);
    const serverBundle = fs.readFileSync(filePath, 'utf8');
    const bundleRenderer = createBundleRenderer(serverBundle);

    return prerendering.createServerRenderer(({ data }) => {
        return new Promise((resolve, reject) => {
            bundleRenderer.renderToString(data, (err, html) => {
                if (err) {
                    reject(err.message);
                }

                resolve({
                    html,
                    ...setGlobalState ? {
                        globals: {
                            // window.__INITIAL_STATE__ will be the initial state of the Vuex store
                            __INITIAL_STATE__: setGlobalState && data
                        }
                    } : {}
                });
            });
        });
    });
};