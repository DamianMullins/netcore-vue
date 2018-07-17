import Vue from 'vue';
import i18n from './i18n';
import store from './vuex';
import MenuItems from './components/MenuItems.vue';
import Basket from './components/Basket.vue';

export const createApp = () => {

    const menu = new Vue({
        i18n,
        store,
        render: h => h(MenuItems)
    });

    const basket = new Vue({
        i18n,
        store,
        render: h => h(Basket)
    });

    return {
        menu,
        basket,
        store,
        i18n
    };
}
