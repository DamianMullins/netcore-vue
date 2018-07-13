import { createApp, store } from './app';

export default context => {
    store.replaceState(context);
    const { app } = createApp();
    return app;
};
