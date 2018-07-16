import Vue from 'vue';
import { createApp, store, i18n } from './app';
import Basket from './components/Basket.vue';
import basketTotals from './components/basketTotals.vue';

store.replaceState(__INITIAL_STATE__);

const { app } = createApp();

app.$mount('[data-menu]');

new Vue({
    el: '[data-basket]',
    i18n,
    store,
    render: h => h(Basket)
});

new Vue({
    el: '[data-basket-totals]',
    i18n,
    store,
    render: h => h(basketTotals)
});
