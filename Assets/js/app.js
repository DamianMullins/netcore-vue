import Vue from 'vue';
import i18n from './i18n';
import store from './vuex/store';
// import App from './components/App.vue';
import MenuItems from './components/MenuItems.vue';

const createApp = () => {
    const app = new Vue({
        i18n,
        store,
        render: h => h(MenuItems)
    });
    return { app };
}

export { createApp, store };
