import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {
    MENU_GET_ALL_ITEMS,
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    BASKET_INCREMENT_ITEM_QUANTITY,
    BASKET_DECREMENT_ITEM_QUANTITY
} from './mutation-types';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export const getters = {
    basketItems: (state, getters, { menu }) =>
        state.basket.items.map(({ id, quantity }) =>
            ({
                ...menu.items.find(item => item.id === id),
                quantity
            })),

    subtotal: (state, getters) => getters.basketItems
        .reduce((total, item) => total + (item.price * item.quantity), 0),

    total: (state, getters) => getters.subtotal + state.basket.deliveryFee
};

export const actions = {
    getAllMenuItems: ({ commit }) => {
        return axios.get('/api/menuItems').then(response => {
            commit(MENU_GET_ALL_ITEMS, response.data);
        }).catch(err => {
            console.log(err);
        });
    },

    addItem: ({ state, commit }, { id }) => {
        if (!id) return;

        const item = state.basket.items.find(i => i.id === id);

        if (item) {
            commit(BASKET_INCREMENT_ITEM_QUANTITY, id);
        } else {
            commit(BASKET_ADD_ITEM, id);
        }
    },

    removeItem: ({ state, commit }, { id }) => {
        if (!id) return;

        const item = state.basket.items.find(i => i.id === id);

        if (item.quantity > 1) {
            commit(BASKET_DECREMENT_ITEM_QUANTITY, id);
        } else if (item.quantity <= 1) {
            commit(BASKET_REMOVE_ITEM, id);
        }
    }
};

export const mutations = {
    [MENU_GET_ALL_ITEMS]: (state, { menu }) => {
        state.menu.items = menu.items;
    },

    [BASKET_ADD_ITEM]: (state, id) => {
        state.basket.items.push({ id, quantity: 1 });
    },

    [BASKET_REMOVE_ITEM]: (state, id) => {
        state.basket.items = state.basket.items.filter(item => item.id !== id);
    },

    [BASKET_INCREMENT_ITEM_QUANTITY]: (state, id) => {
        const exisingItem = state.basket.items.find(item => item.id === id);

        if (exisingItem) {
            exisingItem.quantity++;
        }
    },

    [BASKET_DECREMENT_ITEM_QUANTITY]: (state, id) => {
        const exisingItem = state.basket.items.find(item => item.id === id);

        if (exisingItem) {
            exisingItem.quantity--;
        }
    }
};

const store = new Vuex.Store({
    strict: debug,

    state: {
        menu: {
            items: []
        },

        basket: {
            items: [],
            deliveryFee: 0
        }
    },

    getters,

    actions,

    mutations
});

export default store;
