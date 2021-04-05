import createApp from './app'

const {
    app,
    store
} = createApp();
if (window.__INIT_STATE__) {
    store.replaceState(window.__INIT_STATE__)
}
app.mount("#app", true);