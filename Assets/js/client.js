import Vue from 'vue';
import { createApp } from './app';
import basketTotals from './components/basketTotals.vue';

const { menu, basket, store, i18n } = createApp();

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

menu.$mount('[data-menu]');
basket.$mount('[data-basket]');

new Vue({
    el: '[data-basket-totals]',
    i18n,
    store,
    render: h => h(basketTotals)
});
