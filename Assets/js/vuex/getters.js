export default {
    basketItems: ({ basket, menu }) =>
        basket.items.map(({ id, quantity }) =>
            ({
                ...menu.items.find(item => item.id === id),
                quantity
            })),

    subtotal: (state, getters) => getters.basketItems
        .reduce((total, item) => total + (item.price * item.quantity), 0),

    total: ({ basket }, getters) => getters.subtotal + basket.deliveryFee
};
