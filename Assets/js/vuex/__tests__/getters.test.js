import { getters } from '../';

describe('getters', () => {
    const state = {
        menu: {
            items: [
                { id: 1, name: 'One', price: 1.11 },
                { id: 2, name: 'Two', price: 2.22 }
            ]
        },
        basket: {
            items: [
                { id: 2, quantity: 2 }
            ],
            deliveryFee: 0.5
        }
    };

    describe('basketItems', () => {
        it('gets basket items with correct properties', () => {
            // Arrange
            const { basketItems } = getters;

            // Act
            const result = basketItems(state);

            // Assert
            expect(result).toMatchSnapshot();
        });
    });

    describe('subtotal', () => {
        it('gets correct value for subtotal', () => {
            // Arrange
            const { subtotal } = getters;
            const gettersMock = jest.fn();

            gettersMock.basketItems = [{
                id: 2,
                name: 'Two',
                price: 2.22,
                quantity: 2,
            }];

            // Act
            const result = subtotal(state, gettersMock);

            // Assert
            expect(result).toBe(4.44);
        });
    });

    describe('total', () => {
        it('gets correct value for total', () => {
            // Arrange
            const { total } = getters;
            const gettersMock = jest.fn();

            gettersMock.subtotal = 2.22;

            // Act
            const result = total(state, gettersMock);

            // Assert
            expect(result).toBe(2.72);
        });
    });
});
