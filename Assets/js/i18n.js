import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en-US': {
        message: {
            hello: 'Howdy',
            name: 'y\'all',
            full: '@:message.hello @:message.name'
        },
        menu: {
            addItem: 'Add {item} to basket',
            removeItem: 'Remove {item} from basket'
        }
    },
    'en-GB': {
        message: {
            hello: 'Hello',
            name: 'world',
            full: '@:message.hello @:message.name'
        },
        menu: {
            addItem: 'Add {item} to basket',
            removeItem: 'Remove {item} from basket'
        }
    }
};

const numberFormats = {
    'en-US': {
        currency: {
            style: 'currency', currency: 'USD'
        }
    },
    'en-GB': {
        currency: {
            style: 'currency', currency: 'GBP'
        }
    }
};

const i18n = {
    locale: 'en-GB',
    fallbackLocale: 'en-GB',
    messages,
    numberFormats
};

export default i18n;
