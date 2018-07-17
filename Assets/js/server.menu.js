import { createApp } from './app';

export default context => {
    const { menu, store } = createApp();
    store.replaceState(context);
    return menu;
};
