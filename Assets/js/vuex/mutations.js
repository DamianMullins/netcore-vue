import {
    MENU_GET_ALL_ITEMS,
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    BASKET_INCREMENT_ITEM_QUANTITY,
    BASKET_DECREMENT_ITEM_QUANTITY
} from './mutation-types';

export default {
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
