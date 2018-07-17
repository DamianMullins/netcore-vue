import { createApp } from './app';

export default context => {
    const { basket, store } = createApp();
    store.replaceState(context);
    return basket;
};
