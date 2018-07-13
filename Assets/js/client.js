import { createApp, store } from './app';

store.replaceState(__INITIAL_STATE__);

const { app } = createApp();

app.$mount('[data-app]');
