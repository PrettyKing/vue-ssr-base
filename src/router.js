import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import Item from './pages/Item.vue'

const isSSR = typeof window === 'undefined';

const history = isSSR ? createMemoryHistory() : createWebHistory();



export default () => createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/item', component: Item }
    ]
})
