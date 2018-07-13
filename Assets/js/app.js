import Vue from 'vue';
import App from './components/App.vue';
import store from './vuex/store';

const createApp = () => {
    const app = new Vue({
        store,
        render: h => h(App)
    });
    return { app };
}

export { createApp, store };
