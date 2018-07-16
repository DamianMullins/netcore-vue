import Vue from 'vue';
import { createApp, store, i18n } from './app';
import BasketItems from './components/BasketItems.vue';
import basketTotals from './components/basketTotals.vue';

store.replaceState(__INITIAL_STATE__);

const { app } = createApp();

app.$mount('[data-menu-items]');

new Vue({
    el: '[data-basket-items]',
    i18n,
    store,
    render: h => h(BasketItems)
});

new Vue({
    el: '[data-basket-totals]',
    i18n,
    store,
    render: h => h(basketTotals)
});
