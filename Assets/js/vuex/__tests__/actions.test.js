import actions from '../actions';
import {
    MENU_GET_ALL_ITEMS,
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    BASKET_INCREMENT_ITEM_QUANTITY,
    BASKET_DECREMENT_ITEM_QUANTITY
} from '../mutation-types';

jest.mock('axios', () => {
    return {
        get: () => new Promise(res => res({
            data: [
                { id: 1, name: 'test 1', quantity: 1 },
                { id: 2, name: 'test 2', quantity: 2 }
            ]
        }))
    };
});

describe('actions', () => {
    describe('getAllMenuItems', () => {
        it(`calls "${MENU_GET_ALL_ITEMS}"`, () => {
            // Arrange
            const { getAllMenuItems } = actions;
            const commit = jest.fn();
            const state = { menu: { restaurantName: '' } };

            // Act
            const result = getAllMenuItems({ commit, state });

            // Assert
            result.then(() => {
                const [[mutation]] = commit.mock.calls;
                expect(mutation).toBe(MENU_GET_ALL_ITEMS);
            });
        });

        it('returns all items', () => {
            // Arrange
            const { getAllMenuItems } = actions;
            let data;
            const commit = (state, payload) => {
                data = payload;
            };
            const state = { menu: { restaurantName: '' } };

            // Act
            const result = getAllMenuItems({ commit, state });

            // Assert
            result.then(() => {
                expect(data).toMatchSnapshot();
            });
        });
    });

    describe('addItem', () => {
        it('commit is not called when item id property is not present in payload', () => {
            // Arrange
            const { addItem } = actions;
            const commit = jest.fn();
            const state = { basket: { items: [] } };
            const payload = {};

            // Act
            addItem({ commit, state }, payload);

            // Assert
            expect(commit.mock.calls.length).toBe(0);
        });

        it(`calls "${BASKET_ADD_ITEM}" when item is not already in basket`, () => {
            // Arrange
            const { addItem } = actions;
            const commit = jest.fn();
            const state = { basket: { items: [] } };
            const payload = { id: 1 };

            // Act
            addItem({ commit, state }, payload);

            // Assert
            const [[mutation, id]] = commit.mock.calls;
            expect(mutation).toBe(BASKET_ADD_ITEM);
            expect(id).toBe(1);
        });

        it(`calls "${BASKET_INCREMENT_ITEM_QUANTITY}" when item is already in basket`, () => {
            // Arrange
            const { addItem } = actions;
            const commit = jest.fn();
            const state = { basket: { items: [{ id: 1 }] } };
            const payload = { id: 1 };

            // Act
            addItem({ commit, state }, payload);

            // Assert
            const [[mutation, id]] = commit.mock.calls;
            expect(mutation).toBe(BASKET_INCREMENT_ITEM_QUANTITY);
            expect(id).toBe(1);
        });
    });

    describe('removeItem', () => {
        it('commit is not called when item quantity property is not present in payload', () => {
            // Arrange
            const { removeItem } = actions;
            const commit = jest.fn();
            const state = { basket: { items: [{ id: 1 }] } };
            const payload = { id: 1 };

            // Act
            removeItem({ commit, state }, payload);

            // Assert
            expect(commit.mock.calls.length).toBe(0);
        });

        it(`calls "${BASKET_REMOVE_ITEM}" when item quantity is 1`, () => {
            // Arrange
            const { removeItem } = actions;
            const commit = jest.fn();
            const state = { basket: { items: [{ id: 1, quantity: 1 }] } };
            const payload = { id: 1 };

            // Act
            removeItem({ commit, state }, payload);

            // Assert
            const [[mutation, id]] = commit.mock.calls;
            expect(mutation).toBe(BASKET_REMOVE_ITEM);
            expect(id).toBe(1);
        });

        it(`calls "${BASKET_REMOVE_ITEM}" when item quantity is 0`, () => {
            // Arrange
            const { removeItem } = actions;
            const commit = jest.fn();
            const state = { basket: { items: [{ id: 1, quantity: 0 }] } };
            const payload = { id: 1 };

            // Act
            removeItem({ commit, state }, payload);

            // Assert
            const [[mutation, id]] = commit.mock.calls;
            expect(mutation).toBe(BASKET_REMOVE_ITEM);
            expect(id).toBe(1);
        });

        it(`calls "${BASKET_DECREMENT_ITEM_QUANTITY}" when item quantity is more than 1`, () => {
            // Arrange
            const { removeItem } = actions;
            const commit = jest.fn();
            const state = { basket: { items: [{ id: 1, quantity: 2 }] } };
            const payload = { id: 1 };

            // Act
            removeItem({ commit, state }, payload);

            // Assert
            const [[mutation, id]] = commit.mock.calls;
            expect(mutation).toBe(BASKET_DECREMENT_ITEM_QUANTITY);
            expect(id).toBe(1);
        });
    });
});
