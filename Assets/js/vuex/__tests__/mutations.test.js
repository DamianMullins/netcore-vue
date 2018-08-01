import mutations from '../mutations';
import {
    MENU_GET_ALL_ITEMS,
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    BASKET_INCREMENT_ITEM_QUANTITY,
    BASKET_DECREMENT_ITEM_QUANTITY
} from '../mutation-types';

describe('mutations', () => {
    describe('MENU_GET_ALL_ITEMS', () => {
        it('gets all menu items', () => {
            // Arrange
            const { MENU_GET_ALL_ITEMS } = mutations;
            const state = { menu: { items: [] } };
            const payload = {
                menu: {
                    items: [
                        { name: 'test 1' },
                        { name: 'test 2' }
                    ]
                }
            };

            // Act
            MENU_GET_ALL_ITEMS(state, payload);

            // Assert
            expect(state.menu).toEqual(payload.menu);
        });
    });

    describe('BASKET_ADD_ITEM', () => {
        it('adds item to basket', () => {
            // Arrange
            const { BASKET_ADD_ITEM } = mutations;
            const state = { basket: { items: [] } };
            const payload = 99;

            // Act
            BASKET_ADD_ITEM(state, payload);

            // Assert
            expect(state.basket.items).toContainEqual({ id: payload, quantity: 1 });
        });
    });

    describe('BASKET_REMOVE_ITEM', () => {
        const items = [{ id: 1 }, { id: 2 }];

        it('does nothing if id is not in item list', () => {
            // Arrange
            const state = { basket: { items } };
            const { BASKET_REMOVE_ITEM } = mutations;
            const payload = 99;

            // Act
            BASKET_REMOVE_ITEM(state, payload);

            // Assert
            expect(state.basket.items).toEqual(items);
        });

        it('removes correct item', () => {
            // Arrange
            const state = { basket: { items } };
            const { BASKET_REMOVE_ITEM } = mutations;
            const payload = 1;

            // Act
            BASKET_REMOVE_ITEM(state, payload);

            // Assert
            expect(state.basket.items).toEqual([{ id: 2 }]);
        });
    });

    describe('BASKET_INCREMENT_ITEM_QUANTITY', () => {
        const items = [{ id: 1, quantity: 1 }];

        it('does nothing if id is not in item list', () => {
            // Arrange
            const { BASKET_INCREMENT_ITEM_QUANTITY } = mutations;
            const state = { basket: { items } };
            const payload = 99;

            // Act
            BASKET_INCREMENT_ITEM_QUANTITY(state, payload);

            // Assert
            expect(state.basket.items).toEqual(items);
        });

        it('increments correct item', () => {
            // Arrange
            const { BASKET_INCREMENT_ITEM_QUANTITY } = mutations;
            const state = { basket: { items } };
            const payload = 1;

            // Act
            BASKET_INCREMENT_ITEM_QUANTITY(state, payload);

            // Assert
            expect(state.basket.items).toContainEqual({ id: payload, quantity: 2 });
        });
    });

    describe('BASKET_DECREMENT_ITEM_QUANTITY', () => {
        const items = [{ id: 1, quantity: 100 }];

        it('does nothing if id is not in item list', () => {
            // Arrange
            const { BASKET_DECREMENT_ITEM_QUANTITY } = mutations;
            const state = { basket: { items } };
            const payload = 99;

            // Act
            BASKET_DECREMENT_ITEM_QUANTITY(state, payload);

            // Assert
            expect(state.basket.items).toEqual(items);
        });

        it('decrements correct item', () => {
            // Arrange
            const { BASKET_DECREMENT_ITEM_QUANTITY } = mutations;
            const state = { basket: { items } };
            const payload = 1;

            // Act
            BASKET_DECREMENT_ITEM_QUANTITY(state, payload);

            // Assert
            expect(state.basket.items).toContainEqual({ id: payload, quantity: 99 });
        });
    });
});
