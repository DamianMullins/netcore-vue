import axios from 'axios';
import {
    MENU_GET_ALL_ITEMS,
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    BASKET_INCREMENT_ITEM_QUANTITY,
    BASKET_DECREMENT_ITEM_QUANTITY
} from './mutation-types';

export default {
    getAllMenuItems: ({ state, commit }) => {
        return axios.get('/api/menuItems', {
            params: {
                restaurantName: state.menu.restaurantName
            }
        }).then(response => {
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
