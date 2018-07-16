import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BasketTotals from '../BasketTotals.vue';
import i18n from '../../i18n';
import { getTextContent } from './testUtils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App', () => {
    const createWrapper = () => {
        const getters = {
            subtotal: () => 2,
            total: () => 2.5
        };

        const store = new Vuex.Store({
            state: {
                basket: {
                    deliveryFee: 0.5
                }
            },

            getters
        });

        return shallowMount(BasketTotals, { store, i18n, localVue });
    };

    it('should be defined', () => {
        const wrapper = createWrapper();
        expect(wrapper).toBeDefined();
    });

    it('subtotal is formatted correctly', () => {
        // Arrange
        const wrapper = createWrapper();

        // Act
        const basketSubtotal = wrapper.find('[data-js-test="basket-subtotal"]');

        // Assert
        expect(getTextContent(basketSubtotal)).toBe('£2.00');
    });

    it('delivery fee is formatted correctly', () => {
        // Arrange
        const wrapper = createWrapper();

        // Act
        const basketDeliveryFee = wrapper.find('[data-js-test="basket-deliveryFee"]');

        // Assert
        expect(getTextContent(basketDeliveryFee)).toBe('£0.50');
    });

    it('total is formatted correctly', () => {
        // Arrange
        const wrapper = createWrapper();

        // Act
        const basketTotal = wrapper.find('[data-js-test="basket-total"]');

        // Assert
        expect(getTextContent(basketTotal)).toBe('£2.50');
    });
});
