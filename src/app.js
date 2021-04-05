import { createApp, createSSRApp } from 'vue';
import App from './App.vue'
import createRouter from './router'
import createStore from './store';

export default () => {
    const router = createRouter();
    const store = createStore();
    const isSSR = typeof window === "undefined";
    const app = (isSSR ? createSSRApp : createApp)(App);

    app.use(router).use(store);
    return {
        app,
        router,
        store
    }
}